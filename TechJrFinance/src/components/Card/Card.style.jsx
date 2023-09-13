import styled from "styled-components";

export const CardWrapper = styled.div`
    width: 352px;
    height: 156px;
    background: #fff;
    display: flex;
    flex-direction: column;
    color: #363F5F;
    padding: 32px;
    font-size: 16px;
    line-height: 24px;
    border-radius: 5px;
`

export const TextAndIconBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;

    span{
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
    }

    svg{
        width: 32px;
        height: 32px;
    }
`

export const BalanceText = styled.span`
    font-size: 36px;
    line-height: 54px;
    font-weight: 500;
`