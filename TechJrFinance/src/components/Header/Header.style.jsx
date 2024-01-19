import styled from "styled-components";

export const HeaderWrapper = styled.header`
    width: 100%;
    max-height: 212px;
    background-color: ${function (props) {  return props.theme.colors.primaryColor } };
    padding: 0 160px;
    display: flex;
    flex-direction: column;
`

export const LogoBox = styled.div`
    max-width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 32px 0 64px 0;

    img{
        height: 27px;
    }
`

export const NewTransitionButton = styled.button`
    width: 195px;
    height: 40px;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    background-color: ${function (props) {  return props.theme.colors.alternativeColor } };
    color: #FFFFFF;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }  
`

export const CardsSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    gap: 32px;
`

