import './App.css'
import Task from './components/tasks/Task'
import AddTask from './components/AddTask/AddTask'
import Header from './components/Header/Header'

function App() {

  return (
    <div className="App">
      <Header/>
      <AddTask/>
    </div>
  )
}

export default App
