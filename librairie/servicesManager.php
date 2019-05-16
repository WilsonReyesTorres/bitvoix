<?php
class ServicesManager
{
    private $_pdo; //Instance de PDO

    public function __construct()
    {
        $this->setDb();
    }
    public function add(Services $servi)
    {
        $requete = 'INSERT INTO services (  idFournisseur, titreService,  desShortService, 
                                            desService,  idCategorie, 
                                            actService, prixService, 
                                            promService, refeService,
                                            refeEfeService, datLimService, pochetteService, autService)
                                            VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)';
        $stmt = $this->_pdo->prepare($requete);
        $stmt->execute(array($servi->idFournisseur(), $servi->titreService(), $servi->desShortService(),
            $servi->desService(), $servi->idCategorie(),
            $servi->actService(), $servi->prixService(),
            $servi->promService(), $servi->refeService(),
            $servi->refeEfeService(), $servi->datLimService(),
            $servi->pochetteService(), $servi->autService()));
    }
    public function delete(Services $servi)
    {

        $requete = 'UPDATE services SET actService = 0 WHERE idService = ?';
        $stmt = $this->_pdo->prepare($requete);
        $stmt->execute(array($servi->idService()));
    }
    public function get($idService)
    {
//            echo '<br> ID: '.$idCate.'<br>';
        $idService = (int) $idService;
        $requete = 'SELECT * FROM services WHERE idService = ? ';
        $stmt = $this->_pdo->prepare($requete);
        $stmt->execute(array($idService));
        $result = $stmt->fetch(PDO::FETCH_OBJ);
        if (!$result) {
            $result = ['idService' => $idService, 'idFournisseur' => '',
                'titreService' => '',
                'desShortService' => '', 'desService' => '',
                'idCategorie' => '', 'actService' => '',
                'prixService' => '', 'promService' => '',
                'refeService' => '', 'refeEfeService' => '',
                'datLimService' => '', 'pochetteService' => '',
                'autService' => ''];
        }
        return $result;
    }
   
  public function getQualServ($idService)
    {
//            echo '<br> ID: '.$idCate.'<br>';
        $idService = (int) $idService;
        $requete = 'SELECT COUNT(idRequest) as nomQ, round(AVG(qualRequest)*2,0)/2 AS qualServ
        FROM requests
        WHERE idService=? GROUP BY idService';
        $stmt = $this->_pdo->prepare($requete);
        $stmt->execute(array($idService));
        $result = $stmt->fetch(PDO::FETCH_OBJ);
        if (!$result) {
            $result = ['nomQ' => '',
                'qualServ' => ''];
        }
        return $result;
    }
   
  public function getList()
    {
      $requete = "SELECT idService, services.idFournisseur, titreService, desShortService, desService, services.idCategorie, actService, prixService, promService, refeService, refeEfeService, datLimService, pochetteService, autService, fournisseur.nomFournisseur, categories.desCategorie 
      FROM services, fournisseur, categories 
      WHERE services.idFournisseur = fournisseur.idFournisseur AND services.idCategorie = categories.idCategorie
      ORDER BY idService";
      $stmt = $this->_pdo->prepare($requete);
      $stmt->execute();
      $result = $stmt->fetchAll(PDO::FETCH_OBJ);
      return $result;
    }
   
  public function getListServices()
    {
        if ((isset($_SESSION['sessData']["lat"])) && (isset($_SESSION['sessData']["lng"]))) {
            $longitude = $_SESSION['sessData']["lng"];
            $latitude = $_SESSION['sessData']["lat"];
            $requete = "SELECT services.idService, titreService, desShortService, desService,  prixService, promService, refeService, datLimService, pochetteService, nomFournisseur, nroAdr, rueAdr, desVilAdr, codPosAdr,
            ( 6371 * acos( cos( radians(" . $latitude . ") ) * cos( radians( latiFournisseur ) ) * cos( radians( longFournisseur ) - radians(" . $longitude . ") ) + sin( radians(" . $latitude . ") ) * sin( radians( latiFournisseur ) ) ) ) AS distance
            FROM services, fournisseur, adresse
            WHERE services.idFournisseur=fournisseur.idFournisseur AND idAdrFournisseur=idAdr AND actService=1 HAVING distance < 10 ORDER BY services.idService;";
        } else {
            $requete = "SELECT services.idService, titreService, desShortService, desService,  prixService, promService, refeService, datLimService, pochetteService, nomFournisseur, nroAdr, rueAdr, desVilAdr, codPosAdr
            FROM services, fournisseur, adresse
            WHERE services.idFournisseur=fournisseur.idFournisseur AND idAdrFournisseur=idAdr AND actService=1 ORDER BY services.idService;";
        }

        $stmt = $this->_pdo->prepare($requete);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_OBJ);
        if($result==NULL){
            $requete = "SELECT services.idService, titreService, desShortService, desService,  prixService, promService, refeService, datLimService, pochetteService, nomFournisseur, nroAdr, rueAdr, desVilAdr, codPosAdr
            FROM services, fournisseur, adresse
            WHERE services.idFournisseur=fournisseur.idFournisseur AND idAdrFournisseur=idAdr AND actService=1 ORDER BY services.idService;";
            $stmt = $this->_pdo->prepare($requete);
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_OBJ);

        }

        return $result;
    }
    public function getListServicesCat($idCategorie)
    {
        if ((isset($_SESSION['sessData']["lat"])) && (isset($_SESSION['sessData']["lng"]))) {
            $longitude = $_SESSION['sessData']["lng"];
            $latitude = $_SESSION['sessData']["lat"];
            $requete = "SELECT services.idService, titreService, desShortService, desService,  prixService, promService, refeService, datLimService, pochetteService, nomFournisseur, nroAdr, rueAdr, desVilAdr, codPosAdr,
            ( 6371 * acos( cos( radians(" . $latitude . ") ) * cos( radians( latiFournisseur ) ) * cos( radians( longFournisseur ) - radians(" . $longitude . ") ) + sin( radians(" . $latitude . ") ) * sin( radians( latiFournisseur ) ) ) ) AS distance
            FROM services, fournisseur, adresse
            WHERE services.idFournisseur=fournisseur.idFournisseur AND idAdrFournisseur=idAdr AND actService=1 AND services.idCategorie=? HAVING distance < 10 ORDER BY services.idService;";
        } else {
            $requete = "SELECT services.idService, titreService, desShortService, desService,  prixService, promService, refeService, datLimService, pochetteService, nomFournisseur, nroAdr, rueAdr, desVilAdr, codPosAdr
            FROM services, fournisseur, adresse
            WHERE services.idFournisseur=fournisseur.idFournisseur AND idAdrFournisseur=idAdr AND actService=1 AND services.idCategorie=? ORDER BY services.idService;";
        }
        $stmt = $this->_pdo->prepare($requete);
        $stmt->execute(array($idCategorie));
        $result = $stmt->fetchAll(PDO::FETCH_OBJ);
        if($result==NULL){
            $requete = "SELECT services.idService, titreService, desShortService, desService,  prixService, promService, refeService, datLimService, pochetteService, nomFournisseur, nroAdr, rueAdr, desVilAdr, codPosAdr
            FROM services, fournisseur, adresse
            WHERE services.idFournisseur=fournisseur.idFournisseur AND idAdrFournisseur=idAdr AND actService=1 AND services.idCategorie=? ORDER BY services.idService;";
            $stmt = $this->_pdo->prepare($requete);
            $stmt->execute(array($idCategorie));
            $result = $stmt->fetchAll(PDO::FETCH_OBJ);

        }
        return $result;
    }

    public function getListIdFournisseur($idFournisseur)
    {
      $idFournisseur = (int) $idFournisseur;
      // $requete = 'SELECT * FROM services WHERE idFournisseur = ? ';
      $requete = '   SELECT services.*, TRUNCATE(AVG( IF(requests.statRequest <> 3,qualRequest,0)),1)  AS Quality,
             COUNT(qualRequest) AS kcount, fournisseur.idForfaitFournisseur,fournisseur.datEcheFournisseur
             FROM services
       LEFT JOIN requests  ON services.idService =  requests.idService
       INNER JOIN fournisseur ON services.idFournisseur  = fournisseur.idFournisseur
      WHERE services.idFournisseur = ?
      GROUP BY idService;';
      $stmt = $this->_pdo->prepare($requete);
      $stmt->execute(array($idFournisseur));
      $result = $stmt->fetchAll(PDO::FETCH_OBJ);
      if (!$result){
        $result = [ 'idService' => ''];
      }
      return $result;
    }

    public function update(Services $servi)
    {
        $requete = "UPDATE services SET idFournisseur = ?, titreService = ?,
                                desShortService= ?, desService= ?,   idCategorie= ?, actService = ?,
                                prixService =? , promService = ?, refeService = ? ,
                                refeEfeService = ?, datLimService = ?, pochetteService =? ,
                               autService = ? WHERE idService = ?";
        $stmt = $this->_pdo->prepare($requete);
        $stmt->execute(array($servi->idFournisseur(), $servi->titreService(),
            $servi->desShortService(), $servi->desService(),
            $servi->idCategorie(), $servi->actService(),
            $servi->prixService(), $servi->promService(),
            $servi->refeService(), $servi->refeEfeService(),
            $servi->datLimService(), $servi->pochetteService(),
            $servi->idService()));
    }
    public function updActivation($idService)
    {
        $idService = (int) $idService;
        $requete = " update services set autService = 1 Where IdService = ?";
        // var_dump($requete);
        $stmt = $this->_pdo->prepare($requete);
        $stmt->execute(array($idService));
    }

    public function forfaitServic($idFournisseur){
        // $idFournisseur = (int) $idFournisseur;
        $requete = " SELECT idForfaitFournisseur, (SELECT count(idservice)  FROM bitvoix_db.services WHERE idFournisseur = ?) AS nroServ,
                     DATEDIFF(now(),Fournisseur.datInsFournisseur) as jours, DATEDIFF(datEcheFournisseur,now()) as jouract 
                     FROM Fournisseur  WHERE  idFournisseur = ?";
        // var_dump($requete);
        $stmt = $this->_pdo->prepare($requete);
        $stmt->execute(array($idFournisseur,$idFournisseur));
        $result = $stmt->fetchAll(PDO::FETCH_OBJ);
        return $result;
    }

    public function listServRequetes($idFournisseur){
        // $idFournisseur = (int) $idFournisseur;
        $requete = " SELECT idForfaitFournisseur, (SELECT count(idservice)  FROM bitvoix_db.services WHERE idFournisseur = ?) AS nroServ
                     FROM Fournisseur  WHERE  idFournisseur = ?";
        // var_dump($requete);
        $stmt = $this->_pdo->prepare($requete);
        $stmt->execute(array($idFournisseur,$idFournisseur));
        $result = $stmt->fetchAll(PDO::FETCH_OBJ);
        return $result;
    }

    public function fourRequeService($idFournisseur){
        $requete = "   SELECT services.titreService, services.prixService, services.promService, services.refeService,services.refeEfeService,
        IF (services.datLimService >= now(),'Actif','échéance') AS Servstatut,
        requests.idRequest, requests.idMembre, requests.cleSerRequest,
        membres.nomMembre,membres.preNomMembre,
        f_referido(membres.idMembre,requests.idService) AS NroRefe
        FROM services,requests,membres
        WHERE services.idFournisseur = ?
        AND services.idService =  requests.idService
        AND requests.idMembre = membres.idMembre
        AND requests.statRequest = 1; ";
        $stmt = $this->_pdo->prepare($requete);
        $stmt->execute(array($idFournisseur));
        $result = $stmt->fetchAll(PDO::FETCH_OBJ);
        return $result;
    }
    



    public function setDb()
    {
        $this->_pdo = Connecter::conexion(); //_pdo c'est l'appel à la classe statique Connecter
    }
}
