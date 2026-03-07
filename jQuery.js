$(document).ready(function() {

    $("#solveBtn").click(function() {

        var num1 = parseFloat($("#num1").val());
        var num2 = parseFloat($("#num2").val());
        var operator = $("#operator").val();
        var result;

        if (isNaN(num1) || isNaN(num2)) {
            alert("Please enter both numbers.");
            return;
        }

        switch(operator) {
            case "+": result = num1 + num2; break;
            case "-": result = num1 - num2; break;
            case "*": result = num1 * num2; break;
            case "/":
                result = (num2 === 0) ? "Cannot divide by zero" : num1 / num2;
                break;
        }

        // Show result with slight indentation
        $("#result").text("Result: " + result);
    });

});