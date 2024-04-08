<?php
        $currentPage = basename($_SERVER['PHP_SELF']);
    ?>
<header>
        <div class="inicio">
            <a class="logo" href="home.php">
                <img src="assets/pacman.png" alt="logo" width="100" height="100"><span>Pac-Man</span></a>
            <h1 id="dsc">Pac-Man</h1>
        </div>
        <nav class="navbar">
            <a href="home.php" <?php if($currentPage == "home.php")echo 'class = "ativa"' ?>>HOME</a>
            <a href="index.php" <?php if($currentPage == "index.php")echo 'class = "ativa"' ?>>Jogo</a>
            <a href="formulario.php" <?php if($currentPage == "formulario.php")echo 'class = "ativa"' ?>>Cadastro</a>
        </nav>
    </header>