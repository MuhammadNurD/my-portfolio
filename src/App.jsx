import React, { useState } from "react";
import { send } from "emailjs-com";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css";

import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { Testimonials } from "./components/Testimonials";
import { About } from "./components/About Me";

// 🔁 Component to handle animated route transitions
const AnimatedRoutes = ({
  theme,
  formData,
  setFormData,
  handleSendEmail,
  reviews,
  reviewInput,
  setReviewInput,
  handleReviewSubmit
}) => {
  const location = useLocation();

  return (
    <TransitionGroup className="transition-group">
      <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
        <Routes location={location}>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/about" element={<About theme={theme} />} />
          <Route
            path="/contact"
            element={
              <Contact
                onSendEmail={handleSendEmail}
                formData={formData}
                setFormData={setFormData}
              />
            }
          />
          <Route
            path="/testimonials"
            element={
              <Testimonials
                reviews={reviews}
                reviewInput={reviewInput}
                setReviewInput={setReviewInput}
                handleReviewSubmit={handleReviewSubmit}
              />
            }
          />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

function App() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [reviews, setReviews] = useState([]);
  const [reviewInput, setReviewInput] = useState("");
  const [theme, setTheme] = useState("light");

  const handleSendEmail = (e) => {
    e.preventDefault();
    send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_PUBLIC_KEY")
      .then(() => alert("Message sent successfully!"))
      .catch(() => alert("Failed to send message."));
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (reviewInput.trim() !== "") {
      setReviews([...reviews, reviewInput]);
      setReviewInput("");
    }
  };

  return (
    <Router>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="theme-toggle"
      >
        {theme === "light" ? "LIGHT" : "DARK"}
      </button>

      <div className={`app-container ${theme}`}>
        <div className="content-wrapper">
          <AnimatedRoutes
            theme={theme}
            formData={formData}
            setFormData={setFormData}
            handleSendEmail={handleSendEmail}
            reviews={reviews}
            reviewInput={reviewInput}
            setReviewInput={setReviewInput}
            handleReviewSubmit={handleReviewSubmit}
          />

          <div className="right-panel description">
            <p>
              Full-stack software developer passionate about solving problems and
              building beautiful, functional user experiences. Let's create
              something great together.
            </p>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
