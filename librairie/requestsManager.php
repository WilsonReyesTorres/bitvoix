<?php
class RequestsManager
{
    private $_pdo; //Instance de PDO

    public function __construct()
    {
        $this->setDb();
    }
    public function add(Requests $reque)
    {
        $requete = 'INSERT INTO requests(idMembre,  idService,  qualRequest,  commRequest,
                    statRequest,  dateRequest,  cleSerRequest) VALUES (?,?,?,?,?,NOW(),?);';
        $stmt = $this->_pdo->prepare($requete);
        $stmt->execute(array($reque->idMembre(),
            $reque->idService(),
            $reque->qualRequest(),
            $reque->commRequest(),
            $reque->statRequest(),
            $reque->cleSerRequest()));
        $idRequest = $this->_pdo->lastInsertId();
        return $idRequest;

    }
    public function delete(Requests $reque)
    {
        $requete = 'UPDATE requests SET statRequest = 3  WHERE idRequest = ?';
        $stmt = $this->_pdo->prepare($requete);
        $stmt->execute(array($reque->idRequest()));
    }
    public function get($idRequest)
    {
        $idRequest = (int) $idRequest;
        $requete = 'SELECT idRequest, idMembre,  idService,  qualRequest,  commRequest,
                               statRequest,  dateRequest,  cleSerRequest
                        FROM requests
                        WHERE idRequest = ? ';
        $stmt = $this->_pdo->prepare($requete);
        $stmt->execute(array($idRequest));
        $result = $stmt->fetch(PDO::FETCH_OBJ);
        if (!$result) {
            $result = ['idRequest' => '', 'idMembre' => '',
                'idService' => '', 'qualRequest' => '',
                'commRequest' => '', 'statRequest' => '',
                'dateRequest' => '', 'cleSerRequest' => ''];
        }
        return $result;
    }
    public function getList()
    {
        $requete = "SELECT * FROM requests ORDER BY idRequest";
        $stmt = $this->_pdo->prepare($requete);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_OBJ);
        return $result;
    }

    public function getListMembre($idMembre)
    {
        $requete = "SELECT idRequest, dateRequest, cleSerRequest, titreService, nomFournisseur  
        FROM requests, fournisseur, services 
        WHERE services.idFournisseur=fournisseur.idFournisseur AND requests.idService=services.idService and idMembre=?;";
        $stmt = $this->_pdo->prepare($requete);
        $stmt->execute(array($idMembre));
        $result = $stmt->fetchAll(PDO::FETCH_OBJ);
        return $result;
    }
    public function update(Requests $reque)
    {
        $requete = "UPDATE requests SET idMembre = ?,  idService = ?,  qualRequest = ?,  commRequest = ?,
                               statRequest = ?,  dateRequest = ?,  cleSerRequest = ?
                        WHERE idRequest = ?";
        $stmt = $this->_pdo->prepare($requete);
        $stmt->execute(array($reque->idMembre(), $reque->idService(),
            $reque->qualRequest(), $reque->commRequest(),
            $reque->statRequest(), $reque->dateRequest(),
            $reque->cleSerRequest(), $reque->idRequest()));
    }

    public function setDb()
    {
        $this->_pdo = Connecter::conexion(); //_pdo c'est l'appel à la classe statique Connecter
    }
}
