<?php

if (!isset($_SESSION)) {
 session_start();
}

$namePage = 'Gamers Forme';

include '../Includes/header.php';

?>


<body>
    <header class='headerForm'>
    </header>

    <div class='indicaterur'>

        <div class='titre infiltre'>
            <h4>Infiltrés restants</h4>
            <div></div>
        </div>

        <div class='titre roleSpace'>
            <h4>Rôles Spéciaux</h4>
            <div>Aucun</div>
        </div>

    </div>

    <div class='boxGamer'>
        <div class='gamerChoise'></div>
        <div class='gamerChoise'></div>
        <div class='gamerChoise'></div>
        <div class='gamerChoise'></div>
        <div class='gamerChoise'></div>
    </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script src="../js/addGamer.js"></script>
</html>
