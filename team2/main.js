let currentInput = "0";
let previousInput = null;
let activeOperator = null;
let waitingForNextOperand = false;

const display = document.getElementById("display");

function updateDisplay() {
  display.textContent = currentInput;
}

document.querySelectorAll(".btn-number").forEach((button) => {
  button.addEventListener("click", () => {
    const num = button.getAttribute("data-num");
    if (num !== null) {
      if (currentInput === "0" || waitingForNextOperand) {
        currentInput = num;
        waitingForNextOperand = false;
      } else if (currentInput.length < 9) {
        currentInput += num;
      }
      updateDisplay();
    }
  });
});

document.getElementById("decimal").addEventListener("click", () => {
  if (waitingForNextOperand) {
    currentInput = "0.";
    waitingForNextOperand = false;
  } else if (!currentInput.includes(".")) {
    currentInput += ".";
  }
  updateDisplay();
});

document.querySelectorAll(".btn-operator").forEach((button) => {
  button.addEventListener("click", () => {
    const op = button.getAttribute("data-op");
    if (!op) return;

    if (previousInput !== null && !waitingForNextOperand) {
      calculate();
    }

    previousInput = parseFloat(currentInput);
    activeOperator = op;
    waitingForNextOperand = true;
  });
});

function calculate() {
  if (previousInput === null || activeOperator === null) return;

  const current = parseFloat(currentInput);
  let result = 0;

  switch (activeOperator) {
    case "+":
      result = previousInput + current;
      break;
    case "-":
      result = previousInput - current;
      break;
    case "*":
      result = previousInput * current;
      break;
    case "/":
      result = current === 0 ? "Error" : previousInput / current;
      break;
  }
}
