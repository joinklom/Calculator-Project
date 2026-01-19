
let fNumber = "";
let operator = "";
let sNumber = "";
let result
let fNumberIsActive = true;
let sNumberIsActive = false;
let operatorIsActive = false;
let equalIsActive = false;
let keepOperatingActive = false;

// we automate the creation of the ten buttons for the numbers, and stick them in the numbersContainer
// these react to user when he click on buttons
let nmbsContainer = document.querySelector("#numbersContainer");
for (let n=0;n<10;n++){
    let btnNumbers = document.createElement("button");
    btnNumbers.className = "btnNumbers";
    btnNumbers.textContent = n;
    nmbsContainer.append(btnNumbers);
    btnNumbers.addEventListener("click", checkPhase)
}
let title = document.querySelector("#title");
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
    } else if (equalIsActive){
        getFNumber(e);
    } else if (sNumberIsActive){
        getSNumber(e);
    }
}

function getFNumber(e){
    if (keepOperatingActive){
        equalIsActive = false
        fNumber = result;
        console.log(fNumber);
        textFNumber.textContent = fNumber;
    } else if (!keepOperatingActive && fNumberIsActive){
        title.textContent = "";
        fNumber += e.target.textContent;
        console.log(fNumber);
        textFNumber.textContent = fNumber;
        operatorIsActive = true;
    } else if (equalIsActive && !fNumberIsActive){
        clearText();
        clearVariables();
        getFNumber(e);
    }
}

function getOperator(){
    if (equalIsActive || sNumberIsActive){
        keepOperatingActive = true
        getResult();
        sNumberIsActive = false;
        clearText();
        getFNumber();
        fNumberIsActive = false;
        sNumberIsActive = true;
        sNumber = "";
        textSNumber.textContent = sNumber;
        operator = this.textContent;
        textOperator.textContent = operator;
        keepOperatingActive = false;
    } else {
        if (operatorIsActive){
            sNumberIsActive = true;
            fNumberIsActive = false;
            operator = this.textContent;
            textOperator.textContent = operator;
        }
    }
}

function getSNumber(e){
    if (sNumberIsActive && !fNumberIsActive){
        sNumber += e.target.textContent;
        console.log(sNumber);
        textSNumber.textContent = sNumber;
        operatorIsActive = false;
    }
}
// pressing equal symbol activates equal phase, 
function getResult(){
    if (!fNumberIsActive){
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
        sNumberIsActive = false;
        fNumberIsActive = false;
        console.log(fNumberIsActive, sNumberIsActive, operatorIsActive, equalIsActive)
        return result;
    }
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
    title.textContent = "Calculator"
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
