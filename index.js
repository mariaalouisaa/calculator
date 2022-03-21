const currentTyping = document.getElementById("current-typing");
const savedText = document.getElementById("previous-text");

let value = "";
let storedValue = "";
let operatorClicked = "";
let storedTotal = "";

const storeNum = (e) => {
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
};

const operate = (e) => {
  action = e.target.innerHTML;
  if (storedTotal !== "") {
    operatorClicked === "+"
      ? (storedTotal = storedTotal + Number(value))
      : operatorClicked === "-"
      ? (storedTotal = storedTotal - Number(value))
      : operatorClicked === "X"
      ? (storedTotal = storedTotal * Number(value))
      : operatorClicked === "%"
      ? (storedTotal = storedTotal / Number(value))
      : null;
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
      : operatorClicked === "X"
      ? (storedTotal = Number(storedValue) * Number(value))
      : operatorClicked === "%"
      ? (storedTotal = Number(storedValue) / Number(value))
      : null;

    savedText.innerHTML = `${storedTotal} ${action}`;
    currentTyping.innerHTML = "";
    storedValue = "";
    value = "";
    operatorClicked = action;
  }
};

const sumOf = () => {
  if (storedTotal === "") {
    if (
      operatorClicked === "+" ||
      operatorClicked === "-" ||
      operatorClicked === "X" ||
      operatorClicked === "%"
    ) {
      operatorClicked === "+"
        ? (storedTotal = Number(storedValue) + Number(value))
        : operatorClicked === "-"
        ? (storedTotal = Number(storedValue) - Number(value))
        : operatorClicked === "X"
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
      : operatorClicked === "X"
      ? (currentTyping.innerHTML = storedTotal * Number(value))
      : (currentTyping.innerHTML = storedTotal / Number(value));
  }
  savedText.innerHTML = " ";
};

document.getElementById("clear").addEventListener("click", () => {
  value = "";
  storedValue = "";
  storedTotal = "";
  operatorClicked = "";
  currentTyping.innerHTML = "";
  savedText.innerHTML = " ";
});

Array.from(document.querySelectorAll("button")).forEach((button) =>
  button.addEventListener("click", storeNum)
);

Array.from(document.querySelectorAll(".action")).forEach((a) =>
  a.addEventListener("click", operate)
);

document.getElementById("equals").addEventListener("click", sumOf);
