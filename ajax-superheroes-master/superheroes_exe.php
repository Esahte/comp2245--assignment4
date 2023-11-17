<?php
// Sanitize the query parameter to prevent XSS attacks
$query = filter_var($_GET['query'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$found = false; // Flag to track if a superhero is found
?>

<!--Loop through each superhero-->
<?php foreach ($superheroes as $superhero) : ?>
<!--    Check if the query matches the superhero's alias or name (case-insensitive)-->
    <?php if (strcasecmp($superhero['alias'], $query) == 0 || strcasecmp($superhero['name'], $query) == 0) : ?>
<!--        If a match is found, print the superhero's details and set the flag to true-->
        <h3><?= htmlspecialchars($superhero['alias']); ?></h3>
        <h4>a.k.a <?= htmlspecialchars($superhero['name']); ?></h4>
        <p><?= htmlspecialchars($superhero['biography']); ?></p>
        <?php $found = true; ?>
    <?php endif; ?>
<?php endforeach; ?>

<!--If no match is found, print a not found message-->
<?php if (!$found) : ?>
    <h3 class='not-found'>Superhero isn't found</h3>
<?php endif; ?>

<?php if (empty($_GET['query'])) : ?>
<!--    If no query is provided, print a list of all superheroes-->
    <ul>
        <?php foreach ($superheroes as $superhero) : ?>
            <li><?= htmlspecialchars($superhero['alias']); ?></li>
        <?php endforeach; ?>
    </ul>
<?php endif; ?>
