function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function calculate() {
    let display = document.getElementById('display');
    let result = eval(display.value); // Using eval here for simplicity; consider using a safer parser in production
    display.value = result;
  }
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    let display = document.getElementById('display');
    let result;
    
    try {
        result = eval(display.value); // Using eval here for simplicity; consider using a safer parser in production
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

function squareRoot() {
    let display = document.getElementById('display');
    let currentValue = parseFloat(display.value);
    if (currentValue >= 0) {
        display.value = Math.sqrt(currentValue);
    } else {
        display.value = 'Error';
    }
}

function exponentiation() {
    let display = document.getElementById('display');
    let currentValue = parseFloat(display.value);
    display.value = currentValue ** 2;
}

function logarithm() {
    let display = document.getElementById('display');
    let currentValue = parseFloat(display.value);
    if (currentValue > 0) {
        display.value = Math.log10(currentValue);
    } else {
        display.value = 'Error';
    }
}

function factorial() {
    let display = document.getElementById('display');
    let currentValue = parseInt(display.value);
    if (currentValue >= 0) {
        let result = 1;
        for (let i = 2; i <= currentValue; i++) {
            result *= i;
        }
        display.value = result;
    } else {
        display.value = 'Error';
    }
}
