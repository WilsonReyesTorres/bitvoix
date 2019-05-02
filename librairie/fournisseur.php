<?php
// une Clasee <<  Adresse >>
class Fournisseurs
{
    private $_idFournisseur;    //  ID fournisseur
    private $_nomFournisseur;    //  Nom du fournisseur
    private $_idAdrFournisseur;    //  Adresse du fournisseur
    private $_cellFournisseur;    // téléphone portable du fournisseur
    private $_typeSerFournisseur; //  Type de service 1 Personalisé  2. Agenda  3. Demande
    private $_idForfaitFournisseur;    // Identifie le type de forfaits : 1. Base 2.Stantard 3.Premium
    private $_datInsFournisseur;    //  date d'inscription
    private $_datEcheFournisseur;    // date d\'échéance d\'inscription
    private $_statuFournisseur;    //  Status de Fournisseur
    private $_longFournisseur;    // La Longitud geographique de Fournisseur
    private $_latiFournisseur;    //  La Latitud geographique de Fournisseur
    

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
    public function setIdFournisseur($idFournisseur)
        {
            $idFournisseur = (int) $idFournisseur;
            if ($idFournisseur > 0){
                $this->_idFournisseur = $idFournisseur;
            }
        }
    public function setNomFournisseur($nomFournisseur)
        {
            if (is_string($nomFournisseur)){
                  $this->_nomFournisseur = $nomFournisseur;    
                }
        }
    public function setIdAdrFournisseur($idAdrFournisseur)
        {
            $idAdrFournisseur = (int) $idAdrFournisseur;
            if ($idAdrFournisseur > 0){
                $this->_idAdrFournisseur = $idAdrFournisseur;
                }
        }
    public function setCellFournisseur($cellFournisseur)
        {
//            if (is_string(cellFournisseur)){
                  $this->_cellFournisseur = $cellFournisseur;    
//                }
        }
    public function setTypeSerFournisseur($typeSerFournisseur)
        {
            if (is_string($typeSerFournisseur)){
                  $this->_typeSerFournisseur = $typeSerFournisseur;    
                }
        }
    public function setIdForfaitFournisseur($idForfaitFournisseur)
        {
            if (is_string($idForfaitFournisseur)){
                  $this->_idForfaitFournisseur = $idForfaitFournisseur;   }
        }
         
    public function setDatInsFournisseur($datInsFournisseur)
        {
            $this->_datInsFournisseur = $datInsFournisseur;    
        }
    public function setDatEcheFournisseur($datEcheFournisseur)
        {
            $this->_datEcheFournisseur = $datEcheFournisseur;    
        }
    public function setStatuFournisseur($statuFournisseur)
        {
            if (is_string($statuFournisseur)){
                  $this->_statuFournisseur = $statuFournisseur;    
                }
        }
    public function setLongFournisseur($longFournisseur)
        {
            if ($longFournisseur <> 0){
                $this->_longFournisseur = $longFournisseur;
            }
        }
    public function setLatiFournisseur($latiFournisseur)
        {
            if ($latiFournisseur <> 0){
                $this->_latiFournisseur = $latiFournisseur;
            }
        }
        
        
        
    // listes des getters
    // ID fournisseur
    public function idFournisseur()
      {
        return $this->_idFournisseur;
      }
    //  Nom du fournisseur
    public function nomFournisseur()
      {
        return $this->_nomFournisseur;
      }
    
    public function idAdrFournisseur()
      {
        return $this->_idAdrFournisseur;
      }
    //  Nom du fournisseur
    public function cellFournisseur()
      {
        return $this->_cellFournisseur;
      }
     public function typeSerFournisseur()
      {
        return $this->_typeSerFournisseur;
      }
    //  Nom du fournisseur
    public function idForfaitFournisseur()
      {
        return $this->_idForfaitFournisseur;
      }
     public function datInsFournisseur()
      {
        return $this->_datInsFournisseur;
      }
    //  Nom du fournisseur
    public function datEcheFournisseur()
      {
        return $this->_datEcheFournisseur;
      }
     public function statuFournisseur()
      {
        return $this->_statuFournisseur;
      }
    //  Nom du fournisseur
    public function longFournisseur()
      {
        return $this->_longFournisseur;
      }
    public function latiFournisseur()
      {
        return $this->_latiFournisseur;
      }
}
?>
