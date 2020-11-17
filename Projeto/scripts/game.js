/**
 * Classe para o jogo Rolling tetris
 */
class Jogo {
    /**
     * @param altura número de linhas do tabuleiro
     * @param largura número de colunas do tabuleeiro
     */
    constructor(altura, largura) {
        this.altura = altura
        this.largura = largura

        this.definindoTetrominos()
        this.criarTabuleiro()

        this.quadrados = document.querySelectorAll(".tabuleiro > div")
    }

    definindoTetrominos() {
        const tetromino_I = [
            [0, this.largura, 2*this.largura, 3*this.largura],
            [0, 1, 2, 3],
            [0, this.largura, 2*this.largura, 3*this.largura],
            [0, 1, 2, 3]
        ]
        const tetromino_O = [
            [0, 1, this.largura, this.largura+1],
            [0, 1, this.largura, this.largura+1],
            [0, 1, this.largura, this.largura+1],
            [0, 1, this.largura, this.largura+1]
        ]
        const tetromino_L1 = [
            [0, this.largura, 2*this.largura, 2*this.largura+1],
            [0, 1, 2, this.largura],
            [0, 1, this.largura+1, 2*this.largura+1],
            [2, this.largura, this.largura+1, this.largura+2]
        ]
        const tetromino_L2 = [
            [0, 0+this.largura, 1+this.largura, 2+this.largura],
            [0, 1, 0+this.largura, 0+2*this.largura],
            [0, 1, 2, 2+this.largura],
            [1, 1+this.largura, 1+2*this.largura, 2*this.largura]
        ]
    
        const tetromino_T = [
            [0, 1, 2, this.largura+1],
            [0, this.largura, this.largura+1, 2*this.largura],
            [1, this.largura, this.largura+1, this.largura+2],
            [1, this.largura, this.largura+1, 2*this.largura+1]
        ]
    
        const tetromino_U = [
            [0, 2, this.largura, this.largura+1, this.largura+2],
            [0, 1, this.largura, 2*this.largura, 2*this.largura+1],
            [0, 1, 2, this.largura, this.largura+2],
            [0, 1, this.largura+1, 2*this.largura, 2*this.largura+1]
        ]
    
        const specialTetromino = [0]
    
        this.tetrominos = [
            tetromino_I,
            tetromino_O,
            tetromino_L1,
            tetromino_L2,
            tetromino_T,
            tetromino_U,
            specialTetromino
        ]
    }

    /**
     * Cria todos os quadrados do tabuleiro
     * Cada quadrado deverá ter 1 de 3 estados disponíveis:
     * - estatico:  quadrados sem tetrominos
     * - tetromino: quadrados definidos com tetrominos
     * - parado: tetrominos que não podeem mais se mover pois estão em cima dee outros ou da base do jogo
     */
    criarTabuleiro() {
        const tabuleiro = document.querySelector(".tabuleiro")
        for (let i=0; i<this.altura*this.largura; i++) {
            tabuleiro.appendChild(document.createElement("div"))
        }

        const quadrados = document.querySelectorAll(".tabuleiro > div")
        quadrados.forEach((value) => {
            value.classList.add("estatico")
        })
    }

    /** 
     * Cria o próximo tetromino a cair
     */
    criarTetromino() {
        const index = Math.floor(Math.random() * 7)
        const tetrominoAtual = this.tetrominos[index]

        tetrominoAtual[0].forEach((value) => {
            this.quadrados[value].classList.remove("estatico")
            this.quadrados[value].classList.add("tetromino")
        })
    }

    /**
     * Desenha o estado atual do jogo
     */
    desenhar() {
        this.quadrados.forEach((quadrado) => {
            if(quadrado.classList.contains("tetromino"))
                quadrado.style.backgroundColor = "red"
        })
    }

    apagar() {
        this.quadrados.forEach((quadrado) => {
            if(quadrado.classList.contains("tetromino"))
                quadrado.classList.remove("tetromino")
        })
    }

    descer() {
        const quadrados = this.quadrados
        for (let i in quadrados) {
            if (quadrados[i].classList.contains("tetromino"))
                quadrados[i+this.largura].classList.add("tetromino")
        }
    }
    
    atualizar() {

    }
}


const jogo = new Jogo(20, 10)