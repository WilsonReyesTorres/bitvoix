<?php
// une Clasee <<  Adresse >>
class Adresse
{
    private $_idAdr;    //  id Adresse
    private $_nroAdr;   //  Numéro civique'
    private $_rueAdr;   //  Rue de Addrese
    private $_desVilAdr; // La ville
    private $_codPosAdr; // Le code postal

    
    
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
         // Si le setter correspondant existe.
        if (method_exists($this, $method))
        {
           // On appelle le setter.
           $this->$method($value);
        }
      }
      
  }
    
    
    // Liste des setters
    public function setIdAdr($idAdr)
        {
        if (is_string($idAdr)){
              $this->_idAdr = $idAdr;    
            }
        }
    public function setNroAdr($nroAdr)
        {
        $nroAdr = (int) $nroAdr;
        if ($nroAdr > 0){
            $this->_nroAdr = $nroAdr;    
            }
        }
    public function setRueAdr($rueAdr)
        {
        if (is_string($rueAdr)){
            $this->_rueAdr = $rueAdr;
          }
        }
    
    public function setDesVilAdr($desVilAdr)
        {
        if (is_string($desVilAdr)){
             $this->_desVilAdr = $desVilAdr;
            }
        }
    
      public function setCodPosAdr($codPosAdr)
        {
        if (is_string($codPosAdr)){
             $this->_codPosAdr = $codPosAdr;
            }
        }

    // listes des getters
    public function idAdr()
      {
        return $this->_idAdr;
      }
    //  Numéro civique'
    public function nroAdr()
      {
        return $this->_nroAdr;
      }
    
    //  Rue de Addrese
    public function rueAdr()
      {
        return $this->_rueAdr;
      }
    // La ville
    
    public function desVilAdr()
      {
        return $this->_desVilAdr;
      }
    
    // Le code postal
    public function codPosAdr()
      {
        return $this->_codPosAdr;
      }
}
?>
