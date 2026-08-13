const inputEl = document.getElementById("input");
let expression = "";

function updateDisplay() {
  inputEl.textContent = expression || "0";
}

function tokenize(expr) {
  const tokens = [];
  let numberStr = "";

  for (let i = 0; i < expr.length; i++) {
    const char = expr[i];

    if (char === "+" || char === "-" || char === "*" || char === "/") {
      tokens.push(numberStr);
      tokens.push(char);
      numberStr = "";
    } else {
      numberStr += char;
    }
  }
  tokens.push(numberStr);

  return tokens.map(function (t) {
    if (t === "+" || t === "-" || t === "*" || t === "/") {
      return t;
    } else {
      return parseFloat(t);
    }
  });
}

function calculate(expr) {
  let tokens = tokenize(expr);

  let i = 1;
  while (i < tokens.length) {
    if (tokens[i] === "*" || tokens[i] === "/") {
      const left = tokens[i - 1];
      const right = tokens[i + 1];

      let result;
      if (tokens[i] === "*") {
        result = left * right;
      } else {
        result = left / right;
      }

      tokens.splice(i - 1, 3, result);
    } else {
      i += 2;
    }
  }

  let result = tokens[0];
  i = 1;
  while (i < tokens.length) {
    const operator = tokens[i];
    const next = tokens[i + 1];

    if (operator === "+") {
      result = result + next;
    } else {
      result = result - next;
    }

    i += 2;
  }

  return result;
}

function call(value) {
  if (value === "ac") {
    expression = "";
  } else if (value === "nega") {
    expression = expression * -1;
  } else if (value === "clear") {
    expression = expression.slice(0, -1);
  } else if (value === "per") {
    if (expression !== "") {
      expression = String(calculate(expression) / 100);
    }
  } else if (value === "=" || value === "calc") {
    if (expression !== "") {
      try {
        expression = String(calculate(expression));
      } catch (e) {
        expression = "Error";
      }
    }
  } else if (value === "+") {
    expression = expression + "+";
  } else if (value === "-") {
    expression = expression + "-";
  } else if (value === "*") {
    expression = expression + "*";
  } else if (value === "/") {
    expression = expression + "/";
  } else {
    // number or "."
    expression = expression + value;
  }

  updateDisplay();
}

updateDisplay();
