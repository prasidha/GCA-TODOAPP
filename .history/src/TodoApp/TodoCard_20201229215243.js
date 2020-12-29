import React ,{useState}from 'react'
import { Card ,Modal ,Checkbox ,List
   ,ListItem ,ListItemText ,IconButton ,Input ,Button } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {db} from '../firebase'


function TodoCard({todo,id,onUpdate}) {
     const[checked,setChecked]=useState(false)
     const [complete,setComplete]=React.useState([])
     const [open,setOpen]= useState(false)
     const[update,setUpdate] =useState('')

     const onCompletedTodo = () => {
        setComplete([...complete,todo])
     }

     const deleteTodos = (index) => {
       console.log(index);
       db.collection("todos").doc(todo.id).delete()
     }

     const updateTodo = () => {
      db.collection('todos').doc(props.todo.id).set({
        todo:updateInput,
        timestamp:firebase.firestore.FieldValue.serverTimestamp()
  
     },{merge:true})
      setOpen(false)
     }
    
    return (
        <>
        <Modal
        open={open}
        onClose={e =>setOpen(false)}
      >
<div>

<Input value ={update} placeholder={todo.todo.todo} onChange={e =>setUpdate(e.target.value)}/>
<Button variant="contained" color="secondary" onClick={e=>setOpen(false)}>close</Button>
<Button variant="contained" color="secondary" onClick={updateTodo}>update</Button>
</div>

</Modal>
        <Card style={{display:'flex',justifyContent:'space-between',padding:'1rem',margin:'3rem'}}>
        
        <div>
        <List>
        <h3>posted at ::</h3>
        {console.log(todo.todo.timestamp,"tms")}
        <ListItem>
         
          <Checkbox  checked={checked} onClick={onCompletedTodo}/>
          <ListItemText primary={todo.todo.todo} secondary={todo.todo.Date} />
          </ListItem> 
      </List>
      </div>
      <div style={{margin:'1.4rem'}}>
       <IconButton  color='secondary' onClick={()=>deleteTodos(id)}>
          <DeleteIcon />
          </IconButton>
          <IconButton color='primary' onClick={()=>setOpen(true)}>
          <EditIcon />
          </IconButton>
      </div>
     
         
        </Card>
       
     </>   
    )
}

export default TodoCard
