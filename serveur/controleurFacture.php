<?php
if (session_status() !== PHP_SESSION_ACTIVE) {session_start();}
require_once("../bd/connecter.php");
require_once('../librairie/factures.php');
require_once('../librairie/facturesManager.php');

/*****************************  commencer test ***************/

//  $donnees = ['idFacture' =>'0',
//     'idFournisseur' =>'3',
//     'idForfaitFacture' =>'1',
//     'typeSerFacture' =>'1',
//     'dateInsFacture' =>'2019-02-15',
//     'dateEcheFacture' =>'2020-02-15',
//     'nomRefFacture' =>'5XU51522CB911553M',
//     'statusFacture' =>'1' ];

// //var_dump($donnees);
// $factu = new Factures($donnees);

// echo '<br>';              
// echo '<br>Id factura :'.$factu->idFacture();
// echo '<br>Code fournisseu '.$factu->idFournisseur();
// echo '<br>Identifie le type de forfaits : 1.Base 2.Stantard 3.Premium :'.$factu->idForfaitFacture();
// echo '<br>Type de service   1 Personalisé  -- 2. Agenda  3. Demande'.$factu->typeSerFacture();
// echo '<br>date d\'inscription:'.$factu->dateInsFacture();
// echo '<br>date d\'échéance d\'inscription'.$factu->dateEcheFacture();
// echo '<br>Nombre de référence Paypal :'.$factu->nomRefFacture();
// echo '<br>Status 1.Actif 2. Annule :'.$factu->statusFacture();


//$manage = new CategoriesManager();
//****************************  fin test **********************

function enregistrer(){
     /*
     $donnees = [
      'idCate' => $_POST['idCategorie'],
      'desCate' => $_POST['desCategorie']
     ];
    */
    $userId = $_SESSION['sessData']['membreId'];
     $donnees = ['idFacture' =>'0',
    'idFournisseur' => $userId ,
    'idForfaitFacture' =>'1',
    'typeSerFacture' =>'1',
    'dateInsFacture' =>'2019-05-10',
    'dateEcheFacture' =>'2020-05-10',
    'nomRefFacture' =>$_POST['nomRefFacture'],
    'statusFacture' =>'1' ];
   
     try{
    $factu = new Factures($donnees);
    $manager = new FacturesManager($factu);
    $myJSON = $manager->add($factu); 
    echo json_encode($myJSON) ;
    
    }catch (Exception $e){
	   $rep['erreur']="Probleme pour enregistrer";
	 }finally {
		
		
	 }
}

function lister(){
   try{ 
     $manager = new FacturesManager();
     $FactuList = $manager->getList();
     echo json_encode($FactuList);
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
    $donnees = ['idFacture' =>'5',
    'idFournisseur' =>'3',
    'idForfaitFacture' =>'1',
    'typeSerFacture' =>'1',
    'dateInsFacture' =>'2019-02-15',
    'dateEcheFacture' =>'2020-02-15',
    'nomRefFacture' =>' #Paypal',
    'statusFacture' =>'1'];
   $factu = new Factures($donnees);
   $manager = new FacturesManager();
   $manager->delete($factu); 
   $rep['msg']="Facture a été annuler";
   echo json_encode($rep);  
}

function fiche(){
  /*
     $donnees = [
      'idCate' => $_POST['idCategorie'],
      'desCate' => $_POST['desCategorie']
      ];
    */
     $donnees = ['idFacture' =>'5',
    'idFournisseur' =>'',
    'idForfaitFacture' =>'',
    'typeSerFacture' =>'',
    'dateInsFacture' =>'',
    'dateEcheFacture' =>'',
    'nomRefFacture' =>'',
    'statusFacture' =>''];
    
   $factu = new Factures($donnees);
   $manager = new FacturesManager(); 
   $factuList = $manager->get($factu->idFacture());
   echo json_encode($factuList);
}


function modifier(){
      /*
     $donnees = [
     'idCate' => $_POST['idCategorie'],
     'desCate' => $_POST['desCategorie']
    ];
    */
     $donnees = ['idFacture' =>'5',
    'idFournisseur' =>'3',
    'idForfaitFacture' =>'2',
    'typeSerFacture' =>'2',
    'dateInsFacture' =>'2018-06-15',
    'dateEcheFacture' =>'2019-06-15',
    'nomRefFacture' =>'ABCD645254151456',
    'statusFacture' =>'3'];
    
    $factu = new Factures($donnees);
    $manager = new FacturesManager(); 
    $manager->update($factu);
    $rep['msg']="Facture a été actualisé";
    echo json_encode($rep);
}


function getFactFournisseur(){
    
  $userId = $_SESSION['sessData']['membreId'];
    // $userId = 11;
    $donnees = ['idFacture' =>'0',
    'idFournisseur' => $userId,
    'idForfaitFacture' =>'',
    'typeSerFacture' =>'',
    'dateInsFacture' =>'',
    'dateEcheFacture' =>'',
    'nomRefFacture' =>'',
    'statusFacture' =>''];
    
   $factu = new Factures($donnees);
   $manager = new FacturesManager(); 
   $factuList = $manager->getListFactFournisseur($factu->idFournisseur());
   echo json_encode($factuList);
}


//controleur Adresse
$action=$_POST['action'];
// $action= '';
//  $action= 'getListFactFournisseur';

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
    case 'getListFactFournisseur':
        getFactFournisseur();
        break;    
}
