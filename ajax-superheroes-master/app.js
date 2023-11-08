"use strict";
window.onload = function() {
    // Code that displays the list of superheroes as a javascript alert
    const searchButton = document.getElementById("search-btn");
    let httpRequest;

    searchButton.onclick = function(element) {
        element.preventDefault();

        httpRequest = new XMLHttpRequest();

        // GET Request
        httpRequest.onreadystatechange = function() {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {
                    let response = httpRequest.responseText;
                    alert(response);
                } else {
                    alert("There was a problem with the request.");
                }
            }
        };
        httpRequest.open("GET", "superheroes.php");
        httpRequest.send();
    }
};
