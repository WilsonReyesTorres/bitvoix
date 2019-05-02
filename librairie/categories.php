<?php
// une Clasee <<  Adresse >>
class Categories
{
    private $_idCate;    //  id Categorie
    private $_desCat;    //  description du categorie

    public function __construct(array $donnees) 
//        c'est que si des attributs doivent être initialisés ou qu'une connexion à la BDD doit être faite
      { 
        $this->hydrate($donnees);
      }

        // Un tableau de données doit être passé à la fonction (d'où le préfixe « array »).
    public function hydrate(array $donnees)
      {
          foreach ($donnees as $key => $value)
          {
            // On récupère le nom du setter correspondant à l'attribut.
              $method = 'set'.ucfirst($key);
//            echo "<br>". $method;
             // Si le setter correspondant existe.
            if (method_exists($this, $method))
            {
               // On appelle le setter.
               $this->$method($value);
            }
          }

      }
    
    
    // Liste des setters
    public function setIdCate($idCate)
        {
            $idCate = (int) $idCate;
            if ($idCate > 0){
                $this->_idCate = $idCate;
            }
        }
    public function setDesCate($desCat)
        {
            if (is_string($desCat)){
                  $this->_desCat = $desCat;    
                }
        }
    
    // listes des getters
    // Id de categories
    public function idCate()
      {
        return $this->_idCate;
      }
    //  Description des différentes catégories de services ou de biens
    public function desCate()
      {
        return $this->_desCat;
      }
}
?>
