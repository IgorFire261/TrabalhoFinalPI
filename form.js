const inputName = document.getElementById("name");
const spanErrorName = document.getElementById("name-error");

const inputEmail = document.getElementById("email");
const spanErrorEmail = document.getElementById("email-error");

const spanErrorNotas = document.getElementById("nota-error");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

const inputMessage = document.getElementById("message");
const spanErrorMessage = document.getElementById("message-error");

const inputRadio = document.getElementsByName("radio");

const sendButton = document.getElementById("send-button");
sendButton.onclick = () => {
    let error = false;
    [ spanErrorName, spanErrorEmail ].forEach((e) => e.innerHTML = "");
    [ inputName, inputEmail ].forEach((e) => e.style.border = "none")
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
    checkboxes.forEach((e) => { if(e.checked) checked = true })
    if(!checked) {
        spanErrorNotas.innerHTML = 'Nenhum experiencia marcada!<button id="close-alert-button" type="button" onclick>X</button>'
        spanErrorNotas.style.display = "flex";
        document.getElementById("close-alert-button").onclick = () => spanErrorNotas.style.display = "none"
    }
    

    if (!error) {
        const notas = [];
        checkboxes.forEach((e) => { if (e.checked) notas.push(e.value) });
    
        const confirmModal = new bootstrap.Modal('#confirm-modal');
        document.getElementById("name-confirm").textContent = inputName.value;
        document.getElementById("email-confirm").textContent = inputEmail.value;
        let checkedRadio = "";
        inputRadio.forEach(radio => {
            if (radio.checked) {
                checkedRadio = radio.value;
            }
        });
        document.getElementById("radio-confirm").textContent = checkedRadio;
        
        for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            console.log(checkboxes[i].value);
         }
        }
        document.getElementById("Notas-confirm").textContent = notas;
        document.getElementById("message-confirm").textContent = inputMessage.value;
        
        confirmModal.show();
    }
    
}
