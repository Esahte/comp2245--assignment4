# comp2245--assignment4

This is Assignment 4 for Esahtengang Asonganyi.

# Avengers Character Search

This web application allows users to search for characters from the Avengers series by their full name or alias and
displays information about the character if found. If the character is not found, it displays a message indicating that
the superhero was not found. If no search query is provided, it displays a list of all the character aliases.

## Files

The application consists of the following files:

1. `index.html`: This file sets up the structure of the web page. It includes a header with the title "Avengers
   Character Search", a search box where users can enter a character's full name or alias, and a search button to
   initiate the search. There's also a section to display the search results.

2. `styles.css`: This file contains the styles for the web page. It sets the font, colors, and layout of the elements on
   the page. For example, it sets the background color of the page to a light gray, the header to a dark blue, and the
   search button to a bright red. It also sets the font for the entire page to 'Rubik', a sans-serif font.

3. `app.js`: This JavaScript file handles the client-side functionality of the web application. It sends the user's
   search query to the server, receives the server's response, and updates the page with the search results.

4. `superheroes.php`: This PHP file handles the server-side logic of the application. It contains an array of Avengers
   characters, each with an id, name, alias, and biography. When a GET request is made with a query parameter, the
   script searches the array for a character whose name or alias matches the query. If a match is found, it returns the
   character's alias, name, and biography. If no match is found, it returns a message saying "Superhero not found". If
   no query parameter is provided, it returns a list of all the character aliases.

## Usage

To use the application, simply enter a character's full name or alias into the search box and click the "Search" button.
The application will display information about the character if found, or a "Superhero not found" message if not found.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT
