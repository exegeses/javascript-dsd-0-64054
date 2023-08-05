<?php
    //capturamos datos enviados por el form
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $comentarios = $_POST['comentarios'];

    //configuramos datos de email a enviar
    $destinatario = 'empresa@mail.com';
    $asunto = 'Email enviado desde mi sitio';
        ## cuerpo de emial
    $cuerpo = "<div style='background-color: rgba(79, 147, 94, 0.17);
                            width: 624px;
                            padding: 80px 64px;
                            border-radius: 12px;
                            font-family: 'Tahoma';
                            font-size: 1.2em;
                            color: #71f482'>";
    $cuerpo .= 'Nombre: '.$nombre.'<br>';
    $cuerpo .= 'Email: '.$email.'<br>';
    $cuerpo .= 'Comentarios: '.$comentarios.'<br>';

    ## encabezados adicionales
    $headers = 'From: empresa@mail.com' . "\r\n";
    $headers .= 'Reply-To: '.$email."\r\n";
    $headers .= "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";

    //enviamos el email
    mail($destinatario, $asunto, $cuerpo, $headers);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <main>
        <section id="formulario">
            <span><?= 'Gracias '.$nombre.' por contactarnos' ?></span>
        </section>
    </main>

</body>
</html>