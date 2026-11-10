import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Container = styled.aside`
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #363636;

    > img{
        width: 60%;
        max-width: 130px;
        margin: 20px 0 40px;
    }

    /* No celular a barra lateral vira uma barra no topo */
    @media (max-width: 768px){
        position: static;
        min-width: 0;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        height: auto;
        padding: 8px 12px;
        gap: 8px;

        > img{
            width: 64px;
            margin: 0;
        }
    }
`;

export const NavLinkContainer = styled.nav`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (max-width: 768px){
        order: 3;
        flex-direction: row;
        overflow-x: auto;
        border-top: 1px solid #4a4a4a;
        padding-top: 8px;
        gap: 4px;
    }
`;

const itemStyle = css`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 36px;
    padding: 0 14px;
    border: none;
    text-decoration: none;
    color: #fff;
    background-color: ${(props) => (props.$isActive ? '#9758a6' : 'transparent')};
    transition: background-color 0.2s;

    span{
        font-size: 13px;
        white-space: nowrap;
    }

    @media (max-width: 768px){
        width: auto;
        flex-shrink: 0;
        border-radius: 6px;
        padding: 0 12px;
    }

    &:hover{
        background-color: ${(props) => (props.$isActive ? '#9758a6' : 'rgba(151, 88, 166, 0.35)')};
    }
`;

export const NavLink = styled(Link)`
    ${itemStyle}
`;

export const NavButton = styled.button`
    ${itemStyle}
`;

export const Footer = styled.div`
    width: 100%;
    margin-top: auto;
    margin-bottom: 20px;

    @media (max-width: 768px){
        display: flex;
        width: auto;
        margin: 0;
    }
`;
