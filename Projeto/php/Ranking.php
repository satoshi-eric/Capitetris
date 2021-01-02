<?php 
    class Ranking{
        private int $id_usuario;
        private int $level;
        private int $lines;
        private int $score;
        private string $time;

        public function __construct(int $id_usuario, int $level, int $lines, int $score, string $time)
        {
            $this->id_usuario = $id_usuario;
            $this->level = $level;
            $this->lines = $lines;
            $this->score = $score;
            $this->time = $time;
        }

        //============== ID_USUARIO ==============/
        public function getIdUsuario(){
            return $this->id_usuario;
        }


        //============== LEVEL ==============/
        public function getLevel(){
            return $this->level;
        }

        public function setLevel(int $level){
            $this->level = $level;
        }


        //============== LINES ==============/
        public function getLines(){
            return $this->lines;
        }

        public function setLines(int $lines){
            $this->lines = $lines;
        }


        //============== SCORE ==============/
        public function getScore(){
            return $this->score;
        }

        public function setScore(int $score){
            $this->score = $score;
        }


        //============== TIME ==============/
        public function getTime(){
            return $this->time;
        }

        public function setTime(string $time){
            $this->time = $time;
        }
    }
