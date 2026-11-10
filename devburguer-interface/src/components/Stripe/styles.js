import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    from{ transform: rotate(0deg); }
    to{ transform: rotate(360deg); }
`;

export const Container = styled.div`
    width: 100%;
    max-width: 520px;
    background-color: #fff;
    padding: 40px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;

    @media (max-width: 600px){
        padding: 24px 18px;
    }

    form{
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 52px;
    border: none;
    border-radius: 5px;
    background-color: #9758a6;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    transition: background-color 0.2s;

    &:hover{
        background-color: #6f357c;
    }

    &:disabled{
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

export const Spinner = styled.div`
    width: 24px;
    height: 24px;
    border: 3px solid rgba(255,255,255,0.4);
    border-top-color: #fff;
    border-radius: 50%;
    animation: ${spin} 0.8s linear infinite;
`;

export const Message = styled.p`
    color: #d20000;
    font-size: 14px;
    text-align: center;
`;

export const Info = styled.p`
    margin-top: 20px;
    font-size: 13px;
    color: #696969;
    text-align: center;

    a{
        color: #9758a6;
        font-weight: 700;
    }
`;
