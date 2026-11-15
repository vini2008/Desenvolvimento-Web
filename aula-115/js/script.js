alert("Bem-vindo(a) ao meu portfólio!");
function apresentacao() {
    alert("Olá! Meu nome é Marcus Vinicius e sou estudante de Desenvolvimento Web. E esse é o site do meu Portifolio !!!");
}
function destacarSobre() {
    document.getElementById("sobre").style.backgroundColor = " #243e58";
    document.getElementById("sobre").style.border = "2px solid #e3eff2";
    document.getElementById("sobre").style.borderRadius = "10px";
}
function modoEscuro() {
    let corpo = document.body;
    let botao = document.getElementById("btn-tema");
    let modoAtual = corpo.style.backgroundColor;

    // Se estiver no escuro, volta para o claro
    if (modoAtual === "rgb(26, 26, 46)" || modoAtual === "#1a1a2e") {
        corpo.style.backgroundColor = "#e3eff2";
        corpo.style.color = "#2c3e50";

        document.querySelectorAll("section").forEach(function(sec) {
            sec.style.backgroundColor = "white";
            sec.style.color = "#2c3e50";
            sec.style.borderColor = "#ddd";
        });

        let nav = document.querySelector(".nav-principal");
        if (nav) {
            nav.style.backgroundColor = "#ECF0F1";
            nav.querySelectorAll("a").forEach(function(link) {
                link.style.color = "#2C3E50";
            });
        }

        document.querySelectorAll(".projeto-card").forEach(function(card) {
            card.style.backgroundColor = "#f8f9fa";
            card.style.color = "#2c3e50";
            card.style.borderColor = "#DDD";
        });

        document.querySelectorAll(".hab-item").forEach(function(item) {
            item.style.backgroundColor = "#ECF0F1";
            item.style.color = "#2c3e50";
            item.style.borderColor = "#BDC3C7";
        });

        // Muda o texto do botão para "Modo Escuro" já que agora voltou ao claro
        botao.innerText = "Modo Escuro";

    } else {
        // Se estiver no claro, ativa o modo escuro
        corpo.style.backgroundColor = "#1a1a2e";
        corpo.style.color = "#ffffff";

        document.querySelectorAll("section").forEach(function(sec) {
            sec.style.backgroundColor = "#16213e";
            sec.style.color = "#ffffff";
            sec.style.borderColor = "#0f3460";
        });

        let nav = document.querySelector(".nav-principal");
        if (nav) {
            nav.style.backgroundColor = "#16213e";
            nav.querySelectorAll("a").forEach(function(link) {
                link.style.color = "#ffffff";
            });
        }

        document.querySelectorAll(".projeto-card").forEach(function(card) {
            card.style.backgroundColor = "#16213e";
            card.style.color = "#ffffff";
            card.style.borderColor = "#0f3460";
        });

        document.querySelectorAll(".hab-item").forEach(function(item) {
            item.style.backgroundColor = "#16213e";
            item.style.color = "#ffffff";
            item.style.borderColor = "#0f3460";
        });

        // Muda o texto do botão para "Modo Claro" já que agora está escuro
        botao.innerText = "Modo Claro";
    }
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