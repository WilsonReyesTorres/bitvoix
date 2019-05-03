<?php
require_once("../bd/connecter.php");
require_once('../librairie/services.php');
require_once('../librairie/servicesManager.php');


/*****************************  commencer test ***************/


//chargerClasse('adresse')
$donnees = [
  'idService' => '1',
  'idFournisseur' => '3', 
  'titreService' => 'Titre', 
  'desShortService' => 'Traduction',
  'desService' => 'Traduction certifiée en français et anglais',
  'idCategorie' => '1', 
  'actService' =>  '1',
  'prixService' => '12.20',
  'promService' => '10.22',
  'refeService' => '9.00',
  'refeEfeService' => '1',
  'datLimService' => '2019-05-31',
  'pochetteService' => 'Tout le monde debout.jpg',
  'autService' => '1' ];
$servi = new Services($donnees);

echo '<br>';              
echo '<br>Code du service'.$servi->idService();
echo '<br>code fournisseur: '.$servi->idFournisseur();
echo '<br>Titre du service: '.$servi->titreService();
echo '<br>Courte description du service:'.$servi->desShortService();
echo '<br>Description du service: '.$servi->desService();
echo '<br>Id Categorie FK'.$servi->idCategorie();
echo '<br>Sercive active: '.$servi->actService();
echo '<br>prix du fournisseur:'.$servi->prixService();
echo '<br>prix en promotion: '.$servi->promService();
echo '<br>prix référé:'.$servi->refeService();
echo '<br>Nombre de référé pour accèder à la  promotion: '.$servi->refeEfeService();
echo '<br>Date limite de promotion:'.$servi->datLimService();
echo '<br>Pochette de la photo qui correspond au service: '.$servi->pochetteService();
echo '<br>Autorisation du service par bit-voix:'.$servi->autService();



//$manage = new ServicesManager();
//****************************  fin test **********************
 

function enregistrer(){
     /*
     $donnees = [
      'idCate' => $_POST['idCategorie'],
      'desCate' => $_POST['desCategorie']
     ];
    */
    echo "enregistrer";
   $donnees = [
  'idService' => '1',
  'idFournisseur' => '1', 
  'titreService' => 'Titre', 
  'desShortService' => 'Traduction',
  'desService' => 'Traduction certifiée en français et anglais',
  'idCategorie' => '1', 
  'actService' =>  '1',
  'prixService' => '12.20',
  'promService' => '10.22',
  'refeService' => '9.00',
  'refeEfeService' => '1',
  'datLimService' => '2019-05-31',
  'pochetteService' => 'Tout le monde debout.jpg',
  'autService' => '1' ];

   
    $servi = new Services($donnees);
    $manager = new ServicesManager();
    $manager->add($servi); 
    try{
    }catch (Exception $e){
	   $rep['erreur']="Probleme pour enregistrer";
	 }finally {
		
		
	 }
}


function lister(){
   try{ 
     $manager = new ServicesManager();
     $ServicesList = $manager->getList();
     echo json_encode($ServicesList);
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
      'idService' => '2',
      'idFournisseur' => '1',
      'titreService' => 'Titre', 
      'desShortService' => 'Traduction',
      'desService' => 'Traduction certifiée en français et anglais',
      'idCategorie' => '1', 
      'actService' =>  '1',
      'prixService' => '12.20',
      'promService' => '10.22',
      'refeService' => '9.00',
      'refeEfeService' => '1',
      'datLimService' => '2019-05-31',
      'pochetteService' => 'Tout le monde debout.jpg',
      'autService' => '1' ];
    $servi = new Services($donnees);
    $manager = new ServicesManager();
    $manager->delete($servi);  
    $rep['msg']="Service a été inactif";
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
      'idService' => '3',
      'idFournisseur' => '1', 
      'titreService' => 'Titre', 
      'desShortService' => 'Traduction',
      'desService' => 'Traduction certifiée en français et anglais',
      'idCategorie' => '1', 
      'actService' =>  '1',
      'prixService' => '12.20',
      'promService' => '10.22',
      'refeService' => '9.00',
      'refeEfeService' => '1',
      'datLimService' => '2019-05-31',
      'pochetteService' => 'Tout le monde debout.jpg',
      'autService' => '1' ];
    
   $servi = new Services($donnees);
   $manager = new ServicesManager(); 
   $ServicesList = $manager->get($servi->idService());
   echo json_encode($ServicesList);
}

function modifier(){
      /*
     $donnees = [
     'idCate' => $_POST['idCategorie'],
     'desCate' => $_POST['desCategorie']
    ];
    */
     $donnees = [
      'idService' => '3',
      'idFournisseur' => '1', 
      'titreService' => 'Services', 
      'desShortService' => 'Mecanique',
      'desService' => 'Mécanicien spécialisé en synchronisation ',
      'idCategorie' => '1', 
      'actService' =>  '1',
      'prixService' => '12.20',
      'promService' => '10.22',
      'refeService' => '9.00',
      'refeEfeService' => '1',
      'datLimService' => '2019-12-31',
      'pochetteService' => 'Tout le monde debout.jpg',
      'autService' => '1' ];
    
    $servi = new Services($donnees);
   
        
    $manager = new ServicesManager(); 
    $manager->update($servi);
    $rep['msg']="Service a été actualisé";
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
