<?php
if (session_status() !== PHP_SESSION_ACTIVE) {session_start();}

require_once "../bd/connecter.php";
require_once '../librairie/services.php';
require_once '../librairie/servicesManager.php';


/*****************************  commencer test ***************/

//chargerClasse('adresse')
/*
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



$manager = new ServicesManager();
$manager->add($servi);
return;*/
//****************************  fin test *******************




function enregistrer(){
    $actService = (int) $_POST['actService'];
    $prixService = (int) $_POST['prixService'];
    $promService = (int) $_POST['promService'];
    $refeService = (int) $_POST['refeService'];
    $userId = $_SESSION['sessData']['membreId'];
    $donnees = [
    'idService' => $_POST['idService'],
    'idFournisseur' => $userId, 
    'titreService' => $_POST['titreService'], 
    'desShortService' => $_POST['desShortService'],
    'desService' => $_POST['desService'],
    'idCategorie' => $_POST['idCategorie'], 
    'actService' =>  $actService,
    'prixService' => $prixService,
    'promService' => $promService ,
    'refeService' => $refeService,
    'refeEfeService' => $_POST['refeEfeService'],
    'datLimService' => $_POST['datLimService'],
    'pochetteService' => $_POST['pochetteService'],
    'autService' => '0' ];

  
    $servi = new Services($donnees);
    $manager = new ServicesManager();
    $manager->add($servi);
    try {
    } catch (Exception $e) {
        $rep['erreur'] = "Probleme pour enregistrer";
    } finally {
  
    }
}

function lister()
{
    try {
        $manager = new ServicesManager();
        $ServicesList = $manager->getList();
        echo json_encode($ServicesList);
    } catch (Exception $e) {
        $rep['erreur'] = "Probleme pour lister";
    } finally {

    }

}
function listerServCards()
{
    try {
        $manager = new ServicesManager();
        $ServicesList = $manager->getListServices();
        //echo "count ServicesList" . count($ServicesList) . " <br>";
        $services=[];
        for ($i = 0; $i < count($ServicesList); $i++) {         
          foreach ($ServicesList[$i] as $key => $value) {
            $services[$i][$key]=$value;
          }
          $QualServ = $manager->getQualServ($ServicesList[$i]->idService); 
          foreach ($QualServ as $key => $value) {
            $services[$i][$key]=$value;
          }
        }

        //echo $ServicesList[0]->titreService;
       //echo "<br>";
        echo json_encode($services);
    } catch (Exception $e) {
        $rep['erreur'] = "Probleme pour lister";
    } finally {

    }

}

function listerServCardsCat()
{
    $idCategorie=$_POST['idcateg'];
    try {
        $manager = new ServicesManager();
        $ServicesList = $manager->getListServicesCat($idCategorie);
        //echo "count ServicesList" . count($ServicesList) . " <br>";
        $services=[];
        for ($i = 0; $i < count($ServicesList); $i++) {         
          foreach ($ServicesList[$i] as $key => $value) {
            $services[$i][$key]=$value;
          }
          $QualServ = $manager->getQualServ($ServicesList[$i]->idService); 
          foreach ($QualServ as $key => $value) {
            $services[$i][$key]=$value;
          }
        }

        //echo $ServicesList[0]->titreService;
       //echo "<br>";
        echo json_encode($services);
    } catch (Exception $e) {
        $rep['erreur'] = "Probleme pour lister";
    } finally {

    }

}
function enlever()
{

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
        'actService' => '1',
        'prixService' => '12.20',
        'promService' => '10.22',
        'refeService' => '9.00',
        'refeEfeService' => '1',
        'datLimService' => '2019-05-31',
        'pochetteService' => 'Tout le monde debout.jpg',
        'autService' => '1'];
    $servi = new Services($donnees);
    $manager = new ServicesManager();
    $manager->delete($servi);
    $rep['msg'] = "Service a été inactif";
    echo json_encode($rep);
}


function fiche(){
  /*
     $donnees = [
      'idCate' => $_POST['idCategorie'],
      'desCate' => $_POST['desCategorie']
      ];
    */
    // $donnees = [
    //   'idService' => $_POST['idService'],
    //   'idFournisseur' => '', 
    //   'titreService' => '', 
    //   'desShortService' => '',
    //   'desService' => 'Traduction certifiée en français et anglais',
    //   'idCategorie' => '1', 
    //   'actService' =>  '1',
    //   'prixService' => '12.20',
    //   'promService' => '10.22',
    //   'refeService' => '9.00',
    //   'refeEfeService' => '1',
    //   'datLimService' => '2019-05-31',
    //   'pochetteService' => 'Tout le monde debout.jpg',
    //   'autService' => '1' ];
    //  $servi = new Services($donnees);
   $manager = new ServicesManager(); 
   $ServicesList = $manager->get($_POST['idService']);
   echo json_encode($ServicesList);
}

function modifier()
{
    /*
    $donnees = [
    'idCate' => $_POST['idCategorie'],
    'desCate' => $_POST['desCategorie']
    ];
     */
    $actService = (int) $_POST['actService'];
    $prixService = (int) $_POST['prixService'];
    $promService = (int) $_POST['promService'];
    $refeService = (int) $_POST['refeService'];
    $userId = $_SESSION['sessData']['membreId'];
    $donnees = [
    'idService' => $_POST['idService'],
    'idFournisseur' => $userId, 
    'titreService' => $_POST['titreService'], 
    'desShortService' => $_POST['desShortService'],
    'desService' => $_POST['desService'],
    'idCategorie' => $_POST['idCategorie'], 
    'actService' =>  $actService,
    'prixService' => $prixService,
    'promService' => $promService ,
    'refeService' => $refeService,
    'refeEfeService' => $_POST['refeEfeService'],
    'datLimService' => $_POST['datLimService'],
    'pochetteService' => $_POST['pochetteService'],
    'autService' => '0' ];
    $servi = new Services($donnees);
    $manager = new ServicesManager();
    $manager->update($servi);
    $rep['msg'] = "Service a été actualisé";
    echo json_encode($rep);
}


function autoriser()
{
    $idSer = $_POST['idService'];

    // $servi = new Services($donnees);

    $manager = new ServicesManager();
    $manager->updActivation($idSer);
    $rep['msg'] = "Service a été actualisé";
    echo json_encode($rep);
}

function listSerFour(){
  /*
     $donnees = [
      'idCate' => $_POST['idCategorie'],
      'desCate' => $_POST['desCategorie']
      ];
    */
//  $donnees = [
//       'idService' => '',
//       'idFournisseur' => $membreId, 
//       'titreService' => '', 
//       'desShortService' => '',
//       'desService' => '',
//       'idCategorie' => '', 
//       'actService' =>  '',
//       'prixService' => '',
//       'promService' => '',
//       'refeService' => '',
//       'refeEfeService' => '',
//       'datLimService' => '',
//       'pochetteService' => '',
//       'autService' => '' ];
    
  //  $servi = new Services($donnees);
   $userId = $_SESSION['sessData']['membreId'];
   $manager = new ServicesManager(); 
   $ServicesList = $manager->getListIdFournisseur($userId);
   echo json_encode($ServicesList);
}

function forfaitServic(){
   $userId = $_SESSION['sessData']['membreId'];
   $manager = new ServicesManager(); 
   $ServicesList = $manager->forfaitServic($userId);
   echo json_encode($ServicesList);
};

function listServRequetes(){
   $userId = $_SESSION['sessData']['membreId'];
   $manager = new ServicesManager(); 
   $ServicesList = $manager->forfaitServic($userId);
   echo json_encode($ServicesList);
};

function FourRequetsActif(){
    $userId = $_SESSION['sessData']['membreId'];
    $manager = new ServicesManager(); 
    $ServicesList = $manager->fourRequeService($userId);
    echo json_encode($ServicesList); 
}

//controleur  Services
$action=$_POST['action'];

switch($action){
    case 'enregistrer':
        enregistrer();
        break;
    case 'lister':
        lister();
        break;
    case 'listerServCards':
        listerServCards();
        break;
    case 'listerServCardsCat':
    listerServCardsCat();
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
    case 'autoriser':
        autoriser();
        break;
    case 'listSerFour':
        listSerFour();
        break;
    case 'forfaitServic';
        forfaitServic();
        break;
    case 'listServRequetes':
         listServRequetes();
         break;
     case 'FourRequetsActif':
        FourRequetsActif();    
       
}
