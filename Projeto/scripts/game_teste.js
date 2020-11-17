let w = 10

peca_L = [
    0, 0+w, 1+w, 2+w
]



const tabuleiro = () => {
    const container_tabuleiro = document.querySelector('.tabuleiro')
    
    for(var i = 0; i < 200; i++)
        container_tabuleiro.appendChild(square())

    const squares = document.querySelectorAll(".square-teste")

    for (let i in peca_L) {
        squares[peca_L[i]].style.backgroundColor = "red"
    }

}

const square = () => {
    const squareElement = document.createElement('div')
    squareElement.setAttribute('class', 'square-teste')
    
    return squareElement
}
   

tabuleiro()
console.log('teste')