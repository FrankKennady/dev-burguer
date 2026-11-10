import styled from 'styled-components';

import BackgroundLogin2 from '../../assets/background-login2.svg';
import BannerHome from '../../assets/banner-home.svg';

export const Banner = styled.div`
    position: relative;
    height: 456px;
    background: url('${BannerHome}');
    background-size: cover;
    background-position: center;

    h1{
        position: absolute;
        top: 70px;
        right: 13%;
        font-family: 'Road Rage', sans-serif;
        font-size: 72px;
        font-weight: 400;
        color: #fff;
    }

    @media (max-width: 1024px){
        height: 360px;

        h1{
            top: 50px;
            font-size: 60px;
        }
    }

    @media (max-width: 600px){
        height: 260px;

        h1{
            top: 30px;
            right: 50%;
            transform: translateX(50%);
            font-size: 48px;
            white-space: nowrap;
        }
    }
`;

export const Container = styled.section`
    background: linear-gradient(rgba(240,240,240,0.92), rgba(240,240,240,0.92)),
        url('${BackgroundLogin2}');
    background-color: #f0f0f0;
`;
