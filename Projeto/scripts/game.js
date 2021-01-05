

const canvas = document.getElementById("tetris-canvas");
const context = canvas.getContext("2d");

context.scale(30, 30); //modifica a escala dos valores -> ao invez do quadrado ser 1px é de 20px

let linhas = 20;
let colunas = 10;
let xPos = 5;
let yPos = 0;
let bigMatrix = false; //verdadeiro caso o usuário escolha pelo tabuleiro grande

if (bigMatrix == true) {
    linhas = 44;
    colunas = 22;
    xPos = 21;
    context.scale(0.455, 0.455);
} //seta os valores apropriados para a matriz maior

let inverted = false;
let linhasEliminadas = 0;

function limparLinha() {
    let contagemLinhas = 1;
        outer: for (let y = arena.length -1; y > 0; --y) 
        {
            let n = arena[y].includes(7);
            for (let x = 0; x < arena[y].length; ++x) 
            {
                if (arena[y][x] === 0) 
                { //se tiver zero, não esta populada
                    continue outer; //então cntinua
                } 
            }
            const row = arena.splice(y, 1)[0].fill(0);
            arena.unshift(row);
            y++;

            if (n === true) 
            {
                if (inverted === false)
                {
                    canvas.style.transform = "rotate(180deg)"
                    inverted = true
                }
                else
                {
                    canvas.style.transform = "rotate(0deg)"
                    inverted = false
                }
            }

            jogador.pontos += contagemLinhas * 10;
            contagemLinhas *= 2;
            ++linhasEliminadas;
        }
    }
/**
 * a função limparLinha vai iterar sobre as linhas e colunas da matriz principal do jogo em busca de algum valor
 * que seja zero. Caso encontre, a função se repete até que todos os valores encontrados na linha sejam diferentes 
 * de zero. Se encontrar uma linha completamente cheia, ela então "zera" todos o svalores desta linha e muda a posição
 * das outras peças 1 quadrado abaixo. Procura também pela peça especial (valor 7) nas linhas. Caso encontre ('n === true')
 * rotaciona a canvas em 180 graus (caso o jogo não esteja invertido) ou volta p posição original caso o jogo ja esteja
 * invertido. Adiciona 10 pts para cada linha removida e dobra o valor para multiplas linhas
 */

function colidir(arena, jogador) {
    const [m, o] = [jogador.matriz, jogador.pos];
    for (let y = 0; y < m.length; ++y) {
        for (let x = 0; x < m[y].length; ++x){
            if (m[y][x] !== 0 && 
                (arena[y + o.y] && 
                arena [y + o.y][x + o.x]) !== 0){
                return true; 
            }
        }
    }
    return false;
}
/**
 * a função colidir utiliza a tupla para resgatar os valores de posição do jogador e matriz. Verifica então se a linha e coluna
 * possuem valores diferentes de 0 e se ultrapassará os limites da matriz. Caso haja colisão, retorna 'true'. Caso não haja
 * colisão, retorna o valor de 'false'.
 * @param (arena, jogador)
 */

function criarMatriz(linhas, colunas) {
    const matriz = [];
    while (linhas--) {
        matriz.push(new Array(colunas).fill(0))
    }
    return matriz;
}
/* é responsável por criar a matriz que armazenará a posição percorrida
pelo tetrominó ativo e depois armazenará sua posição final. POde variar
de tamanho dependendo da escolha de tamanho de tabuleiro do jogador*/

function criarTetromino(tipo) { 
    if (tipo === 'O') {
        return [
            [1, 1],
            [1, 1],
        ];
    } else if (tipo === 'I'){
        return [
            [0, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 2, 0, 0],
        ];
    } else if (tipo === 'L'){
        return [
            [0, 3, 0],
            [0, 3, 0],
            [0, 3, 3],
        ];
    } else if (tipo === 'J'){
        return [
            [0, 4, 0],
            [0, 4, 0],
            [4, 4, 0],
        ];
    } else if (tipo === 'T'){
        return [
            [5, 5, 5],
            [0, 5, 0],
            [0, 0, 0],
        ];
    } else if (tipo === 'U'){
        return [
            [0, 0, 0],
            [6, 0, 6],
            [6, 6, 6],
        ];
    } else if (tipo === 'D'){
        return [
            [7],
        ];
    }
}
/**
 * a função criarTetromino cria um diferente tetrominó dependendo da letra que é passada como parâmetro. Cada letra representa uma peça e
 * o array de cada peça possui valores diferentes para fazer a distinção entre as cores das peças. Todas as matrizes
 * são quadradas para facilitar a rotação delas sobre seu proprio eixo
 * @param tipo
 * 
 * @return array
 */

const cores = [
    null,
    '#90DDF0',
    '#FE938C',
    '#B388EB',
    '#FFF282',
    '#7BF1A8',
    '#F0B890',
    '#FE4BC1',
] //especifica cores p cada peça

function desenhar() {
    context.fillStyle = "#393939";
    context.fillRect(0, 0, canvas.width, canvas.height); //preenche o tabuleiro com a cor branca
    desenharMatriz(arena, {x: 0, y: 0});
    desenharMatriz(jogador.matriz, jogador.pos);
}
/**
 * a função desenhar primeiramente inicializa o tabuleiro com a cor branca e depois vai desenhar o tetrominó
 * seguindo os parametros passados por jogador.matriz e jogador.pos, além de deixar desenhado as peças previsamente
 * salvas, dicado pela função (arena, {x: 0, y: 0})
 */

function desenharMatriz(matriz, offset) {
    matriz.forEach((row, y) => {
        row.forEach((value, x) => {
            if(value !== 0) {
                context.fillStyle = cores[value];
                context.fillRect(x + offset.x, 
                                    y + offset.y, 
                                    0.95, 0.95);
            }
        });
    });
    
    var w = 200; //w e h mudam conforme o
    var h = 400;
    var clear = 1; 

    context.beginPath();
    for (var x=0;x<=w;x+=clear) {
        context.moveTo(x, 0);
        context.lineTo(x, h);
    }
    context.strokeStyle = '#242424';
    context.lineWidth = 0.05;
    context.stroke();

    //horizontal
    context.beginPath(); 
    for (var y=0;y<=h;y+=clear) {
        context.moveTo(0, y);
        context.lineTo(w, y);
    }
    context.strokeStyle = '#242424';
    context.lineWidth = 0.05;
    context.stroke();

    matriz.forEach((row, y) => {
        row.forEach((value, x) => {
            if(value !== 0) {
                context.fillStyle = cores[value];
                context.fillRect(x + offset.x, 
                                 y + offset.y, 
                                 0.95, 0.95);
            }
        });
    });
}
/**
 * a função desenharMatriz vai iterar sobre a matriz passada à ela por meio do parametro (matriz) para desenhar
 * seu formato na tela, atribuindo uma cor a cada bloco de cor diferente de 0. Inclui também um valor de offset
 * para dar 'kickback' na peça no caso de durante a rotação, ela colidir
 * @param (matriz, offset)
 */

function integrar (arena, jogador) {
    jogador.matriz.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                arena[y + jogador.pos.y][x + jogador.pos.x] = value;
            }
        });
    });
}
/**
 * a função integrar vai integrar os dados do jogador com a matriz de 'arena', onde ficam salvas as posições das peças
 * @param (arena, jogador)
 */

function descidaJogador() {
    jogador.pos.y++;
    if (colidir(arena, jogador)) {
        jogador.pos.y--;
        integrar(arena, jogador);
        setarTetromino();
        limparLinha();
        atualizarScore();
    }
    contadorQueda = 0;
}
/**
 * a função descidaJogador vai abaixar a posição da peça em 1 unidade e verificará se há a colisão da peça com outra
 * previamente salva em 'arena' (a matriz geral). Caso haja, a posição é decrescida em 1 unidade, então a peça fica 
 * no mesmo lugar inicial. Caso não haja colisão, vamos integrar a peça com a matriz 'arena', requisitaremos uma nova
 * peça por setarTetromino, requisita a função limparLinha para analisar se há alguma linha preenchida abaixo e atualiza
 * a pontuação do jogador
 */

function moverJogador(dir) {
    jogador.pos.x += dir;
    if (colidir(arena, jogador)){
        jogador.pos.x -= dir;
    }
} //sinistro.. <- real, olá :D
/**
 * a função moverJogador vai mover o jogador da direita para a esquerda, aumentando o valor de sua posição x. Caso haja 
 * colisão, a posição decresce da mesma quantidade em que aumentou e retorna a sua posição original.
 * @param dir
 */

function setarTetrominoInicial() {
    const pecinhas = 'OILTJUD';
    
    for (let y = arena.length -1; y >= 0; --y) {
        for (let x = 0; x < arena[y].length; ++x) {
            if (arena[y][x] === 0) {
                jogador.matriz = criarTetromino(pecinhas[pecinhas.length * Math.random() | 0]);
            } 
        }
    }
    jogador.pos.y = 0;
    jogador.pos.x = (arena[0].length / 2 | 0) - 
                    (jogador.matriz[0].length / 2 | 0);
    if (colidir(arena, jogador)){
        arena.forEach(row => row.fill(0));
        jogador.pontos = 0;
        atualizarScore();
    }
}
/**
 * a função setarTetrominoInicial é necessaria para que podemos iniciar qual tetromino será o primeiro da rodada, uma
 * vez que a função setarTetromino age como um 'buffer' de peças, mostrando qual será a proxima. Aqui, vamos iterar sobre
 * toda a matriz 'arena' para garantir que ela está 'limpa' ou totalmente preenchida com zeros. Caso esteja, poderemos 
 * selecionar uma das peças dentro as disponíveis ('OILTJUD'). Setaremos então a posição vertical do jogador como 0 e a
 * posição horizontal do jogador na metade aproximada do tabuleiro. Após, é invocada a função colidir, passando como 
 * parametros arena para zerarmos todas as posições da matriz (para não haver conflitos com os jogos anteriores) e setamos
 * a pontuação atual como zero (jogo novo).
 */

let imagem = document.getElementById("imagem")

function setarTetromino() {
    
    const pecinhas = 'OILTJUD';
    jogador.matriz = criarTetromino(pecinhas[pecinhas.length * Math.random() | 0]);
    //document.getElementById('prox-tetromino').innerText = jogador.matriz //mostra qual será o proximo tetromino a cair
    for (let y = 0; y < jogador.matriz.length; ++y) {
        if (jogador.matriz[y].includes(1)) {
            imagem.src = 'images/1.svg';
        } else if (jogador.matriz[y].includes(2)) {
            imagem.src = 'images/2.svg';
        } else if (jogador.matriz[y].includes(3)) {
            imagem.src = 'images/3.svg';
        } else if (jogador.matriz[y].includes(4)) {
            imagem.src = 'images/4.svg';
        } else if (jogador.matriz[y].includes(5)) {
            imagem.src = 'images/5.svg';
        } else if (jogador.matriz[y].includes(6)) {
            imagem.src = 'images/6.svg';
        } else if (jogador.matriz[y].includes(7)) {
            imagem.src = 'images/7.svg';
        }
    }
    jogador.pos.y = 0;
    jogador.pos.x = (arena[0].length / 2 | 0) - 
                    (jogador.matriz[0].length / 2 | 0);

    /* ====================== PERDE O JOGO ====================== */
    if (colidir(arena, jogador)){
        arena.forEach(row => row.fill(0));
        jogador.pontos = 0;
        let id_usuario = document.getElementById("id_usuario").innerHTML
        sendValues(getValues(id_usuario))
        atualizarScore();
    }
}

function getValues(id_usuario){
    const score = document.querySelector("#score_data").innerHTML
    const level = document.querySelector("#level_data").innerHTML
    const lines = document.querySelector("#lines_data").innerHTML
    const time = document.querySelector("#time_data").innerHTML

    return {
        id_usuario,
        score,
        level,
        lines,
        time 
    }
}

function sendValues(values) {
    var xhttp = new XMLHttpRequest();
    var url = "http://localhost/Capitetris/Projeto/php/receiveValuesRanking.php";
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            // var jsonData = JSON.parse(xhttp.response);
            console.log("response data: " ,xhttp.response);
        }
    }
    xhttp.send(JSON.stringify(values));
}

/**
 * a função setarTetromino é muito parecida com a função setarTetrominoInicial. O principal diferencial é que ela age
 * como um 'buffer' de peças para satisfazer a função de mostrar a peça seguinte
 */

function rotacJogador(dir) {
    const pos = jogador.pos.x;
    let offset = 1;
    rotac(jogador.matriz, dir);
    while (colidir(arena, jogador)) {
        jogador.pos.x += offset;
        offset = -(offset + (offset > 0 ? 1 : -1));
        if (offset > jogador.matriz[0].length) {
            rotac(jogador.matriz, -dir);
            jogador.pos.x = pos;
            return;
        }
    }
}
/**
 * a função criarTetromino cria um diferente tetrominó dependendo da letra que é passada como parâmetro. Cada letra representa uma peça e
 * o array de cada peça possui valores diferentes para fazer a distinção entre as cores das peças. Todas as matrizes
 * são quadradas para facilitar a rotação delas sobre seu proprio eixo
 * @param dir
 * 
 * @return bool
 */

function rotac(matriz, dir) {
    for (let y = 0; y < matriz.length; ++y) {
        for (let x = 0; x < y; ++x) {
            [
                matriz[x][y],
                matriz[y][x],
            ] = [
                matriz[y][x],
                matriz[x][y],
            ];
        }
    }

    if (dir > 0) {
        matriz.forEach(row => row.reverse());
    } else {
        matriz.reverse();
    }
}
/**
 * a função rotac tem a função de rotacionar o tetromino. Para isso, realizaremos a transposição da matriz e, logo
 * após, sua reversa.
 * @param (matriz, dir)
 */
let contadorQueda = 0;
let nivel = 1
let pontuacaoControle = 0


/**
 * a função tempoDificuldade atribui diferentes velocidades a cada nível do jogo. A velocidade do jogo decai de 50
 * vezes o nuero do nivel do jogador (resultado dado em milissegundos), até chegar va velocidade máxima de 50ms, que 
 * ocorrerá quando o jogador atinge o nível 20
 * @param nivel nivel atual do jogo
 * 
 * @return tempo para a peça cair
 */
function tempoDificuldade(nivel) {
    if (nivel >= 20) {
        return 50;
    } else {
        return 1000 - (nivel * 50);
    }
}


let tempoAnterior = 0; //vai ser util para sabermos a diferença de tempo entre a queda de uma peça e outra

/**
 * a função update vai atualizar a posição da peça, chamando a função desenhar e fazendo um xhttp "xhttpAnimationFrame(self)"
 * após avaliar se o tempo de espera entre a última queda e o momento atual for maior que o tempo expresso pelo nivel
 * de dificuldade atual do jogo, invocando a função descidaJogador. Além disso, é avaliado se a pontuação do jogador
 * é maior que 0 e se é multipla de 300. Caso seja, o nível do jogo será aumentado
 * @param tempo
 */

function update(tempo = 0) {
    const deltaTempo = tempo - tempoAnterior;
    tempoAnterior = tempo;
    
    contadorQueda += deltaTempo;
    if (contadorQueda > tempoDificuldade(nivel)) {
        descidaJogador();
    }

    desenhar();
    requestAnimationFrame(update);
}

let nivelDisplay = document.querySelector('.level > .content-game-data')
let linesDisplay = document.querySelector('.lines > .content-game-data')

function atualizarScore() {
    document.querySelector('#score_data').innerHTML = jogador.pontos
    document.querySelector("#score_data").setAttribute("score", jogador.pontos)
    linesDisplay.innerHTML = linhasEliminadas
    // Verificação para aumentar o nível
    if (jogador.pontos > 0 && jogador.pontos % 300 === 0 && jogador.pontos > pontuacaoControle) {
        nivel++
        pontuacaoControle += 300
        nivelDisplay.innerHTML = nivel
    }
}

let arena = criarMatriz(linhas, colunas); //cria a matriz geral 'arena' que armazenará as peças salvas

const jogador = {
    pos: {x: 0, y: 0},
    matriz: null,
    pontos: 0,
}

/**
 * aqui estaremos realizando diferentes operações caso o usuario pressione as teclas direcionais do teclado, 
 * resultando na mudança da posição do tetrominó
 */
document.addEventListener('keydown', event => {
    if (event.keyCode === 37){
        moverJogador(-1);
    } else if (event.keyCode === 39){
        moverJogador(1);
    } else if (event.keyCode === 40){
        descidaJogador();
    } else if (event.keyCode === 38) {
        rotacJogador(1);
    }
});

 
// Função para calcular o tempo de partida
let convertSecToMin = function(segundos) {
    let sec = 0;
    let min = 0;

    if (segundos < 60) {
        sec = segundos.toFixed(0);
    } else if (segundos < 3600) {
        sec = (segundos % 60).toFixed(0);
        min = (segundos / 60).toFixed(0);
    }

    if (sec < 10 && min < 10) {
        return `0${min}:0${sec}`
    } else if (sec >= 10 && min < 10) {
        return `0${min}:${sec}`
    } else if (sec < 10 && min >= 10) {
        return `${min}:0${sec}`
    } else {
        return `${min}:${sec}`
    }
}

const tempoJogador = document.getElementsByClassName("content-game-data")[3];

let segundos = 0
let tempo


let showTime = function() {
    segundos++
    tempo = convertSecToMin(segundos);
    tempoJogador.innerHTML = tempo;
}

let updateTime = function() {
    setInterval(showTime, 1000)
}

desenhar()

 function play() {
     
    setarTetrominoInicial();
    setarTetromino();
    atualizarScore();
    update();
    updateTime()
 }


