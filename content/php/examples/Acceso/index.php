<?php
session_start();
 //IMPORTANTE: La funci�n setcookie() debe aparecer ANTES de la etiqueta <html>.
// Si $_COOKIE[] no tiene valor, se le otorga un valor nulo.
$sesion=isset($_COOKIE["visita"])?$_COOKIE["visita"]:null;

// Si la $sesion (la cookie) tiene ya un valor, se le incrementa el valor.
if($sesion!=null){
	$sesion+=1;
	setcookie("visita", $sesion);
	echo "Cookie: Visita nº $sesion";
}
// En cambio, si no tiene valor, es decir, no se haya accedido a la p�gina
// nunca, se le da un valor principal a la cookie.
else{
	setcookie("visita", 1);
	echo "Cookie: Visita nº $sesion";
}

require "e4_controller.php"

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Acceso</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="main.css">

</head>
<body>
<div class="div">
<form action="index.php"class="formulario" method="POST">

  <div class="form-group">
    <h3>Login</h3>
    <label for="user">User:</label>
    <input name="user" type="text" class="form-control" id="user" required>
    
  </div>
  <div class="form-group">
    <label for="contraseña">Password:</label>
    <input name="contraseña"  type="password" class="form-control"  id="contraseña" required>
  </div>
  

  <button type="submit" class="btn btn-primary">Acceder</button>
  <p class="message">Crea una nueva <a href="#">cuenta</a></p>
  <?php 
  if($_SESSION['resultado'] == "Acceso No permitido"):
  echo $_SESSION['resultado']; 
  endif;
  ?>
  </div>

</body>
</html>