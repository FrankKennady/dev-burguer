import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/globalStyles';
import { ToastContainer } from 'react-toastify';

import AppProvider from './hooks';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AppProvider>
			<GlobalStyles />
			<ToastContainer autoClose={3000} theme="colored" />
			<RouterProvider router={router} />
		</AppProvider>
	</React.StrictMode>,
);
