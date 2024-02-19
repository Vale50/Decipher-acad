<?php

$con = mysqli_connect('localhost', 'root', '');

// Check the connection
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}

mysqli_select_db($con, 'decipher_academy');

$s = "select * from answer"; 


// Execute queries
$result = mysqli_query($con, $s);


// Check query execution
if (!$result ) {
    die("Query failed: " . mysqli_error($con));
}

// Now you can use $result and $cd in your code.
?>