
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
let clearBtn = document.querySelector(`#clearAll`);
clearBtn.addEventListener("click", clearAll);

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
textFNumber.className = "textClass"
let textSNumber = document.createElement("h2");
textSNumber.id = "textSNumber"
textSNumber.className = "textClass"
let textOperator = document.createElement("h2");
textOperator.id = "textOperator"
textOperator.className = "textClass"
let textResult = document.createElement("h2");
textResult.id = "textResult"
display.append(textFNumber, textOperator, textSNumber, textResult);

//*********************************************************************************************

function checkPhase(e){
    if (fNumberIsActive){ 
        getFNumber(e);
    } else if (sNumberIsActive){
        getSNumber(e);
    }
    /*
    if (fNumberIsActive && !sNumberIsActive && !operatorIsActive){ 
       return getFNumber(e);
    } else if (sNumberIsActive && !fNumberIsActive){
        return getSNumber(e);
    }
    */

}

function getFNumber(e){
    fNumber += e.target.textContent;
    console.log(fNumber);
    textFNumber.textContent = fNumber;
}


function getOperator(){
    fNumberIsActive = false;
    sNumberIsActive = true;
    operator = this.textContent;
    textOperator.textContent = operator;
    /*
    if (operatorIsActive && !fNumberIsActive && !sNumberIsActive){
        operator = this.textContent;
        console.log(operator);
        textOperator.textContent = operator;
    } sNumberIsActive = true;
     */
}

function getSNumber(e){
    operatorIsActive = false;
    sNumber += e.target.textContent;
    console.log(sNumber);
    textSNumber.textContent = sNumber;
}

function getResult(){
    sNumberIsActive = false;
    operatorIsActive = false;
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
    clearText();
    textResult.textContent = result;
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
//************************************************************************************************
// cleaning functions: 
function clearAll(){
    clearText();
    clearVariables();
}

function clearVariables(){
    fNumber = "";
    operator = "";
    sNumber = "";
    result = 0;
    fNumberIsActive = true;
    sNumberIsActive = false;
    operatorIsActive = false;
    equalIsActive = false;
}

function clearText(){
    let textArray = document.querySelectorAll(".textClass")
    textResult.textContent = ""
    for (let t=0; t<textArray.length; t++){
        textArray[t].textContent = "";
    }
}

