import Stripe from 'stripe';
import * as Yup from 'yup';
import 'dotenv/config.js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const DELIVERY_TAX = 500;

const calculateOrderAmount = (items) => {
  const total = items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return total + DELIVERY_TAX;
};

class CreatePaymentIntentController {
  async store(request, response) {
    const schema = Yup.object({
      products: Yup.array()
        .required()
        .min(1)
        .of(
          Yup.object({
            id: Yup.number().required(),
            quantity: Yup.number().integer().min(1).required(),
            price: Yup.number().integer().min(1).required(),
          }),
        ),
    });

    try {
      schema.validateSync(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ error: err.errors });
    }

    const { products } = request.body;
    const amount = calculateOrderAmount(products);

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'brl',
        automatic_payment_methods: {
          enabled: true,
        },
      });

      return response.status(201).json({
        clientSecret: paymentIntent.client_secret,
        dpmCheckerLink: `https://dashboard.stripe.com/settings/payment_methods/review?transaction_id=${paymentIntent.id}`,
      });
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export default new CreatePaymentIntentController();
