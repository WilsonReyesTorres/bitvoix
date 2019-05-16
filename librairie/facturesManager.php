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
          $requete = "UPDATE  fournisseur  SET   idForfaitFournisseur = '2',
                             datInsFournisseur = now(), datEcheFournisseur = ADDDATE(NOW(), INTERVAL 365 DAY)
                             WHERE idFournisseur = ?";
          $stmt = $this->_pdo->prepare($requete);
          $stmt->execute(array($factu->idFournisseur()));

          $requete = 'INSERT INTO facture (idFournisseur,idForfaitFacture,typeSerFacture,
                        dateInsFacture, dateEcheFacture, nomRefFacture, statusFacture) 
                        VALUES (?,?,?,NOW(),(ADDDATE(NOW(), INTERVAL 365 DAY)),?,?);';
            $stmt = $this->_pdo->prepare($requete);
            $stmt->execute(array($factu->idFournisseur(),
                                 $factu->idForfaitFacture(),
                                 $factu->typeSerFacture(),
                                 $factu->nomRefFacture(),
                                 $factu->statusFacture() ));
            $result = ['idFacture' => $this->_pdo->lastInsertId()];
           

            return $result;
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
            $requete = 'SELECT facture.idFournisseur,idForfaitFacture,typeSerFacture,
                  dateInsFacture, dateEcheFacture, nomRefFacture, statusFacture ,fournisseur.nomFournisseur
              FROM facture 
                join fournisseur
                on facture.idFournisseur = fournisseur.idFournisseur
              WHERE idFacture = ?
              ORDER BY facture.idFacture ';
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
          $requete = "SELECT facture.* ,fournisseur.nomFournisseur,
          fournisseur.cellFournisseur,adresse.nroAdr,adresse.rueAdr,adresse.desVilAdr,adresse.codPosAdr,
          membres.courrielMembre
          FROM facture 
          JOIN fournisseur
          ON facture.idFournisseur = fournisseur.idFournisseur
          JOIN adresse 
          ON adresse.idAdr = fournisseur.idAdrFournisseur 
          JOIN membres
          ON membres.idMembre = fournisseur.idFournisseur
          ORDER BY facture.idFacture;";
          $stmt = $this->_pdo->prepare($requete);
          $stmt->execute();
          $result = $stmt->fetchAll(PDO::FETCH_OBJ);
          return $result;
        }
        public function getListFactFournisseur($idFournisseur)
        {
          $requete = "SELECT facture.* ,fournisseur.nomFournisseur,
          fournisseur.cellFournisseur,adresse.nroAdr,adresse.rueAdr,adresse.desVilAdr,adresse.codPosAdr,
          membres.courrielMembre 
          FROM facture 
          JOIN fournisseur
          ON facture.idFournisseur = fournisseur.idFournisseur
          JOIN adresse 
          ON adresse.idAdr = fournisseur.idAdrFournisseur 
          JOIN membres
          ON membres.idMembre = fournisseur.idFournisseur
          WHERE  fournisseur.idFournisseur = ?
          ORDER BY facture.idFacture;";
          $stmt = $this->_pdo->prepare($requete);
          $stmt->execute(array($idFournisseur));
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
