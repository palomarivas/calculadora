let isResultMode = false;

function dis(val) {
    let resultDisplay = document.getElementById("result");
    let fullCalculationDisplay = document.getElementById("fullCalculation");
    let currentInput = resultDisplay.value;

    if (isResultMode) {
        if (isOperator(val)) {
            // If the user enters an operator after a result, use the result as the starting point
            currentInput = resultDisplay.value;
        } else {
            // If the user enters a number after a result, clear the result and start a new calculation
            clr();
            fullCalculationDisplay.textContent = '';
        }
        isResultMode = false;
    }

    // Check if the last character is an operator and the new character is also an operator
    if (isOperator(currentInput.charAt(currentInput.length - 1)) && isOperator(val)) {
        // Replace the last operator with the new one
        resultDisplay.value = currentInput.slice(0, -1) + val;
    } else {
        resultDisplay.value += val;
    }
    fullCalculationDisplay.textContent = resultDisplay.value;
}

function solve() {
    let x = document.getElementById("result").value;
    let y = math.evaluate(x);
    document.getElementById("result").value = y;
    isResultMode = true;
    console.log(y)
}

function clr() {
    document.getElementById("result").value = "";
    document.getElementById("fullCalculation").textContent = "";
}

function del(input) {
    if (input.value.length <= 0) {
        clr()
    } else {
        input.value = input.value.substring(0, input.value.length - 1);
    }
}

function isOperator(character) {
    return ['+', '-', '*', '/'].includes(character);
}