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
document.getElementById("seuFormulario").addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;
    let feedback = document.getElementById("feedback");

    feedback.textContent = "";

    if (nome.length < 3) {
        feedback.textContent = "❌ Nome deve ter pelo menos 3 caracteres.";
        return;
    }

    if (email.indexOf("@") === -1) {
        feedback.textContent = "❌ E-mail inválido. Digite um e-mail válido.";
        return;
    }

    if (mensagem.length < 10) {
        feedback.textContent = "❌ Mensagem deve ter pelo menos 10 caracteres.";
        return;
    }

    feedback.textContent = "✅ Mensagem enviada com sucesso!";
    feedback.style.color = "green";

    // Opcional: limpar formulário
    this.reset();
});