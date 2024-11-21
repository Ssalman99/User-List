import { Component } from "react"
import Header from "../Heder"
import "./index.css"

class AlterUser extends Component{

    state={
        imageUrl:"",
        firstName:"",
        middleName:"",
        lastName:"",
        gender:"Male",
        email:"",
        department:"",
        errMsg:"",
        errorMsg:false,
        success:false

    }
 
    onSubmitForm=async(event)=>{
        event.preventDefault()
         
        const {firstName,lastName,middleName,gender,email,department,imageUrl}=this.state

        if( firstName!=="" && lastName!=="" && middleName!=="" && gender!=="" && email!=="" && department!=="" && imageUrl!=="" ){


            
        const url="https://dummyjson.com/users/add"
        const options= {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              firstName: {firstName},
              lastName: {lastName},
              maidenName: {middleName},
              gender: {gender},
              email: {email},
              department:{department},
              image:{imageUrl}
            })
          }
    
            const response=await fetch(url,options)
            const data=await response.json()

            console.log(data)
            if (response.ok){
                this.setState({firstName:"",middleName:"",lastName:"",gender:"",email:"",department:"",imageUrl:"",success:true,errorMsg:false})
                
            }else{
                this.setState({errorMsg:true,errMsg:data.error_msg})
            }
            
        }else{
            this.setState({errorMsg:true})
            
        }



    }



handleImage=(event)=>{

    const file=event.target.files[0]

    this.setState({imageUrl:file})
    }
    firstName=(event)=>{
        this.setState({firstName:event.target.value})
    }

    middleName=(event)=>{
        this.setState({middleName:event.target.value})
    }

    lastName=(event)=>{
        this.setState({lastName:event.target.value})
    }
    onChangeFemale=(event)=>{
        this.setState({gender:event.target.value})
    }

    onChangeMale=(event)=>{
        this.setState({gender:event.target.value})
    }

    onChangeEmail=(event)=>{
        this.setState({email:event.target.value})
    }
     
    onChangeDepartment=(event)=>{
        this.setState({department:event.target.value})

    }
render(){
    const {imageUrl,firstName,lastName,middleName,email,department,errorMsg,success}=this.state

    return(
          
           <div className="bg-container container">
            
           <Header/>
           
      <form id="myForm" className="form-container glow" onSubmit={this.onSubmitForm}>
      <h1 className="form-heading">Update User Details</h1>
            <div className="img-container">
                {imageUrl?
                <img src={URL.createObjectURL(imageUrl)} alt="userAvatar" className="user-img"/> :
                <img src="https://free.clipartof.com/855-Free-Clipart-Of-A-Male-Avatar.png" className="img" alt="avatar"/>
                }
                <input type="file" className="img-input-file" onChange={this.handleImage}  /> 
             </div>

        <div className="text-container">
          <label htmlFor="firstName">First Name</label>
          <input type="text"  value={firstName} className="form-input" id="firstName" onChange={this.firstName} />
        
        </div>
        <div className="text-container">
          <label htmlFor="middleName">Middle Name</label>
          <input type="text" value={middleName} className="form-input" onChange={this.middleName}   id="middleName" />
        
        </div>
        <div className="text-container">
          <label htmlFor="lastName">Last Name</label>
          <input type="text"  value={lastName} className="form-input" id="lastName"  onChange={this.lastName}/>
         
        </div>
        <div className="mb-3">
          <h1 className="gender-field-heading">Gender</h1>
          <input type="radio" name="gender" id="genderMale" value="Male" checked  onChange={this.onChangeMale}/>
          <label htmlFor="genderMale">Male</label>
          <input type="radio" name="gender" id="genderFemale" value="Female" onChange={this.onChangeFemale} />
          <label htmlFor="genderFemale">Female</label>
        </div>
        <div className="text-container">
          <label htmlFor="email">Email</label>
          <input type="text" value={email} className="form-input" id="email" onChange={this.onChangeEmail} />
        
        </div>
        <div className="text-container">
          <label htmlFor="department">Department</label>
          <input type="text" value={department}  className="form-input" id="department" onChange={this.onChangeDepartment} />
        </div>
         
        
        <button className="submit-button" type="onSubmit">Submit</button>
        {errorMsg&&<p className="error-message">* Something went's to wrong pls check the form once  *</p>}
        {
            success&& <p className="succuss-message">* User Added success full</p>
        }
        
        
      </form>

             
           </div> 
                
           
       
    )

}
}


export default AlterUser