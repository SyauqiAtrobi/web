let displayValue = '0';
        let currentInput = '';  // Keep track of all input
        let operator = null;
        let firstValue = null;
        let waitingForSecondValue = false;

        function updateDisplay() {
            const display = document.getElementById('display');
            display.textContent = currentInput || displayValue;  // Show full expression
        }

        function clearDisplay() {
            displayValue = '0';
            currentInput = '';  // Clear all inputs
            firstValue = null;
            operator = null;
            waitingForSecondValue = false;
            updateDisplay();
        }

        function deleteLast() {
            currentInput = currentInput.slice(0, -1);
            displayValue = displayValue.slice(0, -1);
            if (currentInput === '') {
                displayValue = '0';
            }
            updateDisplay();
        }

        function inputNumber(number) {
            if (waitingForSecondValue) {
                displayValue = number;
                waitingForSecondValue = false;
            } else {
                displayValue = displayValue === '0' ? number : displayValue + number;
            }
            currentInput += number;  // Add number to full expression
            updateDisplay();
        }

        function inputOperator(op) {
            if (firstValue === null) {
                firstValue = parseFloat(displayValue);
            } else if (operator) {
                const result = calculate();
                displayValue = `${parseFloat(result.toFixed(5))}`;
                firstValue = result;
            }
            operator = op;
            waitingForSecondValue = true;
            currentInput += op;  // Add operator to full expression
            updateDisplay();
        }

        function calculate() {
            if (firstValue === null || operator === null) {
                return;
            }
            const secondValue = parseFloat(displayValue);
            let result = 0;

            switch (operator) {
                case '+':
                    result = firstValue + secondValue;
                    break;
                case '-':
                    result = firstValue - secondValue;
                    break;
                case '*':
                    result = firstValue * secondValue;
                    break;
                case '/':
                    result = firstValue / secondValue;
                    break;
                case '^':
                    result = Math.pow(firstValue, secondValue);  // Pangkat
                    break;
            }

            displayValue = `${result}`;
            currentInput = displayValue;  // Reset the expression after calculation
            operator = null;
            firstValue = null;
            waitingForSecondValue = false;
            updateDisplay();
            return result;
        }

        function calculateTrig(func) {
            let value = parseFloat(displayValue);
            let result;

            switch (func) {
                case 'sin':
                    result = Math.sin(value * Math.PI / 180); // Radians
                    break;
                case 'cos':
                    result = Math.cos(value * Math.PI / 180); // Radians
                    break;
                case 'tan':
                    result = Math.tan(value * Math.PI / 180); // Radians
                    break;
            }

            displayValue = result.toString();
            currentInput = displayValue;  // Update the expression
            updateDisplay();
        }

        function sqrt() {
            let value = parseFloat(displayValue);
            displayValue = Math.sqrt(value).toString();
            currentInput = displayValue;  // Update the expression
            updateDisplay();
        }

        function inverse() {
            let value = parseFloat(displayValue);
            displayValue = (1 / value).toString();  // Pecahan
            currentInput = displayValue;  // Update the expression
            updateDisplay();
        }