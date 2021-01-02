<?php
    require_once("./controllers/UserController.php");   

    $username = $_POST["username"];
    $password = $_POST["password"];

    if (UserController::login($username, $password)) {
        // echo "logado";
        header("Location: ../change_board.html");   
    } else {
        // echo "dados inválidos";
        header("Location: ../index.html");
    }
?>