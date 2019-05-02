<?php
class FacturesManager
{
    private $_pdo; //Instance de PDO

    public function __construct()
        {
            $this->setDb();
        }
    public function add(Factures $factu)
        {
            $requete = 'INSERT INTO facture (idFournisseur,idForfaitFacture,typeSerFacture,
                        dateInsFacture, dateEcheFacture, nomRefFacture, statusFacture) 
                        VALUES (?,?,?,?,?,?,?);';
            $stmt = $this->_pdo->prepare($requete);
            $stmt->execute(array($factu->idFournisseur(),
                                 $factu->idForfaitFacture(),
                                 $factu->typeSerFacture(),
                                 $factu->dateInsFacture(),
                                 $factu->dateEcheFacture(),
                                 $factu->nomRefFacture(),
                                 $factu->statusFacture() ));
        }
      public function delete(Factures $factu)
        {
            $requete = 'UPDATE facture SET statusFacture = 2 WHERE idFacture = ?';
            $stmt = $this->_pdo->prepare($requete);
            $stmt->execute(array($factu->idFacture()));
        }
      public function get($idFacture)
        {
//            echo '<br> ID: '.$idCate.'<br>';
            $idFacture = (int) $idFacture;
            $requete = 'SELECT idFournisseur,idForfaitFacture,typeSerFacture,
                        dateInsFacture, dateEcheFacture, nomRefFacture, statusFacture
                        FROM facture WHERE idFacture = ? ';
            $stmt = $this->_pdo->prepare($requete);
            $stmt->execute(array($idFacture));
            $result = $stmt->fetch(PDO::FETCH_OBJ);
           if (!$result){
               $result = ['idFacture' => $idFacture, 'idFournisseur' => '' ,
                          'idForfaitFacture' => '', 'typeSerFacture' => '',
                          'dateInsFacture' => '', 'dateEcheFacture'  => '', 
                          'nomRefFacture'  => '', 'statusFacture' => ''];
            }
            return $result;
        }
      public function getList()
        {
          $requete = "SELECT * FROM facture ORDER BY idFacture";
          $stmt = $this->_pdo->prepare($requete);
          $stmt->execute();
          $result = $stmt->fetchAll(PDO::FETCH_OBJ);
          return $result;
        }
      public function update(Factures $factu)
        {
            $requete = "UPDATE facture SET idFournisseur = ?, idForfaitFacture  = ?, typeSerFacture  = ?,
                        dateInsFacture = ?, dateEcheFacture = ?, nomRefFacture = ?, statusFacture = ?
                        WHERE idFacture = ? ";
            $stmt = $this->_pdo->prepare($requete);
            $stmt->execute(array($factu->idFournisseur(),$factu->idForfaitFacture(),
                                 $factu->typeSerFacture(), $factu->dateInsFacture(),
                                $factu->dateEcheFacture(), $factu->nomRefFacture(),
                                 $factu->statusFacture(),$factu->idFacture()));
        }

      public function setDb()
        {
            $this->_pdo = Connecter::conexion(); //_pdo c'est l'appel à la classe statique Connecter
        }
}

?>
