import "../Css/CallToAction.css";
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <div className="calltoaction">
      <div className="calltoaction-container">
        <h2>Ready to Take the Next Step</h2>
        <p>
          Whether you're starting a new routine or improving an existing one,
          Streakly is here to help you stay consistent every day. Create your
          account and begin your habit-building journey today.
        </p>
        <div className="calltoaction-btn">
          <Link to="/register">Create Your Account</Link>
        </div>
      </div>
    </div>
  );
}
