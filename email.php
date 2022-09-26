<?php

if(isset($_POST['email']) && !empty($_POST['email'])){
    $name = addcslashes($_POST['name']);
    $last_name = addcslashes($_POST['last-name']);
    $menssage = addcslashes($_POST['message']);

    $to = 'rodrigo.augusto.florentino@gmail.com';
    $subject = 'Contato - '.$name;
    $body = "Nome: ".$name." ".$last_name."\r\n"
            "Email: ".$email."\r\n"
            "Menssagem".$menssage;
    $header = 'From:rodrigo@rodrigoaugusto.dev'."\r\n"
                ."Replay-to:".$email."\r\n"
                ."X=Mailer:PHP/".phpversion(); 


    if (mail($to, $subject, $body, $header)){
        echo("Email enviado com sucesso!");
    }
    else{
        echo("O email não pode ser enviado.");
    }
}
?>