<?php
    require_once("./controllers/UserController.php");   

    $username = $_POST["username"];
    $password = $_POST["password"];

    if (UserController::login($username, $password)) {
        header("Location: ../change_board.html");   
    } else {
        header("Location: ../index.html");
    }
?>