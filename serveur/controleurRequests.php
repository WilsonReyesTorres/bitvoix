<?php
require_once("../bd/connecter.php");
require_once('../librairie/requests.php');
require_once('../librairie/requestsManager.php');


/*****************************  commencer test ***************/
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

echo '<br>';              
echo '<br>Id du request:'.$reque->idRequest();
echo '<br>Id du Memebre:'.$reque->idMembre();
echo '<br>Id du Service:'.$reque->idService();
echo '<br>Score de qualité de service :'.$reque->qualRequest();
echo '<br>Commentaires du client :'.$reque->commRequest();
echo '<br>Statut du request: 1. Ouvert, 2. fermé :'.$reque->statRequest();
echo '<br>date de la requete :'.$reque->dateRequest();
echo '<br>cLé du service" :'.$reque->cleSerRequest();


//$manage = new CategoriesManager();
//****************************  fin test **********************



function enregistrer(){
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
    try{
    $reque = new Requests($donnees);
    $manager = new RequestsManager();
    $manager->add($reque); 
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

function enlever(){
    
     /*
     $donnees = [
      'idCate' => $_POST['idCategorie'],
      'desCate' => $_POST['desCategorie']
    ];*/
    
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
    $manager->delete($reque); 
    $rep['msg']="Requete a été enleve";
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
      'commRequest' => 'c\'est super Cool',
      'statRequest' => '1',
      'dateRequest' => '2019-02-01',
      'cleSerRequest' => 'x938x847267x'];
    $reque = new Requests($donnees);
    $manager = new RequestsManager(); 
    $manager->update($reque);
    $rep['msg']="Request a été actualisé";
    echo json_encode($rep);
}

//controleur Adresse
//$action=$_POST['action'];
$action= '';
$action= 'modifier';

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