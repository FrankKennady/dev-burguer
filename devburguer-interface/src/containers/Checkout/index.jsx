import { Elements } from '@stripe/react-stripe-js';
import { Navigate, useLocation } from 'react-router-dom';

import logo from '../../assets/logo-1.svg';
import { CheckoutForm } from '../../components';
import { SectionTitle } from '../../components/SectionTitle';
import { getStripe } from '../../config/stripeConfig';
import { Banner, Container } from '../Cart/styles';
import * as S from './styles';

export function Checkout() {
	const { state } = useLocation();
	const clientSecret = state?.clientSecret;

	if (!clientSecret) {
		return <Navigate to="/carrinho" replace />;
	}

	return (
		<Container>
			<Banner>
				<img src={logo} alt="Logo DevBurguer" />
			</Banner>
			<SectionTitle color="green" lineColor="purple" margin="40px 0 0">
				Checkout - Pagamento
			</SectionTitle>
			<S.Content>
				<Elements
					stripe={getStripe()}
					options={{
						clientSecret,
						locale: 'pt-BR',
						appearance: {
							theme: 'stripe',
							variables: {
								colorPrimary: '#9758a6',
								fontFamily: 'Poppins, sans-serif',
								borderRadius: '5px',
							},
						},
					}}
				>
					<CheckoutForm />
				</Elements>
			</S.Content>
		</Container>
	);
}
