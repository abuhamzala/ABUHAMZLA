// CALCULATOR PROGRAM 

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += "";
}

function clearDisplay() {
display.value = "";
}

function calculate() {
    try{
        display.value = eval(display.value);
    }
    catch(error) {
    display.value = eval(display.value)
    }
    
}
