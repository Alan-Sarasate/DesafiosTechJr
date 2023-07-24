import "./AddTask.css"
import AddIcon from "../../assets/addIcon.svg"
import Task from "../tasks/Task"
import { useRef, useState } from "react"

function AddTask(){

    const [lista, setLista] = useState([])
    const [text, setText] = useState("")
    const textInput = useRef(null)

    
    function adicionarTask(e){
        e.preventDefault()
        if(!text) return
        setLista(antigaLista => [...antigaLista, {elementText: text}])
        textInput.current.value = ""
    }

    function removerTask(id){
        const antigaLista = [...lista]
        const listaFiltrada = antigaLista.filter((item, i)=>(
            i !== id 
            ))
        setLista(listaFiltrada)
    }

    return(
        <div className="addTask-container">
            <h2 className="addTask-title">Minhas tasks</h2>
            <form className="addTask-form" onSubmit={adicionarTask}>
                <input ref={textInput} onChange={(e)=>setText(e.target.value)} type="text" className="addTask-text-input" placeholder="Adicione um novo todo"/>
                <button className="addTask-button" type="submit">
                    <img src={AddIcon} alt="add Icon" className="addTask-img"/>
                </button>
            </form>
            <div className="addTask-box">
                {lista.map((item, i) => (
                    <Task key={i} task={item} remove={()=>removerTask(i)}/>
                ))}
            </div>
        </div>
    )
}

export default AddTask