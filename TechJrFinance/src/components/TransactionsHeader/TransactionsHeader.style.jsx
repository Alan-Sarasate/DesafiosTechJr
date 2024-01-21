import styled from "styled-components"

export const TransactionsWrapper = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    padding: 0 160px;
    margin-top: 132px;
`

export const LabelsSection = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0 32px;
    margin: 0 0 20px 0;
    justify-content: space-between;
`

export const TransactionCardLabel = styled.span`
    color: #969CB2;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    flex-grow: 8;
    background-color: red;
`
export const TransactionCardLabel2 = styled(TransactionCardLabel)`
    flex-grow: 4;
    background-color: green;
`
export const TransactionCardLabel3 = styled(TransactionCardLabel)`
    flex-grow: 1;
    background-color: yellow;
`