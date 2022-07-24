import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import Temp from "./Images/Temp.svg";

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [username , setUsername] = useState('')
    const [checked, setChecked] = React.useState(false);
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const authentication = getAuth();
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(validateForm())
        {
        createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          if(checked)
          { 
              localStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
          }
          else{
            sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
          
          }
          navigate("/");
        
        })
    }  
    }
    const validateForm = ()=> {

        let errors = {};
        let formIsValid = true;
  
        if (!username) {
          formIsValid = false;
          errors["username"] = "*Please enter your username.";
        }
  
        if (typeof username !== "undefined") {
          if (!username.match(/^[a-zA-Z ]*$/)) {
            formIsValid = false;
            errors["username"] = "*Please enter alphabet characters only.";
          }
        }
  
        if (!email) {
          formIsValid = false;
          errors["email"] = "*Please enter your email-ID.";
        }
  
        if (typeof email !== "undefined") {
          //regular expression for email validation
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(email)) {
            formIsValid = false;
            errors["emailid"] = "*Please enter valid email-ID.";
          }
        }
  
        
        if (!password) {
          formIsValid = false;
          errors["password"] = "*Please enter your password.";
        }
  
        if (typeof password !== "undefined") {
          if (!password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
            formIsValid = false;
            errors["password"] = "*Please enter secure and strong password.";
          }
        }
  
        setError(errors);
        return formIsValid;
  
  
      }
  
  
  

    return (

        <div className='login'>
        <div className='row align align-items-center justify-content-around h-100 '>
        <img alt="x" className='col-3 pt-5 mt-5' src={Temp} height={400} width={500}/>
        <div className='col-3 border formborder p-5'>
                <h3 className='m-4'>Signup</h3>
                <div className="form-group m-4">
                    <input type="text" className="form-control" placeholder="Enter username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    <div className="error ps-0 pt-2 ">{error.username}</div>
                
                </div>

                <div className="form-group m-4">
                    <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <div className="error ps-0 pt-2 ">{error.email}</div>
                
                </div>

                <div className="form-group m-4">
                    <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <div className="error ps-0 pt-2 ">{error.password}</div>
                
                </div>
                <span className='ps-4 pb-4'>
                <input type="checkbox" checked={checked}
                 onChange={()=>setChecked(!checked)} />Remember Me
                </span>
                
                <div className='d-flex flex-column justify-content-center align-items-center'>
                <button onClick={handleSubmit} className="btn btn-dark btn-lg btn-block m-4 ">Signup</button>
                </div>
                <p className="forgot-password text-right d-flex flex-row justify-content-center align-items-center">
                    Already have a account ? <a href="/login"> Login</a>
                </p>
            </div>
                        
        </div>
    </div>
    
  )
}

export default Register