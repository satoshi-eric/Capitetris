<?php
    include "./php/validation.php";
    include "./php/Connection.php";

    function displayRanking(){
        $query = "SELECT tbl_ranking.level, tbl_ranking.score, tbl_ranking.lines, tbl_ranking.time, tbl_usuario.nome
        FROM tbl_ranking 
        INNER JOIN tbl_usuario 
        ON tbl_ranking.fk_id_usuario = tbl_usuario.id_usuario 
        ORDER BY tbl_ranking.score DESC";

        foreach(Connection::getConnection()->query($query) as $row){
            echo '
    
                <div class="rankingCard">
                    <span class="rankingName">'.$row["nome"].'</span>
                    <div class="rankingSpecs">
                        <span class="rankingLevel">'.$row["level"].'</span>
                        <span class="rankingPoints">'.$row["score"].'</span>    
                        <img class="imgTrophy" src="images/first.png" alt="troféu primeiro lugar">
                    </div>  
                </div>
            
            ';
        }
    }
?>

<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <link rel="shortcut icon" href="./images/favicon.ico"/>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ranking</title>
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
                        <span class="rankingOption">Global</span>
                    </div>
                    <div class="rankingNav">
                        <span class="rankingOption">Pessoal</span>
                    </div>
                </div>
                <!-- <div class="rankingCard">
                    <span class="rankingName">Usuário</span>
                    <div class="rankingSpecs">
                        <span class="rankingLevel">LVL 4</span>
                        <span class="rankingPoints">4000 PTS</span>
                        <img class="imgTrophy" src="images/first.png" alt="troféu primeiro lugar">
                    </div>
                    
                </div>
                <div class="rankingCard">
                    <span class="rankingName">Usuário</span>
                    <div class="rankingSpecs">
                        <span class="rankingLevel">LVL 3</span>
                        <span class="rankingPoints">3000 PTS</span>
                        <img class="imgTrophy" src="images/second.png" alt="troféu segundo lugar">
                    </div>
                </div>
                <div class="rankingCard">
                    <span class="rankingName">Usuário</span>
                    <div class="rankingSpecs">
                        <span class="rankingLevel">LVL 2</span>
                        <span class="rankingPoints">2000 PTS</span>
                        <img class="imgTrophy" src="images/third.png" alt="troféu terceiro lugar">
                    </div>
                </div>
                <div class="rankingCard">
                    <span class="rankingName">Usuário</span>
                    <div class="rankingSpecs">
                        <span class="rankingLevel">LVL 1</span>
                        <span class="rankingPoints">1000 PTS</span>
                        <span class="rankingPosition">4</span>
                    </div>
                </div> -->
                <?php displayRanking(); ?>
            </div>
        </div>
    </body>
</html>