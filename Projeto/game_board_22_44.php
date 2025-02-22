<?php
    include "./php/validation.php";
    include "./php/classes/Connection.php";
    include "./php/utils/displayRankingGame.php";
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <link rel="shortcut icon" href="./images/favicon.ico"/>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/game_board_22_44.css" type="text/css">
    <title>Capitetris</title>
</head>
<body>
    <div class="container">

        <!-- Ranking -->
        <div class="ranking-container">
            <p class="title-tela-inicial">Capitetris</p>
            <div class="ranking-card-container" id="ranking_card_container">
                <!-- <?php displayRanking(); ?> -->
            </div>
            <div class="navigation">
                <div class="nav_logout iconNav">
                    <a href="./php/logout.php">
                        <img src="./images/logoutAlt.png" class="iconNav" alt="icon_sair">
                    </a>
                </div>
                <div class="nav_ranking iconNav">
                    <a href="ranking_global.php">
                        <img src="./images/trophy.png" class="iconNav" alt="icon_trofeu">
                    </a>
                </div>
                <div class="nav_user iconNav">
                    <a href="alteracao.php">
                        <img src="./images/user.png" class="iconNav" alt="icon_usuario">
                    </a>
                </div>
            </div>
        </div>

        <!-- <div class="start">
            <button onclick="play()">start</button>
            <button onclick="set10x20()">10x20</button>
            <button onclick="set22x44()">22x44</button>
        </div> -->

        <!-- Canvas para o tetris -->
        <canvas id="tetris-canvas" width="300" height="600"></canvas>

        <!-- Dados do Jogo & Opções de jogo-->
        <div class="game-data">
            <div class="next-piece">
                <img src="#" id="imagem" alt="tetromino">
            </div>
            <div class="level">
                <p class="title-game-data">Level:</p>
                <p class="content-game-data" id="level_data">1</p>
            </div>
            <div class="score">
                <p class="title-game-data">Score:</p>
                <p class="content-game-data" id="score_data">0</p>
            </div>
            <div class="lines">
                <p class="title-game-data">Lines:</p>
                <p class="content-game-data" id="lines_data">0</p>
            </div>
            <div class="time">
                <p class="title-game-data">Time: </p>
                <p class="content-game-data" id="time_data">00:00</p>
            </div>
            <button onclick="play()">Start</button>
        </div>
    </div>

    <script src="./scripts/game_board_22_44.js"></script>
    <script>
        let id_usuario = document.getElementById("id_usuario").innerHTML
        console.log(id_usuario)
        getRankings(id_usuario)
    </script>
</body>
</html>