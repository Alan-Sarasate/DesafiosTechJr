import { StyledCategoryButton } from "./CategoryButtonStyles"
import { GiPunch } from 'react-icons/gi'

export default function CategoryButton ({buttonText, handleClickFunction, icon}){

    return (
        <>
            <StyledCategoryButton onClick={handleClickFunction}>
                {icon}
                <span>{buttonText}</span>
            </StyledCategoryButton>
        
        </>

    )

}