<?php
require_once("../bd/connecter.php");
require_once('../librairie/categories.php');
require_once('../librairie/categoriesManager.php');


/*****************************  commencer test ***************/
// JSON string
///$someJSON = '[{"idCate":"1","desCate":"sante"}]';
 // Convert JSON string to Array
///$someArray = json_decode($someJSON, true);

//print_r($someArray);         // Dump all data of the Array
// echo $someArray[0]["idCate"]; // Access Array data
// echo $someArray[0]["desCate"]; // Access Array data
 

//classe à instancier 

//chargerClasse('adresse')
/*
$donnees = [
  'idCate' => $someArray[0]["idCate"],
  'desCate' => $someArray[0]["desCate"]
];
$catego = new Categories($donnees);

echo '<br>';              
echo 'Id Categorie:'.$catego->idCate();
echo '<br>Description Categorie: '.$catego->desCate();
$manage = new CategoriesManager();*/
//****************************  fin test **********************



function enregistrer(){
     /*
     $donnees = [
      'idCate' => $_POST['idCategorie'],
      'desCate' => $_POST['desCategorie']
     ];
    */
    $donnees = [
      'idCate' => '',
      'desCate' => 'Sante'
    ];
    try{
    $catego = new Categories($donnees);
    $manager = new CategoriesManager();
    $manager->add($catego); 
    }catch (Exception $e){
	   $rep['erreur']="Probleme pour enregistrer";
	 }finally {
		
		
	 }
}


function lister(){
   try{ 
     $manager = new CategoriesManager();
     $CategoriesList = $manager->getList();
     echo json_encode($CategoriesList);
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
      'idCate' => '2',
      'desCate' => ''
    ];
   $catego = new Categories($donnees);
   $manager = new CategoriesManager();
   $manager->delete($catego); 
   $rep['msg']="Adrrees a ete enleve";
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
      'idCate' => '1',
      'desCate' => ''
    ];
    
   $catego = new Categories($donnees);
   $manager = new CategoriesManager(); 
   $CategoriesList = $manager->get($catego->idCate());
   echo json_encode($CategoriesList);
}

function modifier(){
      /*
     $donnees = [
     'idCate' => $_POST['idCategorie'],
     'desCate' => $_POST['desCategorie']
    ];
    */
    $donnees = [
     'idCate' => '1',
     'desCate' => 'Voyage'
    ];
    $catego = new Categories($donnees);
    $manager = new CategoriesManager(); 
    $manager->update($catego);
    $rep['msg']="Categorie a ete actualisé";
    echo json_encode($rep);
}

//controleur Adresse
$action=$_POST['action'];
//$action= '';
//$action= 'enregistrer';

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
