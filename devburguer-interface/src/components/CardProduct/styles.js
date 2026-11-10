import styled from 'styled-components';

const card = `
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 24px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 20px;
`;

export const OfferCard = styled.div`
    ${card}
    gap: 20px;
    padding: 80px 20px 22px;
    margin-top: 60px;
    min-height: 218px;
    justify-content: flex-end;
`;

export const MenuCard = styled.div`
    ${card}
    gap: 16px;
    padding: 90px 22px 26px;
    margin-top: 60px;
`;

export const CardImage = styled.img`
    position: absolute;
    top: -55px;
    left: 50%;
    transform: translateX(-50%);
    height: 130px;
    max-width: 75%;
    object-fit: contain;
`;

export const FavoriteButton = styled.button`
    position: absolute;
    top: 22px;
    right: 22px;
    display: flex;
    border: none;
    background: transparent;
    color: #9758a6;
    transition: transform 0.2s;

    &:hover{
        transform: scale(1.1);
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

export const Name = styled.p`
    font-size: 18px;
    font-weight: 700 !important;
    color: #ff8c05;
`;

export const Description = styled.p`
    font-size: 13px;
    color: #484848;
    text-transform: lowercase;
`;

export const Price = styled.strong`
    font-size: 18px;
    font-weight: 700 !important;
    color: #363636;
`;

export const Footer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    > div{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`;

export const Stars = styled.div`
    display: flex;
    gap: 4px;
    color: #cdcdcd;
`;

export const WideCartButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 5px;
    background-color: #9758a6;
    transition: background-color 0.2s;

    &:hover{
        background-color: #6f357c;
    }
`;

export const SquareCartButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 54px;
    height: 46px;
    border: none;
    border-radius: 8px;
    background-color: #9758a6;
    transition: background-color 0.2s;

    &:hover{
        background-color: #6f357c;
    }
`;
