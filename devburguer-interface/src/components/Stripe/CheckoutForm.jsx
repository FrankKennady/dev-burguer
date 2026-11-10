import {
	PaymentElement,
	useElements,
	useStripe,
} from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useCart } from '../../hooks/CartContext';
import { api } from '../../services/api';
import * as S from './styles';

export function CheckoutForm() {
	const { cartProducts, clearCart } = useCart();
	const navigate = useNavigate();
	const stripe = useStripe();
	const elements = useElements();
	const { state } = useLocation();
	const dpmCheckerLink = state?.dpmCheckerLink;

	const [message, setMessage] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		setIsLoading(true);
		setMessage(null);

		const { error, paymentIntent } = await stripe.confirmPayment({
			elements,
			redirect: 'if_required',
		});

		if (error) {
			setMessage(error.message);
			toast.error(error.message);
			setIsLoading(false);
			return;
		}

		const completeUrl = `/complete?payment_intent_client_secret=${paymentIntent.client_secret}`;

		if (paymentIntent.status !== 'succeeded') {
			navigate(completeUrl);
			return;
		}

		try {
			const products = cartProducts.map((product) => ({
				id: product.id,
				quantity: product.quantity,
			}));

			const { status } = await api.post(
				'/orders',
				{ products },
				{ validateStatus: () => true },
			);

			if (status !== 200 && status !== 201) {
				throw new Error();
			}

			clearCart();
			toast.success('Pedido realizado com sucesso!');
			setTimeout(() => navigate(completeUrl), 2000);
		} catch {
			toast.error('😭 Falha ao registrar o pedido! Tente novamente.');
			setIsLoading(false);
		}
	};

	return (
		<S.Container>
			<form onSubmit={handleSubmit}>
				<PaymentElement
					options={{ layout: 'accordion' }}
					onLoadError={() => {
						setMessage(
							'Não foi possível carregar o pagamento. Verifique a chave pública do Stripe e tente novamente.',
						);
					}}
				/>
				<S.Button disabled={isLoading || !stripe || !elements} type="submit">
					{isLoading ? <S.Spinner /> : 'Pagar agora'}
				</S.Button>
				{message && <S.Message>{message}</S.Message>}
			</form>
			{dpmCheckerLink && (
				<S.Info>
					Métodos de pagamento disponibilizados de acordo com a sua região.{' '}
					<a href={dpmCheckerLink} target="_blank" rel="noopener noreferrer">
						Ver métodos de pagamento
					</a>
				</S.Info>
			)}
		</S.Container>
	);
}
