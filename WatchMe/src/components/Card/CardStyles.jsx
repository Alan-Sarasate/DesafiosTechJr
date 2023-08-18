import styled from "styled-components"

export const CardBox = styled.div`
    width: 150px;
    height: 210px;
    background-color: transparent;
    margin-bottom: 50px;
    position: relative;

    img{
        width: 100%;
        height: 100%;
        opacity: 0.5;
    }
`

export const SpecificContent = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0px;
    padding: 0 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const MovieTitle = styled.span`
    font-size: 14px;
    color: #ffffff;
    font-weight: 600;
    padding: 0 6px;
    width: 100%;
`

export const MovieSpecifications = styled.div`
    width: 50%;
    font-size: 12px;
    font-weight: 600;
    color: #cccccc;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    margin: 5px 0;

    svg{
        color: #ffee06;
        height: 20px;
        width: 20px;
        opacity: 1;
        margin-left: 2px;
    }

`