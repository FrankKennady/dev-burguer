import logo from '../../assets/logo-1.svg';
import { CartItems } from '../../components/CartItems';
import { CartResume } from '../../components/CartResume';
import { SectionTitle } from '../../components/SectionTitle';
import * as S from './styles';

export function Cart() {
	return (
		<S.Container>
			<S.Banner>
				<img src={logo} alt="Logo DevBurguer" />
			</S.Banner>
			<SectionTitle color="green" lineColor="purple" margin="40px 0 0">
				Checkout - Pedido
			</SectionTitle>
			<S.Content>
				<CartItems />
				<CartResume />
			</S.Content>
		</S.Container>
	);
}
