import "../Css/About.css";

export default function About() {
  return (
    <div className="about-page">
      <div className="about-page-contaianer">
        <h2>About Streakly</h2>
        <p>
          Helping people build better habbits through consistency, motivation,
          and daily progress.
        </p>

        <section className="about-us-content">
          <div className="about-us-content-container">
            <div className="about-story">
              <h3>Our Story</h3>
              <p>
                Streakly was created to make habit tracking simple, motivating,
                and effective. We believe that meaningful change doesn't happen
                overnight—it comes from taking small, consistent steps every
                day. Whether you're building healthy routines, learning new
                skills, or improving productivity, Streakly is designed to help
                you stay focused and committed to your goals.
              </p>
            </div>

            <div className="about-story">
              <h3>Our Mission</h3>
              <p>
                Our mission is to empower people to create lasting positive
                habits by providing an easy-to-use platform for tracking daily
                progress, maintaining streaks, and celebrating consistency.
              </p>
            </div>
          </div>

          <div className="offer-card-container">
            <h2>What We Offer</h2>

            <div className="offer-grid">
              <div className="offer">
                <h3>Daily Habit Tracking</h3>
                <p>
                  Create and manage your daily habits with an intuitive
                  interface.
                </p>
              </div>

              <div className="offer">
                <h3>Streak Tracking</h3>
                <p>
                  Stay motivated by building and maintaining consecutive-day
                  streaks.
                </p>
              </div>

              <div className="offer">
                <h3>Progress Monitoring</h3>
                <p>
                  Track your completed habits and measure your consistency over
                  time.
                </p>
              </div>

              <div className="offer">
                <h3>Secure Cloud Storage</h3>
                <p>
                  Your data is securely stored and synchronized using Firebase.
                </p>
              </div>
            </div>
          </div>

          <div className="Why-choose-us">
            <div className="why-choose-us-container">
              <h3>Why Choose Streakly?</h3>
              <p>
                Unlike traditional to-do lists, Streakly focuses on building
                long-term habits rather than completing one-time tasks. By
                tracking daily progress and rewarding consistency, we help users
                stay motivated and develop routines that lead to lasting
                personal growth.
              </p>
            </div>
          </div>

          <div className="value-card">
            <div className="value-card-container">
              <h3>Our Core Values</h3>
              <div className="core-values">
                <h3>Growth</h3>
                <p>
                  We believe small daily improvements lead to significant
                  long-term success.
                </p>
              </div>

              <div className="core-values">
                <h3>Consistency</h3>
                <p>
                  Success come from showing up everyday, even when progress
                  feels small.
                </p>
              </div>

              <div className="core-values">
                <h3>Simplicity</h3>
                <p>
                  A clean and intuitive experience makes habit tracking
                  enjoyable.
                </p>
              </div>

              <div className="core-values">
                <h3>Motivation</h3>
                <p>
                  Every completed habit is another step toward achieving your
                  goals.
                </p>
              </div>
            </div>
          </div>

          <div className="quote-section">
            <div className="quote-section-container">
              <h3>Start Building Habits Today</h3>
              <p>
                Join Streakly and take control of your daily routines. Every
                completed habit, every streak, and every small achievement
                brings you closer to becoming the best version of yourself.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
