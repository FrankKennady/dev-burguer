import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import Logo from '../../assets/logo-1.svg';
import * as S from './styles';

import { Button } from '../../components/Button';
import { api } from '../../services/api';

export function Register() {
	const navigate = useNavigate();
	const schema = yup
		.object({
			name: yup.string().required('O nome é obrigatório'),
			email: yup
				.string()
				.email('Digite um e-mail válido')
				.required('O e-mail é obrigatório'),
			password: yup
				.string()
				.min(6, 'A senha deve ter pelo menos 6 caracteres')
				.required('A senha é obrigatória'),
			confirmPassword: yup
				.string()
				.oneOf([yup.ref('password'), null], 'As senhas devem ser iguais')
				.required('A confirmação de senha é obrigatória'),
		})
		.required();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = async (data) => {
		try {
			const { status } = await api.post(
				'/users',
				{
					name: data.name,
					email: data.email,
					password: data.password,
				},
				{
					validateStatus: () => true,
				},
			);
			if (status === 200 || status === 201) {
				setTimeout(() => {
					navigate('/login');
				}, 1000);
				toast.success('Conta criada com sucesso!');
			} else if (status === 409) {
				toast.error(
					'E-mail já cadastrado! Vá para o Login para acessar sua conta.',
				);
			} else {
				throw new Error();
			}
		} catch {
			toast.error('😭 Falha no sistema. Tente novamente mais tarde.');
		}
	};

	return (
		<S.Container>
			<S.LeftContainer>
				<img src={Logo} alt="logo-dev" />
			</S.LeftContainer>
			<S.RigthContainer>
				<S.Title>Criar conta</S.Title>
				<S.Form onSubmit={handleSubmit(onSubmit)}>
					<S.InputContainer>
						<label htmlFor="name">Nome</label>
						<input
							id="name"
							type="text"
							autoComplete="name"
							{...register('name')}
						/>
						<p>{errors?.name?.message}</p>
					</S.InputContainer>

					<S.InputContainer>
						<label htmlFor="email">Email</label>
						<input
							id="email"
							type="email"
							autoComplete="email"
							{...register('email')}
						/>
						<p>{errors?.email?.message}</p>
					</S.InputContainer>

					<S.InputContainer>
						<label htmlFor="password">Senha</label>
						<input
							id="password"
							type="password"
							autoComplete="new-password"
							{...register('password')}
						/>
						<p>{errors?.password?.message}</p>
					</S.InputContainer>

					<S.InputContainer>
						<label htmlFor="confirmPassword">Confirmar senha</label>
						<input
							id="confirmPassword"
							type="password"
							autoComplete="new-password"
							{...register('confirmPassword')}
						/>
						<p>{errors?.confirmPassword?.message}</p>
					</S.InputContainer>

					<Button type="submit" variant="title">
						Confirmar Cadastro
					</Button>
				</S.Form>
				<p>
					Já possui conta? <S.Link to="/login">Clique aqui.</S.Link>
				</p>
			</S.RigthContainer>
		</S.Container>
	);
}
