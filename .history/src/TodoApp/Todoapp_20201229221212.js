import React ,{ useState ,useEffect}from 'react'
import { Button, IconButton ,TextField} from "@material-ui/core";
import './Todoapp.css'
import TodoCard from './TodoCard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {db} from '../firebase'
import Alert from '@material-ui/lab/Alert';

function Todoapp() {
    const [inputs, setInputs] = useState('');
    const[date,setDate]=useState('')
    const [todos, setTodos] = useState([])
    const [error,setError] =useState("")
    
    const handleChange = (event) => {
          setInputs(event.target.value)
    }

   const addTodos = (e) => {
    e.preventDefault();
       if(inputs !== ' ' && date !== ''){

        db.collection("todos").add({
            todo:inputs,
            Date:date,
            timestamp:new Date()
       })
       setError("")
       setInputs("");
       setDate("");
       
    }
    else{
       setError("feilds should not be empty")
    }
    
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
              {error && <Alert severity="error">{error}</Alert>}
              <form style={{width:"70%",margin:'auto'}}>
              <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Add todoLists"
              name="Inputs"
              value={inputs}
              onChange={(e)=>{setInputs(e.target.value)}}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="date"
              label="Select your day"
              type="date"
              value={date}
              onChange={(e)=>{setDate(e.target.value)}}
            />
   
            <Button variant="contained" fullWidth color="primary"  onClick={addTodos}>Add Todo</Button>
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
                
                 />
console.log(todo.todo.)
                  
                )
            }
            </div>
        </div>
    )
}

export default Todoapp