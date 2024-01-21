import { CardWrapper, SecondaryLabel, Title, DateText } from "./TransactionCard.style";

export default function TransactionCard(){
    return (
        <CardWrapper>
            <Title>Titulo Gigante enorme fodastico</Title>
            <SecondaryLabel>Preço</SecondaryLabel>
            <SecondaryLabel>Categoria</SecondaryLabel>
            <DateText>
                <span>29/04/2003</span>
            </DateText>
        </CardWrapper>
    )
}