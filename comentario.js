function validarFormulario() {
    var nome = document.getElementById('name2').value;
    var comentario = document.getElementById('message2').value;

    if (nome.trim() === '') {
        alert('Por favor, preencha o campo Nome.');
        return false;
    }

    if (comentario.trim() === '') {
        alert('Por favor, preencha o campo Comentário.');
        return false;
    }

    return true;
}