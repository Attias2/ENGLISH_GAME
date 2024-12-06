<?php

$namePage = 'Event';

include '../Includes/header.php';

?>

<body>

    <button id="generate">Generate</button>

    <div class='boxGamer' id="lstEvent">
        <div class='event' id="agriculture">Agriculture</div>
        <div class='event' id="politics">Politics</div>
        <div class='event' id="military">Military</div>
        <div class='event' id="media">Media</div>
        <div class='event' id="technology">Technology</div>
    </div>

</body>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script src="../js/randomEvent.js"></script>
</html>