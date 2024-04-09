<!DOCTYPE  php>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agradecimento</title>
    <link rel="stylesheet" href="login.css">
</head>
<body>
    
    <?php
    include('header.php');
    ?>
    <div class="dados">
    <?php
    require_once 'conexao.php';
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $nome = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];
        $check = $_POST['check'];
        $nota = $_POST['radio'];

        $sql = "INSERT INTO form (nome, email) VALUES (:nome, :email)";

        $stmt = $pdo->prepare($sql);

        try{
            $stmt->execute(['nome' => $nome, 'email' => $email]);
            echo "Dados inseridos com sucesso!" . "<br>";
        }catch(PDOException $e){
            die("ERRO: " . $e->getMessage());
        }
    }
    echo $nome . "<br>" . $email . "<br>" . $message  . "<br>" . $nota . "<br>";
    foreach($check as $c){
        echo $c . "<br>";
    }
    
    ?>
    </div>
    <?php
    include('footer.php');
    ?>
</body>
</html>
