<?php
if(!empty($_POST["send"])) {
    
    $fullname = $_POST["fullname"]; 
    $email = $_POST["email"];
    $question1 = $_POST["question1"]; 
    $question2 = $_POST["question2"];
    $question3 = $_POST["question3"];
    $question4 = $_POST["question4"];
    $question5 = $_POST["question5"];
    $question6 = $_POST["question6"];
    $question7 = $_POST["question7"];
    $question8 = $_POST["question8"];
    $question9 = $_POST['question9'];
    $question10 = $_POST['question10'];
    
$con = mysqli_connect('localhost', 'root', '');

mysqli_select_db($con, 'decipher_academy');
    mysqli_query($con, "INSERT INTO answer (fullname, email, question1, question2, question3, question4, question5, question6, question7, question8, question9, question10) VALUES ('" . $fullname. "', '" . $email. "','" . $question1. "','" . $question2. "', '" . $question3. "', '" . $question4. "','" . $question5. "','" . $question6. "','" . $question7. "','" . $question8. "', '" . $question9. "','" . $question10."')");
    $insert_id = mysqli_insert_id($con);
    //if(!empty($insert_id)) {

       $type = "success";
    //}

    
}
require_once "index.html";



    
         
    
?>