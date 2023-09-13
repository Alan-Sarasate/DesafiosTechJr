import { CardsSection, HeaderWrapper, LogoBox, NewTransitionButton } from "./Header.style";
import TechJrLogo from '../../assets/TechJrLogo.svg'
import Card from "../Card/Card";

export default function Header(){

    const colors = {
        Background: "#fff",
        Text: "#363F5F",
        Icon: "#33CC95"
    }

    return (
        <HeaderWrapper>
            <LogoBox>
                <img src={TechJrLogo} alt="logo" />
                <NewTransitionButton>Nova Transação</NewTransitionButton>
            </LogoBox>
            <CardsSection>
                <Card Colors={colors}/>
                <Card Colors={colors}/>
                <Card Colors={colors}/>
            </CardsSection>
        </HeaderWrapper>
    )
}