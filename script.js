
// we automate the creation of the ten buttons for the numbers, and stick them in the numbersContainer
let nmbsContainer = document.querySelector("#numbersContainer");
for (let n=0;n<10;n++){
    let btnNumbers = document.createElement("button");
    btnNumbers.className = "btnNumbers";
    btnNumbers.textContent = n;
    nmbsContainer.append(btnNumbers);
    btnNumbers.addEventListener("click", checkPhase)
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
let clearBtn = document.querySelector(`#clear`);
clearBtn.addEventListener("click", clear);

// these react to user when he click on buttons
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

//*********************************************************************************************

function checkPhase(e){
    if (fNumberIsActive && !sNumberIsActive && !operatorIsActive){ 
       return getFNumber(e);
    } else if (!fNumberIsActive && sNumberIsActive && !operatorIsActive){
        return getSNumber(e);
    }
}

function getFNumber(e){
    fNumber += e.target.textContent;
    console.log(fNumber);
    textFNumber.textContent = fNumber;
}


function getOperator(){
    fNumberIsActive = false;
    operatorIsActive = true;
    if (operatorIsActive && !fNumberIsActive && !sNumberIsActive){
        operator = this.textContent;
        console.log(operator);
        textOperator.textContent = operator;
        operatorIsActive = false;
        sNumberIsActive = true;
    }
}

function getSNumber(e){
    operatorIsActive = false;
    sNumberIsActive = true;
    sNumber += e.target.textContent;
    console.log(sNumber);
    textSNumber.textContent = sNumber;
}

function getResult(){
    sNumberIsActive = false;
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
    textResult.textContent = `= ${result}`;
    console.log(result); 
    return result;
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


function clear(){
    location.reload()
}






























/*
function eventManager(eventToRemove, getNumberFunction){
    let btnNumbers = document.querySelectorAll(".btnNumbers")
    btnNumbers.forEach(btnNumber => {
        btnNumber.removeEventListener("click", eventToRemove)
        btnNumber.addEventListener("click", getNumberFunction)
    });
}
function displayFNumber(){
    textFNumber.textContent = fNumber;
}
function displayOperator(){
    textOperator.textContent = operator;
}
function displaySNumber(){
    textSNumber.textContent = sNumber;
}
function displayTotal(){
    textResult.textContent = `= ${result}`;
}
*/