
function binaryToDecimal(binary) {
    return parseInt(binary, 2);
}

function decimalToBinary(decimal) {
    return decimal.toString(2);
}

function calculate() {
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    const operation = document.getElementById('operation').value;
    let result = '';

    try {
        const num1 = binaryToDecimal(input1);
        const num2 = binaryToDecimal(input2);

        switch (operation) {
            case 'add':
                result = decimalToBinary(num1 + num2);
                break;
            case 'subtract':
                result = decimalToBinary(num1 - num2);
                break;
            case 'multiply':
                result = decimalToBinary(num1 * num2);
                break;
            case 'divide':
                if (num2 === 0) {
                    result = 'Error: Division by zero';
                } else {
                    result = decimalToBinary(Math.floor(num1 / num2));
                }
                break;
        }

        document.getElementById('result').innerText = `Result: ${result}`;
    } catch (e) {
        document.getElementById('result').innerText = 'Invalid input';
    }
}
