<?php
echo'Working ..';

$conn = mysqli_connect('localhost','root','','subscriber');

if(isset($_POST['email'])){
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    // echo "the email: " +$_POST['email'] ."Subscribed";
    echo "Subscribed";


    $query = "INSERT INTO test(email) VALUE('$email')";

    if(mysqli_query($conn, $query)){
        echo 'Email Added Successfuly';
    }else{
        echo 'Email not Added' .mysqli_error($conn);
    }
}

