import styled from "styled-components"

export const StyledCardsSection = styled.section`
    width: 100%;
    padding: 30px 150px 30px 250px;
    display: flex;
    flex-direction: column;
    background-color: #1e1f25;
`

export const StyledH1 = styled.h1`
    color: #aaa;
    span{
        color: #fff;
    }
`

export const TitleBox = styled.div`
    grid-column-start: 1;
    grid-column-end: 4;
    width: 100%;
    height: 50px;
    margin: 0 0 70px 0;

`

export const CardsBox = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`