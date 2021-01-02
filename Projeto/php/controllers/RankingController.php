<?php
    include __DIR__."\..\Connection.php";
    include __DIR__."\..\Ranking.php";

    class RankingController{
        public static function insert(Ranking $ranking){
            try{
                $insert = "INSERT INTO tbl_ranking(`fk_id_usuario`, `level`, `score`, `lines`, `time`) VALUES (?, ?, ?, ?, ?);";
                $stm =  Connection::getConnection()->prepare($insert);
                $stm->bindValue(1, $ranking->getIdUsuario());
                $stm->bindValue(2, $ranking->getLevel());
                $stm->bindValue(3, $ranking->getScore());
                $stm->bindValue(4, $ranking->getLines());
                $stm->bindValue(5, $ranking->getTime());
                $stm->execute();
                return true;
            }catch(PDOException $error){
                echo "ERROR: ".$error;
                return false;
            }
        }
    }

?>