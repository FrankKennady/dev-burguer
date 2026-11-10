import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import styled from 'styled-components';

const Arrow = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    ${(props) => (props.$side === 'left' ? 'left: 0;' : 'right: 0;')}
    z-index: 2;
    display: flex;
    border: none;
    background: transparent;
    color: #9758a6;
    transition: opacity 0.2s;

    &:hover{
        opacity: 0.7;
    }

    @media (max-width: 600px){
        svg{
            width: 36px;
            height: 36px;
        }
    }
`;

// Setas roxas customizadas para o react-multi-carousel.
// O carrossel injeta o onClick automaticamente.
export function CarouselArrow({ side, onClick }) {
	return (
		<Arrow
			type="button"
			$side={side}
			onClick={onClick}
			aria-label={side === 'left' ? 'Anterior' : 'Próximo'}
		>
			{side === 'left' ? (
				<CaretLeft size={48} weight="bold" />
			) : (
				<CaretRight size={48} weight="bold" />
			)}
		</Arrow>
	);
}
