import styled from "styled-components";

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: #FFFFFF;
    margin: 0 0 8px 0;
    padding: 20px 32px;
    align-content: space-between;
`

export const Title = styled.span`
    color: ${function (props) {return props.theme.colors.primaryFontColor}};
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    background-color: red;
`
export const SecondaryLabel = styled(Title)`
    background-color: green;

`
export const DateText = styled(Title)`
    background-color: yellow;
`