import "../Css/Habbits.css";
import { Link } from "react-router-dom";

export default function Habbits() {
  return (
    <div className="habbits">
        <div className="habbits-container">
            <h2>Daily Habbits</h2>
            <p>
                My Daily Habbits
            </p>

            <div className="habbits-action-container">
                <div className="habbits-action">
                    <Link to='/habbits/addHabbits'>
                        Add new Habbit
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
