let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");

const clearButton = document.getElementById("clear");

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

function storeNum(item) {
  if (storedValue === "") {
    value = value + item;
    currentTyping.innerHTML = value;
  } else {
    value = value + item;
    currentTyping.innerHTML = storedValue + " " + operatorClicked + " " + value;
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
    savedText.innerHTML = storedTotal + " " + action;
    currentTyping.innerHTML = "";
    value = "";
  } else if (storedValue === "") {
    operatorClicked = action;
    storedValue = value;
    currentTyping.innerHTML = storedValue + " " + action;
    value = "";
  } else {
    if (action === "+" || action === "-" || action === "/" || action === "x") {
      operatorClicked === "+"
        ? (storedTotal = Number(storedValue) + Number(value))
        : operatorClicked === "-"
        ? (storedTotal = Number(storedValue) - Number(value))
        : operatorClicked === "x"
        ? (storedTotal = Number(storedValue) * Number(value))
        : (storedTotal = Number(storedValue) / Number(value));
    }
    savedText.innerHTML = storedTotal + " " + action;
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

function clear() {
  value = "";
  storedValue = "";
  storedTotal = "";
  operatorClicked = "";
  currentTyping.innerHTML = "";
  savedText.innerHTML = " ";
}

one.addEventListener("click", () => {
  storeNum(1);
});
two.addEventListener("click", () => {
  storeNum(2);
});
three.addEventListener("click", () => {
  storeNum(3);
});

four.addEventListener("click", () => {
  storeNum(4);
});

five.addEventListener("click", () => {
  storeNum(5);
});

six.addEventListener("click", () => {
  storeNum(6);
});
seven.addEventListener("click", () => {
  storeNum(7);
});

eight.addEventListener("click", () => {
  storeNum(8);
});

nine.addEventListener("click", () => {
  storeNum(9);
});

zero.addEventListener("click", () => {
  storeNum(0);
});

clearButton.addEventListener("click", clear);

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
