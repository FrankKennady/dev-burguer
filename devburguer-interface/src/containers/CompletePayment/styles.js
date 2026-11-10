import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 420px;
    padding: 110px 20px 0;
    text-align: center;

    @media (max-width: 600px){
        min-height: 0;
        padding-top: 50px;
    }
`;

export const Title = styled.h2`
    margin-top: 28px;
    color: #9758a6;
    font-size: 32px;
    font-weight: 800;
`;

export const Text = styled.p`
    max-width: 560px;
    margin-top: 16px;
    color: #1f1f1f;
    font-size: 24px;
    line-height: 1.5;

    @media (max-width: 600px){
        font-size: 18px;
    }
`;

export const BackLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 2px;
    margin-top: 120px;

    @media (max-width: 600px){
        margin-top: 50px;
    }
    color: #9758a6;
    font-size: 16px;
    font-weight: 600;
    text-decoration: underline;
`;
