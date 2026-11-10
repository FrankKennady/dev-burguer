import { CaretLeft } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import CardProduct from '../../components/CardProduct';
import { SectionTitle } from '../../components/SectionTitle';
import { api } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';
import * as S from './styles';

export function Menu() {
	const [categories, setCategories] = useState([]);
	const [products, setProducts] = useState([]);

	const navigate = useNavigate();
	const { search } = useLocation();

	const activeCategory =
		Number(new URLSearchParams(search).get('categoria')) || 0;

	useEffect(() => {
		async function loadData() {
			try {
				const [{ data: categoriesData }, { data: productsData }] =
					await Promise.all([api.get('/categories'), api.get('/products')]);

				setCategories([{ id: 0, name: 'Todas' }, ...categoriesData]);
				setProducts(
					productsData.map((product) => ({
						...product,
						currencyValue: formatPrice(product.price),
					})),
				);
			} catch (error) {
				console.error('Erro ao carregar o cardápio:', error);
			}
		}

		loadData();
	}, []);

	const filteredProducts =
		activeCategory === 0
			? products
			: products.filter(
					(product) => Number(product.category_id) === activeCategory,
				);

	const activeCategoryName = categories.find(
		(category) => category.id === activeCategory,
	)?.name;

	function selectCategory(categoryId) {
		navigate(
			{ pathname: '/cardapio', search: `?categoria=${categoryId}` },
			{ replace: true },
		);
	}

	return (
		<S.Container>
			<S.Banner>
				<h1>
					O melhor
					<br />
					hamburguer
					<br />
					está aqui!
					<span>Esse cardápio está irresistível!</span>
				</h1>
			</S.Banner>

			<SectionTitle
				color="green"
				lineColor="purple"
				uppercase
				margin="60px 0 24px"
			>
				{activeCategory && activeCategoryName
					? `Cardápio - ${activeCategoryName}`
					: 'Cardápio'}
			</SectionTitle>

			<S.CategoryMenu>
				{categories.map((category) => (
					<S.CategoryButton
						key={category.id}
						type="button"
						$isActiveCategory={category.id === activeCategory}
						onClick={() => selectCategory(category.id)}
					>
						{category.name}
					</S.CategoryButton>
				))}
			</S.CategoryMenu>

			<S.ProductsContainer>
				{filteredProducts.map((product) => (
					<CardProduct product={product} key={product.id} variant="menu" />
				))}
			</S.ProductsContainer>

			{!filteredProducts.length && (
				<S.Empty>Nenhum produto nesta categoria ainda.</S.Empty>
			)}

			<S.BackLink to="/">
				<CaretLeft size={14} weight="bold" />
				Voltar
			</S.BackLink>
		</S.Container>
	);
}
