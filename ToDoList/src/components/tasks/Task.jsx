import "./Task.css"
import RemoveIcon from "../../assets/removeIcon.png"
import { useRef } from "react"

function Task ({task, remove}){

    const check = useRef(null)
    const labelText = useRef(null)

    function checked(e){
        if(e.target.checked){
            labelText.current.style.color = "#bbb"
            labelText.current.style.textDecoration = "line-through"
        }else {
            labelText.current.style.color = "#444"
            labelText.current.style.textDecoration = "none"
        }
    }

    return (
        <div className="task-container">
            <form className="task-form">
                <input ref={check} type="checkbox" className="task-checkbox-input" onClick={checked}/>
                <label ref={labelText} className="task-label">{task.elementText}</label>
            </form>
            <button className="task-remove-button" onClick={() => remove(task.id)}>
                <img src={RemoveIcon} alt="remove Icon" className="task-img"/>
            </button>

        </div>
    )
}

export default Task