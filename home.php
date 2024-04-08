<!DOCTYPE php>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <META http-equiv="Content-Type" content="text/html; charset= ISO-8859-1">
    <title>Pac-Man</title>
</head>

<body>
    <?php
        include("header.php");
    ?>
    <main>
        <div id="objetivo">
            <h2>Objetivo:</h2>
            <p>Pac-Man e um classico jogo de arcade lançado pela primeira vez em 1980 pela empresa japonesa Namco. Nele,
                os
                jogadores controlam um personagem redondo e amarelo chamado Pac-Man, que deve percorrer um labirinto
                comendo
                pontos enquanto foge de quatro fantasmas coloridos.</p>
        </div>
        <h2 id="img">Imagens do jogo:</h2>
        <div class="imagens">
            <img src="assets/game.png" alt="pacmangame" width="400" height="400">
            <img src="assets/power.png" alt="Pacman comendo poderxinho" width="400" height="400">
            <img src="assets/lvl2.png" alt="Tela do level 2" width="400" height="400">
        </div>
        <div class="regras">
            <h2>Regras do jogo:</h2>
            <p>O objetivo do jogador e alcancar uma pontuacao de 274 pontos para vencer o jogo. Cada pac-dot verde no
                mapa concede 1 ponto ao jogador. Os pontos de poder valem 10 pontos cada, e quando consumidos, induzem
                todos os fantasmas ao estado de temor, permitindo que o jogador os devore tambem. Caso isso ocorra
                enquanto o jogador esta em contato com um fantasma, ele recebera um acrescimo de 50 pontos em sua
                pontuacao. Entretanto, se o jogador colidir com um fantasma que nao esteja no estado de temor, resultara
                na derrota imediata no jogo.
            </p>
        </div>
        <h2 id="controle">Controles:</h2>
        <div class="jogar">
            <p>O pac-man e controlado usando</p>
            <img src="assets/teclas.png" alt="Teclas" width="100" height="100">
        </div>
        <div class="start-screen">
            <h1>Clique aqui para jogar PAC-MAN</h1>
            <form action="index.php">
                <button id="start-button" type="submit">Play</button>
            </form>
        </div>
    </main>
    <?php
        include("footer.php")
    ?>
</body>

</php>