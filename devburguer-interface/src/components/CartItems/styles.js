import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 520px;
    padding-bottom: 50px;
    background-color: #fff;
    border-radius: 20px;
    overflow: hidden;

    @media (max-width: 640px){
        min-height: 0;
        padding-bottom: 24px;
    }
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;

    thead{
        background-color: #363636;
    }

    th{
        height: 50px;
        padding: 0 16px;
        color: #fff;
        font-size: 17px;
        font-weight: 400;
        text-align: left;
    }

    th:first-child{
        text-align: center;
    }

    td{
        padding: 12px 16px;
        color: #484848;
        font-size: 17px;
        font-weight: 500;
        vertical-align: top;
    }

    tbody tr:first-child td{
        padding-top: 24px;
    }

    td:first-child{
        width: 1%;
        padding-left: 48px;
    }

    @media (max-width: 900px){
        td:first-child{
            padding-left: 16px;
        }
    }

    /* No celular cada item vira um "card" em vez de uma linha de tabela */
    @media (max-width: 640px){
        thead tr{
            display: flex;
        }

        th{
            display: none;
        }

        th:first-child{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
        }

        tbody tr:not(.empty){
            display: grid;
            grid-template-columns: 84px 1fr auto;
            grid-template-areas:
                'img name trash'
                'img price price'
                'img qty total';
            align-items: center;
            column-gap: 14px;
            row-gap: 6px;
            padding: 16px;
            border-bottom: 1px solid #efefef;
        }

        tbody tr td,
        tbody tr td:first-child,
        tbody tr:first-child td{
            width: auto;
            padding: 0;
            font-size: 15px;
        }

        td:nth-child(1){ grid-area: img; }
        td:nth-child(2){ grid-area: name; }
        td:nth-child(3){ grid-area: price; color: #8a8a8a; font-size: 13px; }
        td:nth-child(4){ grid-area: qty; }
        td:nth-child(5){ grid-area: total; font-weight: 700; text-align: right; }
        td:nth-child(6){ grid-area: trash; justify-self: end; }
    }
`;

export const ImageBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 130px;
    height: 125px;
    border-radius: 12px;
    background-color: #f4f4f4;

    img{
        max-width: 85%;
        max-height: 85%;
        object-fit: contain;
    }

    @media (max-width: 640px){
        width: 84px;
        height: 80px;
    }
`;

export const ProductName = styled.p`
    max-width: 180px;
    padding-top: 30px;
    font-weight: 600;

    @media (max-width: 640px){
        max-width: none;
        padding-top: 0;
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;
    padding-top: 26px;

    span{
        min-width: 12px;
        text-align: center;
        font-weight: 600;
    }

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border: 0;
        border-radius: 4px;
        background-color: #9758a6;
        color: #fff;
        font-size: 16px;
        transition: background-color 0.2s;

        &:hover{
            background-color: #6f357c;
        }
    }

    @media (max-width: 640px){
        gap: 10px;
        padding-top: 0;

        button{
            width: 28px;
            height: 28px;
        }
    }
`;

export const TrashButton = styled.button`
    display: flex;
    margin-top: 30px;
    border: 0;
    background: transparent;
    color: #bdbdbd;
    transition: color 0.2s;

    &:hover{
        color: #d20000;
    }

    @media (max-width: 640px){
        margin-top: 0;
    }
`;

export const EmptyCart = styled.p`
    padding: 40px 0;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
`;

export const MoreProducts = styled(Link)`
    display: flex;
    align-items: center;
    gap: 2px;
    align-self: flex-end;
    margin: auto 60px 0 0;
    padding-top: 40px;
    color: #5c2669;
    font-size: 18px;
    text-decoration: underline;

    @media (max-width: 640px){
        align-self: center;
        margin: 0;
        padding-top: 24px;
        font-size: 16px;
    }
`;
