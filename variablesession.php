<?php
if (session_status() !== PHP_SESSION_ACTIVE) {session_start();}
$_SESSION["membreId"]=6;
$_SESSION["membreLoggedIn"]=true;
header('Location: http://localhost/bitvoix/indexw.html');
?>