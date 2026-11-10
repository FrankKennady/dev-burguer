import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    max-width: 340px;
    padding: 30px 28px 34px;
    border-radius: 8px;
    background-color: #363636;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 12px;
`;

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

export const Label = styled.label`
    color: #fff;
    font-size: 13px;
`;

export const Input = styled.input`
    width: 100%;
    height: 38px;
    padding: 0 10px;
    border: 2px solid transparent;
    border-radius: 5px;
    font-size: 13px;

    &:focus{
        border-color: #9758a6;
    }
`;

export const Select = styled.select`
    width: 100%;
    height: 38px;
    padding: 0 10px;
    border: 2px solid transparent;
    border-radius: 5px;
    font-size: 13px;
    background-color: #fff;
    cursor: pointer;

    &:focus{
        border-color: #9758a6;
    }
`;

export const LabelUpload = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 38px;
    margin-top: 6px;
    padding: 0 12px;
    border: 1px dashed #fff;
    border-radius: 5px;
    color: #fff;
    font-size: 13px;
    cursor: pointer;
    transition: background-color 0.2s;

    span{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    &:hover{
        background-color: rgba(255,255,255,0.08);
    }

    input{
        display: none;
    }
`;

export const CheckboxGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    input{
        width: 16px;
        height: 16px;
        accent-color: #9758a6;
        cursor: pointer;
    }

    label{
        color: #fff;
        font-size: 13px;
        cursor: pointer;
    }
`;

export const ErrorMessage = styled.span`
    min-height: 12px;
    margin-top: -2px;
    color: #ff6b6b;
    font-size: 11px;
`;

export const SubmitButton = styled.button`
    width: 100%;
    height: 42px;
    margin-top: 16px;
    border: none;
    border-radius: 5px;
    background-color: #9758a6;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    transition: background-color 0.2s;

    &:hover{
        background-color: #6f357c;
        background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='5' ry='5' stroke='white' stroke-width='2' stroke-dasharray='6%2c 6' stroke-linecap='square'/%3e%3c/svg%3e");
    }

    &:disabled{
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
