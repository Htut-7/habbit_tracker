import { useState } from "react";
import "../Css/Profile.css";
import { FaPencil } from "react-icons/fa6";

export default function Profile() {

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [currPass,setCurrPass]=useState('');
    const [newPass,setNewPass]=useState('');

  return (
    <div className="profile-page">
      <div className="profile-page-container">
        <h2>Profile Setting</h2>
        <p>
          View and update your account details, change your password, and
          personalize your Streakly experience.
        </p>

        <div className="profile-page-form">
            <form>
                <label>Username</label>
                <input type="text" placeholder="Enter usename"
                onChange={(e)=>setName(e.target.value)} value={name}
                />

                <label>Email</label>
                <input type="email" placeholder="Enter email"
                onChange={(e)=>setEmail(e.target.value)} value={email}
                />

                <label>Current Password</label>
                <input type="password" placeholder="Enter Current Password"
                onChange={(e)=>setCurrPass(e.target.value)} value={currPass}
                />

                <label>New Password</label>
                <input type="password" placeholder="Enter New Password"
                onChange={(e)=>setNewPass(e.target.value)} value={newPass}
                />

                <div className="profile-form-btn">
                    <button>
                        <FaPencil/>
                        Update
                    </button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
}
