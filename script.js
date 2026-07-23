const userEmail = "diogo@testy.com.br";
const userSenha = "testy2026";

const senha = document.querySelector("#senha");
const verSenhaBtn = document.querySelector("#verSenhaBtn");

if (verSenhaBtn && senha) {
  verSenhaBtn.addEventListener("click", function() {
    const estaVisivel = verSenhaBtn.classList.toggle("visivel");

    if (senha.type === "password") {
      senha.type = "text";
      verSenhaBtn.setAttribute("aria-label", "Esconder senha");
      verSenhaBtn.setAttribute("aria-pressed", "true");
    } else {
      senha.type = "password";
      verSenhaBtn.setAttribute("aria-label", "Mostrar senha");
      verSenhaBtn.setAttribute("aria-pressed", "false");
    }

    if (estaVisivel) {
      verSenhaBtn.setAttribute("title", "Senha visível");
    } else {
      verSenhaBtn.setAttribute("title", "Mostrar senha");
    }
  });
}

const formulario = document.querySelector("#form");
const email = document.querySelector("#email");
const emailErro = document.querySelector("#email-erro");
const senhaErro = document.querySelector("#senha-erro");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    senhaErro.textContent = "";
    emailErro.textContent = "";
    
    if (senha.value === "") {
        senhaErro.textContent = "A senha não pode ficar vazia.";
    } 
    if (email.value === "" || !email.value.includes("@")) {
        emailErro.textContent = "Preencha o campo de e-mail.";
    } 
    if (emailErro.textContent === "" && senhaErro.textContent === "") {
        if (email.value === userEmail && senha.value === userSenha) {
            alert("Login realizado com sucesso!");
        } else {
            alert("E-mail ou senha incorretos!");
        }
    }
});