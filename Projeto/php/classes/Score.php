<?php 

class Score{
    private string $username;
    private int $score;

    function __construct(string $username, int $score)
    {
        $this->username = $username;
        $this->score = $score;
    }
}