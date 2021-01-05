<?php
    function displayRanking(){
        $query = "SELECT tbl_ranking.score, tbl_usuario.username
        FROM tbl_ranking
        INNER JOIN tbl_usuario 
        ON tbl_ranking.fk_id_usuario = tbl_usuario.id_usuario WHERE tbl_ranking.fk_id_usuario = {$_SESSION["id_usuario"]}
        ORDER BY tbl_ranking.score DESC LIMIT 5";

        foreach(Connection::getConnection()->query($query) as $row){
            echo '
    
                <div class="card-ranking">
                    <p class="nickname">'.$row["username"].'</p>
                    <p class="points">Pontuação: '.$row["score"].'</p>
                </div>
            
            ';
        }
    }

?>