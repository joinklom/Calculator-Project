function add(a, b){
    let total = a+b;
    return total; 
};
function subtract(a, b){
    let total = a-b;
    return total;
};
function multiply(a, b){
    let total = a*b;
    return total;
};
function divide(a, b){
    let total = a/b;
    return total;
};

// we automate the creation of the ten buttons for the numbers, and stick them in the numbersContainer
let nmbsContainer = document.querySelector("#numbersContainer");
for (let n=0;n<10;n++){
    let btnNumbers = document.createElement("button");
    btnNumbers.className = "btnNumbers";
    btnNumbers.textContent = n;
    nmbsContainer.append(btnNumbers);
}

// for these ones we must use the input of a user
let operator = "";
let fNumber = null;
let sNumber = null;

function displayText(){
    let display = document.querySelector("#display");
    let text = document.createElement("h2");
    text.id = "text"
    text.textContent = "2 x 2";
    display.append(text);
}

function calculator (){
}

displayText();