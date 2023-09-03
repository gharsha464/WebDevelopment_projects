<script>
    function display(value) {
        var displayElement = document.getElementById("display");
        displayElement.value += value;
    }

    function clearDisplay() {
        var displayElement = document.getElementById("display");
        displayElement.value = "";
    }

    function calculate() {
        var displayElement = document.getElementById("display");
        var equation = displayElement.value;
        try {
            var result = eval(equation);
            displayElement.value = result;
        } catch (error) {
            displayElement.value = "Error";
        }
    }
</script>
