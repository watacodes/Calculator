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

function mathOperation() {
    if (lastOperation === '÷') {
        if (display1Num == '0' || display2Num == '0') {
            alert("We can't divide by zero!");
            clearAll();
        }
        result = parseFloat(result) / parseFloat(display2Num);
    } else if (lastOperation === '×') {
        result = parseFloat(result) * parseFloat(display2Num);
    } else if (lastOperation === '+') {
        result = parseFloat(result) + parseFloat(display2Num);
    } else if (lastOperation === '-') {
        result = parseFloat(result) - parseFloat(display2Num);
    }
}


function clearIt(name = '') {
    display1Num += display2Num + ' ' + name + ' ';
    Display1.innerText = display1Num;
    Display2.innerText = '';
    display2Num = '';
}



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

/* Original equal function */
// equalButton.addEventListener('click', (e) => {
//     console.log('equal pressed');
//     if (display1Num === '' || display2Num === '') {
//         clearAll();
//         return alert('We need at least two numbers to perform a calculation!');
//     }
//     haveDecimal = false;
//     mathOperation();
//     clearIt();
//     display2Num = result;
//     Display2.innerText = result;
//     display1Num = '';
// });

equalButton.addEventListener('click', initCalc);


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

/* New function -> Keydown support

    To-do: 1. Add keyboard input support for decimal -> done
           2. Add keyboard support for operators 
           3. Let user press enter to execute the calculation -> done
           4. Fix the JS float calculation error

*/ 

window.addEventListener('keydown', (e) => {

    // For decimal button

    if (e.target.innerText === '.' && !haveDecimal) {
        haveDecimal = true;
    } else if (e.target.innerText === '.' && haveDecimal){
        return;
    }

    // For numbers

    if (e.key == '0' && (display2Num == '' || display2Num == '0')) return;
    
    if (e.key == '0' ||
        e.key == '1' ||
        e.key == '2' ||
        e.key == '3' ||
        e.key == '4' ||
        e.key == '5' ||
        e.key == '6' ||
        e.key == '7' ||
        e.key == '8' ||
        e.key == '9')
    display2Num += e.key;
    Display2.innerText = display2Num;

    console.log(e.key);
    if (e.key == '.' && !haveDecimal) {
        haveDecimal = true;
        display2Num += e.key;
        Display2.innerText = display2Num;
    } else if (e.key == '.' && haveDecimal) {
        return;
    }

    if (e.key == 'Backspace' || e.key == 'Delete') {
        display2Num = display2Num.toString().slice(0,-1);
        Display2.innerText = display2Num;
    }

    /* Under construction
    if (e.key == '+') {
        lastOperation == '+';
    } else if (e.key == '-') {
        lastOperation == '-';
    } else if (e.key == '/') {
        lastOperation == '÷'; 
    } else if (e.key == '*') {
        lastOperation == '×';
    }
    */
});


// Fixed the bug that shows 'NaN' when the equal button pressed without two pairs of numbers.
// Added new function which gets initiated when the equal button is triggered.

function initCalc() {
    if (display1Num === '' || 
        display2Num === '' || 
        display1Num == NaN ||
        display2Num == NaN ) {
        clearAll();
        return alert('We need at least two numbers to perform a calculation!');
    }
    haveDecimal = false;
    mathOperation();
    clearIt();
    display2Num = result;
    Display2.innerText = result;
    display1Num = '';
}

// Temporarily added keyboard input support for the equal button.
// To-do: Found a bug with the enter key, and decided to disable the enter key 
//        However, it seems to be deprecated, hence I need to find the alternative methods.

document.addEventListener('keydown',(e) => {
    console.log(e.key); 
    if (e.key == '=' || e.key == 'Enter') {
        if (e.keyCode == 13) {
            e.preventDefault();
        }
        if (display1Num === '' || display2Num === '') {
            clearAll();
            return alert('We need at least two numbers to perform a calculation!');
        }
        haveDecimal = false;
        mathOperation();
        clearIt();
        display2Num = result;
        Display2.innerHtml = result;
        display1Num = '';
    }
});


/* Testing new funciton

document.addEventListener('keydown', (e) => {

    if (Display2.textContent.length && display2Num == 0 || specialOperators.includes(Display1.textContent.slice(-2,-1))) return;
    const operationName = e.target.innerText;
    
    if (e.key == '+' || e.key == '-') {
        console.log(e.key)
        lastOperation == e.key;
    } 
}) */
