import React from 'react'

function CompletedCard() {
    return (
       
        <Card style={{display:'flex',justifyContent:'space-between',padding:'1rem',margin:'3rem'}}>
        
        <div>
        <List>
        <ListItem>
        <Checkbox  checked={checked} onClick={onCompletedTodo}/>
          <ListItemText primary={todo} secondary="Jan 9, 2014" />
        </ListItem> 
      </List>
      </div>
      <div style={{margin:'1.4rem'}}>
       <IconButton  color='secondary'>
          <DeleteIcon />
          </IconButton>
      </div>
     
         
        </Card> 
    )
}

export default CompletedCard
