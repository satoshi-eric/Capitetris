<?php
    require_once("./controllers/RankingController.php");

    header("Content-Type: application/json");
    $data = json_decode(stripslashes(file_get_contents("php://input")));

    RankingController::insert(new Ranking($data->id_usuario, $data->level, $data->lines, $data->score, $data->time));
    RankingController::showAll(intval($data->id_usuario));
?>