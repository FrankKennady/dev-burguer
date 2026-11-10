import styled, { css } from 'styled-components';

const dashedBorder = `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='5' ry='5' stroke='white' stroke-width='2' stroke-dasharray='6%2c 6' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`;

export const ContainerButton = styled.button`
    width: 100%;
    height: 56px;
    border: none;
    border-radius: 5px;
    background-color: #9758a6;
    color: #fff;
    transition: background-color 0.2s;

    ${(props) =>
			props.$variant === 'title'
				? css`
                font-family: 'Road Rage', sans-serif;
                font-size: 28px;
                text-transform: uppercase;
            `
				: css`
                font-size: 18px;
                font-weight: 700;
            `}

    &:hover{
        background-color: #6f357c;
        background-image: ${dashedBorder};
    }

    &:disabled{
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
