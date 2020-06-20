<!doctype html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0,
    minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="author" content="Leon Arantes">
    <link rel="shortcut icon" href="_IMAGES/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="_CSS/style.css">
    <link rel="stylesheet" href="_CSS/responsive.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
          integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V" crossorigin="anonymous">
    <title>Leon Arantes | Key Generator</title>
</head>
<body>

<div class="box">

    <header class="header-page">
        <span></span>
        <span></span>
        <span></span>
    </header><!--header-->

    <h2>Key Generator</h2>

    <form class="form-keys">

        <label>
            <input type="text" name="key-visor" readonly>
        </label>

        <div class="edit"><i class="fas fa-pencil-alt"></i></div><br>

        <!--msg-keycopy-->
        <span class="key-true">Key Copiada com <b class="blue">Sucesso</b> !!</span><br>

        <input type="button" value="Gerar Key" class="blue" name="gerar-key">
        <input type="button" value="Copiar Key" class="gray" name="copy-key">

    </form> <!--form-keys-->

    <div class="edit-length">

        <form class="form-length">
            <p class="blue">Altere o número de Caracteres</p>
            <label>
                <input type="number" name="length" autofocus>
            </label>
            <input type="submit" value="Salvar" class="blue">
        </form> <!--form-length-->

    </div> <!--edit-length-->

    <p>Leon Arantes /></p>

</div> <!--box-->

<script src="_JS/class-key-controller.js"></script>
<script src="_JS/config-key-controller.js"></script>
</body>
</html>