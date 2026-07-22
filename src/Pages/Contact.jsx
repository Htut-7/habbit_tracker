import { useState } from "react";
import "../Css/Contact.css";
import useContact from "../Hooks/useContact";
import { useNavigate } from "react-router-dom";

export default function Contact() {

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [message,setMessage]=useState('');
    const navigate=useNavigate();

    const {loading,error,addMessage}=useContact();

    const sendItem=async(e)=>{
        e.preventDefault();
        await addMessage(
            name,
            email,
            message,
        );
        setName('');
        setEmail('');
        setMessage('');
        navigate('/');
    }

  return (
    <div className="contact-page">
      <div className="contact-page-container">
        <h3>Get in Touch</h3>
        <p>
          Have a question, suggestion, or feedback? We'd love to hear from you.
          Fill out the form below, and our team will get back to you as soon as
          possible.
        </p>

        <div className="contact-form-container">
            <form onSubmit={sendItem}>
                <label>Username</label>
                <input type="text" placeholder="Enter Username"
                onChange={(e)=>setName(e.target.value)} value={name}
                />

                <label>Email</label>
                <input type="email" placeholder="Enter Email"
                onChange={(e)=>setEmail(e.target.value)} value={email}
                />

                <label>Tell Us More</label>
                <textarea placeholder="Write your message here..."
                onChange={(e)=>setMessage(e.target.value)} value={message}
                /> 

                {error && <p className="contact-form-error">{error}</p>}

                <div className="contact-form-btn">
                    <button type="submit" disabled={loading}>
                        {loading ? <span className="contact-form-spinner"></span> : "Send"}
                    </button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
}
