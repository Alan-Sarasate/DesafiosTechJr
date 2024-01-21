import { LabelsSection, TransactionCardLabel, TransactionCardLabel2, TransactionCardLabel3, TransactionsWrapper } from "./TransactionsHeader.style";

export default function TransactionHeader (){

    return(
        <TransactionsWrapper>
            <LabelsSection>
                <TransactionCardLabel>Título</TransactionCardLabel>
                <TransactionCardLabel2>Preço</TransactionCardLabel2>
                <TransactionCardLabel2>Categoria</TransactionCardLabel2>
                <TransactionCardLabel3>Data</TransactionCardLabel3>
           </LabelsSection>
        </TransactionsWrapper>
    )
}