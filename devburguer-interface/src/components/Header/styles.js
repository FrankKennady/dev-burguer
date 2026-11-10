import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
    position: relative;
    z-index: 10;
    background-color: #1f1f1f;
    width: 100%;
    height: 68px;
    padding: 0 48px;
    border-bottom: 1px solid #3a3a3a;

    @media (max-width: 1024px){
        padding: 0 24px;
    }

    @media (max-width: 768px){
        padding: 0 16px;
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
`;

export const Navigation = styled.nav`
    display: flex;
    align-items: center;
    gap: 60px;
    height: 100%;

    @media (max-width: 1024px){
        gap: 32px;
    }
`;

export const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 28px;

    hr{
        height: 24px;
        border: 0;
        border-left: 1px solid #625e5e;
    }

    @media (max-width: 768px){
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        display: ${(props) => (props.$open ? 'flex' : 'none')};
        flex-direction: column;
        align-items: stretch;
        gap: 0;
        padding: 8px 16px 16px;
        background-color: #1f1f1f;
        border-bottom: 1px solid #3a3a3a;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 8px 16px;

        hr{
            height: 0;
            border-left: 0;
            border-top: 1px solid #3a3a3a;
        }

        a{
            padding: 14px 4px;
            border-bottom: 0;
            font-size: 16px;
        }
    }
`;

export const LogoLink = styled(Link)`
    display: flex;

    img{
        height: 56px;
    }

    @media (max-width: 768px){
        img{
            height: 48px;
        }
    }
`;

export const HeaderLink = styled(Link)`
    color: ${(props) => (props.$isActive ? '#9758a6' : '#fff')};
    border-bottom: 1px solid ${(props) => (props.$isActive ? '#9758a6' : 'transparent')};
    padding-bottom: 3px;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.2s;

    &:hover{
        color: #9758a6;
    }
`;

export const OptionMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 48px;

    @media (max-width: 1024px){
        gap: 28px;
    }

    @media (max-width: 768px){
        gap: 16px;
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    p{
        color: #fff;
        font-size: 12px;
        line-height: 1.2;

        span{
            font-weight: 700;
            color: #9758a6;
        }
    }

    @media (max-width: 480px){
        > svg{
            display: none;
        }

        p span{
            display: inline-block;
            max-width: 80px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            vertical-align: bottom;
        }
    }
`;

export const Logout = styled.button`
    color: #d20000;
    font-size: 12px;
    font-weight: 700;
    background-color: transparent;
    border: none;
`;

export const CartLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${(props) => (props.$isActive ? '#9758a6' : '#fff')};
    font-size: 13px;
    text-decoration: none;

    &:hover{
        color: #9758a6;
    }

    @media (max-width: 480px){
        > span{
            display: none;
        }
    }
`;

export const CartIcon = styled.div`
    position: relative;
    display: flex;
`;

export const Badge = styled.span`
    position: absolute;
    top: -6px;
    right: -6px;
    min-width: 16px;
    height: 16px;
    padding: 0 3px;
    border-radius: 8px;
    background-color: #ff8c05;
    color: #fff;
    font-size: 10px;
    font-weight: 700 !important;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const MenuButton = styled.button`
    display: none;
    border: none;
    background: transparent;
    color: #fff;

    @media (max-width: 768px){
        display: flex;
    }
`;
