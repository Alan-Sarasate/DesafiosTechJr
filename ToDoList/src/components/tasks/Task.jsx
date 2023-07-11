import "./Task.css"
import RemoveIcon from "../../assets/removeIcon.png"

function Task (){
    return (
        <div className="task-container">
            <form className="task-form">
                <input type="checkbox" className="task-checkbox-input"/>
                <label className="task-label">Teste</label>
            </form>
            <button className="task-remove-button">
                <img src={RemoveIcon} alt="remove Icon" className="task-img"/>
            </button>

        </div>
    )
}

export default Task