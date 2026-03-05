$(document).ready(function() {

    $("#solveBtn").click(function() {

        let first = $("#firstNumber").val();
        let second = $("#secondNumber").val();
        let operator = $("#operator").val();
        let $result = $("#result");

        if (first === "" || second === "") {
            $result.text("");
            return;
        }

        first = parseFloat(first);
        second = parseFloat(second);

        let result;

        switch(operator) {
            case "+": result = first + second; break;
            case "-": result = first - second; break;
            case "*": result = first * second; break;
            case "/":
                result = (second == 0) ? "Cannot divide by zero" : first / second;
                break;
        }

        $result.text("Result: " + result);

    });

});
