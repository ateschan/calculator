var num = null;
var numTwo = null;
var operator = "";
var operateBool = true;
//This is the fucntion that sorts logic and stores number input
function numInput(input) {
    if (operateBool == true) {
        console.log("FIRST NUMBER");
        if (num == null) {
            num = input;
        }
        else {
            num = num * 10 + input;
        }
    }
    else {
        if (numTwo == null) {
            numTwo = input;
        }
        else {
            numTwo = numTwo * 10 + input;
        }
    }
    render();
}
function operate(opInput) {
    if (opInput == "clear") {
        var screen = document.getElementById("display-screen");
        num = null;
        numTwo = null;
        solutionBool = false;
        operateBool = true;
        if (screen) {
            screen.innerHTML = "";
        }
    }
    //These are the operators and manipulators of the numbers
    switch (opInput) {
        case "add":
            operateBool = false;
            operator = "+";
            break;
        case "subtract":
            operateBool = false;
            operator = "-";
            break;
        case "multiply":
            operateBool = false;
            operator = "*";
            break;
        case "divide":
            operateBool = false;
            operator = "/";
            break;
        case "sign-switch":
            modifyCurrentNumber(opInput);
            break;
        case "percent":
            modifyCurrentNumber(opInput);
            break;
        case "decimal":
            modifyCurrentNumber(opInput);
            break;
        default: {
            console.log("Operation not found!");
            break;
        }
    }
    render();
}
function render() {
    console.log(operateBool);
    console.log(solutionBool);
    console.log(num);
    console.log(numTwo);
    var screen = document.getElementById("display-screen");
    if (num != null) {
        if (screen) {
            if (solutionBool == true) {
                screen.innerHTML = solution.toString();
                num = solution;
                numTwo = null;
                solutionBool = false;
            }
            else if (numTwo != null) {
                screen.innerHTML = num.toString() + " " + operator + " " + numTwo.toString();
            }
            else if (operateBool != true) {
                screen.innerHTML = num.toString() + " " + operator;
            }
            else if (num != null) {
                screen.innerHTML = num.toString();
            }
        }
    }
}
var solution;
var solutionBool;
function ev() {
    if (!operateBool) {
        console.log("EVALUATE");
        switch (operator) {
            case "+":
                solution = num + numTwo;
                break;
            case "-":
                solution = num - numTwo;
                break;
            case "*":
                solution = num * numTwo;
                break;
            case "/":
                solution = num / numTwo;
                break;
        }
        solutionBool = true;
        operateBool = true;
        render();
    }
}
function modifyCurrentNumber(mod) {
    switch (mod) {
        case 'sign-switch':
            if (numTwo != null) {
                numTwo = numTwo * -1;
            }
            else if (num != null) {
                num = num * -1;
            }
        case 'percent':
            if (numTwo != null) {
                numTwo = numTwo * .01;
            }
            else if (num != null) {
                num = num * .01;
            }
        case 'decimal':
            if (numTwo != null) {
                numTwo = numTwo * 1.0;
            }
            else if (num != null) {
                num = num * 1.0;
            }
        default: {
            console.log("modification nod found!");
            break;
        }
    }
}
