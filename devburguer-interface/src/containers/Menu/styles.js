import { Link } from 'react-router-dom';
import styled from 'styled-components';

import BackgroundLogin2 from '../../assets/background-login2.svg';
import BannerHamburguer from '../../assets/banner-hamburguer.svg';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    padding-bottom: 50px;
    background: linear-gradient(rgba(240,240,240,0.92), rgba(240,240,240,0.92)),
        url('${BackgroundLogin2}');
    background-color: #f0f0f0;
`;

export const Banner = styled.div`
    position: relative;
    width: 100%;
    height: 415px;
    background: url('${BannerHamburguer}');
    background-color: #1f1f1f;
    background-position: center;
    background-size: cover;

    h1{
        position: absolute;
        top: 95px;
        right: 20%;
        font-family: 'Road Rage', sans-serif;
        font-size: 80px;
        font-weight: 400;
        line-height: 66px;
        color: #fff;
        text-align: center;
        text-transform: uppercase;

        span{
            display: block;
            margin-top: 10px;
            font-family: 'Poppins', sans-serif;
            font-size: 18px;
            line-height: normal;
            text-transform: none;
        }
    }

    @media (max-width: 1024px){
        height: 340px;

        h1{
            top: 60px;
            right: 8%;
            font-size: 64px;
            line-height: 54px;
        }
    }

    @media (max-width: 600px){
        height: 280px;

        h1{
            top: 40px;
            right: 50%;
            transform: translateX(50%);
            width: max-content;
            font-size: 46px;
            line-height: 40px;

            span{
                font-size: 15px;
            }
        }
    }

    @media (max-width: 360px){
        h1{
            font-size: 40px;
            line-height: 36px;
        }
    }
`;

export const CategoryMenu = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 32px;
    padding: 0 20px;

    @media (max-width: 600px){
        gap: 12px 20px;
    }
`;

export const CategoryButton = styled.button`
    padding-bottom: 4px;
    border: none;
    border-bottom: 3px solid ${(props) => (props.$isActiveCategory ? '#9758a6' : 'transparent')};
    background: none;
    color: ${(props) => (props.$isActiveCategory ? '#9758a6' : '#696969')};
    font-size: 18px;
    font-weight: ${(props) => (props.$isActiveCategory ? 700 : 500)};
    text-transform: capitalize;
    transition: color 0.2s;

    &:hover{
        color: #9758a6;
    }

    @media (max-width: 600px){
        font-size: 15px;
    }
`;

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px 88px;
    width: 100%;
    max-width: 1114px;
    margin: 30px auto 0;
    padding: 0 20px;

    @media (max-width: 1024px){
        grid-template-columns: repeat(2, 1fr);
        gap: 28px 40px;
    }

    @media (max-width: 640px){
        grid-template-columns: 1fr;
        max-width: 360px;
    }
`;

export const Empty = styled.p`
    margin-top: 40px;
    text-align: center;
    color: #696969;
    font-weight: 600;
`;

export const BackLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: fit-content;
    margin: 60px auto 0;
    color: #5c2669;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;

    &:hover{
        text-decoration: underline;
    }
`;
