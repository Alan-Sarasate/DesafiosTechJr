import { BalanceText, CardWrapper, TextAndIconBox } from "./Card.style";
import { BsArrowUpCircle, BsArrowDownCircle } from 'react-icons/bs'
import { FiDollarSign } from "react-icons/fi";

export default function Card({cardLabel, cardFontColor = "#FFFFFF", cardIcon, cardBackground = "#FFFFFF"}){

    const iconReturn = {
        1: <BsArrowUpCircle style={{color: "#33CC95"}}/>,
        2: <BsArrowDownCircle style={{color: "#FFA219"}}/>,
        3: <FiDollarSign style={{color: "#FFFFFF"}}/>
    }

    return(
        <CardWrapper color={cardBackground} fontColor={cardFontColor}>
            <TextAndIconBox>
                <span>{cardLabel}</span>
                {iconReturn[cardIcon]}
            </TextAndIconBox>
            <BalanceText fontColor={cardFontColor}>
                17.454,90
            </BalanceText>
        </CardWrapper>
    )
}