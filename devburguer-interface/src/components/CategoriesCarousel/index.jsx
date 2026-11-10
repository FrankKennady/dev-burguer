import { useEffect, useState } from 'react';
import CarouselModule from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';
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

export function CategoriesCarousel() {
	const [categories, setCategories] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		async function loadCategories() {
			try {
				const { data } = await api.get('/categories');
				setCategories(data);
			} catch (error) {
				console.error('Erro ao carregar categorias:', error);
			}
		}
		loadCategories();
	}, []);

	return (
		<S.Container>
			<SectionTitle color="purple" uppercase margin="0 0 40px">
				Categorias
			</SectionTitle>

			<S.CarouselWrapper>
				<Carousel
					responsive={responsive}
					infinite
					itemClass="carousel-item"
					customLeftArrow={<CarouselArrow side="left" />}
					customRightArrow={<CarouselArrow side="right" />}
				>
					{categories.map((category) => (
						<S.ContainerItems
							key={category.id}
							$imageUrl={category.url}
							onClick={() =>
								navigate({
									pathname: '/cardapio',
									search: `?categoria=${category.id}`,
								})
							}
						>
							<S.CategoryButton type="button">{category.name}</S.CategoryButton>
						</S.ContainerItems>
					))}
				</Carousel>
			</S.CarouselWrapper>
		</S.Container>
	);
}
