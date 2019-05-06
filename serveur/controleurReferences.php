<?php
require_once("../bd/connecter.php");
require_once('../librairie/references.php');
require_once('../librairie/referencesManager.php');


/*****************************  commencer test ***************/

//chargerClasse('adresse')
$donnees = [
    'idReference' => '1',
    'idService' => '1',
    'idMembre' => '1',
    'courReferences' => 'W@gmail.com',
    'switReferences' => '0',
    'dateReferences' => '2019-02-20'];
$refe = new References($donnees);

echo '<br>';              
echo '<br>Id du references:'.$refe->idReference();
echo '<br>Id du Service:'.$refe->idService();
echo '<br>Id du Memebre:'.$refe->idMembre();
echo '<br>courriel reference:'.$refe->courReferences();
echo '<br>Switch reference 0= Non 1=Oui:'.$refe->switReferences();
echo '<br>Date de reference:'.$refe->dateReferences();


//****************************  fin test **********************



function enregistrer(){
     /*
     $donnees = [
      'idCate' => $_POST['idCategorie'],
      'desCate' => $_POST['desCategorie']
     ];
    */
    $donnees = [
    'idReference' => '1',
    'idService' => '1',
    'idMembre' => '1',
    'courReferences' => 'W@gmail.com',
    'switReferences' => '0',
    'dateReferences' => '2019-02-20'];
    try{
    $refe = new References($donnees);
    $manager = new ReferencesManager();
    $manager->add($refe); 
    }catch (Exception $e){
	   $rep['erreur']="Probleme pour enregistrer";
	 }finally {
		
		
	 }
}


function lister(){
   try{ 
     $manager = new ReferencesManager();;
     $refeList = $manager->getList();
     echo json_encode($refeList);
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
    'idReference' => '4',
    'idService' => '1',
    'idMembre' => '1',
    'courReferences' => 'W@gmail.com',
    'switReferences' => '0',
    'dateReferences' => '2019-02-20'];
  
   $refe = new References($donnees);
   $manager = new ReferencesManager();
   $manager->delete($refe); 
   $rep['msg']="References a été enleve";
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
    'idReference' => '5',
    'idService' => '1',
    'idMembre' => '1',
    'courReferences' => 'W@gmail.com',
    'switReferences' => '0',
    'dateReferences' => '2019-02-20'];
    
    $refe = new References($donnees);
    $manager = new ReferencesManager(); 
    $refeList = $manager->get($refe->idReference());
    echo json_encode($refeList);
}

function modifier(){
      /*
     $donnees = [
     'idCate' => $_POST['idCategorie'],
     'desCate' => $_POST['desCategorie']
    ];
    */
    $donnees = [
    'idReference' => '6',
    'idService' => '1',
    'idMembre' => '1',
    'courReferences' => 'ingwilsonreyes@gmail.com',
    'switReferences' => '0',
    'dateReferences' => '2019-12-05'];
    
    $refe = new References($donnees);
    $manager = new ReferencesManager();  
    $manager->update($refe);
    $rep['msg']="Reference a été actualisé";
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
