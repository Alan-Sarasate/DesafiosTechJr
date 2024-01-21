import styled from "styled-components"

export const TransitionsWrapper = styled.section`
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
`

export const TransitionCardLabel = styled.span`
    color: #969CB2;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    flex-grow: 8;
`
export const TransitionCardLabel2 = styled(TransitionCardLabel)`
    flex-grow: 4;
`
export const TransitionCardLabel3 = styled(TransitionCardLabel)`
    flex-grow: 1;
`