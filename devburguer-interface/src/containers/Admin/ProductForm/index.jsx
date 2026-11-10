import { yupResolver } from '@hookform/resolvers/yup';
import { ImageSquare } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import { api } from '../../../services/api';
import * as S from './styles';

const ACCEPTED_TYPES = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];

// Formulário usado tanto para cadastrar quanto para editar produtos.
// Quando `product` é informado, o formulário entra no modo edição.
export function ProductForm({ product }) {
	const isEditing = Boolean(product);
	const [fileName, setFileName] = useState(null);
	const [categories, setCategories] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		async function loadCategories() {
			try {
				const { data } = await api.get('/categories');
				setCategories(data);
			} catch {
				toast.error('Falha ao carregar as categorias.');
			}
		}

		loadCategories();
	}, []);

	const schema = yup.object({
		name: yup.string().required('Digite o nome do produto'),
		price: yup
			.number()
			.typeError('Digite o preço do produto')
			.positive('O preço deve ser maior que zero')
			.required('Digite o preço do produto'),
		category: yup
			.number()
			.typeError('Escolha uma categoria')
			.required('Escolha uma categoria'),
		offer: yup.bool(),
		file: yup
			.mixed()
			.test('required', 'Escolha uma imagem para o produto', (value) => {
				if (isEditing) return true;
				return value && value.length > 0;
			})
			.test('fileSize', 'A imagem deve ter no máximo 5MB', (value) => {
				if (!value?.length) return true;
				return value[0].size <= 5 * 1024 * 1024;
			})
			.test('type', 'Use imagens PNG, JPG ou WEBP', (value) => {
				if (!value?.length) return true;
				return ACCEPTED_TYPES.includes(value[0].type);
			}),
	});

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			name: product?.name ?? '',
			price: product ? product.price / 100 : '',
			category: product?.category_id ?? '',
			offer: product?.offer ?? false,
		},
	});

	// Garante que a categoria do produto fique selecionada depois que as
	// categorias forem carregadas da API.
	useEffect(() => {
		if (isEditing && categories.length) {
			reset({
				name: product.name,
				price: product.price / 100,
				category: product.category_id,
				offer: product.offer,
			});
		}
	}, [categories, isEditing, product, reset]);

	const onSubmit = async (data) => {
		const productFormData = new FormData();

		productFormData.append('name', data.name);
		productFormData.append('price', Math.round(data.price * 100));
		productFormData.append('category_id', data.category);
		productFormData.append('offer', data.offer);

		if (data.file?.length) {
			productFormData.append('file', data.file[0]);
		}

		const request = isEditing
			? api.put(`/products/${product.id}`, productFormData)
			: api.post('/products', productFormData);

		try {
			await toast.promise(request, {
				pending: isEditing
					? 'Salvando alterações...'
					: 'Cadastrando produto...',
				success: isEditing
					? 'Produto editado com sucesso!'
					: 'Produto cadastrado com sucesso!',
				error: isEditing
					? 'Falha ao editar o produto, tente novamente.'
					: 'Falha ao cadastrar o produto, tente novamente.',
			});

			setTimeout(() => navigate('/admin/produtos'), 1500);
		} catch (error) {
			console.error(error);
		}
	};

	const fileRegister = register('file');

	return (
		<S.Container>
			<S.Form onSubmit={handleSubmit(onSubmit)}>
				<S.InputGroup>
					<S.Label>Nome</S.Label>
					<S.Input type="text" {...register('name')} />
					<S.ErrorMessage>{errors?.name?.message}</S.ErrorMessage>
				</S.InputGroup>

				<S.InputGroup>
					<S.Label>Preço</S.Label>
					<S.Input
						type="number"
						step="0.01"
						min="0"
						placeholder="Ex: 29,90"
						{...register('price')}
					/>
					<S.ErrorMessage>{errors?.price?.message}</S.ErrorMessage>
				</S.InputGroup>

				<S.InputGroup>
					<S.LabelUpload>
						<ImageSquare size={18} />
						<span>
							{fileName ||
								(isEditing
									? 'Trocar imagem do produto'
									: 'Carregar imagem do produto')}
						</span>
						<input
							type="file"
							accept="image/png, image/jpeg, image/webp"
							{...fileRegister}
							onChange={(event) => {
								setFileName(event.target.files[0]?.name);
								fileRegister.onChange(event);
							}}
						/>
					</S.LabelUpload>
					<S.ErrorMessage>{errors?.file?.message}</S.ErrorMessage>
				</S.InputGroup>

				<S.InputGroup>
					<S.Label>Categoria</S.Label>
					<S.Select {...register('category')}>
						<option value="">Selecione...</option>
						{categories.map((category) => (
							<option key={category.id} value={category.id}>
								{category.name}
							</option>
						))}
					</S.Select>
					<S.ErrorMessage>{errors?.category?.message}</S.ErrorMessage>
				</S.InputGroup>

				<S.CheckboxGroup>
					<input type="checkbox" id="offer" {...register('offer')} />
					<label htmlFor="offer">Produto em oferta?</label>
				</S.CheckboxGroup>

				<S.SubmitButton type="submit" disabled={isSubmitting}>
					{isEditing ? 'Editar Produto' : 'Adicionar Produto'}
				</S.SubmitButton>
			</S.Form>
		</S.Container>
	);
}
