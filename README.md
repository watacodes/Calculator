# The Calculator Project

This is the Calculator project using HTML, CSS, and Vanilla JavaScript from The Odin Project.

## Basic functions

- Basic arithmetics such as:
    - Addition
    - Subtraction
    - Multiplication
    - Division
- Clearing all calculations
- Deleting one digit

## Update History

- Now numbers can be entered by both keyboard and on-screen numbers.

## Fixed Bugs

- Bug type: Shows **'NaN'** when the equal button is pressed without two pairs of numbers.
    - Now, instead of displaying 'NaN' and falsely showing '=' button in the display, the screen gets wiped and shows the error message when the error happens.

- Bug type: Operator buttons('+-×÷') can be pressed multiple times.
    - Operator buttons can now only be pressed once unless users input a new number.

- Bug type: Decimal points('.') can be pressed multiple times.
    - The decimal point is now only available once per each pair of number.

## Update plans

- Adding advanced functions

- Applying styles for each buttons
    - Planning to add backspace button as a replacement of current DEL button.

- Keyboard input support for numbers and operators

- Fixing JS Float Calculation errors