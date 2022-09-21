<?php

$conn = mysqli_connect('localhost','root','','subscriber');

$query = "SELECT * FROM test";

$result = mysqli_query($conn,$query);


$emails = mysqli_fetch_all($result, MYSQLI_ASSOC);


echo json_encode($emails);
