import { createBrowserRouter } from 'react-router-dom';

import {
	Cart,
	Checkout,
	CompletePayment,
	EditProduct,
	Home,
	Login,
	Menu,
	NewProduct,
	Orders,
	Products,
	Register,
} from '../containers';
import { AdminLayout, UserLayout } from '../layouts';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <UserLayout />,
		children: [
			{ index: true, element: <Home /> },
			{ path: 'cardapio', element: <Menu /> },
			{ path: 'carrinho', element: <Cart /> },
			{ path: 'checkout', element: <Checkout /> },
			{ path: 'complete', element: <CompletePayment /> },
		],
	},
	{
		path: '/admin',
		element: <AdminLayout />,
		children: [
			{ index: true, element: <Orders /> },
			{ path: 'pedidos', element: <Orders /> },
			{ path: 'produtos', element: <Products /> },
			{ path: 'novo-produto', element: <NewProduct /> },
			{ path: 'editar-produto', element: <EditProduct /> },
		],
	},
	{ path: '/login', element: <Login /> },
	{ path: '/cadastro', element: <Register /> },
]);
