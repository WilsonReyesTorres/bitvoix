-- MySQL Workbench Forward Engineering
-- bitvoix2019$
-- Question
-- Producto mas de categoria
-- Auditoria Usuario mas fecha
-- En el usuario colocar un slider para identificar los servicios solictados
-- En el usuario colocar un slider para identificar el historia de servicios utilisados

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema bitvoix
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema bitvoix
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bitvoix` DEFAULT CHARACTER SET utf8  COLLATE=utf8_unicode_ci ;
USE `bitvoix` ;

-- -----------------------------------------------------
-- Table `bitvoix`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bitvoix`.`categories` (
  `idCategorie` INT NOT NULL auto_increment COMMENT 'Id de categories',
  `desCategorie` VARCHAR(45) NOT NULL COLLATE utf8_unicode_ci  COMMENT 'Description des différentes catégories de services ou de biens',
  PRIMARY KEY (`idCategorie`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bitvoix`.`adresse`
-- -----------------------------------------------------
 
CREATE TABLE IF NOT EXISTS `bitvoix`.`adresse` (
  `idAdr` INT NOT NULL auto_increment COMMENT 'id Adresse',
  `nroAdr` INT NOT NULL COMMENT 'Numéro civique',
  `rueAdr` VARCHAR(40) NOT NULL COLLATE utf8_unicode_ci  COMMENT 'Rue de Addrese',
  `desVilAdr` VARCHAR(20) NOT NULL COLLATE utf8_unicode_ci COMMENT 'La ville',
  `codPosAdr` VARCHAR(6) NOT NULL COLLATE utf8_unicode_ci  COMMENT 'Le code postal',
  PRIMARY KEY (`idAdr`))
ENGINE = InnoDB;




-- -----------------------------------------------------
-- Table `bitvoix`.`membres`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bitvoix`.`membres` (
  `idMembre` INT NOT NULL AUTO_INCREMENT COMMENT 'Id du client',
  `nomMembre` VARCHAR(45) NOT NULL COLLATE utf8_unicode_ci  COMMENT 'Nom du client',
  `preNomMembre` VARCHAR(45) NOT NULL COLLATE utf8_unicode_ci  COMMENT 'Nom du client',
  `courrielMembre` VARCHAR(45) NOT NULL COLLATE utf8_unicode_ci  COMMENT 'courriel usager',
  `oauthProviderMembre` VARCHAR(15)  NOT NULL  COLLATE utf8_unicode_ci NOT NULL COMMENT ' oauth_provider connexion',
  `oauthUidMembre` VARCHAR(25)  NOT NULL COLLATE utf8_unicode_ci NOT NULL COMMENT 'oauth_uid connexion',
  `createdMembre` DATETIME NOT NULL COMMENT 'créé connexion',
  `modifiedMembre` DATETIME NOT NULL COMMENT 'modifié connexion',
  `motPasseMembre` VARCHAR(40) COMMENT 'Mot de passe connexion',
  PRIMARY KEY (`idMembre`),
  UNIQUE INDEX `courriel_UNIQUE` (`courrielMembre` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bitvoix`.`fournisseur`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bitvoix`.`fournisseur` (
  `idFournisseur` INT NOT NULL AUTO_INCREMENT COMMENT  'code fournisseur',
  `nomFournisseur` VARCHAR(45) NOT NULL COLLATE utf8_unicode_ci  COMMENT 'Nom du fournisseur',
  `idAdrFournisseur` INT NOT NULL COLLATE utf8_unicode_ci  COMMENT 'Adresse du fournisseur',
  `cellFournisseur` VARCHAR(10) NOT NULL COLLATE utf8_unicode_ci  COMMENT 'Numéro de téléphone portable du fournisseur\n',
  `typeSerFournisseur` VARCHAR(1) NOT NULL COLLATE utf8_unicode_ci  COMMENT 'Type de service   1 Personalisé  2. Agenda  3. Demande',
  `idForfaitFournisseur` VARCHAR(1) NOT NULL COLLATE utf8_unicode_ci   COMMENT 'Identifie le type de forfaits : 1. Base 2.Stantard 3.Premium',
  `datInsFournisseur` DATE NOT NULL COMMENT 'date d\'inscription',
  `datecheFournisseur` DATE NOT NULL  COMMENT 'date d\'échéance d\'inscription',
  `statuFournisseur` VARCHAR(1) COLLATE utf8_unicode_ci  NOT NULL COLLATE utf8_unicode_ci  COMMENT 'Status de Fournisseur',
  `longFournisseur` DECIMAL(10,4) NOT NULL  COMMENT 'La Longitud geographique de Fournisseur',
  `latiFournisseur` DECIMAL(10,4) NOT NULL  COMMENT 'La Latitud geographique de Fournisseur',
  PRIMARY KEY (`idFournisseur`),
   CONSTRAINT `fouadr`
    FOREIGN KEY (`idAdrFournisseur`)
    REFERENCES `bitvoix`.`adresse` (`idAdr`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `bitvoix`.`facture`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bitvoix`.`facture` (
  `idFacture` INT NOT NULL AUTO_INCREMENT COMMENT 'code fournisseur',
  `idFournisseur` INT NOT NULL COMMENT 'code fournisseur',
  `idForfaitFournisseur` VARCHAR(1) NOT NULL COMMENT 'Identifie le type de forfaits : Base Stantard Premium',
  `typeSerFournisseur` VARCHAR(1) NOT NULL COLLATE utf8_unicode_ci  COMMENT 'Type de service   1 Personalisé  -- 2. Agenda  3. Demande',
  `dateInsFournisseur` DATE NOT NULL COMMENT 'date d\'inscription',
  `dateEcheFournisseur` DATE NOT NULL COMMENT 'date d\'échéance d\'inscription',
  `nomRefFournisseur` VARCHAR(20) NOT NULL  COLLATE utf8_unicode_ci  COMMENT 'Nombre de référence Paypal',
  PRIMARY KEY (`idFacture`),
   CONSTRAINT `facfou`
    FOREIGN KEY (`idFournisseur`)
    REFERENCES `bitvoix`.`fournisseur` (`idFournisseur`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bitvoix`.`services`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bitvoix`.`services` (
  `idService` INT NOT NULL AUTO_INCREMENT COMMENT 'code du service',
  `idFournisseur` INT NOT NULL COMMENT 'code fournisseur',
  `desShortService` VARCHAR(12) NOT NULL  COLLATE utf8_unicode_ci COMMENT 'Courte description du service',
  `desService` VARCHAR(250) NOT NULL COLLATE utf8_unicode_ci  COMMENT 'Description du service',
  `idCategorie` INT NOT NULL COMMENT 'Id Categorie FK', 
  `ActService` INT NOT NULL COMMENT 'Sercive active',
  `prixService` DECIMAL(10,2) NOT NULL COMMENT 'prix du fournisseur',
  `promService` DECIMAL(10,2) NOT NULL COMMENT 'prix en promotion',
  `refeService` DECIMAL(10,2) NOT NULL COMMENT 'prix référé',
  `refeEfeService` INT  NOT NULL COMMENT 'Nombre de référé pour accèder à la  promotion',
  `datlimfournisseur` DATE NOT NULL COMMENT 'Date limite de promotion',
  `urlSerfournisseur` VARCHAR(200) NOT NULL COLLATE utf8_unicode_ci  COMMENT 'URL de la photo qui correspond au service',
  `AutSerfournisseur` VARCHAR(1) NOT NULL COLLATE utf8_unicode_ci COMMENT 'Autorizacion du service par bit-voix',
  PRIMARY KEY (`idService`),
   CONSTRAINT `sercat`
    FOREIGN KEY (`idCategorie`)
    REFERENCES `bitvoix`.`categories` (`idCategorie`),
  CONSTRAINT `SerFour`
    FOREIGN KEY (`idFournisseur`)
    REFERENCES `bitvoix`.`fournisseur` (`idFournisseur`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `bitvoix`.`requetes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bitvoix`.`requests` (
  `idRequest` INT NOT NULL auto_increment COMMENT 'Id du request',
  `idMembre` INT NOT NULL COMMENT 'Id du Memebre',
  `idService` INT NOT NULL COMMENT 'Id du Service',
  `qualRequest` DECIMAL(3,1) NOT NULL COMMENT 'Score de qualité de service',
  `commRequest` VARCHAR(60) NOT NULL COLLATE utf8_unicode_ci  COMMENT 'Commentaires du client',
  `statRequest` INT NOT NULL COMMENT 'Statut du request: 1. Ouvert, 2. fermé, ',
  `dateRequest` DATE NOT NULL COMMENT 'date de la requete',
  `cleSerRequest` VARCHAR(60) NOT NULL COLLATE utf8_unicode_ci  COMMENT 'cLé du service',
  PRIMARY KEY (`idrequest`),
  CONSTRAINT `reqmem`
    FOREIGN KEY (`idMembre`)
    REFERENCES `bitvoix`.`membres` (`idMembre`),
  CONSTRAINT `reqser`
    FOREIGN KEY (`idService`)
    REFERENCES `bitvoix`.`services` (`idService`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bitvoix`.`references`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bitvoix`.`references` (
  `idReference` INT NOT NULL auto_increment COMMENT 'Id du references',
  `idService` INT NOT NULL COMMENT 'Id du Service',
  `idMembre` INT NOT NULL COMMENT 'Id du Memebre',
  `courReferences` VARCHAR(45) NOT NULL COMMENT 'courriel reference',
  `switReferences` VARCHAR(1) NOT NULL COMMENT 'Switch reference 0= Non 1=Oui',
  `dateReferences` DATETIME NOT NULL COMMENT 'Date de reference ',
  PRIMARY KEY (`idReference`),
  CONSTRAINT `refser`
    FOREIGN KEY (`idService`)
    REFERENCES `bitvoix`.`services` (`idService`),
  CONSTRAINT `refmem`
    FOREIGN KEY (`idMembre`)
    REFERENCES `bitvoix`.`membres` (`idMembre`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;




Create user 'bitvoixadmin'@'localhost' identified by 'adminbitvoixcanada2019$';
GRANT ALL PRIVILEGES ON bitvoix.* TO 'bitvoixadmin'@'localhost' WITH GRANT OPTION;
show grants for 'bitvoixadmin'@'localhost';

-- revoke all privileges, grant  option  from 'bitvoixadmin'@'localhost';
-- drop user 'bitvoixadmin'@'localhost';


Create user 'bitvoix'@'localhost' identified by 'bitvoixcanada2019$';
grant  ALL PRIVILEGES ON bitvoix.users to 'bitvoix'@'localhost' WITH GRANT OPTION;
grant  ALL PRIVILEGES ON bitvoix.categories to 'bitvoix'@'localhost' WITH GRANT OPTION;
grant  ALL PRIVILEGES ON bitvoix.pays to 'bitvoix'@'localhost' WITH GRANT OPTION;
grant  ALL PRIVILEGES ON bitvoix.villes to 'bitvoix'@'localhost' WITH GRANT OPTION;
grant  ALL PRIVILEGES ON bitvoix.membres to 'bitvoix'@'localhost' WITH GRANT OPTION;
grant  ALL PRIVILEGES ON bitvoix.fournisseur to 'bitvoix'@'localhost' WITH GRANT OPTION;
grant  ALL PRIVILEGES ON bitvoix.facture to 'bitvoix'@'localhost' WITH GRANT OPTION;
grant  ALL PRIVILEGES ON bitvoix.services to 'bitvoix'@'localhost' WITH GRANT OPTION;
grant  ALL PRIVILEGES ON bitvoix.requests to 'bitvoix'@'localhost' WITH GRANT OPTION;
grant  ALL PRIVILEGES ON bitvoix.references to 'bitvoix'@'localhost' WITH GRANT OPTION;
grant  ALL PRIVILEGES ON bitvoix.users to 'bitvoix'@'localhost' WITH GRANT OPTION;
show grants for 'bitvoix'@'localhost';


-- revoke all privileges, grant  option  from 'bitvoix'@'localhost';
-- drop user 'bitvoix'@'localhost';
INSERT INTO adresse(nroAdr, rueAdr, desVilAdr, codPosAdr) values (2222,'Place','Montreal','H3K3A3');


