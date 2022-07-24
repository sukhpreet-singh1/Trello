import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Temp from "./Images/Temp.svg";
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth'
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [error,setError] = useState({});
    const [checked, setChecked] = React.useState(false);
    
    let navigate = useNavigate();
    const authentication = getAuth();

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(validateForm())
        {
        signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate('/');
          if(checked)
          { 
            localStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
          }
          else
          {
            sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
          }
        
        })
    }
        
    }
    const validateForm =()=> {
        let errors = {};
        let formIsValid = true;
  
        
        if (!email) {
          formIsValid = false;
          errors["email"] = "*Please enter your email-ID.";
        }
  
    
        
        if (!password) {
          formIsValid = false;
          errors["password"] = "*Please enter your password.";
        }
  
  
        setError(errors);
        return formIsValid;
      }
  
  
  
    return (
    <div className='login'>
        <div className='row align align-items-center justify-content-around h-100 '>
        <img alt="x" className='col-3 pt-5 mt-5' src={Temp} height={400} width={300}/>
        <form className='col-3 border formborder p-5'>
                <h3 className='m-4'>Login</h3>
                
                <div className="form-group m-4">
                    <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <div className="error ps-0 pt-2 ">{error.email}</div>
                </div>
                

                <div className="form-group m-4">
                    <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <div className="error ps-0 pt-2">{error.password}</div>
                </div>
                <span className='ps-4 pb-4'>
                <input type="checkbox" checked={checked}
                 onChange={()=>setChecked(!checked)} />Remember Me
                </span>
                
                <div className='d-flex flex-column justify-content-center align-items-center'>
                <button type="submit" onClick={handleSubmit} className="btn btn-dark btn-lg btn-block m-4 ">Login</button>
                </div>
                <p className="forgot-password text-right d-flex flex-row justify-content-center align-items-center">
                    Dont have a account ? <a href="/signup"> Signup</a>
                </p>
            </form>
                        
        </div>
    </div>
  )
}

export default Login;