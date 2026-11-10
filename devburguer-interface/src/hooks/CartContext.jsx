import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
	const [cartProducts, setCartProducts] = useState([]);

	const updateLocalStorage = (products) => {
		localStorage.setItem('devburguer:cartInfo', JSON.stringify(products));
	};

	const putProductInCart = (product) => {
		const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);

		let newProductsInCart = [];

		if (cartIndex >= 0) {
			newProductsInCart = cartProducts.map((prd) =>
				prd.id === product.id ? { ...prd, quantity: prd.quantity + 1 } : prd,
			);
		} else {
			newProductsInCart = [...cartProducts, { ...product, quantity: 1 }];
		}

		setCartProducts(newProductsInCart);
		updateLocalStorage(newProductsInCart);
	};

	const increaseProduct = (productId) => {
		const newCart = cartProducts.map((prd) =>
			prd.id === productId ? { ...prd, quantity: prd.quantity + 1 } : prd,
		);

		setCartProducts(newCart);
		updateLocalStorage(newCart);
	};

	const deleteProduct = (productId) => {
		const newCart = cartProducts.filter((prd) => prd.id !== productId);

		setCartProducts(newCart);
		updateLocalStorage(newCart);
	};

	const decreaseProduct = (productId) => {
		const product = cartProducts.find((prd) => prd.id === productId);

		if (product?.quantity > 1) {
			const newCart = cartProducts.map((prd) =>
				prd.id === productId ? { ...prd, quantity: prd.quantity - 1 } : prd,
			);

			setCartProducts(newCart);
			updateLocalStorage(newCart);
		} else {
			deleteProduct(productId);
		}
	};

	const clearCart = () => {
		setCartProducts([]);
		updateLocalStorage([]);
	};

	useEffect(() => {
		const clientCartData = localStorage.getItem('devburguer:cartInfo');

		if (clientCartData) {
			setCartProducts(JSON.parse(clientCartData));
		}
	}, []);

	return (
		<CartContext.Provider
			value={{
				cartProducts,
				putProductInCart,
				increaseProduct,
				decreaseProduct,
				deleteProduct,
				clearCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => {
	const context = useContext(CartContext);

	if (!context) {
		throw new Error('useCart must be used within a CartProvider');
	}

	return context;
};
