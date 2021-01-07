<?php
    require_once("./controllers/RankingController.php");

    header("Content-Type: application/json");
    $data = json_decode(stripslashes(file_get_contents("php://input")));
    
    RankingController::showAll(intval($data->id_usuario));
?>