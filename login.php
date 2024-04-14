<!DOCTYPE php>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agradecimento</title>
    <link rel="stylesheet" href="login.css">
    <META http-equiv="Content-Type" content="text/html; charset= ISO-8859-1">
</head>

<body>

    <?php
    include('header.php');
    ?>
    <div class="dados">
        <h1>Muito obrigado pela contribuição!</h1>
        <?php
        require_once 'conexao.php';
        if (isset($_POST['enviando'])) {
            $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_SPECIAL_CHARS);
            $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
            $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_SPECIAL_CHARS);
            $notasCheckbox = $_POST['check'] ?? [];
            $notasCheckbox = implode(', ',$notasCheckbox);
            $notasRadio = $_POST['radio'];

            $sql = $pdo->prepare("INSERT INTO form(nome,email,sugestao,exp,nota) VALUES(:name,:email,:message,:notasCheckbox,:notasRadio)");
            $sql->bindValue(':name', $name);
            $sql->bindValue(':email', $email);
            $sql->bindValue(':message', $message);
            $sql->bindValue(':notasCheckbox', $notasCheckbox);
            $sql->bindValue(':notasRadio', $notasRadio);
            $sql->execute();

            echo "Salvo com sucesso" . "<br>";
            }
        
        echo "Nome: " . $name . "<br>" . "E-mail: " . $email . "<br>" . "Mensagem: " .  $message  . "<br>" . "Nota: " . $notasRadio . "<br>";
        echo "Experiencia sobre o jogo:" . "<br>";
        $check = $_POST['check'] ?? [];
        foreach ($check as $c) {
            echo $c . "<br>";
        }
        ?>
    </div>
    <?php
    include('footer.php');
    ?>
</body>

</html>