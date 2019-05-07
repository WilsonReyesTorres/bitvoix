<?php
if (session_status() !== PHP_SESSION_ACTIVE) {session_start();}
$_SESSION["membreId"]=10;
$_SESSION["membreLoggedIn"]=true;
header('Location: http://localhost/bitvoix/indexw.html');
?>