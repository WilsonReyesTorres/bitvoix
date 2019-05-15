<?php
// une Clasee <<  Adresse >>
class Services
{
    
  private $_idService;  //'code du service'
  private $_idFournisseur; //'code fournisseur'
  private $_titreService; //'titre
  private $_desShortService; //'Courte description du service'
  private $_desService; //'Description du service'
  private $_idCategorie; //'Id Categorie FK'
  private $_actService; //'Sercive active'
  private $_prixService; //'prix du fournisseur'
  private $_promService; //'prix en promotion'
  private $_refeService; //'prix référé'
  private $_refeEfeService; //'Nombre de référé pour accèder à la  promotion'
  private $_datLimService;  //'Date limite de promotion'
  private $_pochetteService; //'de la photo qui correspond au service'
  private $_autService;  //' Autorisé Autorisation du service par bit-voix'

    
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
    public function setIdService($idService)
        {
            $idService = (int) $idService;
            if ($idService > 0){
                $this->_idService = $idService;
            }
        }
    public function setIdFournisseur($idFournisseur)
       {
            $idFournisseur = (int) $idFournisseur;
            if ($idFournisseur> 0){
                $this->_idFournisseur = $idFournisseur;
            }
        }
  
     public function setTitreService($titreService)
       {
            if (is_string($titreService)){
                  $this->_titreService = $titreService;    
                }
        }
    
    public function setDesShortService($desShortService)
        {
           if (is_string($desShortService)){
                  $this->_desShortService = $desShortService;    
                }
        }
    public function setDesService($desService)
        {
            if (is_string($desService)){
                  $this->_desService = $desService;    
                }
        }
       public function setIdCategorie($idCategorie)
        {
            $idCategorie = (int) $idCategorie;
            if ($idCategorie > 0){
                $this->_idCategorie = $idCategorie;
            }
        }
    public function setActService($actService)
        {
            $actService = (int) $actService;
            if ($actService > 0){
                $this->_actService = $actService;
            }
        }
         public function setPrixService($prixService)
        {
            $prixService = (float) $prixService;
            if ($prixService > 0){
                $this->_prixService = $prixService;
            }
        }
    public function setPromService($promService)
        {
           $promService = (float) $promService;
            if ($promService > 0){
                $this->_promService = $promService;
            }
        }
    
       public function setRefeService($refeService)
        {
            $refeService = (float) $refeService;
            if ($refeService > 0){
                $this->_refeService = $refeService;
            }
        }
    public function setRefeEfeService($refeEfeService)
        {
            $refeEfeService = (float) $refeEfeService;
            if ($refeEfeService > 0){
                $this->_refeEfeService = $refeEfeService;
            }
        }
    public function setDatLimService($datLimService)
        {
//            $datLimService = (datetime) $datLimService;
//            if ($datLimService > 0){
                $this->_datLimService = $datLimService;
//            }
        }
    public function setPochetteService($pochetteService)
        {
            if (is_string($pochetteService)){
                  $this->_pochetteService = $pochetteService;    
                }
        }
    public function setAutService($autService)
        {
            if (is_string($autService)){
              $this->_autService = $autService;    
            }
        }
    // listes des getters
    // Id de categories
    public function idService()
      {
        return $this->_idService;
      }
    public function idFournisseur()
      {
        return $this->_idFournisseur;
      }
    
    public function titreService()
      {
        return $this->_titreService;
      }        
    public function desShortService()
      {
        return $this->_desShortService;
      }
    public function desService()
      {
        return $this->_desService;
      }
    public function idCategorie()
      {
        return $this->_idCategorie;
      }
    public function  actService()
      {
        return $this->_actService;
      }
    public function prixService()
      {
        return $this->_prixService;
      }
    public function promService()
      {
        return $this->_promService;
      }
    public function refeService()
      {
        return $this->_refeService;
      }
    public function refeEfeService()
      {
        return $this->_refeEfeService;
      }
    public function datLimService()
      {
        return $this->_datLimService;
      }
    public function pochetteService()
      {
        return $this->_pochetteService;
      }
    public function autService()
      {
        return $this->_autService;
      }
}
?>
