$(function () {
    const RATE = 35;

    $("#calcBtn").on("click", function () {
        $("#hoursError").hide();

        const hours = parseFloat($("#hoursInput").val());

        if (isNaN(hours) || hours <= 0) {
            $("#totalOutput").val("");
            $("#hoursError").show();
            return;
        }

        const total = hours * RATE;
        $("#totalOutput").val(`$${total.toFixed(2)}`);
    });
});
