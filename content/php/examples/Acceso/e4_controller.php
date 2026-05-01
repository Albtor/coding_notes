<?php

if (isset($_POST['user']) || isset($_POST['contraseña'])){
    // $_SESSION['resultado'] = "";
    $usuario = $_POST["user"];
    $password = $_POST["contraseña"];

    if ($usuario != "Alberto" || $password != "1234"){
    $loginResultado = "Acceso No permitido";
    $_SESSION['resultado'] = $loginResultado;
    // var_dump($_SESSION['resultado']);
    header('Location: index.php');
        
    }else {
    $loginResultado = "Acceso permitido";
    $_SESSION['resultado'] = $loginResultado;
    header('Location: e4_view.php?'.$loginResultado);
    }

}

else{
  
}


/* Cuando se quiere el else se niega los dos.  En caso de incluir una pagina
 valida, se podría acceder solo poniendo la url*/

// if (isset($_POST['user']) && isset($_POST['contraseña'])):
?>
