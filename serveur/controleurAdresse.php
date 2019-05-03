<?php
require_once("../bd/connecter.php");
require_once('../librairie/adresse.php');
require_once('../librairie/adresseManager.php');

// JSON string
 $someJSON = '[{"idAdr":"3","nroAdr":"2239",
                "rueAdr":"Place Athur Vallee","desVilAdr":"Quebec",
                "codPosAdr":"H3M3G2"}]';
 // Convert JSON string to Array
$someArray = json_decode($someJSON, true);

  print_r($someArray);         // Dump all data of the Array


//classe à instancier 

//chargerClasse('adresse')
$donnees = [
  'idAdr' => $someArray[0]["idAdr"],
  'nroAdr' => $someArray[0]["nroAdr"],
  'rueAdr' => $someArray[0]["rueAdr"],
  'desVilAdr' => $someArray[0]["desVilAdr"],
  'codPosAdr' => $someArray[0]["codPosAdr"]
];
$adress = new Adresse($donnees);
//var_dump($adress);
echo '<br>';              
//Json

//$adress->hydrate($donnees);

echo 'Nom du Ville:'.$adress->desVilAdr();
echo '<br>Nom Rue: '.$adress->rueAdr();
echo '<br>Code Postal: '.$adress->codPosAdr();
echo '<br>Numero Civic : '.$adress->nroAdr();
echo '<br>Nombre ID:'.$adress->idAdr();

// Function AdicionarAdresse

  
  
//var_dump($manager);
//echo '<br>';
 

try{
    $manager = new AdresseManager();
//    $manager->add($adress);
//    $manager->delete($adress);
//    $manager->update($adress);
//    echo $manager->get($adress->idAdr);
    
//    $AdreesList = $manager->getList();
//    for ($i = 0; $i < count($AdreesList); $i++) {
//       echo '<br>Nro Civic '. $AdreesList[$i]->nroAdr.' Rue: '. $AdreesList[$i]->rueAdr ;
//       echo 'Ville' . $AdreesList[$i]->desVilAdr. ' Code Postal '. $AdreesList[$i]->codPosAdr.'<br>';
//}
//      echo json_encode($AdreesList);
    
    
      echo "Id:".$adress->idAdr();
      $AdreesList = $manager->get($adress->idAdr());
      echo json_encode($AdreesList);

}catch (Exception $e){
	   $rep['erreur']="Probleme pour lister";
	 }finally {
		unset($connexion);
		unset($stmt);
	 }

function modifier(){
      /*
     $donnees = [
      'idAdr' => $_POST['idAdr'],
      'nroAdr' => $_POST['nroAdr'],
      'rueAdr' => $_POST['rueAdr'],
      'desVilAdr' => $_POST['desVilAdr'],
      'codPosAdr' => $_POST['codPosAdr']
    ];
    */
    $donnees = [
      'idAdr' => '2',
      'nroAdr' => '3456',
      'rueAdr' => 'Boulevar Obrian',
      'desVilAdr' => 'Montreal',
      'codPosAdr' => 'H2N4G2'
    ];
    $adress = new Adresse($donnees);
    $manager = new AdresseManager();
    $manager->update($adress);
    $rep['msg']="Adrrees a ete actualisé";
    echo json_encode($rep);
}
    

function fiche(){
  /*
     $donnees = [
      'idAdr' => $_POST['idAdr'],
      'nroAdr' => $_POST['nroAdr'],
      'rueAdr' => $_POST['rueAdr'],
      'desVilAdr' => $_POST['desVilAdr'],
      'codPosAdr' => $_POST['codPosAdr']
    ];
    */
    $donnees = [
      'idAdr' => '2',
      'nroAdr' => '',
      'rueAdr' => '',
      'desVilAdr' => '',
      'codPosAdr' => ''
    ];
    
   $adress = new Adresse($donnees);
   $manager = new AdresseManager(); 
   $AdreesList = $manager->get($adress->idAdr());
   echo json_encode($AdreesList);
}

function enlever(){
    
     /*
     $donnees = [
      'idAdr' => $_POST['idAdr'],
      'nroAdr' => '',
      'rueAdr' => '',
      'desVilAdr' => '',
      'codPosAdr' => ''
    ];*/
    
     $donnees = [
      'idAdr' => '2',
      'nroAdr' => '',
      'rueAdr' => '',
      'desVilAdr' => '',
      'codPosAdr' => ''
    ];
   $adress  = new Adresse($donnees); 
   $manager = new AdresseManager();
   $manager->delete($adress);
   $rep['msg']="Adrrees a ete enleve";
   echo json_encode($rep);  
}

function lister(){
   try{ 
     $manager = new AdresseManager();
     $AdreesList = $manager->getList();
     echo json_encode($AdreesList);
    }catch (Exception $e){
	   $rep['erreur']="Probleme pour lister";
	 }finally {
	
	 }
    
}

function enregistrer(){
     /*
     $donnees = [
      'idAdr' => $_POST['idAdr'],
      'nroAdr' => $_POST['nroAdr'],
      'rueAdr' => $_POST['rueAdr'],
      'desVilAdr' => $_POST['desVilAdr'],
      'codPosAdr' => $_POST['codPosAdr']
    ];
    */
    $donnees = [
      'idAdr' => '',
      'nroAdr' => '862',
      'rueAdr' => 'Bellerive',
      'desVilAdr' => 'Longueuil',
      'codPosAdr' => 'J4J1A6'
    ];
    try{
    $adress = new Adresse($donnees);
    $manager = new AdresseManager();
    $manager->add($adress); 
    }catch (Exception $e){
	   $rep['erreur']="Probleme pour enregistrer";
	 }finally {
		
		
	 }
}
//controleur Adresse
//$action=$_POST['action'];
$action= 'enregistrer';

switch($action){
    case 'enregistrer':
        enregistrer();
        break;
    case 'lister':
        lister();
        break;
    case 'enlever':
        enlever();
        break;
    case 'fiche':
        fiche();
        break;
    case 'modifier':
        modifier();
        break;
}


?>
<!--https://openclassrooms.com/fr/courses/1665806-programmez-en-oriente-objet-en-php/1666129-loperateur-de-resolution-de-portee-->
