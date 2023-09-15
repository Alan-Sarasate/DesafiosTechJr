import styled from "styled-components";

export const HeaderWrapper = styled.header`
    width: 100%;
    background-color: ${function (props) {  return props.theme.colors.primaryColor } };
    padding: 0 100px;
    display: flex;
    flex-direction: column;


    @media (min-width: 100px){
        height: 260px;
    }
    @media (min-width: 320px){
        padding: 0 20px;
        height: 220px;
    }
    @media (min-width: 720px){
        padding: 0 50px;
        height: 170px
    }
    @media (min-width: 900px){
        padding: 0 100px;
        height: 212px
    }
`

export const LogoBox = styled.div`
    max-width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 319px){
        margin-top: 50px;
        flex-direction: column;
    }
    @media (min-width: 320px){
        margin-top: 50px;
    }
    @media (min-width: 720px){
        margin-top: 40px;
    }
    @media (min-width: 900px){
        margin-top: 32px;
    }

    img{
        height: 27px;
        @media (max-width: 319px){
            margin-bottom: 30px;
        }
        @media (min-width: 320px){
            width: 150px;
        }
        @media (min-width: 720px){
            width: 164px;
        }
        @media (min-width: 900px){
            width: 186px;
        }
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

    @media (min-width: 320px){
        width: 130px;
        font-size: 12px;
    }
    @media (min-width: 720px){
        width: 170px;
        font-size: 14px;
    }
    @media (min-width: 720px){
        width: 195px;
        font-size: 16px;
        height: 44px;
    }
    
`

export const CardsSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    top: 60px;

    @media (min-width: 320px){
        overflow-y: hidden;
        gap: 30px;
    }
`

