<?php
    include __DIR__."\..\classes\Connection.php";
    include __DIR__."\..\classes\Ranking.php";

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

        public static function showAll(int $id_usuario){
            try{
                $query = "SELECT tbl_usuario.username, tbl_ranking.score FROM tbl_ranking INNER JOIN tbl_usuario ON tbl_ranking.fk_id_usuario = tbl_usuario.id_usuario WHERE tbl_usuario.id_usuario = $id_usuario ORDER BY tbl_ranking.score DESC LIMIT 10";
                $json = array();
                foreach(Connection::getConnection()->query($query) as $row){
                    array_push($json,  array("username" => $row["username"], "score" => $row["score"] ));
                }

                echo json_encode($json);
            }catch(PDOException $error){
                echo "ERROR: ".$error;
                return false;
            }
        }
    }

?>