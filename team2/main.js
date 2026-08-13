const result = document.getElementById("input1");

function one(number) {
  result.innerHTML += number;
}

function AC() {
  result.innerHTML = "";
}
function DEL() {
  result.innerText = result.innerText.slice(0, -1);
}
function temdeg(val) {
  result.innerText += val;
}
function tentsuu() {
  result.innerHTML = eval(result.innerHTML);
}
