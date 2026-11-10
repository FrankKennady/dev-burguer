import PropTypes from 'prop-types';
import * as S from './styles';

// variant "title"  -> fonte Road Rage (Entrar, Confirmar cadastro)
// variant "default" -> Poppins Bold (Continuar, Adicionar produto...)
export function Button({ children, variant = 'default', ...props }) {
	return (
		<S.ContainerButton $variant={variant} {...props}>
			{children}
		</S.ContainerButton>
	);
}

Button.propTypes = {
	children: PropTypes.node,
	variant: PropTypes.oneOf(['default', 'title']),
};
