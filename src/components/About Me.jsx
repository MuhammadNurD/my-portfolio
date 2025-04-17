import React, { useState } from "react";
import "../../src/App.css";
import Hologram from "./Hologram";

export const About = ({ theme }) => {
    const [showStory, setShowStory] = useState(false);
    const [showFunFact, setShowFunFact] = useState(false);
    const [currentFact, setCurrentFact] = useState("");

    const funFacts = [
        "🧠 I once debugged a full app at 2AM with nothing but console.logs and determination!",
        "⚡ I’ve renamed the same variable 7 times before deciding the first name was the best.",
        "🐛 I thought I found a bug — turns out it was a semicolon living its best life.",
        "☕ My code runs on coffee, curiosity, and Stack Overflow.",
        "🕹️ I once spent an hour fixing a typo… in a file name.",
        "📱 I get more excited about dark mode than I probably should.",
        "🎯 I consider a successful day one where I wrote more code than I deleted.",
        "💥 I’ve yelled “why isn’t this working?!” only to realize I forgot to hit save.",
    ];

    const getRandomFact = () => {
        let newFact = currentFact;
        while (newFact === currentFact && funFacts.length > 1) {
            newFact = funFacts[Math.floor(Math.random() * funFacts.length)];
        }
        return newFact;
    };

    const toggleFunFact = () => {
        if (!showFunFact) {
            setCurrentFact(getRandomFact());
        } else {
            setCurrentFact(""); // Reset currentFact when hiding
        }
        setShowFunFact(!showFunFact);
    };

    const skills = [
        { name: "C#", level: 85 },
        { name: ".NET APIs", level: 80 },
        { name: "React.js", level: 75 },
        { name: "SQL", level: 70 },
        { name: "Azure DevOps", level: 65 },
        { name: "Git & GitHub", level: 90 },
    ];

    return (
        <div className="left-panel full-screen-center">
  <div className="intro-section">
    <h1 className="title">About Me</h1>
    <p className="subtitle hover-glow">
      I'm a junior full-stack developer focused on building responsive and clean applications.
    </p>
    <button
      onClick={() => setShowStory(!showStory)}
      className="story-button"
    >
      {showStory ? "Hide My Story" : "Read My Story"}
    </button>
  </div>

  {showStory && (
    <div className="story-text">
      <p className="subtitle">
        I gained my skills through redAcademy and I’m currently completing a Higher Certificate in Systems Development.
        I’ve worked on real-world apps including financial calculators and maintenance tools.
      </p>
      <p className="subtitle">
        I also enjoy weight training, building cool side projects, and preparing for my upcoming wedding!
      </p>
    </div>
  )}

            <h2 className="title">Skills</h2>
            <div className="skill-bars">
                {skills.map((skill, idx) => (
                    <div key={idx} style={{ marginBottom: "1rem" }}>
                        <strong>{skill.name}</strong>
                        <div
                            style={{
                                background: "#ccc",
                                borderRadius: "4px",
                                height: "10px",
                                width: "100%",
                                overflow: "hidden",
                            }}
                        >
                            <div
                                style={{
                                    width: `${skill.level}%`,
                                    height: "100%",
                                    background: theme === "dark" ? "#0ff" : "#007acc",
                                    transition: "width 1s ease-in-out",
                                }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>

            <button
                onClick={toggleFunFact}
                style={{
                    marginTop: "1rem",
                    padding: "0.5rem 1rem",
                    backgroundColor: "#222",
                    color: "#0ff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                {showFunFact ? "Hide Fun Fact" : "Tell Me a Fun Fact"}
            </button>

            {showFunFact && (
                <p className="subtitle" style={{ marginTop: "1rem", textAlign: "center" }}>
                    {currentFact}
                </p>
            )}
        </div>
    );
};
