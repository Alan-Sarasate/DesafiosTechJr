import { StyledCategoryButton } from "./CategoryButtonStyles";

export default function CategoryButton ({buttonText, handleClickFunction, icon}){

    return (
        <>
            <StyledCategoryButton onClick={handleClickFunction}>
                <img src={icon} alt="Icon"/>
                <span>{buttonText}</span>
            </StyledCategoryButton>
        
        </>

    )

}