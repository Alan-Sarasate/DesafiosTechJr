import { HeaderWrapper, LogoBox, NewTransitionButton } from "./Header.style";
import TechJrLogo from '../../assets/TechJrLogo.svg'

export default function Header(){

    return (
        <HeaderWrapper>
            <LogoBox>
                <img src={TechJrLogo} alt="logo" />
                <NewTransitionButton>Nova Transação</NewTransitionButton>
            </LogoBox>
        </HeaderWrapper>
    )
}