const Display1 = document.querySelector('.display1');
const Display2 = document.querySelector('.display2');
const numberButtons = document.querySelectorAll('.btn-num');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.btn-equal');
const clearAllButton = document.querySelector('.btn-ac');
const deleteButton = document.querySelector('.btn-del');
const decimalButton = document.querySelector('.btn-decimal');

let display1Num = '';
let display2Num = '';
let result = null;
let lastOperation = '';
let haveDecimal = false;
const specialOperators = ['+', '-', '×', '÷'];

numberButtons.forEach(number => {
    number.addEventListener('click', (e) => {
        console.log(e.target.innerText);
        if (e.target.innerText === '.' && !haveDecimal) {
            haveDecimal = true;
        } else if (e.target.innerText === '.' && haveDecimal){
            return;
        }
        display2Num += e.target.innerText;
        Display2.innerText = display2Num;
    })
})

// Now consecutively inputting the operators are prohibited.

operatorButtons.forEach(operator => {
    operator.addEventListener('click', (e) => {

        if (Display2.textContent.length && display2Num == 0 || specialOperators.includes(Display1.textContent.slice(-2,-1))) return;
        const operationName = e.target.innerText;

        if (display1Num && display2Num && lastOperation) {
            mathOperation();
        } else {
            result = parseFloat(display2Num);
        }
        clearIt(operationName);
        lastOperation = operationName;
        console.log(result);
    })
})

// Multiple decimal dots in a single value are disabled.

decimalButton.addEventListener('click', (e) => {
    if (!Display2.innerText.includes('.') && haveDecimal) {
        haveDecimal = true;
    } else if (Display2.innerText.includes('.') && !haveDecimal){
        return;
    }
    display2Num += e.target.innerText;
    Display2.innerText = display2Num;
    haveDecimal = false;
})


function clearIt(name = '') {
    display1Num += display2Num + ' ' + name + ' ';
    Display1.innerText = display1Num;
    Display2.innerText = '';
    display2Num = '';
}

function mathOperation() {
    if (lastOperation === '×') {
        result = parseFloat(result) * parseFloat(display2Num);
    } else if (lastOperation === '÷') {
        if (display1Num == '0' || display2Num == '0') {
            alert("We can't divide by zero!");
            clearAll();
        }
        result = parseFloat(result) / parseFloat(display2Num);
    } else if (lastOperation === '+') {
        result = parseFloat(result) + parseFloat(display2Num);
    } else if (lastOperation === '-') {
        result = parseFloat(result) - parseFloat(display2Num);
    }
}


equalButton.addEventListener('click', (e) => {
    console.log('equal pressed');
    if (!display1Num || !display2Num) ;
    haveDecimal = false;
    mathOperation();
    clearIt();
    display2Num = result;
    Display2.innerText = result;
    display1Num = '';
});

function clearAll() {
    Display1.innerText = '';
    Display2.innerText = '';
    display1Num = '';
    display2Num = '';
    result = '';
}

function deleteNumbers() {
    Display2.innerText = Display2.innerText.toString().slice(0, -1);
    display2Num = Display2.innerText;
}

clearAllButton.addEventListener('click', clearAll);

deleteButton.addEventListener('click', deleteNumbers);

