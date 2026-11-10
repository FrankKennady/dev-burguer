import {
	CheckSquare,
	MagnifyingGlass,
	PencilSimple,
	Square,
} from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { api } from '../../../services/api';
import { formatPrice } from '../../../utils/formatPrice';
import * as S from './styles';

export function Products() {
	const [products, setProducts] = useState([]);
	const [search, setSearch] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		async function loadProducts() {
			try {
				const { data } = await api.get('/products');
				setProducts(data.sort((a, b) => a.id - b.id));
			} catch {
				toast.error('Falha ao carregar os produtos.');
			}
		}

		loadProducts();
	}, []);

	function editProduct(product) {
		navigate('/admin/editar-produto', { state: { product } });
	}

	const filteredProducts = products.filter((product) =>
		product.name.toLowerCase().includes(search.trim().toLowerCase()),
	);

	return (
		<>
			<S.SearchBox>
				<input
					type="text"
					placeholder="Pesquisar produto"
					value={search}
					onChange={(event) => setSearch(event.target.value)}
				/>
				<MagnifyingGlass size={16} />
			</S.SearchBox>

			<S.TableWrapper>
				<S.Table>
					<thead>
						<tr>
							<th>Nome</th>
							<th>Preço</th>
							<th className="center">Produto em oferta</th>
							<th className="center">Imagem do produto</th>
							<th className="center">Editar</th>
						</tr>
					</thead>
					<tbody>
						{filteredProducts.map((product) => (
							<tr key={product.id}>
								<td>{product.name}</td>
								<td>{formatPrice(product.price)}</td>
								<td className="center">
									{product.offer ? (
										<CheckSquare size={20} color="#13901d" />
									) : (
										<Square size={20} color="#bdbdbd" />
									)}
								</td>
								<td className="center">
									<S.ProductImage src={product.url} alt={product.name} />
								</td>
								<td className="center">
									<S.EditButton
										type="button"
										aria-label={`Editar ${product.name}`}
										onClick={() => editProduct(product)}
									>
										<PencilSimple size={16} />
									</S.EditButton>
								</td>
							</tr>
						))}
						{!filteredProducts.length && (
							<tr>
								<td colSpan={5} className="center">
									Nenhum produto encontrado.
								</td>
							</tr>
						)}
					</tbody>
				</S.Table>
			</S.TableWrapper>
		</>
	);
}
