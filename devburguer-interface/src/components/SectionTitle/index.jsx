import PropTypes from 'prop-types';
import styled from 'styled-components';

const colors = {
	purple: '#9758a6',
	green: '#61a120',
};

const Title = styled.h2`
    position: relative;
    padding-bottom: 16px;
    margin: ${(props) => props.$margin};
    font-size: 32px;
    font-weight: 800;
    text-align: center;
    text-transform: ${(props) => (props.$uppercase ? 'uppercase' : 'none')};
    color: ${(props) => colors[props.$color]};

    @media (max-width: 600px){
        padding: 0 16px 16px;
        font-size: 24px;
    }

    &::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 56px;
        height: 4px;
        background-color: ${(props) => colors[props.$lineColor]};
    }
`;

// Título verde/roxo com o tracinho embaixo, usado em todas as telas do Figma.
export function SectionTitle({
	children,
	color = 'green',
	lineColor,
	uppercase = false,
	margin = '40px 0',
}) {
	return (
		<Title
			$color={color}
			$lineColor={lineColor || color}
			$uppercase={uppercase}
			$margin={margin}
		>
			{children}
		</Title>
	);
}

SectionTitle.propTypes = {
	children: PropTypes.node,
	color: PropTypes.oneOf(['purple', 'green']),
	lineColor: PropTypes.oneOf(['purple', 'green']),
	uppercase: PropTypes.bool,
	margin: PropTypes.string,
};
