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

let operator = "";
let fNumber = null;
let sNumber = null;

let nmbsContainer = document.querySelector("#numbersContainer");

for (let n=0;n<10;n++){
    let btnNumbers = document.createElement("button");
    btnNumbers.className = "btnNumbers";
    btnNumbers.textContent = n;
    nmbsContainer.append(btnNumbers);
}


function calculator (){
}