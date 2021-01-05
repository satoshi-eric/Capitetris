<?php
    include "./php/validation.php";
    include "./php/Connection.php";
    include "./php/utils/displayRanking.php";
?>

<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <link rel="shortcut icon" href="./images/favicon.ico"/>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ranking Pessoal</title>
        <link rel="stylesheet" href="css/styles.css">
        <link rel="stylesheet" href="css/ranking.css">
    </head>
    <body>
        <a href="tela_inicial.php" class="voltar">&lt;</a>
        <div class="container">
            <div class="rankingTitle">
                <img class="imgTrophy" src="./images/trophy.png" alt="troféu">
                <h1>Ranking</h1>
                <img class="imgTrophy" src="./images/trophy.png" alt="troféu">
            </div>
            <div class="rankingWrapper">
                <div class="rankingNavWrapper">
                    <div class="rankingNav">
                        <a href="./ranking_global.php" class="rankingOption">Global</a>    
                    </div>
                    <div class="rankingNav">
                        <div class="rankingNav">
                            <a href="./ranking_pessoal.php" class="rankingOption">Pessoal</a>    
                        </div>
                    </div>
                </div>
                <?php displayRankingPessoal(); ?>
            </div>
        </div>
    </body>
</html>