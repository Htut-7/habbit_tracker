import { Link, NavLink, useNavigate } from "react-router-dom";
import "../Css/Nav.css";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

export default function Nav() {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const logUser = async (e) => {
    e.preventDefault();
    await logOut();
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="nav-container">
        <h2 className="logo">Streakly</h2>

        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/habbits">Habits</NavLink>
          <NavLink to="/progress">Progress</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>

        <div className="nav-action">
          {!user && (
            <>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </>
          )}
          {!!user && (
            <>
              <Link to="/profile">
                <FaUser />
              </Link>
              
              <button type="button" onClick={logUser}>
                <FaSignOutAlt />
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
