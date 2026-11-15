
import React from "react";
import "./index.css";

function App() {
  const features = [
    {
      number: "01",
      title: "Smart Course Management",
      description:
        "Create, organize and manage your online courses from one powerful platform."
    },
    {
      number: "02",
      title: "Student Management",
      description:
        "Manage students, monitor their progress and keep everything organized."
    },
    {
      number: "03",
      title: "Learn Anywhere",
      description:
        "Give students access to learning materials across desktop and mobile devices."
    },
    {
      number: "04",
      title: "Progress Analytics",
      description:
        "Track learning performance, course completion and student engagement."
    }
  ];

  const plans = [
    {
      name: "WEB",
      price: "₹1,999",
      description: "For institutes starting their digital learning journey.",
      features: ["Web-based LMS", "Course Management", "Student Dashboard", "Learning Analytics"]
    },
    {
      name: "ALL IN ONE",
      price: "₹2,999",
      description: "For institutes looking to expand across devices.",
      features: ["Everything in Web", "Android Application", "iOS Application", "Complete Learning Access"],
      popular: true
    }
  ];

  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo">
          UREKA<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">Get Started ↗</a>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="eyebrow">
            <span className="dot"></span>
            THE FUTURE OF DIGITAL LEARNING
          </div>

          <h1>
            Learning
            <br />
            without <span>limits.</span>
          </h1>

          <p>
            Transform the way your institute teaches, manages
            and delivers education with UREKA LMS.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="primary-btn">
              Explore UREKA ↗
            </a>
            <a href="#features" className="secondary-btn">
              Discover More
            </a>
          </div>

          <div className="hero-note">
            <span>●</span> A smarter way to manage education.
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-top">
            <span>UREKA / LMS</span>
            <span>01 — 04</span>
          </div>

          <div className="visual-center">
            <div className="circle circle-one"></div>
            <div className="circle circle-two"></div>
            <div className="circle circle-three"></div>
            <span className="visual-letter">U.</span>
          </div>

          <div className="visual-bottom">
            <span>EDUCATION REDEFINED</span>
            <span>EST. 2026</span>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee">
        <div>
          LEARN BETTER ✳ TEACH SMARTER ✳ GROW FASTER ✳
          LEARN BETTER ✳ TEACH SMARTER ✳ GROW FASTER ✳
        </div>
      </div>

      {/* ABOUT */}
      <section className="about section" id="about">
        <div className="section-label">01 / ABOUT UREKA</div>

        <div className="about-content">
          <h2>
            Education deserves
            <br />
            a <span>better system.</span>
          </h2>

          <p>
            UREKA LMS is designed to simplify digital education.
            From managing courses and students to delivering
            engaging learning experiences, everything comes
            together in one platform.
          </p>
        </div>

        <div className="about-stats">
          <div>
            <h3>01</h3>
            <p>Unified Platform</p>
          </div>
          <div>
            <h3>24/7</h3>
            <p>Learning Access</p>
          </div>
          <div>
            <h3>360°</h3>
            <p>Learning Experience</p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features section" id="features">
        <div className="section-label">02 / WHAT WE OFFER</div>

        <div className="section-heading">
          <h2>Everything you need.<br /><span>One platform.</span></h2>
          <p>Powerful tools designed to make digital learning simple and effective.</p>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <div className="feature-card" key={feature.number}>
              <span className="feature-number">{feature.number}</span>
              <div className="feature-arrow">↗</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STATEMENT */}
      <section className="statement">
        <span>THE UREKA PHILOSOPHY</span>
        <h2>
          Don't just teach.
          <br />
          <span>Transform learning.</span>
        </h2>
        <a href="#contact">Build your learning ecosystem ↗</a>
      </section>

      {/* PRICING */}
      <section className="pricing section" id="pricing">
        <div className="section-label">03 / SIMPLE PRICING</div>

        <div className="section-heading">
          <h2>Choose your<br /><span>learning experience.</span></h2>
          <p>Flexible introductory plans for your institution. Prices exclude GST.</p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <div className={`price-card ${plan.popular ? "featured" : ""}`} key={plan.name}>
              {plan.popular && <div className="popular-tag">RECOMMENDED</div>}

              <span className="plan-name">{plan.name}</span>
              <h3>{plan.price}<small> / month</small></h3>
              <p>{plan.description}</p>

              <div className="plan-divider"></div>

              {plan.features.map((item) => (
                <div className="plan-feature" key={item}>
                  <span>✓</span> {item}
                </div>
              ))}

              <a href="#contact" className="plan-button">
                Get Started ↗
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact section" id="contact">
        <div className="section-label">04 / LET'S CONNECT</div>

        <h2>
          Ready to make
          <br />
          learning <span>better?</span>
        </h2>

        <p>Let's build a smarter learning experience for your institution.</p>

        <a href="mailto:hello@ureka.in" className="primary-btn">
          Contact UREKA ↗
        </a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-top">
          <a href="#home" className="logo">UREKA<span>.</span></a>
          <p>Redefining the future of digital education.</p>
          <a href="#home" className="back-top">BACK TO TOP ↑</a>
        </div>

        <div className="footer-bottom">
          <span>© 2026 UREKA LMS. All rights reserved.</span>
          <span>Designed & Developed by <strong>Sumit Pant.</strong></span>
        </div>
      </footer>
    </div>
  );
}

export default App;
