<?php
    require_once("./controllers/UserController.php");

    $username = $_POST["username"];
    $password = $_POST["password"];

    UserController::login($username, $password);
?>