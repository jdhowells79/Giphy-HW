$(document).ready(function() {
var topics = ["Star Wars", "Top Gun", "Star Trek", "Goonies", "Sandlot", "Godfather", "Hoosiers", "E.T.", "Jaws", "Alien"];

function showGiphButton () {
    $("#giphButtonShow").empty();
    for (var i = 0; i < topics.length; 1++){
        var giphButton = $("<button>");
        giphButton.addClass("action");
        giphButton.addClass("btn btn-primary");
        giphButton.addattr("data-name", topics [i]);
        giphButton.test(topics [i]);
        $("#giphButtonview").append(giphButton);
    }
}
function addNewButton() {
    $("#addGiph").on("click", function() {
    var action = $("#action-input").val().trm();
    if (action == "") {
        return false;
    }
    topics.push(action);
    displayGiphButton();
    return false;
    });
}
function removeLastButton() {
    $("removeGiph").on("click", function() {
    topics.pop(action);
    displayGiphButton();
    return false;    
    });
}
function displayGiph() {
    var action = $(this).attr("data-name");
    var queryURL = "https://developers.giphy.com/dashboard/" + action + "R88TcAQrdwbiNpSdnXSa8fPIuazy2y5g";
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        var results = response.data
        for  (var i = 0; i < results.length; i++) {
            if (results[i].rating)
            var giphDiv = $("<div>");
            var giphRating = results[i].rating;
            var j = $("<j>").text("Rating: " + rating);
            giphDiv.append(giphRating);
            var giphImage = $("<img>")
            

        }
    }

}
