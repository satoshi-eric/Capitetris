<?php
    class User{
        private string $nome;
        private string $data_nascimento;
        private string $cpf;
        private string $telefone;
        private string $email;
        private string $username;
        private string $password;

        public function __construct(string $nome, string $data_nascimento, string $cpf, string $telefone, string $email, string $username, string $password)
        {
            $this->nome = $nome;
            $this->data_nascimento = $data_nascimento;
            $this->cpf = $cpf;
            $this->telefone = $telefone;
            $this->email = $email;
            $this->username = $username;
            $this->password = password_hash($password, PASSWORD_ARGON2ID);
        }
        
        //============== NOME ==============/
        public function getNome(){
            return $this->nome;
        }

        public function setNome(string $nome){
            $this->nome = $nome;
        }



        //============== DATA DE NASCIMENTO ==============/
        public function getDataNascimento(){
            return $this->data_nascimento;
        }

        public function setDataNascimento(string $data_nascimento){
            $this->data_nascimento = $data_nascimento;
        }



        //============== CPF ==============/
        public function getCPF(){
            return $this->cpf;
        }

        public  function setCPF(string $cpf){
            $this->cpf = $cpf;
        }



        //============== TELEFONE ==============/
        public function getTelefone(){
            return $this->telefone;
        }

        public function setTelefone(string $telefone){
            $this->telefone = $telefone;
        }

        //============== EMAIL ==============/
        public function getEmail(){
            return $this->email;
        }

        public function setEmail(string $email){
            $this->email = $email;
        }

        //============== USERNAME ==============/
        public function getUsername(){
            return $this->username;
        }

        public function setUsername(string $username){
            $this->username = $username;
        }

        
        
        //============== PASSWORD ==============/
        public function getPassword(){
            return $this->password;
        }
    }

?>