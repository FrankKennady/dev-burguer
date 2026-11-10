import { Router } from 'express';
import multer from 'multer';
import CategoryController from './app/controllers/CategoryController.js';
import OrderController from './app/controllers/OrderController.js';
import ProductController from './app/controllers/ProductController.js';
import SessionController from './app/controllers/SessionController.js';
import UserController from './app/controllers/UserController.js';
import adminMiddleware from './app/middleware/admin.js';
import authMiddleware from './app/middleware/auth.js';
import multerConfig from './config/multer.cjs';
import CreatePaymentIntentController from './app/controllers/stripe/CreatePaymentIntentController.js';

const routes = new Router();

const uploud = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddleware);
routes.get('/products', ProductController.index);
routes.post(
  '/products',
  adminMiddleware,
  uploud.single('file'),
  ProductController.store,
);
routes.put(
  '/products/:id',
  adminMiddleware,
  uploud.single('file'),
  ProductController.update,
);

routes.get('/categories', CategoryController.index);
routes.post(
  '/categories',
  adminMiddleware,
  uploud.single('file'),
  CategoryController.store,
);
routes.put(
  '/categories/:id',
  adminMiddleware,
  uploud.single('file'),
  CategoryController.update,
);

routes.post('/orders', OrderController.store);
routes.get('/orders', OrderController.index);
routes.put('/orders/:id', adminMiddleware, OrderController.update);

routes.post('/create-payment-intent', CreatePaymentIntentController.store);

export default routes;
