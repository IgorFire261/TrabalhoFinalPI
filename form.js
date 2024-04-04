const inputName = document.getElementById("name");
const spanErrorName = document.getElementById("name-error");

const inputEmail = document.getElementById("email");
const spanErrorEmail = document.getElementById("email-error");

const inputsNota = document.getElementsByName("nota");
const spanErrorNotas = document.getElementById("nota-error");

const inputMessage = document.getElementById("message");
const spanErrorMessage = document.getElementById("message-error");

const inputStudent = document.getElementById("student");
const inputContact = document.getElementById("option");

const sendButton = document.getElementById("send-button");
sendButton.onclick = () => {
    let error = false;
    [ spanErrorName, spanErrorCPF, spanErrorEmail ].forEach((e) => e.innerHTML = "");
    [ inputName, inputCPF, inputEmail ].forEach((e) => e.style.border = "none")
    inputMessage.style.border = "solid 1px black"
    spanErrorNotas.style.display = "none";
    

    if(inputName.value.split(" ").length < 2) {
        spanErrorName.textContent = "Nome precisa ser composto por mais de uma palavra, sendo separadas por espaço";
        inputName.style.border = "solid red 1px";
        error = true;
    }
    
    const emailContent = inputEmail.value;
    if(emailContent.length == 0 || emailContent[0] == "@" || !emailContent.includes(".") || !emailContent.includes("@") || (emailContent.indexOf(".") - emailContent.indexOf("@")) < 2) {
        spanErrorEmail.textContent = "O @ do email não pode ser o primeiro caractere e precisam existir dois caracteres entre o '@' e o '.'.";
        inputEmail.style.border = "solid red 1px"
        error = true;
    }

    if(inputMessage.value.length < 1) {
        spanErrorMessage.textContent = "Mensagem não pode ser vazia!"
        inputMessage.style.border = "solid red 1px";
        error = true;
    }
    
    let checked = false;
    inputsNota.forEach((e) => { if(e.checked) checked = true })
    if(!checked) {
        spanErrorNotas.innerHTML = 'Nenhuma atividade marcada!<button id="close-alert-button" type="button" onclick>X</button>'
        spanErrorNotas.style.display = "flex";
        document.getElementById("close-alert-button").onclick = () => spanErrorNotas.style.display = "none"
    }
    
    if(!error) {
        const notas = [];
        inputsNota.forEach((e) => { if(e.checked) notas.push(e.value) })

        const confirmModal = new bootstrap.Modal('#confirm-modal');
        document.getElementById("name-confirm").textContent = inputName.value;
        document.getElementById("email-confirm").textContent = inputEmail.value;
        document.getElementById("student-confirm").textContent = inputStudent.checked ? "Sim" : "Não";
        document.getElementById("Notas-confirm").textContent = notas;
        document.getElementById("contact-confirm").textContent = inputContact.value;
        document.getElementById("message-confirm").textContent = inputMessage.value;
        
        confirmModal.show()
    }
}
