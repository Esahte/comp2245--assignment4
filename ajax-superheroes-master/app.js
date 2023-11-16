"use strict"; // Enforces strict mode to catch common JavaScript pitfalls

window.onload = function() { // This function will run after the page has finished loading
    const searchButton = document.getElementById("search-btn"); // Get the search button element
    const searchInput = document.getElementById("search-box"); // Get the search input element
    let httpRequest; // Declare a variable for the HTTP request

    searchButton.onclick = function(element) { // This function will run when the search button is clicked
        element.preventDefault(); // Prevent the default form submission behavior

        httpRequest = new XMLHttpRequest(); // Create a new HTTP request

        // GET Request
        httpRequest.onreadystatechange = function() { // This function will run whenever the readyState property changes
            if (httpRequest.readyState === XMLHttpRequest.DONE) { // The request has been completed
                if (httpRequest.status === 200) { // The request was successful
                    let response = httpRequest.responseText; // Get the response text
                    const searchResult = document.getElementById("results"); // Get the result element
                    searchResult.innerHTML = response; // Insert the response text into the result element
                } else { // The request was not successful
                    alert("There was a problem with the request."); // Alert the user about the problem
                }
            }
        };
        const url = "superheroes.php?query=" + encodeURIComponent(searchInput.value); // Encode the input value to safely include it in the URL
        httpRequest.open("GET", url, true); // Initialize the request
        httpRequest.send(); // Send the request
    }
};

