$(document).ready(function () {
    $.support.cors = true; // Enable Cross domain requests
    try {
        $.ajaxSetup({
            url: "http://api.trafikinfo.trafikverket.se/v1/data.json",
            error: function (msg) {
                if (msg.statusText === "abort")
                    return;
                alert("Request failed: " + msg.statusText + "\n" + msg.responseText);
            }
        });
    } catch (e) {
        alert("Ett fel uppstod vid initialisering.");
    }
    // Create an ajax loading indicator
    var loadingTimer;
    $("#loader").hide();
    $(document).ajaxStart(function () {
        loadingTimer = setTimeout(function () {
            $("#loader").show();
        }, 200);
    }).ajaxStop(function () {
        clearTimeout(loadingTimer);
        $("#loader").hide();
    });
    // Load stations

});
function skjutmigipungen() {
    var xmlRequest = "<REQUEST>" +
            "<LOGIN authenticationkey='e294157bcc3b405dafe3257786faa6b7'/>" +
            "<QUERY objecttype='TrainMessage'>" +
            "<FILTER/>" +
            "<INCLUDE>ExternalDescription</INCLUDE>" +
            "<INCLUDE>ReasonCodeText</INCLUDE>" +
            "</QUERY>" +
            "</REQUEST>";
    $.ajax({
        type: "POST",
        contentType: "text/xml",
        dataType: "json",
        data: xmlRequest,
        success: function (response) {
            if (response === null)
                return;
            try {
                console.dir(response);
                for (var i = 0; i < 20; i++) {
                    console.log(response.RESPONSE.RESULT[0].TrainMessage[i].ExternalDescription);
                    console.log(response.RESPONSE.RESULT[0].TrainMessage[i].ReasonCodeText);

                    $("#xpeke").text(response.RESPONSE.RESULT[0].TrainMessage[0].ExternalDescription);
                    $("#xpeke2").text("Orsak: " + response.RESPONSE.RESULT[0].TrainMessage[0].ReasonCodeText);

                    $("#xpeke3").text(response.RESPONSE.RESULT[0].TrainMessage[1].ExternalDescription);
                    $("#xpeke4").text("Orsak: " + response.RESPONSE.RESULT[0].TrainMessage[1].ReasonCodeText);

                    $("#xpeke5").text(response.RESPONSE.RESULT[0].TrainMessage[2].ExternalDescription);
                    $("#xpeke6").text("Orsak: " + response.RESPONSE.RESULT[0].TrainMessage[3].ReasonCodeText);
                }
                $('#print').text(response);
            } catch (ex) {
                console.log("rövhål");

            }
        }
    });
}
$(document).ready(function () {
    skjutmigipungen();
});
