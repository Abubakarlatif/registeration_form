import './App.css';
import {useState} from "react"
function App() {
  const [values , setValue] = useState({
      firstName :"",
      lastName : "",
      email : "",
  });
  const [submit,setSubmit] = useState();
  const [valid ,setValid] = useState();
  const handleSubmit=(event)=>{
    event.preventDefault();
    if(values.firstName && values.lastName && values.email){
      setValid(true)
    }
    setSubmit(true)
    
  }
  const handleFirstNameInput =(event)=>{
    setValue({...values , firstName:event.target.value})
  }
  const handleLastNameInput =(event)=>{
    setValue({...values , lastName:event.target.value})
  }
  const handleEmailInput =(event)=>{
    setValue({...values , email:event.target.value})
  }
  return (
    <div className="container">
      <form className='registeration ' onSubmit={handleSubmit}>
        <div className="in-tag">
         {submit && valid ? <div className='success-msg'> success ! Thank You For Registering</div> :null}
          <input className='in' onChange={handleFirstNameInput} value={values.firstName} type="text" placeholder="Enter Your First Name" name='firstName' />
          {submit && !values.firstName ? <span>Please Enter First Name</span> :null} 
          <input className='in'  onChange={handleLastNameInput} value={values.lastName} type="text" placeholder="Enter Your Last Name" name="lastName"/>
          {submit && !values.lastName ? <span>Please Enter Last Name</span> :null} 
          <input className='in'  onChange={handleEmailInput} value={values.email} type="email" placeholder="Enter Your Email" name="email"/>
          {submit && !values.email ? <span>Please Enter Your Email</span> :null} 
        </div>
        <div>
          <button>Register</button>
        </div>

      </form>
      
    </div>
  );
}

export default App;
