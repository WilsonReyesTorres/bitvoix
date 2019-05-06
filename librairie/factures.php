<?php
// une Clasee <<  Adresse >>
class Factures
{
    private $_idFacture;    //  'Id Factura'
    private $_idFournisseur;    //  code fournisseur'
    private $_idForfaitFacture;  //Identifie le type de forfaits : Base Stantard Premium
    private $_typeSerFacture;  //Type de service   1 Personalisé  -- 2. Agenda  3. Demande
    private $_dateInsFacture;    //  'date d\'inscription'
    private $_dateEcheFacture;    //  'date d\'échéance d\'inscription'
    private $_nomRefFacture;    //  Nombre de référence Paypal
    private $_statusFacture; //
    
    

    public function __construct(array $donnees) 
//  c'est que si des attributs doivent être initialisés ou qu'une connexion à la BDD doit être faite
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
    public function setIdFacture($idFacture)
        {
            $idFacture = (int) $idFacture;
            if ($idFacture > 0){
                $this->_idFacture = $idFacture;
            }
        }
    public function setIdFournisseur($idFournisseur)
        {
           $idFournisseur = (int) $idFournisseur;
            if ($idFournisseur> 0){
                $this->_idFournisseur = $idFournisseur;
            }  
        }
    
      public function setIdForfaitFacture($idForfaitFacture)
        {
           $idForfaitFacture = (int) $idForfaitFacture;
            if ($idForfaitFacture> 0){
                $this->_idForfaitFacture = $idForfaitFacture;
            }  
        }
     public function setTypeSerFacture($typeSerFacture)
        {
           $typeSerFacture = (int) $typeSerFacture;
            if ($typeSerFacture> 0){
                $this->_typeSerFacture = $typeSerFacture;
            }  
        }
    
    public function setDateInsFacture($dateInsFacture)
        {
                $this->_dateInsFacture = $dateInsFacture;
        }
    
     public function setDateEcheFacture($dateEcheFacture)
        {
                $this->_dateEcheFacture = $dateEcheFacture;
        }
    
   public function setNomRefFacture($nomRefFacture)
        {
                $this->_nomRefFacture = $nomRefFacture;
        }
      public function setStatusFacture($statusFacture)
        {
                $this->_statusFacture = $statusFacture;
        }
    
    
    // listes des getters
     public function idFacture()
      {
        return $this->_idFacture;
      }
     public function idFournisseur()
      {
        return $this->_idFournisseur;
      }
     public function idForfaitFacture()
      {
        return $this->_idForfaitFacture;
      }
     public function typeSerFacture()
      {
        return $this->_typeSerFacture;
      }
     public function dateInsFacture()
      {
        return $this->_dateInsFacture;
      }
     public function dateEcheFacture()
      {
        return $this->_dateEcheFacture;
      }
     public function nomRefFacture()
      {
        return $this->_nomRefFacture;
      }
     public function statusFacture()
      {
        return $this->_statusFacture;
      }
     
}
?>
