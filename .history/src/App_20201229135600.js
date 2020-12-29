import logo from './logo.svg';
import './App.css';
import SignIn from './TodoApp/SignIn';
import Todoapp from './TodoApp/Todoapp';
import { BrowserRouter as Router ,Switch, Route} from "react-router-dom"

function App() {
  return (
<Router>
    <Switch>
        <Route exact path ="/"/>
        <Route/>
    </Switch>
</Router>
    
  );
}

export default App;
