import { CategoriesCarousel, OffersCarousel } from '../../components';
import * as S from './styles';

export function Home() {
	return (
		<main>
			<S.Banner>
				<h1>Bem-vindo!</h1>
			</S.Banner>

			<S.Container>
				<CategoriesCarousel />
				<OffersCarousel />
			</S.Container>
		</main>
	);
}
