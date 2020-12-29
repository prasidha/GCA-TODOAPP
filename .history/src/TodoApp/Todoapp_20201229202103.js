import React ,{ useState ,useEffect}from 'react'
import Input from '@material-ui/core/Input'
import { Button, IconButton } from "@material-ui/core";
import './Todoapp.css'
import TodoCard from './TodoCard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {db} from '../firebase'

function Todoapp() {
    const [inputs, setInputs] = useState('');
    const[date,setDate]=useState('')
    const [todos, setTodos] = useState([])
    
    const handleChange = (event) => {
          setInputs(event.target.value)
    }

   const addTodos = (e) => {
       db.collection("todos").add({
           todo:inputs,
           Date:date,
           timestamp:new Date()
       })
       e.preventDefault();
    //    setTodos([...todos,inputs]);
       setInputs("");
   }

   const updateTodos = () => {
       console.log()
       setInputs(todos)
   }
 
   useEffect(() => {
    db.collection('todos').onSnapshot(snapshot =>{
        setTodos(snapshot.docs.map(doc => ({id:doc.id,todo:doc.data()})))
       console.log(todos,"snapshot")
    })
   },[true])

  if (todos.length === 0){
      <h1>loading....</h1>
  }
    return (
        <div className="todo__app">
        <IconButton style={{float:'right'}} >logout<ExitToAppIcon/></IconButton>
            <div>
              <h1>Todo App</h1>
              <form >
                <Input type="text"  placeholder="add your todos" onChange={handleChange} value={inputs} style={{width:"60%"}}/>
                <Input type="date" onChange={(e)=>setDate(e.target.value)} style={{width:"60%",}}/>
                <Button variant="contained" color="primary" disabled={!inputs} onClick={addTodos}>Add Todo</Button>
              </form>
            </div>

            <div className="todos">   
                
            </div> 
            
            <div>
            {
                todos.map((todo,id) => 
                
                 <TodoCard 
                 todo={todo}  
                 key={id}
                 onUpdate={updateTodos}
                 />

                  
                )
            }
            </div>
        </div>
    )
}

export default Todoapp
