<?php
//CONNECT TO DB
$host_name = 'localhost';
$database = 'ajaxtest';
$user_name = 'root';
$password = '';
$connect = mysqli_connect($host_name, $user_name, $password, $database); //funcion que permite conectar con DDBB

$query = 'SELECT * FROM users';

//GET Result
$result = mysqli_query($connect, $query);

//Fetch Data
$users = mysqli_fetch_all($result, MYSQLI_ASSOC);

echo json_encode($users);

?>