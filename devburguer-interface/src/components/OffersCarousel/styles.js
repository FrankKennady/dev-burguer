import styled from 'styled-components';

export const Container = styled.div`
    padding-bottom: 80px;
`;

export const CarouselWrapper = styled.div`
    position: relative;
    padding: 0 70px;

    @media (max-width: 600px){
        padding: 0 44px;
    }

    .react-multi-carousel-list{
        position: static;
        padding-bottom: 20px;
    }

    .carousel-item{
        padding: 0 18px;
    }
`;
