import React ,{useState}from 'react'
import {Card,Checkbox,List,ListItem,ListItemText,IconButton} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {db} from '../firebase'
import { SettingsInputSvideo } from '@material-ui/icons';

function TodoCard({todo,id,onUpdate}) {
     const[checked,setChecked]=useState(false)
     const [complete,setComplete]=React.useState([])

     const onCompletedTodo = () => {
        setComplete([...complete,todo])
     }

     const deleteTodos = (index) => {
       console.log(index);
       db.collection("todos").doc(todo.id).delete()
     }

    
    return (
        
        <Card style={{display:'flex',justifyContent:'space-between',padding:'1rem',margin:'3rem'}}>
        
        <div>
        <List>
        <ListItem>
        <Checkbox  checked={checked} onClick={onCompletedTodo}/>
          <ListItemText primary={todo.todo.todo} secondary={todo.todo.} />
        </ListItem> 
      </List>
      </div>
      <div style={{margin:'1.4rem'}}>
       <IconButton  color='secondary' onClick={()=>deleteTodos(id)}>
          <DeleteIcon />
          </IconButton>
          <IconButton color='primary' onClick={()=>onUpdate(id)}>
          <EditIcon />
          </IconButton>
      </div>
     
         
        </Card>
       
        
    )
}

export default TodoCard
