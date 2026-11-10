import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useCart } from '../../hooks/CartContext';
import { api } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';
import { Button } from '../Button';
import * as S from './styles';

const DELIVERY_TAX = 500;

export function CartResume() {
	const { cartProducts } = useCart();
	const navigate = useNavigate();

	const finalPrice = cartProducts.reduce(
		(acc, product) => acc + product.price * product.quantity,
		0,
	);

	const submitOrder = async () => {
		if (!cartProducts.length) {
			toast.warn('Adicione produtos ao carrinho primeiro.');
			return;
		}

		const products = cartProducts.map((product) => ({
			id: product.id,
			quantity: product.quantity,
			price: product.price,
		}));

		try {
			const { data } = await api.post('/create-payment-intent', { products });

			navigate('/checkout', { state: data });
		} catch (error) {
			console.error(error);
			toast.error('😭 Erro ao iniciar o pagamento, tente novamente.');
		}
	};

	return (
		<div>
			<S.Container>
				<S.Title>Resumo do pedido</S.Title>
				<S.Body>
					<S.Line>
						<p>Itens</p>
						<p>{formatPrice(finalPrice)}</p>
					</S.Line>
					<S.Line>
						<p>Taxa de entrega</p>
						<p>{formatPrice(DELIVERY_TAX)}</p>
					</S.Line>
				</S.Body>
				<S.Total>
					<p>Total</p>
					<p>{formatPrice(finalPrice + DELIVERY_TAX)}</p>
				</S.Total>
			</S.Container>
			<Button onClick={submitOrder}>Continuar</Button>
		</div>
	);
}
