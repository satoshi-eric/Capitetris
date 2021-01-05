<?php
    include "./php/validation.php";
    $_SESSION["id_usuario"];
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
        <a href="tela_inicial.php" class="voltar">&lt;</a>
        <form action="./php/alteracao.php" method="POST">
            <h1>Alterar informações</h1>
            <input type="text" name="nome" id="altNome" class="nome" value=<?php echo $_SESSION["nome_usuario"]; ?> required>
            <input type="tel" name="telefone" id="altTelefone" class="telefone" value=<?php echo $_SESSION["telefone_usuario"]; ?> required>
            <input type="email" name="email" id="altEmail" class="email" value=<?php echo $_SESSION["email_usuario"]; ?> required>
            <input type="password" name="senha" id="altSenha" class="senha" placeholder="password" required>
            <input type="submit" value="Alterar">
        </form>
    </div>
    <script src="scripts/rgxAlteracao.js"></script>
</body>
</html>
