let displayElement = document.querySelector(".display");
let operandButtonElement = document.getElementsByClassName("operand");
let operatorButtonElement = document.getElementsByClassName("operator");
let resetButtonElement = document.getElementById("reset");
let outcome = 0;
displayElement.innerHTML = 0;
let first, secVal;
// Display operands on the screen
for (let i = 0; i < operandButtonElement.length; i++) {
  let operandButton = operandButtonElement[i];
  operandButton.addEventListener("click", (event) => {
    var operandButtonClicked = event.target;
    outcome += operandButtonClicked.innerHTML;
    displayElement.innerHTML = outcome * -1 * -1;
    resetButtonElement.innerHTML = "C";
    firstVal = displayElement.innerHTML;
  });
}
// triger for operations
for (let i = 0; i < operatorButtonElement.length; i++) {
  let operatorButton = operatorButtonElement[i];
  operatorButton.addEventListener("click", (event) => {
    let operatorButtonClicked = event.target;
    let operator = operatorButtonClicked.innerHTML;
    console.log(operator);
    if (operator == "+") {
      displayElement.innerHTML = 0;
      outcome += operandButtonClicked.innerHTML;
      displayElement.innerHTML = outcome * -1 * -1;
      add();
    } else if (operator == "&#x2212;") {
      sub(firstVal, secVal);
    } else if (operator == "=") {
      result();
    }
  });
}
function reset() {
  displayElement.innerHTML = 0;
  outcome = 0;
}
function neg() {
  displayElement.innerHTML *= -1;
}
function add() {
  let answer = firstVal + secVal;
  console.log(firstVal, secVal);
}

function sub(a, b) {
  alert("works just fine");
}
function result() {
  alert("your results in a bit");
}
function multp(a, b) {}
function divide(a, b) {}
