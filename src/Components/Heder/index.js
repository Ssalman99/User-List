import {Link} from "react-router-dom"

import { AiOutlineUserAdd } from "react-icons/ai";
import { IoHome } from "react-icons/io5";
import "./index.css"

const Header=()=>{

     

    return(
        <>
        <div className="header-container">

        <div className="head-icon-container"> 
            <Link to="/" className="header-icons" id="Home">
                <IoHome/>
             </Link>
             <label htmlFor="Home" className="label-text">Home</label>
       

            </div>

            <h1 className="header-heading">Users List</h1>


            <div className="head-icon-container">
            <Link to="/user" id="addUser" className="header-icons">
            <AiOutlineUserAdd/>
                
              </Link>
             <label htmlFor="addUser" className="label-text text">Add User</label>
             

            </div>
              </div>
         <hr/>
         </>
       
    )
}


export default Header