<?php
    require_once("./classes/User.php");
    require_once("./controllers/UserController.php");

    $nome = $_POST["nome"];
    $data_nascimento = $_POST["data_nascimento"];
    $cpf = $_POST["cpf"];
    $telefone = $_POST["telefone"];
    $username = $_POST["username"];
    $password = $_POST["password"];
    $email = $_POST["email"];
    
    $user = new User($nome, $data_nascimento, $cpf, $telefone, $email, $username, $password);

    if(UserController::insert($user)){
        header("Location: ../index.html");
    }else{
        header("Location: ../cadastro.html");
    }
?>