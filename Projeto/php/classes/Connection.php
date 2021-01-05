<?php
    define("HOST", "localhost");
    define("USERNAME", "root");
    define("PASSWORD", "");
    define("DATABASE_NAME", "capitetris");

    class Connection{
        public static function getConnection(){
            try{
                $queryConnection = "mysql:host=".HOST.";dbname=".DATABASE_NAME;
                $connection = new PDO($queryConnection, USERNAME, PASSWORD);
                $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

                return $connection;
            }catch(PDOException $error){
                echo "ERROR: ".$error->getMessage();
            }       
        }
    }
?>