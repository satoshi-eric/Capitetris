<?php
    include __DIR__."\..\classes\Connection.php";
    // include __DIR__."\..\classes\User.php";

    class UserController{
        public static function validUser(string $username, string $cpf){
            $query = "SELECT * FROM tbl_usuario WHERE username = ? OR cpf = ?";
            $stm = Connection::getConnection()->prepare($query);
            $stm->bindValue(1, $username);
            $stm->bindValue(2, $cpf);
            $stm->execute();

            $usuario = $stm->fetch(PDO::FETCH_ASSOC);

            if($usuario["username"] == $username || $usuario["cpf"] == $cpf){
                return false;
            }else{
                return true;
            }
        }

        public static function insert(User $user){
            try{
                if(UserController::validUser($user->getusername(), $user->getCPF())){
                    $insert = "INSERT INTO tbl_usuario(`nome`, `data_nascimento`, `cpf`, `telefone`, `email`, `username`, `password`) VALUES (?, ?, ?, ?, ?, ?, ?);";
                    $stm =  Connection::getConnection()->prepare($insert);
                    $stm->bindValue(1, $user->getNome());
                    $stm->bindValue(2, $user->getDataNascimento());
                    $stm->bindValue(3, $user->getCPF());
                    $stm->bindValue(4, $user->getTelefone());
                    $stm->bindValue(5, $user->getEmail());
                    $stm->bindValue(6, $user->getUsername());
                    $stm->bindValue(7, $user->getPassword());
                    $stm->execute();

                    return true;
                }else{
                    return false;
                } 
            }catch(PDOException $error){
                echo "ERROR: ".$error;
            }
        }

        public static function update(string $nome, string $telefone, string $email, string $senha, int $id){
            try{
                $insert = "UPDATE tbl_usuario SET `nome` = ?, `telefone` = ?, `email` = ?,  `password` = ? WHERE id_usuario = ?;";
                $stm =  Connection::getConnection()->prepare($insert);
                $stm->bindValue(1, $nome);
                $stm->bindValue(2, $telefone);
                $stm->bindValue(3, $email);
                $stm->bindValue(4, $senha);
                $stm->bindValue(5, $id);
                $stm->execute();

                return true;
            }catch(PDOException $error){
                echo "ERROR: ".$error;
            }
        }

        public static function login(string $username, string $password){
            $query = "SELECT * FROM tbl_usuario WHERE username = ?;";
            $stm = Connection::getConnection()->prepare($query);
            $stm->bindValue(1, $username);
            $stm->execute();

            $data = $stm->fetch(PDO::FETCH_ASSOC);
            if($data["username"] == $username){
                $validPassword = password_verify($password, $data["password"]);
                if($validPassword){
                    session_start();
                    $_SESSION["id_usuario"] = $data["id_usuario"];
                    $_SESSION["nome_usuario"] = $data["nome"];
                    $_SESSION["cpf_usuario"] = $data["cpf"];
                    $_SESSION["telefone_usuario"] = $data["telefone"];
                    $_SESSION["email_usuario"] = $data["email"];
                    $_SESSION["username_usuario"] = $data["username"];
                    $_SESSION["password_usuario"] = $data["password"];
                    return true;
                }else{
                    return false;
                }
            }else{
                return false;
            }
        }
    }