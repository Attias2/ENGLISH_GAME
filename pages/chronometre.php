<?php

$namePage = 'Chronometre';

include '../Includes/header.php';

?>

<body>
    <h1><time>00:00:00</time></h1>
    <button id="strt">start</button>
    <button id="stp">stop</button>
    <button id="rst">reset</button>
</body>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script src="../js/chronometre.js"></script>
</html>