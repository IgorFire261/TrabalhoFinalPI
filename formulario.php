<!DOCTYPE php>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <META http-equiv="Content-Type" content="text/html; charset= ISO-8859-1">
    <title>Pac-Man</title>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
        <link rel="stylesheet" href="style.css">
  
</head>

<body>
    <?php
        include("header.php");
    ?>
    <main id="form-body">
        <form class="form-container" action="login.php" method="post">
            <div class="box-container">
                <h2>Contato</h2>
                <p>(*) Campo obrigatório</p>
                <div class="input-container">
                    <label for="name">Nome*</label>
                    <input type="text" name="name" id="name" required>
                    <span id="name-error"></span>
                </div>
                <div class="input-container">
                
                    <label for="email">Email*</label>
                    <input type="email" name="email" id="email" placeholder="email@email.com">
                    <span id="email-error"></span>
                </div>
                
                <div class="input-container">
                    <label for="message">Tem alguma sugestao para nos?</label>
                    <br>
                    <textarea name="message" id="message" cols="15" rows="5" maxlength="2000"></textarea>
                    <br>
                </div>
                <div id="notas-container" class="input-container">
                    <div id="notas-container" class="input-container">
                        <p>Classifique sua experiencia com o jogo:</p>
                        <div class="check-align"><input type="checkbox" name="facil" value="Facil, queria mais dificil" id="uma"><label for="uma">  Facil, queria mais dificil</label> <span id="radio-error"></span></div>
                        <div class="check-align"><input type="checkbox" name="legalzin" value=" Foi legalzin" id="tres"><label for="tres"></label>  Foi legalzin<span id="radio-error"></span></div>
                        <div class="check-align"><input type="checkbox" name="divertido" value=" Me diverti" id="duas"><label for="duas"></label>  Me diverti<span id="radio-error"></span></div>
                        <div class="check-align"><input type="checkbox" name="esperando" value="Esperando pelo proximo!" id="quatro"><label for="quatro"></label>  Esperando pelo proximo!<span id="radio-error"></span></div>
                        <div id="nota-error" class="alert alert-warning" role="alert"
                            style="display: none; justify-content: space-between;"><button id="close-alert-button"
                                type="button">X</button></div>
                    </div>
                    <div id="notas-container" class="input-container">
                        <p>Qual a sua nota para o Pac-Man?</p>
                        <div class="radio-align"><input type="radio" name="radio" value="1" id="uma"><label for="uma"><img src="assets/1estrela.png" alt="estrela" width="50px" height="50px"></label> <span id="radio-error"></span></div>
                        <div class="radio-align"><input type="radio" name="radio" value="2" id="duas"><label for="duas"><img src="assets/2estrelas.png" alt="estrela"width="100px" height="45px"></label> <span id="radio-error"></span></div>
                        <div class="radio-align"><input type="radio" name="radio" value="3" id="tres"><label for="tres"><img src="assets/3estrelas.png" alt="estrela"width="160px" height="50px"></label> <span id="radio-error"></span></div>
                        <div class="radio-align"><input type="radio" name="radio" value="4" id="quatro"><label for="quatro"><img src="assets/4estrelas.png" alt="estrela"width="220px" height="55px"></label> <span id="radio-error"></span></div>
                        <div class="radio-align"><input type="radio" name="radio" value="5" id="cinco"><label for="cinco"><img src="assets/5estrelas.png" alt="estrela"width="270px" height="55px"></label> <span id="radio-error"></span></div>
                        <div id="nota-error" class="alert alert-warning" role="alert"
                            style="display: none; justify-content: space-between;"><button id="close-alert-button"
                                type="button">X</button></div>
                    </div>
                    <div id="notas-error" class="alert alert-warning" role="alert"
                        style="display: none; justify-content: space-between;"><button id="close-alert-button"
                            type="button">X</button></div>
                </div>
                <div class="button-container">
                    <button id="send-button" type="button">Verificar</button>
                    <button type="reset">Limpar</button>
                </div>
                <div class="modal fade" id="confirm-modal" tabindex="-1">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">Confirmar Informacoes</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div>
                                    <label for="name-confirm"><b>Nome:</b></label>
                                    <span id="name-confirm"></span>
                                </div>
                                <div>
                                    <label for="email-confirm"><b>Email:</b></label>
                                    <span id="email-confirm"></span>
                                </div>
                                <div>
                                    <label for="Notas-confirm"><b>Experiencia:</b></label>
                                    <span id="Notas-confirm"></span>
                                </div>
                                <div>
                                    <label for="radio-confirm"><b>Estrelas:</b></label>
                                    <span id="radio-confirm"></span>
                                </div>
                                <div>
                                    <label for="message-confirm"><b>Mensagem:</b></label>
                                    <span id="message-confirm"></span>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Editar</button>
                                <button type="reset" class="btn btn-secondary" data-bs-dismiss="modal">Limpar</button>
                                <button type="submit" class="btn btn-primary">Enviar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </main>
    <?php
        include("footer.php")
    ?>
    <script src="form.js"></script>
</body>

</php>