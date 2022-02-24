const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    return a / b;
}


let buttons = Array.from(document.querySelectorAll('button'));

buttons.map((button) => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText) {
            case('AC'):
                display.innerText = '';
                break;
            case('='):
                
        }
    })
})
function operate() {
    
}