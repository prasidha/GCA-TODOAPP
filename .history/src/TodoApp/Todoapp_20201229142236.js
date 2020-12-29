import React ,{ useState ,useEffect}from 'react'
import Input from '@material-ui/core/Input'
import { Button, Icon, IconButton } from "@material-ui/core";
import './Todoapp.css'
import TodoCard from './TodoCard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {db} from '../firebase'

function Todoapp() {
    const [inputs, setInputs] = useState('');
    const [todos, setTodos] = useState(["prasidha","acharya","hello"])
    
    const handleChange = (event) => {
          setInputs(event.target.value)
    }

   const addTodos = (e) => {
       db.collection("todos").doc().set({
           todos:inputs,
           timestamp:Date.now()
       })
       e.preventDefault();
       setTodos([...todos,inputs]);
       setInputs("");
   }
 
   useEffect(() => {
      db.collection("todos").get().then(data => {
          console.log("data",data.data())
      })
   }, [])
    return (
        <div className="todo__app">
        <IconButton style={{float:'right'}} >logout<ExitToAppIcon/></IconButton>
            <div>
              <h1>Todo App</h1>
              <form>
                <Input type="text" placeholder="add your todos" onChange={handleChange} value={inputs}/>
                <Button variant="contained" color="primary" onClick={addTodos}>Add Todo</Button>
              </form>
            </div>

            <div className="todos">   
                {todos.map((todo,id) => 
                    <TodoCard todo={todo} key={id}/>
                )}
            </div> 
            
            <div>
                
            </div>
        </div>
    )
}

export default Todoapp