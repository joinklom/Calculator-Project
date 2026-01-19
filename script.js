
// we automate the creation of the ten buttons for the numbers, and stick them in the numbersContainer
let nmbsContainer = document.querySelector("#numbersContainer");
for (let n=0;n<10;n++){
    let btnNumbers = document.createElement("button");
    btnNumbers.className = "btnNumbers";
    btnNumbers.textContent = n;
    nmbsContainer.append(btnNumbers);
    btnNumbers.addEventListener("click", getFNumber)
}
let addBtn = document.querySelector(`#add`);
addBtn.addEventListener("click", getOperator);
let subtractBtn = document.querySelector(`#subtract`);
subtractBtn.addEventListener("click", getOperator);
let multiplyBtn = document.querySelector(`#multiply`);
multiplyBtn.addEventListener("click", getOperator);
let divideBtn = document.querySelector(`#divide`);
divideBtn.addEventListener("click", getOperator);
let equalBtn = document.querySelector(`#equal`);
equalBtn.addEventListener("click", getResult);

// for these ones we must use the input of a user
let fNumber = "";
let operator = "";
let sNumber = "";
let result
let fNumberIsActive = true;
let sNumberIsActive = false;
let operatorIsActive = false;
let equalIsActive = false;

let display = document.querySelector("#display");
let textFNumber = document.createElement("h2");
textFNumber.id = "textFNumber"
let textSNumber = document.createElement("h2");
textSNumber.id = "textSNumber"
let textOperator = document.createElement("h2");
textOperator.id = "textOperator"
let textResult = document.createElement("h2");
textResult.id = "textResult"
display.append(textFNumber, textOperator, textSNumber, textResult);




function getFNumber(){
    if (fNumberIsActive === true){ 
        fNumber += this.textContent;
        console.log(fNumber);
        fNumberIsActive = false;
    }
    displayFNumber();
    if (operatorIsActive === true){
        fNumberIsActive = false;
    }
}

function displayFNumber(){
    textFNumber.textContent = fNumber;
}

function getOperator(){
    operatorIsActive = true;
    if (operatorIsActive === true){
        operator = this.textContent;
        console.log(operator);
        displayOperator();
    }
    if (sNumberIsActive === true){
        operatorIsActive = false;
    }
}

function displayOperator(){
    textOperator.textContent = operator;
}

function getSNumber(){
    sNumberIsActive = true;
    if (sNumberIsActive === true&& fNumberIsActive === false){
        sNumber += this.textContent;
        console.log(sNumber);
        displaySNumber();
}
    if (equalIsActive === true){
        sNumberIsActive = false;
    }
}

function displaySNumber(){
    textSNumber.textContent = sNumber;
}

function add(a, b){
    a = parseInt(a);
    b = parseInt(b);
    return a + b; 
}

function subtract(a, b){
    a = parseInt(a);
    b = parseInt(b);
    return a - b;
}

function multiply(a, b){
    a = parseInt(a);
    b = parseInt(b);
    return a * b;
}

function divide(a, b){
    a = parseInt(a);
    b = parseInt(b);
    return a / b;
}


function getResult(){
    equalIsActive = true;
    if (operator === "+"){
        result = add(fNumber, sNumber);
    } else if (operator === "-"){
        result = subtract(fNumber, sNumber);
    } else if (operator === "x"){
       result = multiply(fNumber, sNumber);
    } else if (operator === ":"){
        result = divide(fNumber, sNumber);
    } 
    displayTotal();
    console.log(result); 
    return result;
} 

function displayTotal(){
    textResult.textContent = `= ${result}`;
}

function eventManager(eventToRemove, getNumberFunction){
    let btnNumbers = document.querySelectorAll(".btnNumbers")
    btnNumbers.forEach(btnNumber => {
        btnNumber.removeEventListener("click", eventToRemove)
        btnNumber.addEventListener("click", getNumberFunction)
    });
}
