import React ,{useState}from 'react'
import { Card ,Modal ,Checkbox ,List
   ,ListItem ,ListItemText ,IconButton ,Input ,Button } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {db} from '../firebase'
import Snackbar from '@material-ui/core/Snackbar';


function TodoCard({todo,id,onUpdate}) {
    //  const[checked,setChecked]=useState(false)
     const [complete,setComplete]=React.useState([])
     const [open,setOpen]= useState(false)
     const[updateText,setUpdateText] =useState('')
     const[updateDate,setUpdateDate] =useState('')
     const[error,setError] =useState('')

     const onCompletedTodo = () => {
        setComplete([...complete,todo])
     }

     const deleteTodos = (index) => {
       console.log(index);
       db.collection("todos").doc(todo.id).delete()
     }

     const updateTodo = () => {
       if(updateText!= "" && updateDate != ""){ 
       db.collection('todos').doc(todo.id).set({
        todo:updateText,
        Date:updateDate,
        timestamp:new Date()
     

     },{merge:true})
      setOpen(false)
      setError('')
    }
    else{
      setError("erorr")
      setOpen(false)
    }
     }

     const divstyle = {
     width:"60%",
     height:'300px',
     margin:'15rem',
     backgroundColor:'white',
     border: '2px solid #000',

    };

    const input ={
      margin:'2rem',
      width:'90%'
    }

    const button ={
      marginLeft:'10rem'
    }
    {console.log(todo.todo.Date,"todos")}
    
    return (
        <>
        <Modal
        open={open}
        onClose={e =>setOpen(false)}
      >
      
    
<div style={divstyle}>
      
<Input value ={updateText} placeholder={todo.todo.todo}  margin="normal" onChange={e =>setUpdateText(e.target.value)} style={input}/>
<Input value ={updateDate} placeholder={todo.todo.Date}  onChange={e =>setUpdateDate(e.target.value)} type="date" style={input}/>
<Button variant="contained" color="secondary" onClick={e=>setOpen(false)} style={button}>close</Button>
<Button variant="contained" color="secondary" onClick={updateTodo} style={button}>update</Button>
</div>

</Modal>
        <Card style={{display:'flex',justifyContent:'space-between',padding:'1rem',margin:'3rem'}}>
        
        <div>
        <List>}
        <h3>posted at {todo.todo.timestamp.toLocalString()}: </h3>
        {console.log(new Date(todo.todo.timestamp.toLocalString),"tms")}
        <ListItem>
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
