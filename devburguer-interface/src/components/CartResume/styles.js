import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 410px;

    @media (max-width: 1024px){
        min-height: 0;
    }

    margin-bottom: 26px;
    background-color: #fff;
    border-radius: 20px;
    overflow: hidden;
`;

export const Title = styled.h2`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #363636;
    color: #fff;
    font-size: 17px;
    font-weight: 600;
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    gap: 36px;
    padding: 56px 30px 0;

    @media (max-width: 1024px){
        gap: 20px;
        padding: 30px 24px 0;
    }

`;

export const Line = styled.div`
    display: flex;
    justify-content: space-between;

    p{
        color: #8a8a8a;
        font-size: 17px;
    }
`;

export const Total = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    padding: 30px;

    @media (max-width: 1024px){
        padding: 24px;
    }

    p{
        color: #1f1f1f;
        font-size: 24px;
        font-weight: 500;
    }
`;
