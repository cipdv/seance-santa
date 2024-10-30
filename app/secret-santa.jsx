"use client";

import React, { useState } from "react";

const participants = ["Tyler", "Jason", "Hue", "Cip", "Bibi", "Anita"];

const assignments = {
  Tyler: "Hue",
  Jason: "Cip",
  Hue: "Bibi",
  Cip: "Tyler",
  Bibi: "Jason",
  Anita: "Anita",
};

const spookyStyles = {
  container: {
    backgroundColor: "black",
    color: "#ff6600",
    minHeight: "100vh",
    minWidth: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    boxSizing: "border-box",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    textShadow: "2px 2px 4px #ff0000",
  },
  description: {
    fontSize: "18px",
    color: "#ff9900",
  },
  content: {
    width: "100%",
    maxWidth: "400px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    backgroundColor: "#3a3a3a",
    border: "1px solid #ff6600",
    borderRadius: "5px",
    color: "#ffffff",
    fontSize: "16px",
  },
  button: {
    width: "100%",
    backgroundColor: "#ff6600",
    color: "black",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    fontSize: "18px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#ff8c00",
  },
  result: {
    textAlign: "center",
    fontSize: "48px",
    marginTop: "20px",
    color: "#ff0000",
    textShadow: "2px 2px 4px #ff6600",
    animation: "pulse 2s infinite",
  },
  footer: {
    position: "absolute",
    bottom: "20px",
    left: "0",
    right: "0",
    textAlign: "center",
  },
};

export default function SecretSanta() {
  const [userName, setUserName] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (participants.includes(userName)) {
      const assignedPerson = assignments[userName];
      setResult(`${userName}, your victim is... ${assignedPerson}!`);
    } else {
      setResult("Please enter a valid name from the list of participants.");
    }
  };

  return (
    <div style={spookyStyles.container}>
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
          body {
            margin: 0;
            padding: 0;
            overflow: hidden;
          }
        `}
      </style>
      <header style={spookyStyles.header}>
        <h1 style={spookyStyles.title}>Seance Santa</h1>
        <p style={spookyStyles.description}>
          Dare to discover your haunted gift recipient...
        </p>
      </header>
      <main style={spookyStyles.content}>
        {!result ? (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your name... if you dare"
              style={spookyStyles.input}
              aria-label="Your name"
            />
            <button
              type="submit"
              style={{
                ...spookyStyles.button,
                ...(isHovered ? spookyStyles.buttonHover : {}),
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Summon Your Victim
            </button>
          </form>
        ) : (
          <p style={spookyStyles.result}>{result}</p>
        )}
      </main>
      <footer style={spookyStyles.footer}>
        <p style={{ fontSize: "14px", color: "#ff9900" }}>
          Participants: {participants.join(", ")}
        </p>
      </footer>
    </div>
  );
}