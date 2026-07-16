import "../Css/Habbits.css";

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
                    <button type="button">
                        Add new Habbit
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
