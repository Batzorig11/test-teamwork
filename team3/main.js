const display = document.getElementById("display");
function appendValue(input) {
  display.innerHTML += input;
  console.log("button clicked");
}
function toggleSign() {
  display.innerHTML = Number(display.innerHTML) * -1;
}
function clearDisplay() {
  display.innerHTML = "";
}
function calculate() {
  try {
    display.innerHTML = eval(display.innerHTML);
  } catch (error) {
    display.innerHTML = "Error";
  }
}
