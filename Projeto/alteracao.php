<?php
    include "./php/validation.php";
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <link rel="shortcut icon" href="./images/favicon.ico"/>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alterar Informações</title>
    <link rel="stylesheet" href="css/alterar.css">
</head>
<body>
    <div class="container">
        <a href="tela_inicial.html" class="voltar">&lt;</a>
        <form action="#">
            <h1>Alterar informações</h1>
            <input type="text" name="#" id="altNome" class="nome" placeholder="Nome" required>
            <input type="tel" name="#" id="altTelefone" class="telefone" placeholder="Telefone" required>
            <input type="email" name="#" id="altEmail" class="email" placeholder="E-mail" required>
            <input type="password" name="#" id="altSenha" class="senha" placeholder="Senha" required>
            <input type="submit" value="Alterar">
        </form>
    </div>
    <script src="scripts/rgxAlteracao.js"></script>
</body>
</html>
