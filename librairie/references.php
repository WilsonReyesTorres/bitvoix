<?php
// une Clasee <<  Adresse >>
class References
{
    private $_idReference;      // 'Id du references',
    private $_idService;        //'Id du Service',
    private $_idMembre;         //'Id du Memebre',
    private $_courReferences;   //'courriel reference',
    private $_switReferences;   //'Switch reference 0= Non 1=Oui',
    private $_dateReferences;    //'Date de reference ',

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
            $method = 'set'.ucfirst($key);
            if (method_exists($this, $method))
            {
               $this->$method($value);
            }
          }
      }
    // Liste des setters
    public function setIdReference($idReference)
        {
            $idReference = (int) $idReference;
            if ($idReference > 0){
                $this->_idReference = $idReference;
            }
        }
    public function setIdService($idService)
        {
          $idService = (int) $idService;
            if ($idService > 0){
                $this->_idService = $idService;
            }
        }
    public function setIdMembre($idMembre)
        {
            $idMembre = (int) $idMembre;
            if ($idMembre > 0){
                $this->_idMembre = $idMembre;
            }
        }
    public function setCourReferences($courReferences)
        {
            if (is_string($courReferences)){
                  $this->_courReferences = $courReferences;    
                }
        }
    public function setSwitReferences($switReferences)
        {
        if (is_string($switReferences)){
            $this->_switReferences = $switReferences;    
            }
        }
    public function setDateReferences($dateReferences)
        {
        $this->_dateReferences = $dateReferences;    
        }

    // listes des getters
    public function idReference()
      {
        return $this->_idReference;
      }
    public function idService()
      {
        return $this->_idService;
      }
    public function idMembre()
      {
        return $this->_idMembre;
      }
    public function courReferences()
      {
        return $this->_courReferences;
      }
    public function switReferences()
      {
        return $this->_switReferences;
      }
    public function dateReferences()
      {
        return $this->_dateReferences;
      }
}
?>
