<?php
class ReferencesManager
{
    private $_pdo; //Instance de PDO

    public function __construct()
    {
        $this->setDb();
    }
    public function add(References $refe)
    {

        $requete = 'INSERT INTO bitvoix_db.references(idService,idMembre,courReferences,switReferences,dateReferences) VALUES (?,?,?,?,NOW());';
        $stmt = $this->_pdo->prepare($requete);
        /*print_r(array($refe->idService(),
            $refe->idMembre(),
            $refe->courReferences(),
            $refe->switReferences()));*/
        $stmt->execute(array($refe->idService(),
            $refe->idMembre(),
            $refe->courReferences(),
            $refe->switReferences()));
        $idReference = $this->_pdo->lastInsertId();
        return $idReference;
    }
    public function delete(References $refe)
    {

        $requete = 'DELETE FROM bitvoix_db.references WHERE idReference = ?';
        $stmt = $this->_pdo->prepare($requete);
        $stmt->execute(array($refe->idReference()));
    }
    public function get($idReference)
    {

        $requete = 'SELECT *  FROM bitvoix_db.references WHERE idReference = ? ';
        $stmt = $this->_pdo->prepare($requete);
        $stmt->execute(array($idReference));
        $result = $stmt->fetch(PDO::FETCH_OBJ);
        if (!$result) {
            $result = ['idReference' => '', 'idService' => '',
                'idMembre' => '', 'courReferences' => '',
                'switReferences' => '', 'dateReferences' => ''];
        }
        return $result;
    }
    public function getList()
    {
        $requete = "SELECT idReference, idService, idMembre, courReferences, switReferences, dateReferences
                     FROM bitvoix_db.references ORDER BY idReference";
        $stmt = $this->_pdo->prepare($requete);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_OBJ);
        return $result;
    }
    public function update(References $refe)
    {
        $requete = "UPDATE bitvoix_db.references SET  idService  = ?, idMembre = ?, courReferences = ?,
                        switReferences = ?, dateReferences = ? WHERE idReference = ?";
        $stmt = $this->_pdo->prepare($requete);
        $stmt->execute(array($refe->idService(),
            $refe->idMembre(), $refe->courReferences(),
            $refe->switReferences(), $refe->dateReferences(),
            $refe->idReference()));
    }

    public function setDb()
    {
        $this->_pdo = Connecter::conexion(); //_pdo c'est l'appel à la classe statique Connecter
    }
}
