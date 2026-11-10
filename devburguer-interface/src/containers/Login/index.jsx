import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext';

import * as S from './styles';
import Logo from '../../assets/logo-1.svg';

import { Button } from '../../components/Button';
import { api } from '../../services/api';

export function Login() {
	const navigate = useNavigate();
	const { putUserData } = useUser();

	const schema = yup
		.object({
			email: yup
				.string()
				.email('Digite um e-mail válido')
				.required('O e-mail é obrigatório'),
			password: yup
				.string()
				.min(6, 'A senha deve ter pelo menos 6 caracteres')
				.required('A senha é obrigatória'),
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
			const { data: userData } = await toast.promise(
				api.post('/session', {
					email: data.email,
					password: data.password,
				}),
				{
					pending: 'Carregando...',
					success: 'Seja Bem-vindo(a)!',
					error: 'Email ou senha incorretos. 🤯',
				},
			);

			putUserData(userData);

			setTimeout(() => {
				navigate(userData?.admin ? '/admin/pedidos' : '/');
			}, 1000);
		} catch {
			// O toast de erro já informa o usuário.
		}
	};

	return (
		<S.Container>
			<S.LeftContainer>
				<img src={Logo} alt="logo-dev" />
			</S.LeftContainer>
			<S.RigthContainer>
				<S.Title>
					Olá, seja bem vindo ao <span>Dev Burguer!</span>
					<br />
					Acesse com seu <span>Login e senha.</span>
				</S.Title>
				<S.Form onSubmit={handleSubmit(onSubmit)}>
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
							autoComplete="current-password"
							{...register('password')}
						/>
						<p>{errors?.password?.message}</p>
					</S.InputContainer>

					<Button type="submit" variant="title">
						Entrar
					</Button>
				</S.Form>
				<p>
					Não possui conta? <S.Link to="/cadastro">Clique aqui.</S.Link>
				</p>
			</S.RigthContainer>
		</S.Container>
	);
}
