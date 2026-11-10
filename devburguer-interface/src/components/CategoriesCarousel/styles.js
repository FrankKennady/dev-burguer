import styled from 'styled-components';

export const Container = styled.div`
    padding-top: 40px;

    .carousel-item{
        padding: 0 9px;
    }
`;

export const ContainerItems = styled.div`
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 232px;
    padding: 24px 20px;
    border-radius: 8px;
    background: linear-gradient(transparent 50%, rgba(0,0,0,0.55)),
        url('${(props) => props.$imageUrl}');
    background-position: center;
    background-size: cover;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover{
        transform: translateY(-4px);
    }
`;

export const CategoryButton = styled.button`
    padding: 6px 30px;
    border: none;
    border-radius: 30px;
    background-color: rgba(0, 0, 0, 0.55);
    color: #fff;
    font-size: 22px;
    font-weight: 700;

    @media (max-width: 600px){
        font-size: 18px;
        padding: 6px 22px;
    }
    transition: background-color 0.2s;

    ${ContainerItems}:hover &{
        background-color: #9758a6;
    }
`;

export const CarouselWrapper = styled.div`
    position: relative;
    padding: 0 70px;

    @media (max-width: 600px){
        padding: 0 44px;
    }

    .react-multi-carousel-list{
        position: static;
    }
`;
