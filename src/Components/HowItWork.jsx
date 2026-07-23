import "../Css/HowItWork.css";

export default function HowItWorks() {
  return (
    <section className="how-section">
      <div className="how-container">
        <div className="how-header">
          <h2>How Streakly Works</h2>
          <p>
            Building better habits is simple. Follow these four easy steps to
            stay consistent, build your streaks, and achieve your goals.
          </p>
        </div>

        <div className="how-grid">
          <div className="how-card">
            <div className="how-number">01</div>
            <h3>Create Your Habit</h3>
            <p>
              Add habits you want to build, whether it's reading, exercising,
              studying, or any daily routine.
            </p>
          </div>

          <div className="how-card">
            <div className="how-number">02</div>
            <h3>Complete Daily</h3>
            <p>
              Mark your habits as completed every day to stay consistent and
              keep your momentum going.
            </p>
          </div>

          <div className="how-card">
            <div className="how-number">03</div>
            <h3>Build Your Streak</h3>
            <p>
              Watch your current streak grow as you complete your habits
              without missing a day.
            </p>
          </div>

          <div className="how-card">
            <div className="how-number">04</div>
            <h3>Track Your Progress</h3>
            <p>
              Monitor your achievements and celebrate every milestone on your
              journey toward lasting habits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}