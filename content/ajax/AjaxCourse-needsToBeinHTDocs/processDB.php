<?php
//CONNECT TO DB
$host_name = 'localhost';
$database = 'ajaxtest';
$user_name = 'root';
$password = '';
$connect = mysqli_connect($host_name, $user_name, $password, $database); //funcion que permite conectar con DDBB

if(mysqli_connect_errno()){
    die('<p>Error al conectar al servidor de MySQL: '.mysqli_connect_error().'</p>');
}else{
    //echo '<p class="conexion">Se ha establecido la conexión al servidor MySQL !!</p>';
    // return $connect;
}

echo 'Processing...';


//Check for POST variable 
if(isset($_POST['name'])){
$name = mysqli_real_escape_string($connect, $_POST['name']);
// echo 'POST: Your name is '. $_POST['name']; 

$query = "INSERT INTO users(name) VALUES('$name')";
if(mysqli_query($connect, $query)){
    echo 'User Added';
}else {
    echo 'ERROR: '. mysqli_error($connect);
}

}

?>