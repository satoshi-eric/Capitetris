<?php
    $host = "localhost";
    $username = "root";
    $password = "";
    $database = "capitetris";
    
    function createDatabaseAndTables($host, $username, $password, $database){
        $string_connection_host = "mysql:host=".$host.";";
        try{
            $connection = new PDO($string_connection_host, $username, $password);

            $create_database = $connection->exec("CREATE DATABASE IF NOT EXISTS `$database`");
            $create_tbl_usuario = $connection->exec(
                "CREATE TABLE IF NOT EXISTS `$database`.`tbl_usuario` (
                    `id_usuario` int(11) PRIMARY KEY AUTO_INCREMENT,
                    `nome` char(100) NOT NULL,
                    `data_nascimento` date NOT NULL,
                    `cpf` char(14) NOT NULL,
                    `telefone` char(9) NOT NULL,
                    `email` char(150) NOT NULL,
                    `username` char(100) NOT NULL,
                    `password` char(255) NOT NULL
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8;");

            $create_table_tbl_ranking = $connection->exec(
                "CREATE TABLE IF NOT EXISTS `$database`.`tbl_ranking` (
                `id_ranking` int(11) PRIMARY KEY AUTO_INCREMENT,
                `fk_id_usuario` int(11) NOT NULL,
                `level` int(11) DEFAULT NULL,
                `score` int(11) DEFAULT NULL,
                `lines` int(11) DEFAULT NULL,
                `time` time DEFAULT NULL
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8;");

            $add_foreign_key_tbl_ranking = $connection->exec(
                "ALTER TABLE `$database`.`tbl_ranking`
                    ADD CONSTRAINT `tbl_ranking_ibfk_1` FOREIGN KEY (`fk_id_usuario`) REFERENCES `$database`.`tbl_usuario` (`id_usuario`);
                COMMIT;"
            );

            if($create_database){
                echo "Banco de dados criado com sucesso!<br>";
                echo "Agora é só ir até a pasta do jogar e se divertir!";
            }else{
                echo "Falha ao criar banco de dados.";
            }
        }catch(PDOException $error){
            echo "ERROR: ".$error->getMessage();
            die();
        }       
    }

    createDatabaseAndTables($host, $username, $password, $database);
?>