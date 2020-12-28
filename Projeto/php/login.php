<?php
    require_once("./controllers/UserController.php");

    $email = "vitor.kogawa.roberto33@example.com";
    $password = "123456";

    UserController::login($email, $password);
?>