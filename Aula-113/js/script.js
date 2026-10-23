alert("Bem-vindo(a) ao meu portfólio!");
function apresentacao() {
    alert("Olá! Meu nome é Marcus Vinicius e sou estudante de Desenvolvimento Web. E esse é o site do meu Portifolio !!!");
}
function alterarTitulo() {
    document.getElementById("titulo-principal").innerHTML = "Portfólio Profissional - " + prompt("Digite seu nome:");
}
function destacarSobre() {
    document.getElementById("sobre").style.backgroundColor = "#ee8d43";
    document.getElementById("sobre").style.border = "2px solid #7d6a0b";
    document.getElementById("sobre").style.borderRadius = "10px";
}
let clique = 0;

function contarClique() {
    clique = clique + 1;
    document.getElementById("contador").innerHTML = clique;
}

function modoEscuro() {
    document.body.style.backgroundColor = "#1a1a2e";
    document.body.style.color = "#ffffff";
    document.querySelectorAll(".card").forEach(function(card) {
        card.style.backgroundColor = "#16213e";
        card.style.color = "#ffffff";
        card.style.borderColor = "#0f3460";
    });
}