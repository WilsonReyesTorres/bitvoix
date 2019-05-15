<?php
if (session_status() !== PHP_SESSION_ACTIVE) {session_start();}
require_once("../bd/connecter.php");
require_once('../librairie/requests.php');
require_once('../librairie/requestsManager.php');


/*****************************  commencer test ***************/

// $donnees = [
//   'idRequest' => '1',
//   'idMembre' => '1',
//   'idService' => '1',
//   'qualRequest' => '2',
//   'commRequest' => 'c\'est Cool',
//   'statRequest' => '1',
//   'dateRequest' => '2019-05-01',
//   'cleSerRequest' => 'x938x847267x'];

// $reque = new Requests($donnees);

// echo '<br>';              
// echo '<br>Id du request:'.$reque->idRequest();
// echo '<br>Id du Memebre:'.$reque->idMembre();
// echo '<br>Id du Service:'.$reque->idService();
// echo '<br>Score de qualité de service :'.$reque->qualRequest();
// echo '<br>Commentaires du client :'.$reque->commRequest();
// echo '<br>Statut du request: 1. Ouvert, 2. fermé :'.$reque->statRequest();
// echo '<br>date de la requete :'.$reque->dateRequest();
// echo '<br>cLé du service" :'.$reque->cleSerRequest();



//$manage = new CategoriesManager();
//****************************  fin test **********************



function enregistrer(){
   $idService=$_POST['idService'];
  $cleSerRequest= "cleSerRequest".$idService;

     $donnees = [
      'idMembre' => $_SESSION['sessData']["membreId"],
      'idService' => $idService,
      'statRequest' => '1',
      'cleSerRequest' => $_POST[$cleSerRequest]]; 
     
    try{
    $reque = new Requests($donnees);
    $manager = new RequestsManager();
    $idRequest = $manager->add($reque); 
    }catch (Exception $e){
	   $rep['erreur']="Probleme pour enregistrer";
	 }finally {
		
		
	 }
}


function lister(){
   try{ 
    $manager = new RequestsManager();
    $RequestsList = $manager->getList();
    echo json_encode($RequestsList);
    }catch (Exception $e){
	   $rep['erreur']="Probleme pour lister";
	 }finally {
	
	 }
    
}

function requetesMembre(){
  $idMembre= $_SESSION['sessData']["membreId"];
  try{ 
   $manager = new RequestsManager();
   $RequestsList = $manager->getListMembre($idMembre);
   echo json_encode($RequestsList);
   }catch (Exception $e){
    $rep['erreur']="Probleme pour lister";
  }finally {
 
  }
   
}
function enlever(){
    
     /*
     $donnees = [
      'idCate' => $_POST['idCategorie'],
      'desCate' => $_POST['desCategorie']
    ];*/
    
    $donnees = [
      'idRequest' => $_POST['idRequest'],
      'idMembre' => '1',
      'idService' => '1',
      'qualRequest' => '3',
      'commRequest' => '',
      'statRequest' => '3',
      'dateRequest' => '2019-05-01',
      'cleSerRequest' => 'x'];
    $reque = new Requests($donnees);
    $manager = new RequestsManager();
    $manager->delete($reque); 
    $rep['msg']="Requete a été enlever";
    echo json_encode($rep);  
}

function fiche(){
  /*
     $donnees = [
      'idCate' => $_POST['idCategorie'],
      'desCate' => $_POST['desCategorie']
      ];
    */
    $donnees = [
      'idRequest' => '1',
      'idMembre' => '1',
      'idService' => '1',
      'qualRequest' => '2',
      'commRequest' => 'c\'est Cool',
      'statRequest' => '1',
      'dateRequest' => '2019-05-01',
      'cleSerRequest' => 'x938x847267x'];
    
   $reque = new Requests($donnees);
   $manager = new RequestsManager(); 
   $requeList = $manager->get($reque->idRequest());
   echo json_encode($requeList);
}

function modifier(){
      /*
     $donnees = [
     'idCate' => $_POST['idCategorie'],
     'desCate' => $_POST['desCategorie']
    ];
    */
    $donnees = [
      'idRequest' => '1',
      'idMembre' => '1',
      'idService' => '1',
      'qualRequest' => '3',
      'commRequest' => '',
      'statRequest' => '1',
      'dateRequest' => '2019-05-17',
      'cleSerRequest' => 'x'];
    $reque = new Requests($donnees);
    $manager = new RequestsManager(); 
    $manager->update($reque);
    $rep['msg']="Request a été actualisé";
    echo json_encode($rep);
}


function FermeRequet(){
    
  /*
  $donnees = [
   'idCate' => $_POST['idCategorie'],
   'desCate' => $_POST['desCategorie']
 ];*/
 //  'idRequest' => $_POST['idRequest'],
 $donnees = [
   'idRequest' => 13,
   'idMembre' => '1',
   'idService' => '1',
   'qualRequest' => '1',
   'commRequest' => 'x',
   'statRequest' => '2',
   'dateRequest' => '2019-05-17',
   'cleSerRequest' => 'x'];
  
 $reque = new Requests($donnees);
 var_dump( $reque );

 $manager = new RequestsManager();
 $manager->delete($reque); 
 $rep['msg']="Requete a été Fermer";
echo json_encode($rep);  
}

//controleur Adresse
$action=$_POST['action'];
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
    case 'FermeRequet':
        FermeRequet();
        break;   
    case 'requetesMembre':
        requetesMembre();
        break;

}
