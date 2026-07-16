import "../Css/Register.css";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import useAuth from "../Hooks/useAuth";

export default function Register() {

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();

    let {loading,error,signUp}=useAuth();

    const signUser=async(e)=>{
        e.preventDefault();
        const user=await signUp(name,email,password);
        if(user){
            navigate('/login');
        };
    };

  return (
    <div className="register-page">
      <div className="register-container">
        <h2>Create your Account</h2>
        <p>
          Start building better habits today. Create an account to track your
          daily progress, build streaks, and stay consistent.
        </p>

        <div className="register-form-container">
            <form onSubmit={signUser}>
                <label>Username</label>
                <input type="text" placeholder="Enter username"
                onChange={(e)=>setName(e.target.value)} value={name}
                />

                <label>Email</label>
                <input type="email" placeholder="Enter email"
                onChange={(e)=>setEmail(e.target.value)} value={email}
                />
                
                <label>Password</label>
                <input type="password" placeholder="Enter Password"
                onChange={(e)=>setPassword(e.target.value)} value={password}
                />

                <div className="register-action">
                    <Link to='/login'>Already have an account?</Link>
                </div>

                {error && <p className="register-form-error">{error}</p>}

                <div className="register-form-btn">
                    <button type="submit" disabled={loading}>
                        <FaUser/>
                        Register
                    </button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
}
