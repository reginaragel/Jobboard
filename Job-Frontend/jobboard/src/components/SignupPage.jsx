import React, { useState } from "react";
import {Link} from 'react-router-dom';
import './SignupPage.css';



const SignupPage=()=>{

    const [userName,setUserName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const handleSignup=async(e)=>{
        e.preventDefault();
        if(!userName || !email || !password){
            console.log('Provide User details');
            
        }
        try{
            const response=await fetch('http://localhost:5000/api/signup',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({userName,email,password}),
            })
            if(response.ok){
                alert('User Registered')
            }else{
                alert('Error')
            }
        }catch(err){
            console.error(err);
            alert('Registration Failed')
        }
    }
    return(
        <form onSubmit={handleSignup}>
            {/* <h1>SignUp Page</h1> */}
            <div className="signup-container">
                <h3 className="sign">SignUp</h3>
                <input type="text" placeholder="Username" id="user"
                value={userName} onChange={(e)=>setUserName(e.target.value)} required/>
                <input type="email" placeholder="Email" id="email"
                value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                <input type="password" placeholder="Password" id="pass"
                value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button className="btnnn" type="submit">Signup</button>
                <span>Already have an account?<Link to={'/login'}>Login</Link></span>

            </div>

        </form>
    )
}
export default SignupPage