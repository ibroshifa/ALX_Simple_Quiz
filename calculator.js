function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 === 0) {
        return 'Error: Division by zero';
    }
    return number1 / number2;
}


document.getElementById('add').addEventListener('click', function() {
    let number1 = parseFloat(document.getElementById('number1').value) || 0;
    let number2 = parseFloat(document.getElementById('number2').value) || 0;
    let result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

document.getElementById('subtract').addEventListener('click', function() {
    let number1 = parseFloat(document.getElementById('number1').value) || 0;
    let number2 = parseFloat(document.getElementById('number2').value) || 0;
    let result = subtract(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

document.getElementById('multiply').addEventListener('click', function() {
    let number1 = parseFloat(document.getElementById('number1').value) || 0;
    let number2 = parseFloat(document.getElementById('number2').value) || 0;
    let result = multiply(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

document.getElementById('divide').addEventListener('click', function() {
    let number1 = parseFloat(document.getElementById('number1').value) || 0;
    let number2 = parseFloat(document.getElementById('number2').value) || 0;
    let result = divide(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});