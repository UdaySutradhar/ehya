// App.js

import React, { useState } from "react";
import "./App.css";

const googleAnalyticsScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-SNZ7G7X9F0');
`;

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setFormErrors((prev) => ({ ...prev, [e.target.name]: null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setSubmitted(true);
    }
  };

  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
  };

  return (
    <>
      {/* Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-SNZ7G7X9F0"></script>
      <script dangerouslySetInnerHTML={{ __html: googleAnalyticsScript }} />

      <header>
        <div className="logo">ehya•</div>
        <button
          onClick={toggleMenu}
          className="menu-button"
          aria-label={menuActive ? "Close menu" : "Open menu"}
          aria-expanded={menuActive}
        >
          {menuActive ? "✕" : "☰"}
        </button>
        <nav className={menuActive ? "active" : ""}>
          <a href="#home" onClick={() => setMenuActive(false)}>Home</a>
          <a href="#features" onClick={() => setMenuActive(false)}>Landings</a>
          <a href="#testimonial" onClick={() => setMenuActive(false)}>Pages</a>
          <a href="#docs" onClick={() => setMenuActive(false)}>Docs</a>
          <a href="#contact" onClick={() => setMenuActive(false)}>Help</a>
        </nav>
        <button className="login-btn">Login</button>
      </header>

      <main>
        <section id="home" className="hero">
          <h1>We help you grow your business faster</h1>
          <p>Ehya is the Instagram analytics platform focused on the goals, track engagement, and grow your business.</p>
          <button className="cta-button">Get a free demo</button>
        </section>

        <section id="features" className="info-section">
          {[
            {
              title: "Hashtag Growth",
              desc: "Follow a hashtag growth total posts, videos and images.",
              icon: "📈",
            },
            {
              title: "Influencers by Hashtag",
              desc: "Identify the most influential people posting with your hashtag.",
              icon: "👥",
            },
            {
              title: "Most Influential Post",
              desc: "See the most influential posts on hashtag you are following on.",
              icon: "✍️",
            },
            {
              title: "Hashtag Location",
              desc: "Visualize where people are posting using your hashtag made.",
              icon: "📍",
            },
          ].map(({ title, desc, icon }) => (
            <div key={title} className="info-card">
              <div className="info-icon" aria-hidden="true">{icon}</div>
              <h3 className="info-title">{title}</h3>
              <p className="info-desc">{desc}</p>
            </div>
          ))}
        </section>

        <section id="testimonial" className="testimonial-section">
          <h2>Powering the growth of 100+ business & retailers in Indonesia.</h2>
          <blockquote className="testimonial-quote">
            "With Ehya, we're able to easily track our performance in full detail. It's become an essential tool for us to grow and engage with our audience."
          </blockquote>
          <div className="author-name">Jaquon Hart</div>
          <div className="author-title">Digital Marketing Executive, Hypebeast</div>
          <div className="stars" aria-label="5 star rating">★★★★★</div>
        </section>

        <section id="contact" className="contact-section">
          <h2>Contact Us</h2>
          {submitted ? (
            <div style={{ color: "#3a7afe", textAlign: "center" }}>
              Thank you for your message! We'll get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <label htmlFor="name">
                Name:
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={!!formErrors.name}
                  aria-describedby="name-error"
                />
              </label>
              {formErrors.name && (
                <span id="name-error" className="error">
                  {formErrors.name}
                </span>
              )}
              <label htmlFor="email">
                Email:
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={!!formErrors.email}
                  aria-describedby="email-error"
                />
              </label>
              {formErrors.email && (
                <span id="email-error" className="error">
                  {formErrors.email}
                </span>
              )}
              <label htmlFor="message">
                Message:
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={!!formErrors.message}
                  aria-describedby="message-error"
                />
              </label>
              {formErrors.message && (
                <span id="message-error" className="error">
                  {formErrors.message}
                </span>
              )}
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          )}
        </section>
      </main>

      <footer>
        <div className="footer-left">
          <h2>ehya•</h2>
          <p>Build a modern and creative website with crealand</p>
          <div>
            {[
              { label: "Google", symbol: "G" },
              { label: "Twitter", symbol: "T" },
              { label: "Instagram", symbol: "I" },
              { label: "LinkedIn", symbol: "L" },
            ].map(({ label, symbol }) => (
              <a key={label} href="#" aria-label={label} className="social-icon">
                {symbol}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-columns">
          <div className="footer-column">
            <h3>Product</h3>
            {["Landingpage", "Features", "Documentation", "Referral Program", "Pricing"].map((text) => (
              <a key={text} href="#" className="footer-link">
                {text}
              </a>
            ))}
          </div>
          <div className="footer-column">
            <h3>Services</h3>
            {["Documentation", "Design", "Themes", "Illustrations", "UI Kit"].map((text) => (
              <a key={text} href="#" className="footer-link">
                {text}
              </a>
            ))}
          </div>
          <div className="footer-column">
            <h3>Company</h3>
            {["About", "Terms", "Privacy Policy", "Careers"].map((text) => (
              <a key={text} href="#" className="footer-link">
                {text}
              </a>
            ))}
          </div>
          <div className="footer-column">
            <h3>More</h3>
            {["Documentation", "License", "Changelog"].map((text) => (
              <a key={text} href="#" className="footer-link">
                {text}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">Copyright © 2021. Crafted with love.</div>
      </footer>
    </>
  );
};

export default App;
