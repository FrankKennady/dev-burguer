import { CaretLeft, Info, WarningCircle, XCircle } from '@phosphor-icons/react';
import { Elements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';

import logo from '../../assets/logo-1.svg';
import { SectionTitle } from '../../components/SectionTitle';
import { getStripe } from '../../config/stripeConfig';
import { Banner, Container } from '../Cart/styles';
import * as S from './styles';

// Ícone de balão verde com "check" igual ao do Figma.
function SuccessIcon() {
	return (
		<svg width="106" height="106" viewBox="0 0 106 106" aria-hidden="true">
			<path
				d="M4 0h98a4 4 0 0 1 4 4v78a4 4 0 0 1-4 4H22L0 106V4a4 4 0 0 1 4-4z"
				fill="#13901d"
			/>
			<path
				d="M30 44l16 16 30-30"
				stroke="#fff"
				strokeWidth="11"
				fill="none"
				strokeLinecap="square"
			/>
		</svg>
	);
}

const STATUS_CONTENT_MAP = {
	processing: {
		title: 'Processando...',
		text: 'Seu pagamento está sendo processado. Assim que for confirmado, seu pedido entra em produção.',
		icon: <Info size={96} weight="fill" color="#6d6e78" />,
	},
	requires_payment_method: {
		title: 'Ops!',
		text: 'Pagamento não realizado, tente novamente.',
		icon: <XCircle size={96} weight="fill" color="#df1b41" />,
	},
	default: {
		title: 'Ops!',
		text: 'Algo deu errado, tente novamente.',
		icon: <WarningCircle size={96} weight="fill" color="#df1b41" />,
	},
};

function PaymentStatus() {
	const stripe = useStripe();
	const [status, setStatus] = useState('loading');

	useEffect(() => {
		if (!stripe) return;

		const clientSecret = new URLSearchParams(window.location.search).get(
			'payment_intent_client_secret',
		);

		if (!clientSecret) {
			setStatus('default');
			return;
		}

		stripe
			.retrievePaymentIntent(clientSecret)
			.then(({ paymentIntent }) =>
				setStatus(paymentIntent?.status || 'default'),
			)
			.catch(() => setStatus('default'));
	}, [stripe]);

	if (status === 'loading') {
		return <S.Content />;
	}

	const isSuccess = status === 'succeeded';
	const content = STATUS_CONTENT_MAP[status] || STATUS_CONTENT_MAP.default;

	return (
		<S.Content>
			{isSuccess ? <SuccessIcon /> : content.icon}
			<S.Title>{isSuccess ? 'Obrigado!' : content.title}</S.Title>
			<S.Text>
				{isSuccess
					? 'Seu pedido já está em produção e logo sairá para entrega. Agradecemos a preferência!'
					: content.text}
			</S.Text>
			<S.BackLink to={isSuccess ? '/' : '/carrinho'}>
				<CaretLeft size={14} weight="bold" />
				{isSuccess ? 'Voltar para o início' : 'Voltar para o carrinho'}
			</S.BackLink>
		</S.Content>
	);
}

export function CompletePayment() {
	return (
		<Container>
			<Banner>
				<img src={logo} alt="Logo DevBurguer" />
			</Banner>
			<SectionTitle color="green" margin="40px 0 0">
				Checkout - Pedido concluído
			</SectionTitle>
			<Elements stripe={getStripe()}>
				<PaymentStatus />
			</Elements>
		</Container>
	);
}
