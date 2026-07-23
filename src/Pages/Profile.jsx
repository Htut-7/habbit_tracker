import { useEffect, useState } from "react";
import "../Css/Profile.css";
import { FaPencil } from "react-icons/fa6";
import useProfile from "../Hooks/useProfile";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currPass, setCurrPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const navigate = useNavigate();

  const { loading, error, getProfile, updateProfile, changePassword } =
    useProfile();

  useEffect(() => {
    const profile = getProfile();

    if (profile) {
      setName(profile.name);
      setEmail(profile.email);
    }
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();
    const profileUpdated = await updateProfile(name, email);
    if (!profileUpdated) {
      return;
    }

    if (currPass.trim() && newPass.trim()) {
      await changePassword(currPass, newPass);
    }
    setCurrPass("");
    setNewPass("");
    navigate("/");
  };

  return (
    <div className="profile-page">
      <div className="profile-page-container">
        <h2>Profile Setting</h2>
        <p>
          View and update your account details, change your password, and
          personalize your Streakly experience.
        </p>

        <div className="profile-page-form">
          <form onSubmit={updateUser}>
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter usename"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />

            <label>Email</label>
            <input
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <label>Current Password</label>
            <input
              type="password"
              placeholder="Enter Current Password"
              onChange={(e) => setCurrPass(e.target.value)}
              value={currPass}
            />

            <label>New Password</label>
            <input
              type="password"
              placeholder="Enter New Password"
              onChange={(e) => setNewPass(e.target.value)}
              value={newPass}
            />

            {error && <p className="profile-error">{error}</p>}

            <div className="profile-form-btn">
              <button type="submit" disabled={loading}>
                {loading ? (
                  <span className="profile-spinner"></span>
                ) : (
                  <>
                    <FaPencil />
                    <span>Update</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
