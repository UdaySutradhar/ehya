import React, { useState } from "react";

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
      // Normally an API call goes here
    }
  };

  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
  };

  return (
    <>
      {/* Google Analytics Script */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-SNZ7G7X9F0"></script>
      <script dangerouslySetInnerHTML={{ __html: googleAnalyticsScript }} />

      <header style={styles.header}>
        <div style={styles.logo}>ehya•</div>
        <button
          onClick={toggleMenu}
          style={styles.menuButton}
          aria-label={menuActive ? "Close menu" : "Open menu"}
          aria-expanded={menuActive}
        >
          {menuActive ? "✕" : "☰"}
        </button>
        <nav style={{ ...styles.nav, ...(menuActive ? styles.navActive : {}) }}>
          {["Home", "Landings", "Pages", "Docs", "Help"].map((text) => (
            <a key={text} href="#" style={styles.navLink} onClick={() => setMenuActive(false)}>
              {text}
            </a>
          ))}
        </nav>
        <button style={styles.loginBtn}>Login</button>
      </header>

      <main>
        <section style={styles.hero}>
          <h1 style={styles.heroTitle}>We help you grow your business faster</h1>
          <p style={styles.heroText}>
            Ehya is the Instagram analytics platform focused on the goals, track engagement, and grow your business.
          </p>
          <button style={styles.ctaButton}>Get a free demo</button>
        </section>

        <section style={styles.infoSection}>
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
            <div key={title} style={styles.infoCard}>
              <div style={styles.infoIcon}>{icon}</div>
              <h3 style={styles.infoTitle}>{title}</h3>
              <p style={styles.infoDesc}>{desc}</p>
            </div>
          ))}
        </section>

        <section style={styles.testimonialSection}>
          <h2 style={styles.testimonialTitle}>Powering the growth of 100+ business & retailers in Indonesia.</h2>
          <blockquote style={styles.testimonialQuote}>
            "With Ehya, we're able to easily track our performance in full detail. It's become an essential tool for us to grow and engage with our audience."
          </blockquote>
          <div style={styles.authorName}>Jaquon Hart</div>
          <div style={styles.authorTitle}>Digital Marketing Executive, Hypebeast</div>
          <div style={styles.stars} aria-label="5 star rating">★★★★★</div>
        </section>

        <section style={styles.contactSection}>
          <h2 style={{ textAlign: "center", marginBottom: 24 }}>Contact Us</h2>
          {submitted ? (
            <div style={{ color: "#3a7afe", textAlign: "center" }}>
              Thank you for your message! We'll get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={styles.form} noValidate>
              <label style={styles.label}>
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={styles.input}
                  aria-invalid={!!formErrors.name}
                  aria-describedby="name-error"
                />
                {formErrors.name && (
                  <span id="name-error" style={styles.error}>
                    {formErrors.name}
                  </span>
                )}
              </label>

              <label style={styles.label}>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={styles.input}
                  aria-invalid={!!formErrors.email}
                  aria-describedby="email-error"
                />
                {formErrors.email && (
                  <span id="email-error" style={styles.error}>
                    {formErrors.email}
                  </span>
                )}
              </label>

              <label style={styles.label}>
                Message:
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  style={styles.textarea}
                  aria-invalid={!!formErrors.message}
                  aria-describedby="message-error"
                />
                {formErrors.message && (
                  <span id="message-error" style={styles.error}>
                    {formErrors.message}
                  </span>
                )}
              </label>

              <button type="submit" style={styles.submitBtn}>
                Send Message
              </button>
            </form>
          )}
        </section>
      </main>

      <footer style={styles.footer}>
        <div style={styles.footerLeft}>
          <h2>ehya•</h2>
          <p>Build a modern and creative website with crealand</p>
          <div>
            {[
              { label: "Google", symbol: "G" },
              { label: "Twitter", symbol: "T" },
              { label: "Instagram", symbol: "I" },
              { label: "LinkedIn", symbol: "L" },
            ].map(({ label, symbol }) => (
              <a key={label} href="#" aria-label={label} style={styles.socialIcon}>
                {symbol}
              </a>
            ))}
          </div>
        </div>
        <div style={styles.footerColumns}>
          <div style={styles.footerColumn}>
            <h3>Product</h3>
            {["Landingpage", "Features", "Documentation", "Referral Program", "Pricing"].map((text) => (
              <a key={text} href="#" style={styles.footerLink}>
                {text}
              </a>
            ))}
          </div>
          <div style={styles.footerColumn}>
            <h3>Services</h3>
            {["Documentation", "Design", "Themes", "Illustrations", "UI Kit"].map((text) => (
              <a key={text} href="#" style={styles.footerLink}>
                {text}
              </a>
            ))}
          </div>
          <div style={styles.footerColumn}>
            <h3>Company</h3>
            {["About", "Terms", "Privacy Policy", "Careers"].map((text) => (
              <a key={text} href="#" style={styles.footerLink}>
                {text}
              </a>
            ))}
          </div>
          <div style={styles.footerColumn}>
            <h3>More</h3>
            {["Documentation", "License", "Changelog"].map((text) => (
              <a key={text} href="#" style={styles.footerLink}>
                {text}
              </a>
            ))}
          </div>
        </div>
        <div style={styles.footerBottom}>Copyright © 2021. Crafted with love.</div>
      </footer>
    </>
  );
};

const styles = {
  header: {
    display: "flex",
    backgroundColor: "#0d2e5f",
    color: "white",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "18px 30px",
    fontWeight: "600",
    fontSize: 18,
    position: "relative",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 22,
  },
  menuButton: {
    display: "none",
    background: "transparent",
    border: "none",
    fontSize: 30,
    color: "white",
    cursor: "pointer",
    userSelect: "none",
    marginRight: 12,
  },
  nav: {
    flex: "1 1 auto",
    display: "flex",
    justifyContent: "center",
    gap: 24,
    transition: "all 0.3s ease",
  },
  navActive: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: 60,
    left: 0,
    right: 0,
    backgroundColor: "#0d2e5f",
    padding: 20,
    gap: 20,
    zIndex: 10,
  },
  navLink: {
    color: "white",
    fontWeight: 500,
    textDecoration: "none",
    padding: "8px 12px",
    borderRadius: 6,
  },
  loginBtn: {
    background:
      "linear-gradient(135deg, #3466ff, #144a89)",
    border: "none",
    borderRadius: 6,
    color: "white",
    padding: "10px 18px",
    cursor: "pointer",
    fontWeight: "700",
    fontSize: 16,
    whiteSpace: "nowrap",
    zIndex: 11,
  },
  hero: {
    background: "linear-gradient(135deg, #2196f3, #53a8f9)",
    color: "white",
    padding: "80px 20px 130px",
    textAlign: "left",
  },
  heroTitle: {
    fontSize: 34,
    lineHeight: 1.1,
    marginBottom: 20,
    maxWidth: 600,
  },
  heroText: {
    fontSize: 18,
    marginBottom: 40,
    maxWidth: 520,
  },
  ctaButton: {
    backgroundColor: "white",
    color: "#0d2e5f",
    border: "none",
    borderRadius: 8,
    padding: "14px 30px",
    fontWeight: "bold",
    fontSize: 16,
    cursor: "pointer",
  },
  infoSection: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 30,
    maxWidth: 1140,
    margin: "60px auto",
    padding: "0 20px",
  },
  infoCard: {
    backgroundColor: "#f8faff",
    borderRadius: 12,
    boxShadow: "0 4px 10px rgba(13, 46, 95, 0.1)",
    padding: 24,
    textAlign: "center",
  },
  infoIcon: {
    fontSize: 30,
    marginBottom: 15,
  },
  infoTitle: {
    fontSize: 18,
    marginBottom: 6,
    color: "#0d2e5f",
  },
  infoDesc: {
    fontSize: 14,
    color: "#8395a7",
  },
  testimonialSection: {
    maxWidth: 700,
    backgroundColor: "#e8f0fe",
    margin: "80px auto",
    padding: 48,
    borderRadius: 16,
    boxShadow: "0 4px 14px rgba(13, 46, 95, 0.1)",
    textAlign: "center",
  },
  testimonialTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#0d2e5f",
  },
  testimonialQuote: {
    fontStyle: "italic",
    fontSize: 18,
    color: "#647e9b",
    marginBottom: 30,
    position: "relative",
    paddingLeft: 40,
    lineHeight: 1.5,
    textAlign: "left",
  },
  authorName: {
    fontWeight: 700,
    color: "#102e61",
    fontSize: 16,
  },
  authorTitle: {
    fontWeight: 400,
    fontSize: 14,
    color: "#647e9b",
    marginBottom: 10,
  },
  stars: {
    fontSize: 20,
    color: "#e5b840",
  },
  contactSection: {
    maxWidth: 480,
    margin: "40px auto",
    padding: "20px",
    borderRadius: 8,
    boxShadow: "0 0 15px rgba(0,0,0,0.08)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  label: {
    display: "flex",
    flexDirection: "column",
    fontWeight: 600,
    fontSize: 14,
    color: "#0d2e5f",
  },
  input: {
    marginTop: 8,
    padding: 12,
    fontSize: 14,
    borderRadius: 6,
    border: "1px solid #ccc",
    outline: "none",
    fontFamily: "inherit",
  },
  textarea: {
    marginTop: 8,
    padding: 12,
    fontSize: 14,
    borderRadius: 6,
    border: "1px solid #ccc",
    outline: "none",
    fontFamily: "inherit",
    resize: "vertical",
    minHeight: 80,
  },
  error: {
    color: "#d94141",
    fontSize: 12,
    marginTop: 6,
  },
  submitBtn: {
    backgroundColor: "#0d2e5f",
    color: "white",
    border: "none",
    borderRadius: 6,
    padding: "14px 20px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  footer: {
    backgroundColor: "#0d2e5f",
    color: "white",
    padding: "60px 30px 20px",
    fontSize: 14,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  footerLeft: {
    marginBottom: 30,
    textAlign: "center",
  },
  socialIcon: {
    margin: "0 8px",
    textDecoration: "none",
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    padding: "8px 12px",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 50,
    display: "inline-block",
  },
  footerColumns: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 50,
    marginBottom: 30,
  },
  footerColumn: {
    minWidth: 140,
  },
  footerLink: {
    display: "block",
    marginBottom: 10,
    color: "white",
    textDecoration: "none",
  },
  footerBottom: {
    fontSize: 12,
    opacity: 0.7,
  },

/* Responsive styles */
  '@media (max-width: 768px)': {
    menuButton: {
      display: "block",
    },
    nav: {
      display: "none",
      flexDirection: "column",
      position: "absolute",
      top: 60,
      left: 0,
      right: 0,
      backgroundColor: "#0d2e5f",
      padding: 20,
      gap: 20,
      zIndex: 10,
    },
    navActive: {
      display: "flex",
    },
    loginBtn: {
      order: 3,
    }
  }
};

export default App;
