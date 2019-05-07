<?php

class Connecter{
    //Methode statique qui peut être appelée sans qu'une instance d'objet n'ait été créée
    public static function conexion(){
     //Parametres pour la connexion à la base de données: dbname=nomBaseDeDonnés; host=serveur; charset=utf8; 
        $dsn = 'mysql:dbname=bitvoix_db;host=localhost;charset=utf8';
        $user = 'bitvoix_user'; //usager
        $password = 'adminbitvoixcanada2019$';//mot de passe        
        try {
            $connexion = new PDO($dsn, $user, $password);
        } catch (PDOException $e) {
            echo 'Connexion incorrect à la base de données : ' . $e->getMessage();
        }
        $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
        return $connexion;
    }

    public static function closeConnection()
    {
        unset($connexion);
    }
}
/*
Como utilizarla en los Manager
public function __construct(){
       $this->productos=array(); //Le decimos que sea un array 
       $this->db=Conectar::conexion(); //Almacenamos en db la llamada la clase estática Conectar
    }*/
?>
