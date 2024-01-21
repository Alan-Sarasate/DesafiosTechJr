import TransactionCard from "../TransactionCard/TransactionCard";
import { TransactionsSectionWrapper } from "./TransactionsSection.style";

export default function TransactionSection(){
    return (
        <TransactionsSectionWrapper>
            <TransactionCard/>
            <TransactionCard/>
            <TransactionCard/>
        </TransactionsSectionWrapper>
    )
}