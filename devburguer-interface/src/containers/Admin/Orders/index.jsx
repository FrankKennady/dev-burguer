import { CaretDown, CaretUp, CaretUpDown } from '@phosphor-icons/react';
import { Fragment, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { orderStatusOptions } from '../../../constants/orderStatus';
import { api } from '../../../services/api';
import { formatDate } from '../../../utils/formatDate';
import { formatPrice } from '../../../utils/formatPrice';
import * as S from './styles';

function OrderRow({ order, onStatusChange }) {
	const [open, setOpen] = useState(false);
	const [loading, setLoading] = useState(false);

	const total = order.products.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0,
	);

	async function handleStatus(event) {
		const status = event.target.value;
		setLoading(true);

		try {
			await api.put(`/orders/${order.id}`, { status });
			onStatusChange(order.id, status);
			toast.success('Status atualizado!');
		} catch {
			toast.error('Falha ao atualizar o status.');
		} finally {
			setLoading(false);
		}
	}

	return (
		<Fragment>
			<S.Row $open={open}>
				<td>
					<S.ExpandButton
						type="button"
						aria-label="Ver produtos do pedido"
						onClick={() => setOpen(!open)}
					>
						{open ? <CaretUp size={14} /> : <CaretDown size={14} />}
					</S.ExpandButton>
				</td>
				<td>
					{String(order.id)
						.padStart(6, '0')
						.replace(/(\d{3})(\d{3})/, '$1 $2')}
				</td>
				<td>{order.user?.name}</td>
				<td>{formatDate(order.createdAt)}</td>
				<td>
					<S.SelectStatus
						value={order.status}
						onChange={handleStatus}
						disabled={loading}
					>
						{orderStatusOptions
							.filter((option) => option.id !== 0)
							.map((option) => (
								<option key={option.id} value={option.value}>
									{option.label}
								</option>
							))}
					</S.SelectStatus>
				</td>
			</S.Row>
			{open && (
				<S.DetailsRow>
					<td colSpan={5}>
						<S.ProductsTable>
							<thead>
								<tr>
									<th>Quantidade</th>
									<th>Produto</th>
									<th>Categoria</th>
									<th>Imagem</th>
								</tr>
							</thead>
							<tbody>
								{order.products.map((item) => (
									<tr key={item.id}>
										<td>{item.quantity}</td>
										<td>{item.product?.name}</td>
										<td>{item.product?.category?.name}</td>
										<td>
											<S.ProductImage
												src={item.product?.url}
												alt={item.product?.name}
											/>
										</td>
									</tr>
								))}
							</tbody>
						</S.ProductsTable>
						<S.OrderTotal>
							Total: <strong>{formatPrice(total)}</strong>
						</S.OrderTotal>
					</td>
				</S.DetailsRow>
			)}
		</Fragment>
	);
}

export function Orders() {
	const [orders, setOrders] = useState([]);
	const [activeStatus, setActiveStatus] = useState(0);
	const [sort, setSort] = useState({ field: 'id', direction: 'desc' });

	useEffect(() => {
		async function loadOrders() {
			try {
				const { data } = await api.get('/orders');
				setOrders(data);
			} catch {
				toast.error('Falha ao carregar os pedidos.');
			}
		}

		loadOrders();
	}, []);

	function handleStatusChange(orderId, status) {
		setOrders((prev) =>
			prev.map((order) =>
				order.id === orderId ? { ...order, status } : order,
			),
		);
	}

	function toggleSort(field) {
		setSort((prev) => ({
			field,
			direction:
				prev.field === field && prev.direction === 'asc' ? 'desc' : 'asc',
		}));
	}

	const activeOption = orderStatusOptions.find(
		(opt) => opt.id === activeStatus,
	);

	const filteredOrders = (
		activeStatus === 0
			? orders
			: orders.filter((order) => order.status === activeOption.value)
	).toSorted((a, b) => {
		const modifier = sort.direction === 'asc' ? 1 : -1;

		if (sort.field === 'name') {
			return (a.user?.name || '').localeCompare(b.user?.name || '') * modifier;
		}

		return (a.id - b.id) * modifier;
	});

	return (
		<>
			<S.Filter>
				{orderStatusOptions.map((status) => (
					<S.FilterOption
						key={status.id}
						type="button"
						$isActiveStatus={activeStatus === status.id}
						onClick={() => setActiveStatus(status.id)}
					>
						{status.label}
					</S.FilterOption>
				))}
			</S.Filter>

			<S.TableWrapper>
				<S.Table>
					<thead>
						<tr>
							<th aria-label="Expandir"></th>
							<th>
								<S.SortButton type="button" onClick={() => toggleSort('id')}>
									Pedido <CaretUpDown size={12} />
								</S.SortButton>
							</th>
							<th>
								<S.SortButton type="button" onClick={() => toggleSort('name')}>
									Cliente <CaretUpDown size={12} />
								</S.SortButton>
							</th>
							<th>Data do pedido</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{filteredOrders.length ? (
							filteredOrders.map((order) => (
								<OrderRow
									key={order.id}
									order={order}
									onStatusChange={handleStatusChange}
								/>
							))
						) : (
							<tr>
								<S.Empty colSpan={5}>Nenhum pedido encontrado.</S.Empty>
							</tr>
						)}
					</tbody>
				</S.Table>
			</S.TableWrapper>
		</>
	);
}
