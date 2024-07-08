let display = document.getElementById('display');
let buttons = document.querySelectorAll('button[type="button"]');

let calculator = {
  displayValue: '',
  firstOperand: '',
  operator: '',
  secondOperand: '',
  result: '',

  init: function() {
    buttons.forEach(button => {
      button.addEventListener('click', this.handleButtonPress);
    });
  },

  handleButtonPress: function(event) {
    let buttonValue = event.target.value;

    if (buttonValue === '=') {
      calculator.calculate();
    } else if (buttonValue === 'C') {
      calculator.clear();
    } else if (buttonValue === '+/-' || buttonValue === '%') {
      calculator.toggleSignOrPercent();
    } else if (buttonValue === '+' || buttonValue === '-' || buttonValue === '*' || buttonValue === '/') {
      calculator.setOperator(buttonValue);
    } else {
      calculator.appendDigit(buttonValue);
    }

    display.value = calculator.displayValue;
  },

  appendDigit: function(digit) {
    if (calculator.displayValue === '0') {
      calculator.displayValue = digit;
    } else {
      calculator.displayValue += digit;
    }
  },

  setOperator: function(operator) {
    calculator.firstOperand = calculator.displayValue;
    calculator.operator = operator;
    calculator.displayValue = '';
  },

  calculate: function() {
    calculator.secondOperand = calculator.displayValue;
    let result = eval(calculator.firstOperand + calculator.operator + calculator.secondOperand);
    calculator.displayValue = result;
    calculator.firstOperand = '';
    calculator.operator = '';
    calculator.secondOperand = '';
  },

  clear: function() {
    calculator.displayValue = '';
    calculator.firstOperand = '';
    calculator.operator = '';
    calculator.secondOperand = '';
  },

  toggleSignOrPercent: function() {
    if (calculator.displayValue.includes('%')) {
      calculator.displayValue = calculator.displayValue.replace('%', '');
    } else {
      calculator.displayValue += '%';
    }
  }
};

calculator.init();