import { Link } from "react-router-dom";
import "../Css/Hero.css";

export default function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-section-contaier">
        <section className="hero-content">
          <h2>Build Better Habits, Every Day</h2>
          <p>
            Stay consistent, track your daily habits, and build lasting routines
            with Streakly. Create positive habits, maintain your streaks, and
            watch your progress grow one day at a time.
          </p>

          <div className="hero-action">
            <Link to='/register'>Get Started</Link>
            <Link to='/about'>Learn More</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
