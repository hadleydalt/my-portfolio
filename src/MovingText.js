import React, { useState, useEffect } from "react";
import "./css/App.css"

/*const TextCycle = () => {
  const [components, setComponents] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const addComponent = () => {
      // Generate a unique ID for the new component
      const uniqueKey = `${Date.now()}-${Math.random()}`;

      setComponents((prev) => [
        ...prev,
        <MovingText key={uniqueKey} id={uniqueKey} />,
      ]);
    };

    const removeComponent = () => {
      setComponents((prev) => prev.slice(1)); // Remove the first (oldest) component
    };

    // Add the first component
    addComponent();

    // Cycle: Add a new component, then remove the oldest one after a delay
    const interval = setInterval(() => {
      addComponent();

      setTimeout(() => {
        removeComponent();
      }, 15000); // Delay before removing the oldest component
    }, 15000); // Interval between adding new components

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [counter]);

  return <div style={{display: "flex", flexDirection: "row"}}>{components}</div>;
};*/

const MovingText = () => {
    return (
        <div className="text-wrapper">
            <span className="sliding-text">
                <span className="english">
                    welcome
                </span>
                <span className="break">
                </span>
                <span className="french">
                    bienvenue
                </span>
                <span className="break">
                </span>
                <span className="chinese">
                    歡迎
                </span>
                <span className="break">
                </span>
                <span className="spanish">
                    bienvenida
                </span>
                <span className="break">
                </span>
                <span className="russian">
                    Добро пожаловать
                </span>
                <span className="break">
                </span>
                <span className="italian">
                    benvenuta
                </span>
                <span className="break">
                </span>
                <span className="vietnamese">
                    chào mừng
                </span>
                <span className="break">
                </span>
                <span className="german">
                    wilkommen
                </span>
                <span className="break">
                </span>
                <span className="japanese">
                    いらっしゃいませ
                </span>
                <span className="break">
                </span>
                <span className="dutch">
                    welkom
                </span>
                <span className="break">
                </span>
                <span className="korean">
                    환영
                </span>
                <span className="break">
                </span>
                <span className="hindi">
                    स्वागत
                </span>
            </span>
        </div>
    )
}

export default MovingText;