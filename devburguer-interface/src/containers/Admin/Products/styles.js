import styled from 'styled-components';

export const SearchBox = styled.label`
    display: flex;
    align-items: center;
    gap: 10px;
    height: 38px;
    margin-bottom: 16px;
    padding: 0 16px;
    border: 1px solid #cdcdcd;
    border-radius: 8px;
    background-color: #fff;
    color: #484848;

    input{
        flex: 1;
        border: none;
        background: transparent;
        font-size: 13px;
        color: #363636;

        &::placeholder{
            color: #a4a4a4;
        }
    }

    &:focus-within{
        border-color: #9758a6;
    }
`;

export const TableWrapper = styled.div`
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    border-radius: 6px;
`;

export const Table = styled.table`
    width: 100%;
    min-width: 560px;
    border-collapse: collapse;
    background-color: #fff;

    th{
        height: 40px;
        padding: 0 14px;
        color: #484848;
        font-size: 12px;
        font-weight: 400;
        text-align: left;
        border-bottom: 1px solid #e0e0e0;
    }

    td{
        height: 56px;
        padding: 4px 14px;
        color: #484848;
        font-size: 12px;
        border-bottom: 1px solid #e0e0e0;
        vertical-align: middle;
    }

    tbody tr:hover{
        background-color: #f7f7f7;
    }

    .center{
        text-align: center;

        > *{
            margin: 0 auto;
        }
    }
`;

export const ProductImage = styled.img`
    display: block;
    width: 50px;
    height: 44px;
    object-fit: contain;
`;

export const EditButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 6px;
    background-color: #ececec;
    color: #323d5d;
    transition: background-color 0.2s, color 0.2s;

    &:hover{
        background-color: #9758a6;
        color: #fff;
    }
`;
