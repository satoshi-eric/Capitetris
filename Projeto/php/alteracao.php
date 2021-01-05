<?php
    session_start();
    require_once("./classes/User.php");
    require_once("./controllers/UserController.php");

    $id = $_SESSION["id_usuario"];
    $nome = $_POST["nome"];
    $telefone = $_POST["telefone"];
    $senha = password_hash($_POST["senha"], PASSWORD_ARGON2ID) ;
    $email = $_POST["email"];

    if(UserController::update($nome, $telefone, $email, $senha, $id)){
        // echo "Dados atualizados com sucesso!";
        header("Location: ../change_board.php");
    }else{
        header("Location: ../../alteracao.php");
    }
?>