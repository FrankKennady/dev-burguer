import { Sequelize } from 'sequelize';
import Category from '../app/models/Category.js';
import Order from '../app/models/Order.js';
import OrderProduct from '../app/models/OrderProduct.js';
import Product from '../app/models/Product.js';
import User from '../app/models/User.js';
import databaseconfig from '../config/database.cjs';

const models = [User, Product, Category, Order, OrderProduct];
class Database {
  constructor() {
    this.init();
  }
  init() {
    this.connection = new Sequelize(databaseconfig);
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models),
      );
  }
}
export default new Database();
