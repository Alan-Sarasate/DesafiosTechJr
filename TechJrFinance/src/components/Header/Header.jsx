import { CardsSection, HeaderWrapper, LogoBox, NewTransitionButton } from "./Header.style";
import TechJrLogo from '../../assets/TechJrLogo.svg'
import Card from "../Card/Card";

export default function Header(){

    return (
        <HeaderWrapper>
            <LogoBox>
                <img src={TechJrLogo} alt="logo" />
                <NewTransitionButton>Nova Transação</NewTransitionButton>
            </LogoBox>
            <CardsSection>
                <Card cardIcon={1} cardLabel={"Entradas"} cardFontColor={function (props) {return props.theme.colors.primaryFontColor}}/>
                <Card cardIcon={2} cardLabel={"Saídas"} cardFontColor={function (props) {return props.theme.colors.primaryFontColor}}/>
                <Card cardIcon={3} cardLabel={"Total"} cardBackground="#33CC95"/>
            </CardsSection>
        </HeaderWrapper>
    )
}