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