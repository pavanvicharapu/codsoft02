let currentInput = "";
let currentOperator = "";

const display = document.getElementById("display");

document.querySelectorAll(".buttons button").forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (!isNaN(value) || value === ".") {
            currentInput += value;
            display.value = currentInput;
        } else if (value === "+" || value === "-" || value === "*" || value === "/") {
            currentOperator = value;
            currentInput += " " + value + " ";
            display.value = currentInput;
        } else if (value === "=") {
            try {
                const result = eval(currentInput);
                display.value = result;
                currentInput = result.toString();
            } catch (error) {
                display.value = "Error";
            }
        } else if (value === "C") {
            currentInput = "";
            currentOperator = "";
            display.value = "";
        }
    });
});
