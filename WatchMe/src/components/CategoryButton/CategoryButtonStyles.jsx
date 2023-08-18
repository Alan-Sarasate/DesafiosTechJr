import styled from "styled-components"

export const StyledCategoryButton = styled.button`
    width: 100%;
    height: 45px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    background-color: #33343b;
    border: none;
    border-radius: 2px;
    color: #eeeeee;
    margin-bottom: 15px;

    &:focus{
        color: #ffee06;
        border-style: groove;
        border-color: #33343b;
        background-color: #53545c;
    }

    &:hover{
        background-color: #53545c;
    }

    svg{
        width: 20px;
        height: 20px;
    }

`