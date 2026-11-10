import styled from 'styled-components';

import BackgroundLogin2 from '../../assets/background-login2.svg';
import texture from '../../assets/texture.svg';

// Estes estilos também são usados nas telas de Checkout e Pedido concluído.
export const Container = styled.div`
    width: 100%;
    min-height: calc(100vh - 118px);
    padding-bottom: 60px;
    background: linear-gradient(rgba(240,240,240,0.92), rgba(240,240,240,0.92)),
        url('${BackgroundLogin2}');
    background-color: #f0f0f0;
`;

export const Banner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 192px;
    background: url('${texture}');
    background-color: #1f1f1f;
    background-size: cover;
    background-position: center;

    img{
        height: 150px;
    }

    @media (max-width: 600px){
        height: 140px;

        img{
            height: 110px;
        }
    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 360px;
    align-items: start;
    gap: 28px;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 56px 40px 0;

    @media (max-width: 1024px){
        grid-template-columns: 1fr;
        max-width: 720px;
        padding: 40px 24px 0;
    }

    @media (max-width: 600px){
        padding: 28px 16px 0;
    }
`;
