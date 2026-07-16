import { Link, useNavigate } from "react-router-dom";
import "../Css/Login.css";
import { FaSignInAlt } from "react-icons/fa";
import { useState } from "react";
import useAuth from "../Hooks/useAuth";

export default function Login() {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigate=useNavigate();

  let {loading,error,signIn}=useAuth();

  const signUserIn=async(e)=>{
    e.preventDefault();
    const user=await signIn(email,password);
    if(user){
      navigate('/');
    }
  };

  return (
    <div className="login-page">
      <div className="login-page-container">
        <h2>Welcome Back</h2>
        <p>
          Sign in to continue tracking your habbits, maintain your streaks, and
          achieve your goals.
        </p>

        <div className="login-form-container">
          <form onSubmit={signUserIn}>
              <label>Email</label>
              <input type="email" placeholder="Enter email"
              onChange={(e)=>setEmail(e.target.value)} value={email}
              />

              <label>Password</label>
              <input type="password" placeholder="Enter password"
              onChange={(e)=>setPassword(e.target.value)} value={password}
              />

              <div className="login-action">
                <Link to='/register'>Don't have an account?</Link>

                <div className="forget">
                  <Link>Forget Password?</Link>
                </div>
              </div>

              {error && <p className="login-form-error">{error}</p>}

              <div className="login-form-btn">
                <button type="submit" disabled={loading}>
                  <FaSignInAlt/>
                  Login
                </button>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
}
