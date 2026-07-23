import "../Css/Feature.css";

export default function WhyChooseUs() {
  return (
    <section className="feature-section">
      <div className="feature-container">
        <div className="feature-header">
          <h2>Everything You Need to Build Better Habits</h2>
          <p>
            Discover powerful features designed to help you stay consistent,
            track your progress, and build lasting habits with confidence.
          </p>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>Create Habits</h3>
            <p>
              Add and organize daily habits that match your personal goals and
              routines.
            </p>
          </div>

          <div className="feature-card">
            <h3>Build Streaks</h3>
            <p>
              Complete habits every day and maintain your streak to stay
              motivated.
            </p>
          </div>

          <div className="feature-card">
            <h3>Track Progress</h3>
            <p>
              Monitor your completed habits and measure your consistency over
              time.
            </p>
          </div>

          <div className="feature-card">
            <h3>Cloud Sync</h3>
            <p>
              Your habits are securely stored in the cloud and available
              whenever you sign in.
            </p>
          </div>

          <div className="feature-card">
            <h3>Personal Profile</h3>
            <p>
              Manage your account information and keep your profile up to date.
            </p>
          </div>

          <div className="feature-card">
            <h3>Responsive Design</h3>
            <p>
              Enjoy a seamless experience on desktop, tablet, and mobile
              devices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
