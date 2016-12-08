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
function markers() {
    var xmlRequest = "<REQUEST>" +
            "<LOGIN authenticationkey='e294157bcc3b405dafe3257786faa6b7'/>" +
            "<QUERY objecttype='TrainStation'>" +
            "<FILTER/>" +
            "<INCLUDE>AdvertisedLocationName</INCLUDE>" +
            "<INCLUDE>Geometry.WGS84</INCLUDE>" +
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
                for (var i = 0; i < 1878; i++) {
                    console.log(response.RESPONSE.RESULT[0].TrainStation[i].AdvertisedLocationName);
                    console.log(response.RESPONSE.RESULT[0].TrainStation[i].Geometry.WGS84);
                }
            } catch (ex) {
                console.log("rövhål");

            }
        }
    });
}
$(document).ready(function () {
    markers();
});
