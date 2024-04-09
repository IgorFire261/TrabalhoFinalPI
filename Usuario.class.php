<?php
    class Form{
        public function login($login, $name){
            global $pdo;

            $sql = "SELECT * FROM form WHERE email = :email AND nome = :name";
            $sql = $pdo->prepare($sql);
            $sql->bindValue("email",$login);
            $sql->bindValue("name",$name);
            $sql->execute();

            if($sql->rowCount() > 0){
                $dado = $sql->fetch();

                $_SESSION['ID'] = $dado['ID'];
                return true;
            }else{
                return false;
            }
        }
    }

?>