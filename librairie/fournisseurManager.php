<?php
class FournisseurManager
{
    private $_pdo; //Instance de PDO

    public function __construct()
        {
            $this->setDb();
        }
    public function add(Fournisseurs $funi)
        {
            $requete = 'INSERT INTO fournisseur(nomFournisseur,idAdrFournisseur,cellFournisseur,typeSerFournisseur,idForfaitFournisseur,datInsFournisseur,datEcheFournisseur,statuFournisseur,longFournisseur,latiFournisseur) VALUES (?,?,?,?,?,?,?,?,?,?);';
            $stmt = $this->_pdo->prepare($requete);
            $stmt->execute(array($funi->nomFournisseur(),$funi->idAdrFournisseur(),$funi->cellFournisseur(),$funi->typeSerFournisseur(),$funi->idForfaitFournisseur(),$funi->datInsFournisseur(),$funi->datEcheFournisseur(),$funi-> statuFournisseur(),$funi->longFournisseur(),$funi->latiFournisseur() ));
        }
      public function delete(Fournisseurs $funi)
        {
            $requete = "UPDATE fournisseur SET statuFournisseur = 0 WHERE idFournisseur = ?";
            $stmt = $this->_pdo->prepare($requete);
            $stmt->execute(array($funi->idFournisseur()));
        }
      public function get($idFournisseur)
        {
          
            $idFournisseur = (int) $idFournisseur;
            $requete = 'SELECT * FROM fournisseur WHERE idFournisseur = ? ';
            $stmt = $this->_pdo->prepare($requete);
            $stmt->execute(array($idFournisseur));
            $result = $stmt->fetch(PDO::FETCH_OBJ);
            if (!$result){
               $result = ['idCate' => '', 'desCate' => ''];
            }
            return $result;
        }
      public function getList()
        {
          $requete = " SELECT idFournisseur, nomFournisseur, idAdrFournisseur, cellFournisseur, typeSerFournisseur, idForfaitFournisseur, datInsFournisseur, datEcheFournisseur, statuFournisseur, longFournisseur,latiFournisseur
          FROM fournisseur ORDER BY nomFournisseur";
          $stmt = $this->_pdo->prepare($requete);
          $stmt->execute();
          $result = $stmt->fetchAll(PDO::FETCH_OBJ);
          return $result;
        }
      public function update(Fournisseurs $funi)
        {
            $requete = "UPDATE fournisseur SET nomFournisseur = ? , idAdrFournisseur = ? , cellFournisseur = ? ,  typeSerFournisseur = ? , idForfaitFournisseur = ? , datInsFournisseur = ? , datEcheFournisseur = ? , statuFournisseur = ? , longFournisseur = ? ,latiFournisseur = ? WHERE idFournisseur = ?";
            $stmt = $this->_pdo->prepare($requete);
            $stmt->execute(array($funi->nomFournisseur(),$funi->idAdrFournisseur(),
                                 $funi->cellFournisseur(),$funi->typeSerFournisseur(),
                                $funi->idForfaitFournisseur(),$funi->datInsFournisseur(),
                                $funi->datEcheFournisseur(),$funi->statuFournisseur(),
                                $funi->longFournisseur(),$funi->latiFournisseur(),
                                $funi->idFournisseur()));
        }
      public function setDb()
        {
            $this->_pdo = Connecter::conexion(); //_pdo c'est l'appel à la classe statique Connecter
        }
}

?>