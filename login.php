<?php
    if(isset($_POST['email']) && !empty($_POST['email']) && isset($_POST['name']) && !empty($_POST['name'])){

        require 'conexao.php';
        require 'Usuario.class.php';

        $u = new Form();
        
        $login = addslashes($_POST['email']);
        $name = addslashes($_POST['name']);
        
        $u->login($email,$name);
    }else{
        header("Location = 'formulario.php'");
    }


?>