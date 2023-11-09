"use strict";
window.onload = function() {
    // Write code that allows the user to search for a superhero and displays the results
    const searchButton = document.getElementById("search-btn");
    const searchInput = document.getElementById("search-box");
    let httpRequest;

    searchButton.onclick = function(element) {
        element.preventDefault();

        httpRequest = new XMLHttpRequest();

        // GET Request
        httpRequest.onreadystatechange = function() {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {
                    let response = httpRequest.responseText;
                    const searchResult = document.getElementById("results");
                    searchResult.innerHTML = response;
                } else {
                    alert("There was a problem with the request.");
                }
            }
        };
        httpRequest.open("GET", "superheroes.php?query=" + searchInput.value, true);
        httpRequest.send();
    }
};
