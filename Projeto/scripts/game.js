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
        this.quadrados = []
        this.indexTetrominoAtual = 0
        this.pilhaTetrominos = []
        this.rotacaoAtual = this.tetrominos[Math.floor(Math.random() * 7)]
        this.rotacaoAtual = 0
        this.tetromino_I = [
            [0, largura, 2*largura, 3*largura],
            [0, 1, 2, 3],
            [0, largura, 2*largura, 3*largura],
            [0, 1, 2, 3]
        ]
        this.tetromino_O = [
            [0, 1, largura, largura+1],
            [0, 1, largura, largura+1],
            [0, 1, largura, largura+1],
            [0, 1, largura, largura+1]
        ]
        this.tetromino_L1 = [
            [0, largura, 2*largura, 2*largura+1],
            [0, 1, 2, largura],
            [0, 1, largura+1, 2*largura+1],
            [2, largura, largura+1, largura+2]
        ]
        this.tetromino_L2 = [
            [0, 0+largura, 1+largura, 2+largura],
            [0, 1, 0+largura, 0+2*largura],
            [0, 1, 2, 2+largura],
            [1, 1+largura, 1+2*largura, 2*largura]
        ]

        this.tetromino_T = [
            [0, 1, 2, largura+1],
            [0, largura, largura+1, 2*largura],
            [1, largura, largura+1, largura+2],
            [1, largura, largura+1, 2*largura+1]
        ]

        this.tetromino_U = [
            [0, 2, largura, largura+1, largura+2],
            [0, 1, largura, 2*largura, 2*largura+1],
            [0, 1, 2, largura, largura+2],
            [0, 1, largura+1, 2*largura, 2*largura+1]
        ]

        this.specialTetromino = [0]

        this.tetrominos = [
            this.tetromino_I,
            this.tetromino_O,
            this.tetromino_L1,
            this.tetromino_L2,
            this.tetromino_T,
            this.tetromino_U,
            this.specialTetromino
        ]
    }

    criarTabuleiro() {
        this.quadrados = []
        for (let i=0; i<this.altura*this.largura; i++) {
            this.quadrados.push(0)
        }
    }

    desenharTabuleiro() {
        const tabuleiro = document.querySelector(".tabuleiro")
        tabuleiro.innerHTML = ""
        for (let i in this.quadrados) {
            tabuleiro.innerHTML += "<div class='quadrado'></div>"
        }
    }

    desenharTetromino(tetrominoType) {
        const quadrados = document.querySelectorAll(".quadrado")
        this.indexTetrominoAtual = Math.floor(Math.random() * 7)
        this.pilhaTetrominos.push(this.tetrominos[this.index])

        for (let i in this.tetrominos[tetrominoType][this.indexTetrominoAtual]) {
            quadrados[this.tetrominos[tetrominoType][this.indexTetrominoAtual][i]].style.backgroundColor = 'red'
        }
    }

    apagarTetromino(tetrominoType) {
        const quadrados = document.querySelectorAll(".quadrado")
        
        for (let i in this.tetrominos[tetrominoType][this.indexTetrominoAtual]) {
            quadrados[this.tetrominos[tetrominoType][this.indexTetrominoAtual][i]].style.backgroundColor = 'white'
        }
    }

    descer(tetrominoType) {
        const quadrados = document.querySelectorAll(".quadrado")
        
        for (let i in this.tetrominos[tetrominoType][this.indexTetrominoAtual]) {
            quadrados[this.tetrominos[tetrominoType][this.indexTetrominoAtual][i]]
        }
    }
}

const jogo = new Jogo(20, 10)

jogo.criarTabuleiro()
jogo.desenharTabuleiro()
jogo.desenharTetromino(1)
jogo.apagarTetromino(1)

