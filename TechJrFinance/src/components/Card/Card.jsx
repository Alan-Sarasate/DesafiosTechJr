import { BalanceText, CardWrapper, TextAndIconBox } from "./Card.style";
import { BsArrowUpCircle, BsArrowDownCircle } from 'react-icons/bs'
import { FiDollarSign } from "react-icons/fi";

export default function Card({cardLabel, Colors, Icon, cardBackground = "#FFFFFF"}){

    const iconReturn = {
        1: <BsArrowUpCircle style={{color: "#33CC95"}}/>,
        2: <BsArrowDownCircle style={{color: "#FFA219"}}/>,
        3: <FiDollarSign style={{color: "#FFFFFF"}}/>
    }

    return(
        <CardWrapper color={cardBackground}>
            <TextAndIconBox>
                <span>{cardLabel}</span>
                {iconReturn[Icon]}
            </TextAndIconBox>
            <BalanceText>
                17.454,90
            </BalanceText>
        </CardWrapper>
    )
}