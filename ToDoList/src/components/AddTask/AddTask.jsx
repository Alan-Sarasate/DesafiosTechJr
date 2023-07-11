import "./AddTask.css"
import AddIcon from "../../assets/addIcon.svg"
import Task from "../tasks/Task"

function AddTask(){
    return(
        <div className="addTask-container">
            <h2 className="addTask-title">Minhas tasks</h2>
            <form className="addTask-form">
                <input type="text" className="addTask-text-input" placeholder="Adicoine um novo todo"/>
                <button className="addTask-button">
                    <img src={AddIcon} alt="add Icon" className="addTask-img"/>
                </button>
            </form>
            <div className="addTask-box">
                <Task/>
                <Task/>
                <Task/>
                <Task/>
            </div>
        </div>
    )
}

export default AddTask