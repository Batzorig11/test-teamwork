const display = document.getElementById("display");
function isOperator(char) {
  return ["+", "-", "*", "/", "."].includes(char);
}
function appendValue(input) {
  if (display.innerHTML === "Error" || display.innerHTML === "NaN") {
    display.innerHTML = "";
  }
  const lastChar = display.innerHTML.slice(-1);
  if (isOperator(lastChar) && isOperator(input)) {
    display.innerHTML = display.innerHTML.slice(0, -1) + input;
    return;
  }
  display.innerHTML += input;
}
function positive() {
  if (!display.innerHTML || display.innerHTML === "Error") return;
  try {
    const currentValue = eval(display.innerHTML);
    display.innerHTML = currentValue * -1;
  } catch (error) {
    display.innerHTML = "Error";
  }
}
function clearDisplay() {
  display.innerHTML = "";
}
function calculate() {
  if (!display.innerHTML) return;
  try {
    const result = eval(display.innerHTML);
    display.innerHTML = Number.isFinite(result) ? result : "Error";
  } catch (error) {
    display.innerHTML = "Error";
  }
}
