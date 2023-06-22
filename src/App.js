import React, { useState } from "react";

const messages = [
  "Learn React 👨‍💻",
  "Apply for Jobs 💼",
  "Invest your New Income 💸",
];

// A concise way of declaring components
// Handling events using onClick, onChange, etc
// everything starting with "use" are Hooks
// Hooks MUST BE at function top level, not inside if-else, loop, inner function, etc
// DO NOT SET STATE VARIABLES MANUALLY, doesn't work (Component is a function)
// Updating state based on current state
export default function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // Event Handler functions
  function previousButtonHandler() {
    // setCurrentStep(currentStep - 1); BAD PRACTICE
    setCurrentStep((prevStep) => {
      if (prevStep !== 1) return prevStep - 1;
      return 1;
    });
  }

  function nextButtonHandler() {
    setCurrentStep((prevStep) => {
      if (prevStep !== 3) return prevStep + 1;
      return 3;
    });
  }

  return (
    <React.Fragment>
      <button
        className="close"
        onClick={() => {
          setIsOpen((previousState) => !previousState);
        }}
      >
        {isOpen ? <span>&times;</span> : <span>&darr;</span>}
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={currentStep >= 1 ? "active" : ""}>1</div>
            <div className={currentStep >= 2 ? "active" : ""}>2</div>
            <div className={currentStep >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {currentStep}: {messages[currentStep - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={previousButtonHandler}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={nextButtonHandler}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
