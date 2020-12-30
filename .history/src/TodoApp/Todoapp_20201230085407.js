import React ,{ useState ,useEffect}from 'react'
import { Button, IconButton ,TextField} from "@material-ui/core";
import './Todoapp.css'
import TodoCard from './TodoCard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { db ,auth } from '../firebase'
import Alert from '@material-ui/lab/Alert';

function Todoapp({user}) {
    const [inputs, setInputs] = useState('');
    const[date,setDate]=useState('')
    const [todos, setTodos] = useState([])
    const [error,setError] =useState("")
    
   const addTodos = (e) => {
    e.preventDefault();
       if(inputs !== ' ' && date !== ''){

        db.collection("todos").add({
            todo:inputs,
            Date:date,
            timestamp:Date.now()
       })
       setError("")
       setInputs("");
       setDate("");
       
    }
    else{
       setError("feilds should not be empty")
    }
    
   }

const logout = () => {
     if(user)
       auth.signOut()
     }

 
   useEffect(() => {
    db.collection('todos').onSnapshot(snapshot =>{
        setTodos(snapshot.docs.map(doc => ({id:doc.id,todo:doc.data()})))
       console.log(todos,"snapshot")
    })
   },)

  if (todos.length === 0){
      <h1>loading....</h1>
  }
    return (
        <div className="todo__app">
        <IconButton style={{float:'right'}} onClick={logout}>logout<ExitToAppIcon/></IconButton>
            <div>
              <h1 className="text">Todo App</h1>
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
            <TextField
            fullWidth
            id="datetime-local"
            label="Select your day and time"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            onChange={(e)=>{setDate(e.target.value)}}
            value={date}
            InputLabelProps={{
              shrink: true,
            }}
          />
            <Button variant="contained" fullWidth color="primary"  onClick={addTodos} style={{marginTop:'2rem'}}>Add Todo</Button>
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
                 
                  
                )
                
            }
            
            </div>
        </div>
    )
}

export default Todoapp
