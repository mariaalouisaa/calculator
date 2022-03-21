const buttons = Array.from(document.querySelectorAll("button"));
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const timesButton = document.getElementById("times");
const divideButton = document.getElementById("divide");
const equalsButton = document.getElementById("equals");
const currentTyping = document.getElementById("current-typing");
const savedText = document.getElementById("previous-text");

let value = "";
let storedValue = "";
let operatorClicked = "";
let storedTotal = "";

function storeNum(e) {
  if (!isNaN(Number(e.target.innerHTML))) {
    item = Number(e.target.innerHTML);
    if (storedValue === "") {
      value = value + item;
      currentTyping.innerHTML = value;
    } else {
      value = value + item;
      currentTyping.innerHTML = `${storedValue} ${operatorClicked} ${value}`;
    }
  }
}

function operate(action) {
  if (storedTotal !== "") {
    operatorClicked === "+"
      ? (storedTotal = storedTotal + Number(value))
      : operatorClicked === "-"
      ? (storedTotal = storedTotal - Number(value))
      : operatorClicked === "x"
      ? (storedTotal = storedTotal * Number(value))
      : operatorClicked === "/"
      ? (storedTotal = storedTotal / Number(value))
      : console.log("what now.");
    operatorClicked = action;
    savedText.innerHTML = `${storedTotal} ${action}`;
    currentTyping.innerHTML = "";
    value = "";
  } else if (storedValue === "") {
    operatorClicked = action;
    storedValue = value;
    currentTyping.innerHTML = storedValue + " " + action;
    value = "";
  } else if (action) {
    operatorClicked === "+"
      ? (storedTotal = Number(storedValue) + Number(value))
      : operatorClicked === "-"
      ? (storedTotal = Number(storedValue) - Number(value))
      : operatorClicked === "x"
      ? (storedTotal = Number(storedValue) * Number(value))
      : (storedTotal = Number(storedValue) / Number(value));
    savedText.innerHTML = `${storedTotal} ${action}`;
    currentTyping.innerHTML = "";
    storedValue = "";
    value = "";
    operatorClicked = action;
  }
}

function sumOf() {
  if (storedTotal === "") {
    if (
      operatorClicked === "+" ||
      operatorClicked === "-" ||
      operatorClicked === "x" ||
      operatorClicked === "/"
    ) {
      operatorClicked === "+"
        ? (storedTotal = Number(storedValue) + Number(value))
        : operatorClicked === "-"
        ? (storedTotal = Number(storedValue) - Number(value))
        : operatorClicked === "x"
        ? (storedTotal = Number(storedValue) * Number(value))
        : (storedTotal = Number(storedValue) / Number(value));
    }
    currentTyping.innerHTML = storedTotal;
    value = "";
    storedValue = "";
  } else {
    operatorClicked === "+"
      ? (currentTyping.innerHTML = storedTotal + Number(value))
      : operatorClicked === "-"
      ? (currentTyping.innerHTML = storedTotal - Number(value))
      : operatorClicked === "x"
      ? (currentTyping.innerHTML = storedTotal * Number(value))
      : (currentTyping.innerHTML = storedTotal / Number(value));
  }
  savedText.innerHTML = " ";
}

document.getElementById("clear").addEventListener("click", () => {
  value = "";
  storedValue = "";
  storedTotal = "";
  operatorClicked = "";
  currentTyping.innerHTML = "";
  savedText.innerHTML = " ";
});

buttons.forEach((button) => button.addEventListener("click", storeNum));

plusButton.addEventListener("click", () => {
  operate("+");
});

minusButton.addEventListener("click", () => {
  operate("-");
});

divideButton.addEventListener("click", () => {
  operate("/");
});

timesButton.addEventListener("click", () => {
  operate("x");
});

equalsButton.addEventListener("click", sumOf);
