import { BalanceText, CardWrapper, TextAndIconBox } from "./Card.style";
import { BsArrowUpCircle } from 'react-icons/bs'

export default function Card({Colors}){

    return(
        <CardWrapper>
            <TextAndIconBox>
                <span>Entradas</span>
                <BsArrowUpCircle style={{color: "#33CC95"}}/>
            </TextAndIconBox>
            <BalanceText>
                17.454,90
            </BalanceText>
        </CardWrapper>
    )
}