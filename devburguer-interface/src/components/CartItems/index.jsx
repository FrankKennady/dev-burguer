import { CaretLeft, Trash } from '@phosphor-icons/react';

import { useCart } from '../../hooks/CartContext';
import { formatPrice } from '../../utils/formatPrice';
import * as S from './styles';

export function CartItems() {
	const { cartProducts, increaseProduct, decreaseProduct, deleteProduct } =
		useCart();

	return (
		<S.Container>
			<S.Table>
				<thead>
					<tr>
						<th colSpan={2}>Itens</th>
						<th>Preço</th>
						<th>Quantidade</th>
						<th>Total</th>
						<th aria-label="Remover"></th>
					</tr>
				</thead>
				<tbody>
					{cartProducts?.length ? (
						cartProducts.map((product) => (
							<tr key={product.id}>
								<td>
									<S.ImageBox>
										<img src={product.url} alt={product.name} />
									</S.ImageBox>
								</td>
								<td>
									<S.ProductName>{product.name}</S.ProductName>
								</td>
								<td>{formatPrice(product.price)}</td>
								<td>
									<S.ButtonGroup>
										<button
											type="button"
											aria-label="Diminuir"
											onClick={() => decreaseProduct(product.id)}
										>
											-
										</button>
										<span>{product.quantity}</span>
										<button
											type="button"
											aria-label="Aumentar"
											onClick={() => increaseProduct(product.id)}
										>
											+
										</button>
									</S.ButtonGroup>
								</td>
								<td>{formatPrice(product.quantity * product.price)}</td>
								<td>
									<S.TrashButton
										type="button"
										aria-label={`Remover ${product.name}`}
										onClick={() => deleteProduct(product.id)}
									>
										<Trash size={20} />
									</S.TrashButton>
								</td>
							</tr>
						))
					) : (
						<tr className="empty">
							<td colSpan={6}>
								<S.EmptyCart>Seu carrinho está vazio.</S.EmptyCart>
							</td>
						</tr>
					)}
				</tbody>
			</S.Table>

			<S.MoreProducts to="/cardapio">
				<CaretLeft size={14} />
				Adicionar mais produtos
			</S.MoreProducts>
		</S.Container>
	);
}
