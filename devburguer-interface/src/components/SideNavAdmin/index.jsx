import {
	ForkKnife,
	ListBullets,
	NotePencil,
	PlusSquare,
	SignOut,
} from '@phosphor-icons/react';
import { useLocation, useNavigate } from 'react-router-dom';

import Logo from '../../assets/logo-1.svg';
import { useUser } from '../../hooks/UserContext';
import * as S from './styles';

const navLinks = [
	{
		label: 'Pedidos',
		path: '/admin/pedidos',
		icon: NotePencil,
		match: ['/admin', '/admin/pedidos'],
	},
	{
		label: 'Produtos',
		path: '/admin/produtos',
		icon: ListBullets,
		match: ['/admin/produtos', '/admin/editar-produto'],
	},
	{
		label: 'Adicionar Produto',
		path: '/admin/novo-produto',
		icon: PlusSquare,
		match: ['/admin/novo-produto'],
	},
];

export function SideNavAdmin() {
	const { logout } = useUser();
	const navigate = useNavigate();
	const { pathname } = useLocation();

	function handleLogout() {
		logout();
		navigate('/login');
	}

	return (
		<S.Container>
			<img src={Logo} alt="Logo DevBurguer" />

			<S.NavLinkContainer>
				{navLinks.map(({ label, path, icon: Icon, match }) => (
					<S.NavLink key={path} to={path} $isActive={match.includes(pathname)}>
						<Icon size={18} />
						<span>{label}</span>
					</S.NavLink>
				))}
			</S.NavLinkContainer>

			<S.Footer>
				<S.NavLink to="/cardapio">
					<ForkKnife size={18} />
					<span>Ver cardápio</span>
				</S.NavLink>
				<S.NavButton type="button" onClick={handleLogout}>
					<SignOut size={18} />
					<span>Sair</span>
				</S.NavButton>
			</S.Footer>
		</S.Container>
	);
}
