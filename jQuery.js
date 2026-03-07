$(document).ready(function(){

    $("#solveBtn").click(function(){

        var num1 = parseFloat($("#num1").val());
        var num2 = parseFloat($("#num2").val());
        var operator = $("#operator").val();
        var answer;

        if (isNaN(num1) || isNaN(num2)) {
            $("#result").text("Please enter both numbers.");
            return;
        }

        if (operator === "+") {
            answer = num1 + num2;
        } 
        else if (operator === "-") {
            answer = num1 - num2;
        } 
        else if (operator === "*") {
            answer = num1 * num2;
        } 
        else if (operator === "/") {
            if (num2 === 0) {
                $("#result").text("Cannot divide by zero.");
                return;
            }
            answer = num1 / num2;
        }

        $("#result").text("Result: " + answer);

    });

});