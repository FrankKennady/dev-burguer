import styled from 'styled-components';
import BackgroundLogin from '../../assets/background-login.svg';
import BackgroundLogin2 from '../../assets/background-login2.svg';
import { Link as ReactLink } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    min-height: 100vh;
    width: 100%;

    @media (max-width: 768px){
        flex-direction: column;
    }

    p{
        color: #fff;
        font-size: 18px;
        font-weight: 800;

        a{
            color: inherit;
            font-weight: 800;
            text-decoration: underline;
        }
    }

`;

export const LeftContainer = styled.div`
    background: url('${BackgroundLogin}');
    background-size: cover;
    background-position: center;

    height: 100%;
    width: 100%;
    max-width: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    img{
        width: 65%;
    }

    @media (max-width: 768px){
        max-width: 100%;
        height: 200px;
        flex-shrink: 0;

        img{
            width: auto;
            height: 150px;
        }
    }
`;

export const RigthContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: 100%;
    width: 100%;
    max-width: 50%;
    padding: 40px 0;

    background: url('${BackgroundLogin2}');
    background-color: #1e1e1e;

    > p{
        padding: 0 20px;
        text-align: center;
    }

    @media (max-width: 768px){
        flex: 1;
        max-width: 100%;
        height: auto;
        padding: 32px 0 40px;
    }
`;

export const Title = styled.h2`
    font-family: "Road Rage", sans-serif;
    font-size: 30px;
    text-align: center;
    line-height: 1.3;
    padding: 0 20px;

    @media (max-width: 480px){
        font-size: 24px;
    }

    font-weight: 700;
    color: #9558a6;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    width: 100%;
    max-width: 400px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;

    input{
        width: 100%;
        border: none;
        height: 52px;
        border-radius: 5px;
        padding: 0 16px;
    }

    label{
        font-size: 16px;
        font-weight: 600;
        color: #fff;
    }

    p{
        color: #ff0000;
        font-size: 14px;
        line-height: 80%;
        font-weight: 500;
        height: 10px;
    }
`;

export const Link = styled(ReactLink)`
    text-decoration: none;
    color: #fff;
`;
