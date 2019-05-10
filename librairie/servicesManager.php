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
            $stmt->execute(array($servi->idFournisseur(),  $servi->titreService(), 
                                 $servi->desShortService(),
                                 $servi->desService(),      $servi->idCategorie(),
                                 $servi->actService(),      $servi->prixService(),
                                 $servi->promService(),     $servi->refeService(),
                                 $servi->refeEfeService(),  $servi->datLimService(),
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
           if (!$result){
               $result = [ 'idService' => '',       'idFournisseur' => '', 
                          'titreService'=> '',
                          'desShortService' => '', 'desService' => '',
                          'idCategorie' => '',     'actService' =>  '',
                          'prixService' => '',     'promService' => '',
                          'refeService' => '',     'refeEfeService' => '',
                          'datLimService' => '',   'pochetteService' => '',
                          'autService' => ''];
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
      public function getListIdFournisseur($idFournisseur)
        {
          $idFournisseur = (int) $idFournisseur;
          // $requete = 'SELECT * FROM services WHERE idFournisseur = ? ';
          $requete = ' SELECT services.*, 	AVG(qualRequest) AS Quality, COUNT(qualRequest) as kcount
           FROM services, requests
           WHERE services.idService =  requests.idService
             AND services.idFournisseur = ?
             AND  requests.statRequest <> 3
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
          var_dump($requete);
            $stmt = $this->_pdo->prepare($requete);
            $stmt->execute(array($servi->idFournisseur(),   $servi->titreService(),
                                 $servi->desShortService(), $servi->desService(),      
                                 $servi->idCategorie(),     $servi->actService(), 
                                 $servi->prixService(),     $servi->promService(),
                                 $servi->refeService(),     $servi->refeEfeService(),
                                 $servi->datLimService(),   $servi->pochetteService(),
                                 $servi->autService(),
                                 $servi->idCategorie()));
        }

      public function setDb()
        {
            $this->_pdo = Connecter::conexion(); //_pdo c'est l'appel à la classe statique Connecter
        }
}

?>
