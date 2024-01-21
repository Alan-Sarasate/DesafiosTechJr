import { LabelsSection, TransitionCardLabel, TransitionCardLabel2, TransitionCardLabel3, TransitionsWrapper } from "./TransitionsSection.style";

export default function TransitionsSection (){

    return(
        <TransitionsWrapper>
           <LabelsSection>
            <TransitionCardLabel>Título</TransitionCardLabel>
            <TransitionCardLabel2>Preço</TransitionCardLabel2>
            <TransitionCardLabel2>Categoria</TransitionCardLabel2>
            <TransitionCardLabel3>Data</TransitionCardLabel3>
           </LabelsSection>
        </TransitionsWrapper>
    )
}