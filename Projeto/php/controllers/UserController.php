<?php
    include __DIR__."\..\Connection.php";

    class UserController{
        public static function validUser(string $email, string $cpf){
            $query = "SELECT * FROM tbl_usuario WHERE email = ? OR cpf = ?";
            $stm = Connection::getConnection()->prepare($query);
            $stm->bindValue(1, $email);
            $stm->bindValue(2, $cpf);
            $stm->execute();

            $usuario = $stm->fetch(PDO::FETCH_ASSOC);

            if($usuario["email"] == $email || $usuario["cpf"] == $cpf){
                return false;
            }else{
                return true;
            }
        }

        public static function insert(User $user){
            try{
                if(UserController::validUser($user->getEmail(), $user->getCPF())){
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

        public static function login(string $email, string $password){
            $query = "SELECT * FROM tbl_usuario WHERE email = ?;";
            $stm = Connection::getConnection()->prepare($query);
            $stm->bindValue(1, $email);
            $stm->execute();

            $data = $stm->fetch(PDO::FETCH_ASSOC);
            if($data["email"] == $email){
                $validPassword = password_verify($password, $data["password"]);
                if($validPassword){
                    //da pra gerar o token de acesso aqui , se necessário pra esse trab.
                    return true;
                }else{
                    return false;
                }
            }else{
                return false;
            }
        }
    }