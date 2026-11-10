import styled from 'styled-components';

export const Filter = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px 28px;
    margin-bottom: 20px;

    @media (max-width: 600px){
        gap: 10px 16px;
    }
`;

export const FilterOption = styled.button`
    padding-bottom: 3px;
    border: none;
    border-bottom: 1px solid ${(props) => (props.$isActiveStatus ? '#9758a6' : 'transparent')};
    background: none;
    color: ${(props) => (props.$isActiveStatus ? '#9758a6' : '#625e5e')};
    font-size: 13px;
    transition: color 0.2s;

    &:hover{
        color: #9758a6;
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

    th:first-child{
        width: 50px;
    }
`;

export const SortButton = styled.button`
    display: flex;
    align-items: center;
    gap: 6px;
    border: none;
    background: none;
    color: #484848;
    font-size: 12px;
`;

export const Row = styled.tr`
    background-color: ${(props) => (props.$open ? '#f7f7f7' : '#fff')};

    td{
        height: 42px;
        padding: 4px 14px;
        color: #484848;
        font-size: 12px;
        border-bottom: 1px solid #e0e0e0;
    }

    &:hover{
        background-color: #f7f7f7;
    }
`;

export const ExpandButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    border: none;
    border-radius: 50%;
    background-color: transparent;
    color: #484848;

    &:hover{
        background-color: #ececec;
    }
`;

export const SelectStatus = styled.select`
    width: 140px;
    height: 30px;
    padding: 0 8px;
    border: 1px solid #cdcdcd;
    border-radius: 4px;
    background-color: #fff;
    color: #484848;
    font-size: 12px;
    cursor: pointer;

    &:focus{
        border-color: #9758a6;
    }
`;

export const DetailsRow = styled.tr`
    background-color: #fafafa;

    > td{
        padding: 10px 30px 16px;
        border-bottom: 1px solid #e0e0e0;
    }
`;

export const ProductsTable = styled.table`
    width: 100%;
    border-collapse: collapse;

    th{
        padding: 6px 12px;
        color: #484848;
        font-size: 12px;
        font-weight: 600;
        text-align: left;
        border-bottom: 1px solid #e0e0e0;
    }

    td{
        padding: 6px 12px;
        color: #484848;
        font-size: 12px;
        border-bottom: 1px solid #efefef;
    }
`;

export const ProductImage = styled.img`
    width: 40px;
    height: 40px;
    object-fit: contain;
`;

export const OrderTotal = styled.p`
    margin-top: 8px;
    text-align: right;
    color: #484848;
    font-size: 12px;

    strong{
        font-weight: 700;
    }
`;

export const Empty = styled.td`
    padding: 30px;
    text-align: center;
    color: #696969;
    font-size: 13px;
`;
