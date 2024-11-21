import { Component,Link } from "react" 
import {   Navigate} from "react-router";
import Header from "../Heder"
import 'bootstrap/dist/css/bootstrap.min.css'

import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";


import "./index.css"


class Home extends Component{

    state={
       currentPage:1,
       userList:[] 
        
        


    }

    onEdit=(id)=>{
             
        Navigate("/user")
        
        
   }

    componentDidMount(){
        this.getUserList()
    }

    getUserList=async()=>{
         
        const url="https://dummyjson.com/users"
        const response=await fetch(url)
        const data=await response.json()

        if(response.ok){
            const usersData=data.users

            const updatedList=usersData.map((each)=>{
                 
 
            return(
                {
                    id:each.id,
                    firstName:each.firstName,
                    middleName:each.maidenName,
                    lastName:each.lastName,
                    gender:each.gender,
                    email:each.email,
                    department:each.company.department,
                    imageUrl:each.image
                }
            )



            })

             
            this.setState({userList:updatedList})  

        }

    }

 onDelete=(id)=>{
        console.log(id)

        const {userList}=this.state 

        const filteredList=userList.filter((each)=>{
            if (each.id!==id){
                return (
                    {each}
                )
            }
        })
         

        this.setState({userList:filteredList})

    }


   
        
   


    
    render(){

        const {userList,currentPage}=this.state
        const recordsPerPage=4
        const lastIndex=currentPage*recordsPerPage
        const firstIndex=lastIndex-recordsPerPage
        const records=userList.slice(firstIndex,lastIndex);
        const npage=Math.ceil(userList.length/recordsPerPage)
        const numbers=[...Array(npage+1).keys()].slice(1) 
       

        const prevPage=()=>{
            if(currentPage!== 1){
                this.setState(prevState=>({currentPage:prevState.currentPage-1}))
            }
        }
    
        const nextPage=()=>{
            if(currentPage!== npage){
                this.setState(prevState=>({currentPage:prevState.currentPage+1}))
            }
    
        } 
        const changeCurrentPage=(id)=>{
            this.setState({currentPage:{id} })
    
        }
    
        
   
        return(

            <div className="bg-container"> 
                <Header/>
                <div className="user-list">
                    <ul className="unorder-container">
                        {records.map((each)=>{
                             
                            return(
                                <li key={each.id} className="list-item">
                                <div className="card">
                                    <div className="card-header">
                                    <img src={each.imageUrl} alt="avatar" className="user-image"  />
                                    <div>
                                       
                                      
                                    <button className="delete-button"   onClick={()=>this.onEdit(each.id)} >
                                    <AiFillEdit />
                                    </button>
                                    <label className="label-text"  >
                                        Edit
                                    </label>
                                

                                    <button className="delete-button" id="delete" onClick={()=>this.onDelete(each.id)} >
                                    <MdDelete />
                                    </button>
                                    <label  className="label-text"  htmlFor="delete">
                                        Delete
                                    </label>


                                    </div>
                                   
                                    </div>
                                    <div className="card-buttom">
                                    <div>
                                          
                                    <h1 className="card-heading">
                                        Name
                                    </h1>
                                    <p className="card-pera">{each.firstName +" " +each.lastName}</p>
                                    <h1 className="card-heading">
                                        Email
                                    </h1>
                                    
                                    <p  className="card-pera">{each.email}</p>
                                    </div> 
                                    <div>
                                    <h1 className="card-heading">
                                        
                                        Gender
                                    </h1>
                                    <p  className="card-pera">{each.gender}</p>
                                    <h1 className="card-heading">
                                        Department
                                    </h1>
                                    <p  className="card-pera">{each.department}</p>

                                    </div>
                                    </div>
                                    
                                </div>
                            </li>

                            )
                           
                        })}
                    </ul>
                </div>
                <nav>
                         <ul className="pagination">
                            <li className="page-item"> 
                                <a href="#" className="page-link" onClick={prevPage}>Prev</a>
                            </li>
                            {
                                numbers.map((number,index)=>(
                                    <li className={`page-item  ${currentPage===number?"active":""}`} key={index}>
                                        <a href="#" className="page-link" onClick={()=>changeCurrentPage(number)}>
                                            {number}
                                        </a>
                                    </li>
                                ))
                            }
                             <li className="page-item"> 
                                <a href="#" className="page-link" onClick={nextPage}>Next</a>
                            </li>
                             
                         </ul>
                    </nav>
            </div>
          
        )

    }
   
}

export default Home

 