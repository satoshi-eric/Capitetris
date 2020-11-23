//REGULAR EXPRESSIONS

var notNumber = /[@\D$]/g;
var notLetter = /[^a-zA-Z^\s]/g;
var onlyBoth = /[^a-z0-9_-]/g;

//ALTERACAO

document.getElementById("altNome").addEventListener("input", rgxAltNome);
document.getElementById("altTelefone").addEventListener("input", rgxAltTelefone);

function rgxAltNome() {
    var altNome = document.getElementById("altNome").value;
    var newAltNome = altNome.replace(notLetter, '');
    document.getElementById("altNome").value = newAltNome;
}

function rgxAltTelefone() {
    var altTelefone = document.getElementById("altTelefone").value;
    var newAltTelefone = altTelefone.replace(notNumber, '');
    document.getElementById("altTelefone").value = newAltTelefone;
}