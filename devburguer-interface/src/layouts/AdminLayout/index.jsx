import { Navigate, Outlet } from 'react-router-dom';

import { SideNavAdmin } from '../../components';
import * as S from './styles';

export function AdminLayout() {
	const userData = localStorage.getItem('devburguer:userData');
	const isAdmin = userData && JSON.parse(userData).admin;

	if (!userData) {
		return <Navigate to="/login" replace />;
	}

	if (!isAdmin) {
		return <Navigate to="/" replace />;
	}

	return (
		<S.Container>
			<SideNavAdmin />
			<S.Main>
				<Outlet />
			</S.Main>
		</S.Container>
	);
}
