import React ,{ useState ,useEffect}from 'react'
import { Button, IconButton ,TextField} from "@material-ui/core";
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
       if(inputs!= '' && date!= ''){
            db.collection("todos").add({
           todo:inputs,
           Date:date,
           timestamp:new Date()
       })
       e.preventDefault();
    //    setTodos([...todos,inputs]);
       setInputs("");}
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
              <form style={{width:"70%",margin:'auto'}}>
              <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Add todoLists"
              name="Inputs"
              autoComplete="email"
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
              autoComplete="current-password"
              onChange={(e)=>{setDate(e.target.value)}}
            />
   
            <Button variant="contained" fullWidth color="primary" disabled={!inputs} onClick={addTodos}>Add Todo</Button>
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
