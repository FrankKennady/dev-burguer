import { List, NotePencil, User, X } from '@phosphor-icons/react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Logo from '../../assets/logo-1.svg';
import { useCart } from '../../hooks/CartContext';
import { useUser } from '../../hooks/UserContext';
import * as S from './styles';

export function Header() {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const { logout, userInfo } = useUser();
	const { cartProducts } = useCart();
	const [menuOpen, setMenuOpen] = useState(false);
	const [lastPath, setLastPath] = useState(pathname);

	// Fecha o menu mobile sempre que a rota mudar.
	if (lastPath !== pathname) {
		setLastPath(pathname);
		setMenuOpen(false);
	}

	const cartCount = cartProducts.reduce((acc, prd) => acc + prd.quantity, 0);

	function logoutUser() {
		logout();
		navigate('/login');
	}

	return (
		<S.Container>
			<S.Content>
				<S.Navigation>
					<S.LogoLink to="/">
						<img src={Logo} alt="Logo DevBurguer" />
					</S.LogoLink>
					<S.Links $open={menuOpen}>
						<S.HeaderLink to="/" $isActive={pathname === '/'}>
							Home
						</S.HeaderLink>
						<hr />
						<S.HeaderLink to="/cardapio" $isActive={pathname === '/cardapio'}>
							Cardápio
						</S.HeaderLink>
						{userInfo?.admin && (
							<>
								<hr />
								<S.HeaderLink to="/admin/pedidos">Painel Admin</S.HeaderLink>
							</>
						)}
					</S.Links>
				</S.Navigation>

				<S.OptionMenu>
					<S.Profile>
						<User size={28} color="#fff" />
						<div>
							<p>
								Olá, <span>{userInfo?.name}</span>
							</p>
							<S.Logout type="button" onClick={logoutUser}>
								Sair
							</S.Logout>
						</div>
					</S.Profile>

					<S.CartLink to="/carrinho" $isActive={pathname === '/carrinho'}>
						<S.CartIcon>
							<NotePencil size={26} color="#fff" />
							<S.Badge>{cartCount}</S.Badge>
						</S.CartIcon>
						<span>Pedidos</span>
					</S.CartLink>

					<S.MenuButton
						type="button"
						aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
						aria-expanded={menuOpen}
						onClick={() => setMenuOpen(!menuOpen)}
					>
						{menuOpen ? <X size={26} /> : <List size={26} />}
					</S.MenuButton>
				</S.OptionMenu>
			</S.Content>
		</S.Container>
	);
}
