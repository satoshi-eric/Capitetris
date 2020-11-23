//REGULAR EXPRESSIONS

var notNumber = /[@\D$]/g;
var notLetter = /[^a-zA-Z^\s]/g;
var onlyBoth = /[^a-z0-9_-]/g;

//CADASTRO

document.getElementById("cadNome").addEventListener("input", rgxCadNome);
document.getElementById("cadTelefone").addEventListener("input", rgxCadTelefone);
document.getElementById("cadUsuario").addEventListener("input", rgxCadUsername);
document.getElementById("cadCpf").addEventListener("input", rgxCadCpf);

function rgxCadNome() {
    var cadNome = document.getElementById("cadNome").value;
    var newCadNome = cadNome.replace(notLetter, '');
    document.getElementById("cadNome").value = newCadNome;
}

function rgxCadCpf() {
    var cadCpf = document.getElementById("cadCpf").value;
    var newCadCpf = cadCpf.replace(notNumber, '');
    document.getElementById("cadCpf").value = newCadCpf;
}

function rgxCadTelefone() {
    var cadTelefone = document.getElementById("cadTelefone").value;
    var newCadTelefone = cadTelefone.replace(notNumber, '');
    document.getElementById("cadTelefone").value = newCadTelefone;
}

function rgxCadUsername() {
    var cadUsuario = document.getElementById("cadUsuario").value;
    var newCadUsuario = cadUsuario.replace(onlyBoth, '');
    document.getElementById("cadUsuario").value = newCadUsuario;
}