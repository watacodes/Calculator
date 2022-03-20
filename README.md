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

- Now you can perform the calculation by pressing either the **'='** button or the **'Enter'** button on your keyboard.

- Added **Backspace** icon as a replacement of the **"DEL"** button.

- Added keyboard support for the decimal button**(='.')** and migrated into the existing addEventListener.

- Added keyboard support for the delete button. Backspace key  and delete key can now be used to delete a digit.

- Added **Quick Tips** in the description for reference.


## Fixed Bugs

- Bug type: Shows **'NaN'** when the equal button is pressed without two pairs of numbers.
    - Now, instead of displaying 'NaN' and falsely showing '=' button in the display, the screen gets wiped and shows the error message when the error happens.

- Bug type: Operator buttons('+-×÷') can be pressed multiple times.
    - Operator buttons can now only be pressed once unless users input a new number.

- Bug type: Decimal points('.') can be pressed multiple times.
    - The decimal point is now only available once per each pair of number.

## Update plans

- Adding advanced functions

- Keyboard input support for numbers and operators

- Fixing JS Float Calculation errors