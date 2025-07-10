
function redirectToSite() {
    window.location.href = "https://zajuna.sena.edu.co";
}

function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const op = document.getElementById("operation").value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Valores inválidos";
    } else {
        switch(op) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num2 !== 0 ? num1 / num2 : "División por 0";
                break;
            default:
                result = "Operación inválida";
        }
    }

    document.getElementById("result").value = result;
}
