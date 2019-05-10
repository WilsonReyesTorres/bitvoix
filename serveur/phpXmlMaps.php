<?php
if (session_status() !== PHP_SESSION_ACTIVE) {session_start();}
$username="bitvoix_user";
$password="adminbitvoixcanada2019$";
$database="bitvoix_db";

$_SESSION['sessData']["lat"] = $_POST['lat'];
$_SESSION['sessData']["lng"] = $_POST['lng'];
// Start XML file, create parent node
$doc = new DomDocument("1.0", "utf-8");
$doc->formatOutput = true;
$node = $doc->createElement("markers");
$parnode = $doc->appendChild($node);

// Opens a connection to a MySQL server
$connection=mysqli_connect ('localhost', $username, $password, $database);
mysqli_set_charset($connection,"utf8");
if (!$connection) {
  die('Not connected : ' . mysqli_error());
}

// Select all the rows in the markers table
$query = "SELECT idFournisseur AS id, nomFournisseur AS name, CONCAT(nroAdr, ' ', rueAdr, ', ', desVilAdr, ', ', codPosAdr ) AS address, latiFournisseur AS lat, longFournisseur as lng 
FROM fournisseur, adresse WHERE idAdrFournisseur=idAdr;";

/*SELECT idFournisseur AS id, nomFournisseur AS name, CONCAT(nroAdr, ' ', rueAdr, ', ', desVilAdr, ', ', codPosAdr ) AS address, 
latiFournisseur AS lat, longFournisseur as lng , ( 6371 * acos( cos( radians(45.55) ) * cos( radians( latiFournisseur ) ) * cos( radians( longFournisseur ) - radians(-73.64) ) + sin( radians(45.55) ) * sin( radians( latiFournisseur ) ) ) ) AS distance 
FROM fournisseur, adresse WHERE idAdrFournisseur=idAdr HAVING distance < 10 ORDER BY distance;*/


$result = mysqli_query($connection, $query);
if (!$result) {
  die('Invalid query: ' . mysqli_error());
}

header("Content-type: text/xml");

// Iterate through the rows, adding XML nodes for each
while ($row = @mysqli_fetch_assoc($result)){
  // Add to XML document node
  $node = $doc->createElement("marker");
  $newnode = $parnode->appendChild($node);

  $newnode->setAttribute("id", $row['id']);
  $newnode->setAttribute("name", $row['name']);
  $newnode->setAttribute("address", $row['address']);
  $newnode->setAttribute("lat", $row['lat']);
  $newnode->setAttribute("lng", $row['lng']);
}

$xmlfile = $doc->saveXML();
echo $xmlfile;

?>