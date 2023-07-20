import "./AddTask.css"
import AddIcon from "../../assets/addIcon.svg"
import Task from "../tasks/Task"
import { useRef, useState } from "react"

function AddTask(){

    const [lista, setLista] = useState([])
    const [text, setText] = useState("")
    const [key, setkey] = useState(0)
    const textInput = useRef(null)

    
    function adicionarTask(e){
        e.preventDefault()
        if(!text) return
        setLista(novaLista => [...novaLista, {elementText: text, id: key}])
        setText("")
        textInput.current.value = ""
        setkey(key+1)
    }

    function removerTask(id){
        const novaLista = [...lista]
        const listaFiltrada = novaLista.filter((item)=>(
            item.id !== id? item : null
            ))
        setLista(listaFiltrada)
    }

    return(
        <div className="addTask-container">
            <h2 className="addTask-title">Minhas tasks</h2>
            <form className="addTask-form">
                <input ref={textInput} onChange={(e)=>setText(e.target.value)} type="text" className="addTask-text-input" placeholder="Adicione um novo todo"/>
                <button className="addTask-button" onClick={adicionarTask}>
                    <img src={AddIcon} alt="add Icon" className="addTask-img"/>
                </button>
            </form>
            <div className="addTask-box">
                {lista.map(item => (
                    <Task key={item.id} task={item} remove={removerTask}/>
                ))}
            </div>
        </div>
    )
}

export default AddTask