function calculate() {

    var a = document.forms.frmCal.txta.value;
    var b = document.forms.frmCal.txtb.value;
    var operator = document.forms.frmCal.slto.value;

    document.forms.frmCal.txta.classList.remove("error");
    document.forms.frmCal.txtb.classList.remove("error");

    if (a === "" || b === "") {
        document.getElementById("result").innerHTML =
            "Error: Please enter both numbers.";
        if (a === "") document.forms.frmCal.txta.classList.add("error");
        if (b === "") document.forms.frmCal.txtb.classList.add("error");
        return;
    }

    if (isNaN(numA) || isNaN(numB)) {
        document.getElementById("result").innerHTML =
            "Error: Invalid number format.";
        return;
    }

    if (operator === "/" && numB === 0) {
        document.getElementById("result").innerHTML =
            "Error: Cannot divide by 0.";
        document.forms.frmCal.txtb.classList.add("error");
        return;
    }

    var result;

    switch (operator) {
        case "+": result = numA + numB; break;
        case "-": result = numA - numB; break;
        case "*": result = numA * numB; break;
        case "/": result = numA / numB; break;
        case "^": result = Math.pow(numA, numB); break;
        case "max": result = Math.max(numA, numB); break;
        case "min": result = Math.min(numA, numB); break;
        default: result = "Unknown operator";
    }

    document.getElementById("result").innerHTML = result;
}
