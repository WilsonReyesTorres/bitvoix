<?php
class AdresseManager
{
    private $_pdo; //Instance de PDO
    private $_idAdr; // ID Adress

    public function __construct()
        {
            $this->setDb();
        }

    public function setIdAdr($idAdr)
    {
        if (is_string($idAdr)){
            $this->_idAdr = $idAdr;    
        }
    }
    // listes des getters
    public function idAdr()
    {
        return $this->_idAdr;
    }

    public function add(Adresse $adre)
        {
            // Préparation de la requête d'insertion.
            // Assignation des valeurs .
            // Exécution de la requête.
            //var_dump($adre);
// var_dump($this->_pdo);
        // echo '<br>';
            $requete = 'INSERT INTO adresse(nroAdr, rueAdr, desVilAdr, codPosAdr) VALUES (?,?,?,?);';
            $stmt = $this->_pdo->prepare($requete);
            $stmt->execute(array($adre->nroAdr(),$adre->rueAdr(),$adre->desVilAdr(), $adre->codPosAdr()));
            $id = $this->_pdo->lastInsertId();
            $this->_idAdr=$id;
          }

      public function delete(Adresse  $adre)
          {
//          var_dump($adre);
//          return;
            $requete = 'DELETE FROM adresse WHERE idAdr = ?';
            $stmt = $this->_pdo->prepare($requete);
            $stmt->execute(array($adre->idAdr()));
            
          }

      public function get($idAdr)
        {
            echo '<br> ID: '.$idAdr.'<br>';
            $idAdr = (int) $idAdr;
            $requete = 'SELECT idAdr, nroAdr, rueAdr, desVilAdr, codPosAdr FROM adresse WHERE idAdr = ? ';
            $stmt = $this->_pdo->prepare($requete);
            $stmt->execute(array($idAdr));
            $result = $stmt->fetch(PDO::FETCH_OBJ);
           if (!$result){
               $result = ['idAdr' => '', 'nroAdr' => '', 'rueAdr' => '', 'desVilAdr' => '', 'codPosAdr' => ''];
            }
            return $result;
        
         }
            

      public function getList()
          {
          
          $requete = "SELECT idAdr, nroAdr, rueAdr, desVilAdr, codPosAdr FROM adresse ORDER BY nroAdr";
          $stmt = $this->_pdo->prepare($requete);
          $stmt->execute();
          $result = $stmt->fetchAll(PDO::FETCH_OBJ);
          return $result;
          }

      public function update(Adresse  $Adres)
          {
            $requete = "UPDATE adresse SET nroAdr = ?, rueAdr = ?, desVilAdr = ?, codPosAdr = ? WHERE idAdr = ?";
            $stmt = $this->_pdo->prepare($requete);
            $stmt->execute(array($Adres->nroAdr(),$Adres->rueAdr(),$Adres->desVilAdr(),$Adres->codPosAdr(),$Adres->idAdr()));
          }

      public function setDb()
          {
            $this->_pdo = Connecter::conexion(); //_pdo c'est l'appel à la classe statique Connecter
          }
}

?>
