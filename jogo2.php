<!DOCTYPE php>
<html lang="en">content

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <META http-equiv="Content-Type" content="text/html; charset= ISO-8859-1">
    <title>Pac-Man</title>
    <link rel="stylesheet" href="style.css">

</head>

<body>
    <?php
        include("header.php");
    ?>
    <main>
        <div class="all">
            <div class="game-container">
                <div id="score" style="font-size: 40px;">Score: 0</div>
                <div class="grid"></div>
            </div>
        </div>

        <audio id="audio" src="assets/PacManSong.mp3" loop></audio>

    </main>
    <?php
        include("footer.php")
    ?>
    <script src="jogo2.js"></script>
</body>

</php>