import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 210px 1fr;
    min-height: 100vh;

    @media (max-width: 768px){
        grid-template-columns: minmax(0, 1fr);
        grid-template-rows: auto 1fr;
    }
`;

export const Main = styled.main`
    width: 100%;
    min-width: 0;
    padding: 40px 6% 60px;
    background-color: #efefef;

    @media (max-width: 768px){
        padding: 24px 16px 40px;
    }
`;
