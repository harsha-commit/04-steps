import React, { useState } from "react";

const messages = [
  "Learn React 👨‍💻",
  "Apply for Jobs 💼",
  "Invest your New Income 💸",
  "Live Happily 😄",
];

// A concise way of declaring components => export default function App() {}
// Handling events we use onClick, onChange, etc
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
      if (prevStep !== 4) return prevStep + 1;
      return 4;
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
            {messages.map((message, index) => {
              return (
                <div className={currentStep >= index + 1 ? "active" : ""}>
                  {index + 1}
                </div>
              );
            })}
            {/* <div className={currentStep >= 1 ? "active" : ""}>1</div>
            <div className={currentStep >= 2 ? "active" : ""}>2</div>
            <div className={currentStep >= 3 ? "active" : ""}>3</div>
            <div className={currentStep >= 4 ? "active" : ""}>4</div> */}
          </div>

          <p className="message">
            Step {currentStep}: {messages[currentStep - 1]}
          </p>

          <div className="buttons">
            <button
              style={{
                backgroundColor: `${currentStep > 1 ? "#7950f2" : "gray"}`,
                color: "#fff",
              }}
              onClick={previousButtonHandler}
              disabled={currentStep === 1}
            >
              Previous
            </button>
            <button
              style={{
                backgroundColor: `${
                  currentStep < messages.length ? "#7950f2" : "gray"
                }`,
                color: "#fff",
              }}
              onClick={nextButtonHandler}
              disabled={currentStep === messages.length}
            >
              Next
            </button>
          </div>
        </div>
      )}

      <div className="steps">
        <h3 style={{ marginTop: "15px" }}>⭐Links to Refer:</h3>
        <ul>
          <li>
            <a href="https://github.com/harsha-commit/04-steps/blob/main/src/App.js">
              Improved Code + Notes 📒
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/harsha-vardhan96/"
              style={{
                direction: "rtl",
              }}
            >
              Connect with Me 🔗
            </a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}
