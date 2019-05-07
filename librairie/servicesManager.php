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
        $requete = 'INSERT INTO services (  idFournisseur, titreService,  desShortService, desService,  idCategorie, actService, prixService, promService, refeService,
                                                refeEfeService, datLimService, pochetteService, autService)
                                            VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?);';
        $stmt = $this->_pdo->prepare($requete);
        $stmt->execute(array($servi->idFournisseur(), $servi->titreService(),
            $servi->desShortService(),
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
        $requete = 'SELECT COUNT(idRequest) as nomQ, AVG(qualRequest) AS qualServ
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
        $requete = "SELECT * FROM services ORDER BY idService";
        $stmt = $this->_pdo->prepare($requete);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_OBJ);
        return $result;
    }
    public function getListServices()
    {
        $requete = "SELECT services.idService, titreService, desShortService, desService,  prixService, promService, refeService, datLimService, pochetteService, nomFournisseur, nroAdr, rueAdr, desVilAdr, codPosAdr
        FROM services, fournisseur, adresse 
        WHERE services.idFournisseur=fournisseur.idFournisseur AND idAdrFournisseur=idAdr AND actService=1 ORDER BY services.idService;";
        $stmt = $this->_pdo->prepare($requete);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_OBJ);
        return $result;
    }
    public function getListServicesCat($idCategorie)
    {
        $requete = "SELECT services.idService, titreService, desShortService, desService,  prixService, promService, refeService, datLimService, pochetteService, nomFournisseur, nroAdr, rueAdr, desVilAdr, codPosAdr
        FROM services, fournisseur, adresse 
        WHERE services.idFournisseur=fournisseur.idFournisseur AND idAdrFournisseur=idAdr AND actService=1 AND services.idCategorie=? ORDER BY services.idService;";
        $stmt = $this->_pdo->prepare($requete);
        $stmt->execute(array($idCategorie));
        $result = $stmt->fetchAll(PDO::FETCH_OBJ);
        return $result;
    }


    public function update(Services $servi)
    {
        $requete = "UPDATE services SET idFournisseur = ?, titreService = ?,
                                desShortService= ?, desService= ?,   idCategorie= ?, actService = ?,
                                prixService =? , promService = ?, refeService = ? ,
                                refeEfeService = ?, datLimService = ?, pochetteService =? ,
                                autService = ? WHERE idService = ?";
        var_dump($requete);
        $stmt = $this->_pdo->prepare($requete);
        $stmt->execute(array($servi->idFournisseur(), $servi->titreService(),
            $servi->desShortService(), $servi->desService(),
            $servi->idCategorie(), $servi->actService(),
            $servi->prixService(), $servi->promService(),
            $servi->refeService(), $servi->refeEfeService(),
            $servi->datLimService(), $servi->pochetteService(),
            $servi->autService(),
            $servi->idCategorie()));
    }

    public function setDb()
    {
        $this->_pdo = Connecter::conexion(); //_pdo c'est l'appel à la classe statique Connecter
    }
}
