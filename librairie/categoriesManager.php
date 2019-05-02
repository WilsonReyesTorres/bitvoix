<?php
class CategoriesManager
{
    private $_pdo; //Instance de PDO

    public function __construct()
        {
            $this->setDb();
        }
    public function add(Categories $cate)
        {
            $requete = 'INSERT INTO categories(desCategorie) VALUES (?);';
            $stmt = $this->_pdo->prepare($requete);
            $stmt->execute(array($cate->desCate()));
        }
      public function delete(Categories $cate)
        {
            $requete = 'DELETE FROM categories WHERE idCategorie = ?';
            $stmt = $this->_pdo->prepare($requete);
            $stmt->execute(array($cate->idCate()));
        }
      public function get($idCate)
        {
            echo '<br> ID: '.$idCate.'<br>';
            $idCate = (int) $idCate;
            $requete = 'SELECT idCategorie, desCategorie FROM categories WHERE idCategorie = ? ';
            $stmt = $this->_pdo->prepare($requete);
            $stmt->execute(array($idCate));
            $result = $stmt->fetch(PDO::FETCH_OBJ);
           if (!$result){
               $result = ['idCate' => '', 'desCate' => ''];
            }
            return $result;
        }
      public function getList()
        {
          $requete = "SELECT idCategorie, desCategorie FROM categories ORDER BY idCategorie";
          $stmt = $this->_pdo->prepare($requete);
          $stmt->execute();
          $result = $stmt->fetchAll(PDO::FETCH_OBJ);
          return $result;
        }
      public function update(Categories $cate)
        {
            $requete = "UPDATE categories SET desCategorie = ? WHERE idCategorie = ?";
            $stmt = $this->_pdo->prepare($requete);
            $stmt->execute(array($cate->desCate(),$cate->idCate()));
        }

      public function setDb()
        {
            $this->_pdo = Connecter::conexion(); //_pdo c'est l'appel à la classe statique Connecter
        }
}

?>
