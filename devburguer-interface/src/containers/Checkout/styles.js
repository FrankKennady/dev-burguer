import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 1280px;
    padding: 40px;
    margin: 0 auto;

    @media (max-width: 600px){
        padding: 28px 16px;
    }
`;
