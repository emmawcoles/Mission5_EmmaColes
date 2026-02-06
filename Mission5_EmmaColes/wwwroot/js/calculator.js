
// calculator.js
// This script handles the calculation of total pay based on hours worked and a fixed rate.


$(function () {
    const RATE = 35;

    // run when the calculate button is clicked
    $("#calcBtn").on("click", function () {
        $("#hoursError").hide();

        // Get the hours input and validate it
        const hours = parseFloat($("#hoursInput").val());

        if (isNaN(hours) || hours <= 0) {
            $("#totalOutput").val("");
            $("#hoursError").show();
            return;
        }

        // Calculate the total pay and display it
        const total = hours * RATE;
        $("#totalOutput").val(`$${total.toFixed(2)}`);
    });
});
