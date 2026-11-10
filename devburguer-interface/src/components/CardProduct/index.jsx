import { Basket, Heart, Star } from '@phosphor-icons/react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { useCart } from '../../hooks/CartContext';
import * as S from './styles';

// variant "offer" -> card do carrossel de ofertas (botão largo)
// variant "menu"  -> card do cardápio (coração, estrelas e botão quadrado)
export default function CardProduct({ product, variant = 'menu' }) {
	const { putProductInCart } = useCart();
	const [favorite, setFavorite] = useState(false);

	function addToCart() {
		putProductInCart(product);
		toast.success(`${product.name} adicionado ao carrinho!`, {
			autoClose: 1500,
		});
	}

	if (variant === 'offer') {
		return (
			<S.OfferCard>
				<S.CardImage src={product.url} alt={product.name} />
				<S.Info>
					<S.Name>{product.name}</S.Name>
					<S.Price>{product.currencyValue}</S.Price>
				</S.Info>
				<S.WideCartButton
					type="button"
					aria-label={`Adicionar ${product.name} ao carrinho`}
					onClick={addToCart}
				>
					<Basket size={24} color="#fff" />
				</S.WideCartButton>
			</S.OfferCard>
		);
	}

	return (
		<S.MenuCard>
			<S.CardImage src={product.url} alt={product.name} />
			<S.FavoriteButton
				type="button"
				aria-label="Favoritar"
				onClick={() => setFavorite(!favorite)}
			>
				<Heart size={28} weight={favorite ? 'fill' : 'regular'} />
			</S.FavoriteButton>

			<S.Info>
				<S.Name>{product.name}</S.Name>
				{product.category?.name && (
					<S.Description>{product.category.name}</S.Description>
				)}
			</S.Info>

			<S.Footer>
				<div>
					<S.Price>{product.currencyValue}</S.Price>
					<S.Stars>
						{[1, 2, 3, 4, 5].map((star) => (
							<Star key={star} size={20} weight="fill" />
						))}
					</S.Stars>
				</div>
				<S.SquareCartButton
					type="button"
					aria-label={`Adicionar ${product.name} ao carrinho`}
					onClick={addToCart}
				>
					<Basket size={26} color="#fff" />
				</S.SquareCartButton>
			</S.Footer>
		</S.MenuCard>
	);
}

CardProduct.propTypes = {
	product: PropTypes.object,
	variant: PropTypes.oneOf(['offer', 'menu']),
};
