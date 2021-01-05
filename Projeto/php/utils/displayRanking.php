<?php

    function displayRanking($nome, $level, $score, $position){
        echo '
        
            <div class="rankingCard">
                <span class="rankingName">'.$nome.'</span>
                <div class="rankingSpecs">
                    <span class="rankingLevel">'.$level.'</span>
                    <span class="rankingPoints">'.$score.'</span>';
                        if($position == 1){
                            echo '<img class="imgTrophy" src="images/first.png" alt="troféu primeiro lugar">';
                        }else if($position == 2){
                            echo '<img class="imgTrophy" src="images/second.png" alt="troféu primeiro lugar">';
                        }else if($position == 3){
                            echo '<img class="imgTrophy" src="images/third.png" alt="troféu primeiro lugar">';
                        }else{
                            echo '<span class="rankingPosition">'.$position.'</span>';
                        } 
                    echo '
                </div>  
            </div>';
    }

    function displayRankingGlobal(){
        $query = "SELECT tbl_ranking.level, tbl_ranking.score, tbl_ranking.lines, tbl_ranking.time, tbl_usuario.nome
        FROM tbl_ranking 
        INNER JOIN tbl_usuario 
        ON tbl_ranking.fk_id_usuario = tbl_usuario.id_usuario 
        ORDER BY tbl_ranking.score DESC";

        $counter = 1;
        foreach(Connection::getConnection()->query($query) as $row){
            displayRanking($row["nome"], $row["level"], $row["score"], $counter);
            $counter++;
        }
    }

    function displayRankingPessoal(){
        $query = "SELECT tbl_ranking.level, tbl_ranking.score, tbl_ranking.lines, tbl_ranking.time, tbl_usuario.nome
        FROM tbl_ranking
        INNER JOIN tbl_usuario 
        ON tbl_ranking.fk_id_usuario = tbl_usuario.id_usuario WHERE tbl_ranking.fk_id_usuario = {$_SESSION["id_usuario"]}  
        ORDER BY tbl_ranking.score DESC";
        
        $counter = 1;
        foreach(Connection::getConnection()->query($query) as $row){
            displayRanking($row["nome"], $row["level"], $row["score"], $counter);
            $counter++;
        }
    }

?>