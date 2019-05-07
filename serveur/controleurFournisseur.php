<?php
if (session_status() !== PHP_SESSION_ACTIVE) {session_start();}
require_once("../bd/connecter.php");
require_once('../librairie/fournisseur.php');
require_once('../librairie/fournisseurManager.php');
require_once('../librairie/adresse.php');
require_once('../librairie/adresseManager.php');

/*****************************  commencer test ***************/
// JSON string

/*$someJSON = '[{"idFournisseur":"1",
                "nomFournisseur":"Novaquim",
                "idAdrFournisseur":"1",
                "cellFournisseur":"514-412-3434", 
                "typeSerFournisseur":"1",
                "idForfaitFournisseur":"1", 
                "datInsFournisseur":"2019-04-30",    
                "datEcheFournisseur":"2020-04-30", 
                "statuFournisseur":"1",    
                "longFournisseur":"45.540386",
                "latiFournisseur":"-73.697921"}]' ;  
*/
 // Convert JSON string to Array
//$someArray = json_decode($someJSON, true);

//print_r($someArray);         // Dump all data of the Array
// echo $someArray[0]["idCate"]; // Access Array data
// echo $someArray[0]["desCate"]; // Access Array data
 

//classe à instancier 

//chargerClasse('fournisseur')
/*
$donnees = [
    'idFournisseur' => $someArray[0]["idFournisseur"],
    'nomFournisseur' => $someArray[0]["nomFournisseur"],
    'idAdrFournisseur' => $someArray[0]["idAdrFournisseur"],
    'cellFournisseur' => $someArray[0]["cellFournisseur"],
    'typeSerFournisseur' => $someArray[0]["typeSerFournisseur"],
    'idForfaitFournisseur' => $someArray[0]["idForfaitFournisseur"],
    'datInsFournisseur' => $someArray[0]["datInsFournisseur"],
    'datEcheFournisseur' => $someArray[0]["datEcheFournisseur"],
    'statuFournisseur' => $someArray[0]["statuFournisseur"],
    'longFournisseur' => $someArray[0]["longFournisseur"],
    'latiFournisseur' => $someArray[0]["latiFournisseur"]    
];
$fourni = new Fournisseurs($donnees);

echo '<br>';              
echo 'ID fournisseur:'.$fourni->idFournisseur();
echo '<br>Nom du fournisseur: '.$fourni->nomFournisseur();
echo '<br>Adresse du fournisseur:'.$fourni->idAdrFournisseur();
echo '<br>Téléphone portable du fournisseur: '.$fourni->cellFournisseur();
echo '<br>Type de service 1 Personalisé  2. Agenda  3. Demande :'.$fourni->typeSerFournisseur();
echo '<br>Identifie le type de forfaits : 1. Base 2.Stantard 3.Premium : '.$fourni->idForfaitFournisseur();
echo '<br>date d\'inscription:'.$fourni->datInsFournisseur();
echo '<br>date d\'échéance d\'inscription: '.$fourni->datEcheFournisseur();
echo '<br>Status de Fournisseur:'.$fourni->statuFournisseur();
echo '<br>La Longitud geographique de Fournisseur: '.$fourni->longFournisseur();
echo '<br>La Latitud geographique de Fournisseur:'.$fourni->latiFournisseur();

*/

//$manage = new CategoriesManager();
//****************************  fin test **********************



function enregistrer(){
    
     $donnees = [
         'idAdr' => '',
         'nroAdr' => $_POST['nroAdr'],
         'rueAdr' => $_POST['rueAdr'],
         'desVilAdr' => $_POST['desVilAdr'],
         'codPosAdr' => $_POST['codPosAdr']
       ];


    //   $donnees = [
    //     'idAdr' => '',
    //     'nroAdr' => '2239',
    //     'rueAdr' => 'Place Arthur Vallee',
    //     'desVilAdr' => 'Montréal',
    //     'codPosAdr' => 'H3m3g2'
    //   ];
      try{
      $adress = new Adresse($donnees);
      $manager = new AdresseManager();
      $manager->add($adress); 
      }catch (Exception $e){
         $rep['erreur']="Probleme pour enregistrer";
       }finally {
       }

  
    /*actualiser longitude latitude*/
    // $nroAdr= ;
    // $rueAdr='Rue Legendre E';
    // $desVilAdr='Montréal';
    // $codPosAdr='H2M1H1';
    $adresse=$_POST['nroAdr'].' '.$_POST['rueAdr'].', '.$_POST['desVilAdr'].' , Canada';
 
    // Obtener los resultados JSON de la peticion.
    $geo = file_get_contents('https://maps.googleapis.com/maps/api/geocode/json?address='.urlencode($adresse).'&sensor=false&key=AIzaSyAkbWdMgGs624sL4rwDFjyat-ImNwsMnrk');
    
    // Convertir el JSON en array.
    $geo = json_decode($geo, true);
    //print_r($geo);
    // Si todo esta bien
    if ($geo['status'] = 'OK') {
        // Obtener los valores
        $latitude = $geo['results'][0]['geometry']['location']['lat'];
        $longitude = $geo['results'][0]['geometry']['location']['lng'];
    }

   /* $donnees = [
        'idFournisseur' => "3",
        'nomFournisseur' => "Novaquim",
        'idAdrFournisseur' => $manager->idAdr(),
        'cellFournisseur' => "514-412-3434",
        'typeSerFournisseur' => "1",
        'idForfaitFournisseur' => "1",
        'datInsFournisseur' => "2019-04-30",
        'datEcheFournisseur' => "2020-04-30",
        'statuFournisseur' => "1",
        'longFournisseur' => "45.540386",
        'latiFournisseur' => "-73.697921"
    ];
*/


    $donnees = [
    'idFournisseur' => $_SESSION["membreId"],
    'nomFournisseur' => $_POST['nomFournisseur'],
    'idAdrFournisseur' => $manager->idAdr(),
    'cellFournisseur' => $_POST['cellFournisseur'],
    'typeSerFournisseur' => "1",
    'idForfaitFournisseur' => "1",
    'datInsFournisseur' => $_POST["datInsFournisseur"],
    'datEcheFournisseur' => $_POST["datEcheFournisseur"],
    'statuFournisseur' => "1",
    'longFournisseur' => $longitude,
    'latiFournisseur' => $latitude];
    try{
    $funisseur = new Fournisseurs($donnees);
    $manager = new FournisseurManager();
    $manager->add($funisseur); 
    
    }catch (Exception $e){
	   $rep['erreur']="Probleme pour enregistrer";
	 }finally {

    }
}


function lister(){
   try{ 
     $manager = new FournisseurManager();
     $funisseurList = $manager->getList();
     echo json_encode($funisseurList);
    }catch (Exception $e){
	   $rep['erreur']="Probleme pour lister";
	 }finally {
	
	 }
    
}


function enlever(){
    echo 'enlever <br> WR <br>';
     /*
     $donnees = [
      'idCate' => $_POST['idCategorie'],
      'desCate' => $_POST['desCategorie']
    ];*/
    
     $donnees = [
     'idFournisseur' => "3",
     'nomFournisseur' => "Novaquim",
     'idAdrFournisseur' => "1",
     'cellFournisseur' => "514-412-3434",
     'typeSerFournisseur' => "1",
     'idForfaitFournisseur' => "1",
     'datInsFournisseur' => "2019-04-30",
     'datEcheFournisseur' => "2020-04-30",
     'statuFournisseur' => "1",
     'longFournisseur' => "45.540386",
     'latiFournisseur' => "-73.697921"
    ];
   $fourni = new Fournisseurs($donnees);
   $manager = new FournisseurManager();
   $manager->delete($fourni); 
   $rep['msg']="Le Fournisseur a été inactif ";
   echo json_encode($rep);  
}


function fiche(){
    $manager = new FournisseurManager(); 
    $fourniList = $manager->get($_SESSION["membreId"]);
    echo json_encode($fourniList);
}


function modifier(){
      /*
     $donnees = [
     'idCate' => $_POST['idCategorie'],
     'desCate' => $_POST['desCategorie']
    ];
    */
    $donnees = [
     'idFournisseur' => "3",
     'nomFournisseur' => "Novaquim",
     'idAdrFournisseur' => "1",
     'cellFournisseur' => "514-412-3434",
     'typeSerFournisseur' => "1",
     'idForfaitFournisseur' => "1",
     'datInsFournisseur' => "2019-04-30",
     'datEcheFournisseur' => "2020-04-30",
     'statuFournisseur' => "1",
     'longFournisseur' => "45.540386",
     'latiFournisseur' => "-73.697921"
    ];
    $fourni = new Fournisseurs($donnees);
    $manager = new FournisseurManager();
    $manager->update($fourni);
    $rep['msg']="Fournisseur a été actualisé";
    echo json_encode($rep);
}

$action = $_POST['action'];
// $action = 'enregistrer';

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