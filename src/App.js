import {Component} from "react"
import {BrowserRouter,Route ,Routes} from "react-router-dom"
 
import AddUser from "./Components/Adduser";
import AlterUser from "./Components/AlterUser"; 
import NotFound from "./Components/NotFound";
import Home from "./Components/Home";
import './App.css';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <Routes>
       
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/user" Component={AddUser}/>
      <Route exact path="/user/alter" Component={AlterUser}/> 
      <Route path="*" element={<NotFound/>}/>
       
      </Routes>
       
     
      
     
     </BrowserRouter>
    )
  }
}

export default App;
