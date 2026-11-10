import * as Yup from 'yup';
import Category from '../models/Category.js';
import Order from '../models/Order.js';
import OrderProduct from '../models/OrderProduct.js';
import Product from '../models/Product.js';
import User from '../models/User.js';

const orderInclude = [
  {
    model: User,
    as: 'user',
    attributes: ['id', 'name'],
  },
  {
    model: OrderProduct,
    as: 'products',
    attributes: ['id', 'quantity', 'price'],
    include: {
      model: Product,
      as: 'product',
      attributes: ['id', 'name', 'path', 'url'],
      include: {
        model: Category,
        as: 'category',
        attributes: ['id', 'name'],
      },
    },
  },
];

class OrderController {
  async store(request, response) {
    const schema = Yup.object({
      products: Yup.array()
        .required()
        .min(1)
        .of(
          Yup.object({
            id: Yup.number().required(),
            quantity: Yup.number().integer().min(1).required(),
          })
        ),
    });

    try {
      schema.validateSync(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ error: err.errors });
    }

    const { products } = request.body;

    const productIds = products.map((product) => product.id);
    const foundProducts = await Product.findAll({
      where: { id: productIds },
    });

    if (foundProducts.length !== new Set(productIds).size) {
      return response.status(400).json({ error: 'Produto não encontrado' });
    }

    const order = await Order.create({
      user_id: request.userId,
      status: 'Pedido realizado',
    });

    await OrderProduct.bulkCreate(
      products.map((product) => {
        const dbProduct = foundProducts.find((prd) => prd.id === product.id);

        return {
          order_id: order.id,
          product_id: product.id,
          quantity: product.quantity,
          price: dbProduct.price,
        };
      })
    );

    const newOrder = await Order.findByPk(order.id, { include: orderInclude });

    return response.status(201).json(newOrder);
  }

  async index(request, response) {
    const where = request.userIsAdmin ? {} : { user_id: request.userId };

    const orders = await Order.findAll({
      where,
      include: orderInclude,
      order: [['created_at', 'DESC']],
    });

    return response.status(200).json(orders);
  }

  async update(request, response) {
    const schema = Yup.object({
      status: Yup.string().required(),
    });

    try {
      schema.validateSync(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ error: err.errors });
    }

    const { status } = request.body;
    const { id } = request.params;

    const [updated] = await Order.update({ status }, { where: { id } });

    if (!updated) {
      return response.status(404).json({ error: 'Pedido não encontrado' });
    }

    return response.status(200).json({ message: 'Status atualizado com sucesso!' });
  }
}

export default new OrderController();
