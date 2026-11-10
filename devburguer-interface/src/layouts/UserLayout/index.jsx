import { Navigate, Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { Footer, Header } from '../../components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    > main, > div{
        flex: 1;
    }
`;

export function UserLayout() {
	const userData = localStorage.getItem('devburguer:userData');

	if (!userData) {
		return <Navigate to="/login" replace />;
	}

	return (
		<Container>
			<Header />
			<Outlet />
			<Footer />
		</Container>
	);
}
