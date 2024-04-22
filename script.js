document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.getElementById("username");
    const emailErrorMessage = document.getElementById("emailErrorMessage");

    emailInput.addEventListener("blur", function() {
        const email = emailInput.value;
        const emailRegex = /^[^@]+@[^@]+\.[^@]+$/; 
        if (!emailRegex.test(email)) {
            emailErrorMessage.innerText = "Insira um endereço de email válido!";
        } else {
            emailErrorMessage.innerText = "";
        }
    });

    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; 

        if (username.trim() === '') {
            emailErrorMessage.innerText = "Preencha o campo de email!";
            return;
        }

        if (!passwordRegex.test(password)) {
            alert("Senha inválida! Deve conter pelo menos 8 caracteres, incluindo letras e números.");
            return;
        }

        alert("Login successful!");

        emailErrorMessage.innerText = "";
    });
});
