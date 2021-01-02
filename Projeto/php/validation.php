<?php
    session_start();
    if(!isset($_SESSION["id_usuario"])){
        header("Location: index.html");
    }else{
        echo "<div id='id_usuario' style='display: none;'>".$_SESSION["id_usuario"]."</div>";
    }
?>
