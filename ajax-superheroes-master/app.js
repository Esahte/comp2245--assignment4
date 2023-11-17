$(document).ready(() => {
    // Get the search button element
    const searchButton = $('#search-btn');

    // Add a click event listener to the search button
    searchButton.click((e) => {
        // Prevent the default form submission behavior
        e.preventDefault();

        // Get the search input element
        const searchInput = $('#search-box');

        // Construct the URL for the AJAX request with the search query parameter
        const url = `superheroes.php?query=${encodeURIComponent(searchInput.val())}`;

        // Send an AJAX GET request to the server with the search query
        $.ajax(url, {
            method: 'GET'
        })
        // If the request is successful, display the response in the result element
        .done(response => $('#results').html(response))
        // If the request fails, display an alert message
        .fail(() => alert('There was a problem with the request.'));
    });
});
