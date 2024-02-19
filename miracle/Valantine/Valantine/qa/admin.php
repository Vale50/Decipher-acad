<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Admin Dashboard</title>
<style>
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
    }
    header {
        background-color: #333;
        color: #fff;
        padding: 20px;
        text-align: center;
    }
    nav {
        background-color: #666;
        color: #fff;
        padding: 10px;
        text-align: center;
    }
    nav a {
        color: #fff;
        text-decoration: none;
        margin: 0 10px;
    }
    .container {
        display: flex;
        justify-content: space-between;
        padding: 20px;
    }
    .results,
    .upload {
        width: 48%;
        background-color: #f0f0f0;
        padding: 20px;
        margin-bottom: 20px;
    }
    .result-item {
        margin-bottom: 10px;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
    }
    th, td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }
    th {
        background-color: #333;
        color: white;
    }
</style>
</head>
<body>

<header>
    <h1>Admin Dashboard</h1>
</header>

<nav>
    <a href="#">Home</a>
    <a href="#">Results</a>
    <a href="#">Upload Result</a>
</nav>

<div class="container my-5">
    
    
    <table>
        <thead>
            <tr>
                <th>FULL NAME</th>
                <th>E-MAIL</th>
                <th>ANSWER1</th>
                <th>ANSWER2</th>
                <th>ANSWER3</th>
                <th>ANSWER4</th>
                <th>ANSWER5</th>
                <th>ANSWER6</th>
                <th>ANSWER7</th>
                <th>ANSWER8</th>
                <th>ANSWER9</th>
                <th>ANSWER10</th>
            </tr>
        </thead>
        <tbody>
            <?php
            include_once('connection.php');

            // Check connection
            if ($con->connect_error) {
                die("Connection failed: " . $con->connect_error);
            }

            // Read all rows from the database table
            $s = "select * from answer"; 
            $result = $con->query($s);

            // Read data of each row
            while ($row = $result->fetch_assoc()) {
                echo "
                <tr>
                    <td>" . htmlspecialchars($row['fullname']) . "</td>
                    <td>" . htmlspecialchars($row['email']) . "</td>
                    <td>" . htmlspecialchars($row['question1']) . "</td>
                    <td>" . htmlspecialchars($row['question2']) . "</td>
                    <td>" . htmlspecialchars($row['question3']) . "</td>
                    <td>" . htmlspecialchars($row['question4']) . "</td>
                    <td>" . htmlspecialchars($row['question5']) . "</td>
                    <td>" . htmlspecialchars($row['question6']) . "</td>
                    <td>" . htmlspecialchars($row['question7']) . "</td>
                    <td>" . htmlspecialchars($row['question8']) . "</td>
                    <td>" . htmlspecialchars($row['question9']) . "</td>
                    <td>" . htmlspecialchars($row['question10']) . "</td>
                </tr>
                ";
            }

            ?>
        </tbody>
    </table>
</div>

</body>
</html>