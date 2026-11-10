import { useEffect, useState } from 'react';
import CarouselModule from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { api } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';
import CardProduct from '../CardProduct';
import { CarouselArrow } from '../CarouselArrow';
import { SectionTitle } from '../SectionTitle';
import * as S from './styles';

const Carousel = CarouselModule.default || CarouselModule;

const responsive = {
	desktop: { breakpoint: { max: 4000, min: 1280 }, items: 4 },
	laptop: { breakpoint: { max: 1280, min: 1024 }, items: 3 },
	tablet: { breakpoint: { max: 1024, min: 600 }, items: 2 },
	mobile: { breakpoint: { max: 600, min: 0 }, items: 1 },
};

export function OffersCarousel() {
	const [offers, setOffers] = useState([]);

	useEffect(() => {
		async function loadProducts() {
			try {
				const { data } = await api.get('/products');

				const onlyOffers = data
					.filter((product) => product.offer)
					.map((product) => ({
						...product,
						currencyValue: formatPrice(product.price),
					}));

				setOffers(onlyOffers);
			} catch (error) {
				console.error('Erro ao carregar ofertas:', error);
			}
		}

		loadProducts();
	}, []);

	return (
		<S.Container>
			<SectionTitle color="green" uppercase margin="70px 0 20px">
				Ofertas do dia
			</SectionTitle>

			<S.CarouselWrapper>
				<Carousel
					responsive={responsive}
					infinite
					itemClass="carousel-item"
					customLeftArrow={<CarouselArrow side="left" />}
					customRightArrow={<CarouselArrow side="right" />}
				>
					{offers.map((product) => (
						<CardProduct key={product.id} product={product} variant="offer" />
					))}
				</Carousel>
			</S.CarouselWrapper>
		</S.Container>
	);
}
