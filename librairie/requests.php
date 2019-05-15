<?php
// une Clasee <<  Adresse >>
class Requests
{
    private $_idRequest;        //'Id du request'
    private $_idMembre;         // Id du Memebre'
    private $_idService;        //'Id du Service'
    private $_qualRequest;      //'Score de qualité de service'
    private $_commRequest;      //'Commentaires du client'
    private $_statRequest;      //'Statut du request: 1. Ouvert, 2. fermé, '
    private $_dateRequest;      //'date de la requete'
    private $_cleSerRequest;    //'cLé du service'

    public function __construct(array $donnees) 
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
    public function setIdRequest($idRequest)
        {
            $idRequest = (int) $idRequest;
            if ($idRequest > 0){
                $this->_idRequest = $idRequest;
            }
        }
    public function setIdMembre($idMembre)
        {
            $idMembre = (int) $idMembre;
            if ($idMembre > 0){
                $this->_idMembre = $idMembre;
            }
        }
    public function setIdService($idService)
        {
          $idService = (int) $idService;
            if ($idService > 0){
                $this->_idService = $idService;
            }  
        }
    public function setQualRequest($qualRequest)
        {
            $qualRequest = (float) $qualRequest;
            if ($qualRequest > 0){
                $this->_qualRequest = $qualRequest;
            }
        }
       public function setCommRequest($commRequest)
        {
            if (is_string($commRequest)){
             $this->_commRequest = $commRequest;    
            }
        }
    public function setStatRequest($statRequest)
        {
           $statRequest = (int) $statRequest;
            if ($statRequest > 0){
                $this->_statRequest = $statRequest;
            }
        }
       public function setDateRequest($dateRequest)
        {
                $this->_dateRequest = $dateRequest;
        }
    public function setCleSerRequest($cleSerRequest)
        {
            if (is_string($cleSerRequest)){
             $this->_cleSerRequest = $cleSerRequest;    
            }
        }
    // listes des getters
    public function idRequest()
      {
        return $this->_idRequest;
      }
    //  Description des différentes catégories de services ou de biens
    public function idMembre()
      {
        return $this->_idMembre;
      }
    public function idService()
      {
        return $this->_idService;
      }
    //  Description des différentes catégories de services ou de biens
    public function qualRequest()
      {
        return $this->_qualRequest;
      }
    public function commRequest()
      {
        return $this->_commRequest;
      }
    //  Description des différentes catégories de services ou de biens
    public function statRequest()
      {
        return $this->_statRequest;
      }
    public function dateRequest()
      {
        return $this->_dateRequest;
      }
    //  Description des différentes catégories de services ou de biens
    public function cleSerRequest()
      {
        return $this->_cleSerRequest;
      }
}
?>
