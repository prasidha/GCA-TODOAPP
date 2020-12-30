import logo from './logo.svg';
import React from 'react'
import './App.css';
import SignIn from './TodoApp/SignIn';
import Todoapp from './TodoApp/Todoapp';
import { BrowserRouter as Router ,Switch, Route ,Redirect} from "react-router-dom"
import {auth} from './firebase'




function App() {
  const[isLoggedIn,setIsLoggedIn] =React.useState(false)
  const [user,setUser]=React.useState('')

  React.useEffect(()=>{
    auth.onAuthStateChanged(auth =>{
     if(auth){
       setIsLoggedIn(true)
       setUser(auth)
         
     }else{
       setIsLoggedIn(false)
       setUser(null)
     }
    })
  })

  function logOut (){
    if(user){
      auth.signOut()
    }
    
  }
  
  return (
<Router>
    <Switch>
    <Route 
      exact 
          path="/"  
              render ={
                  ()=> 
                    isLoggedIn  ? 
                      <Redirect to ="/todo" /> : 
                        <SignIn 
                        setIsLoggedIn={setIsLoggedIn}
                        
                            />}/> 

    <Route
        exact
           path="/todo"
                render={
                    () =>
                        isLoggedIn  ?
                              <Todoapp setIsLoggedIn={setIsLoggedIn}
                              user={user}
                                    /> :
                                       <Redirect to="/" />
                                      }
                                    />

    </Switch>
</Router>
    
  );
}

export default App;
