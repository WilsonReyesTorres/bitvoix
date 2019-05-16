SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema bitvoix_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema bitvoix_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bitvoix_db` DEFAULT CHARACTER SET utf8  COLLATE=utf8_unicode_ci ;
USE `bitvoix_db` ;

-- -----------------------------------------------------
-- Table `bitvoix_db`.`categories`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `bitvoix_db`.`categories` (
  `idCategorie` INT NOT NULL auto_increment COMMENT 'Id de categories',
  `desCategorie` VARCHAR(45) NOT NULL COLLATE utf8_unicode_ci  COMMENT 'Description des différentes catégories de services ou de biens',
  PRIMARY KEY (`idCategorie`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `bitvoix_db`.`adresse`
-- -----------------------------------------------------
 
CREATE TABLE IF NOT EXISTS `bitvoix_db`.`adresse` (
  `idAdr` INT NOT NULL auto_increment COMMENT 'id Adresse',
  `nroAdr` INT NOT NULL COMMENT 'Numéro civique',
  `rueAdr` VARCHAR(40) NOT NULL COLLATE utf8_unicode_ci  COMMENT 'Rue de Addrese',
  `desVilAdr` VARCHAR(20) NOT NULL COLLATE utf8_unicode_ci COMMENT 'La ville',
  `codPosAdr` VARCHAR(6) NOT NULL COLLATE utf8_unicode_ci  COMMENT 'Le code postal',
  PRIMARY KEY (`idAdr`))
ENGINE = InnoDB;




-- -----------------------------------------------------
-- Table `bitvoix_db`.`membres`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `bitvoix_db`.`membres` (
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
-- Table `bitvoix_db`.`fournisseur`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `bitvoix_db`.`fournisseur` (
  `idFournisseur` INT NOT NULL COMMENT  'ID fournisseur',
  `nomFournisseur` VARCHAR(45) NOT NULL COLLATE utf8_unicode_ci  COMMENT 'Nom du fournisseur',
  `idAdrFournisseur` INT NOT NULL COLLATE utf8_unicode_ci  COMMENT 'Adresse du fournisseur',
  `cellFournisseur` VARCHAR(10) NOT NULL COLLATE utf8_unicode_ci  COMMENT 'Numéro de téléphone portable du fournisseur\n',
  `typeSerFournisseur` VARCHAR(1) NOT NULL COLLATE utf8_unicode_ci  COMMENT 'Type de service 1 Personalisé  2. Agenda  3. Demande',
  `idForfaitFournisseur` VARCHAR(1) NOT NULL COLLATE utf8_unicode_ci   COMMENT 'Identifie le type de forfaits : 1. Base 2.Stantard 3.Premium',
  `datInsFournisseur` DATE NOT NULL COMMENT 'date d\'inscription',
  `datEcheFournisseur` DATE NOT NULL  COMMENT 'date d\'échéance d\'inscription',
  `statuFournisseur` VARCHAR(1) COLLATE utf8_unicode_ci  NOT NULL COLLATE utf8_unicode_ci  COMMENT 'Status de Fournisseur',
  `longFournisseur` DECIMAL(12,6) NOT NULL  COMMENT 'La Longitud geographique de Fournisseur',
  `latiFournisseur` DECIMAL(12,6) NOT NULL  COMMENT 'La Latitud geographique de Fournisseur',
  PRIMARY KEY (`idFournisseur`),
   CONSTRAINT `fouadr`
    FOREIGN KEY (`idAdrFournisseur`)
    REFERENCES `bitvoix_db`.`adresse` (`idAdr`),
   CONSTRAINT `fourmem`
    FOREIGN KEY (`idFournisseur`)
    REFERENCES `bitvoix_db`.`membres` (`idMembre`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `bitvoix_db`.`facture`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bitvoix_db`.`facture` (
  `idFacture` INT NOT NULL AUTO_INCREMENT COMMENT 'code fournisseur',
  `idFournisseur` INT NOT NULL COMMENT 'code fournisseur',
  `idForfaitFacture` VARCHAR(1) NOT NULL COMMENT 'Identifie le type de forfaits :1.Base 2.Stantard 3.Premium',
  `typeSerFacture` VARCHAR(1) NOT NULL COLLATE utf8_unicode_ci  COMMENT 'Type de service   1 Personalisé  -- 2. Agenda  3. Demande',
  `dateInsFacture` DATE NOT NULL COMMENT 'date d\'inscription',
  `dateEcheFacture` DATE NOT NULL COMMENT 'date d\'échéance d\'inscription',
  `nomRefFacture` VARCHAR(20) NOT NULL  COLLATE utf8_unicode_ci  COMMENT 'Nombre de référence Paypal',
  `statusFacture` VARCHAR(1) NOT NULL COLLATE utf8_unicode_ci  COMMENT ' Status 1.Actif 2. Annule  ',
  `prixFacture` DECIMAL(10,2)  COMMENT 'prix Facture',
  PRIMARY KEY (`idFacture`),
   CONSTRAINT `facfou`
    FOREIGN KEY (`idFournisseur`)
    REFERENCES `bitvoix_db`.`fournisseur` (`idFournisseur`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bitvoix_db`.`services`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bitvoix_db`.`services` (
  `idService` INT NOT NULL AUTO_INCREMENT COMMENT 'code du service',
  `idFournisseur` INT NOT NULL COMMENT 'code fournisseur',
  `titreService` VARCHAR(20) NOT NULL  COLLATE utf8_unicode_ci COMMENT 'Courte description du service',
  `desShortService` VARCHAR(50) NOT NULL  COLLATE utf8_unicode_ci COMMENT 'Courte description du service',
  `desService` VARCHAR(250) NOT NULL COLLATE utf8_unicode_ci  COMMENT 'Description du service',
  `idCategorie` INT NOT NULL COMMENT 'Id Categorie FK', 
  `actService` INT NOT NULL COMMENT 'Sercive active  1 Actif 2 inactif',
  `prixService` DECIMAL(10,2) NOT NULL COMMENT 'prix du fournisseur',
  `promService` DECIMAL(10,2) NOT NULL COMMENT 'prix en promotion',
  `refeService` DECIMAL(10,2) NOT NULL COMMENT 'prix référé',
  `refeEfeService` INT  NOT NULL COMMENT 'Nombre de référé pour accèder à la  promotion',
  `datLimService` DATE NOT NULL COMMENT 'Date limite de promotion',
  `pochetteService` VARCHAR(200) NOT NULL COLLATE utf8_unicode_ci  COMMENT 'Pochette de la photo qui correspond au service',
  `autService` VARCHAR(1) NOT NULL COLLATE utf8_unicode_ci COMMENT ' 1 Autorisé 0 Autorisé Autorisation du service par bit-voix',
  PRIMARY KEY (`idService`),
  CONSTRAINT `sercat`
    FOREIGN KEY (`idCategorie`)
    REFERENCES `bitvoix_db`.`categories` (`idCategorie`),
  CONSTRAINT `SerFour`
    FOREIGN KEY (`idFournisseur`)
    REFERENCES `bitvoix_db`.`fournisseur` (`idFournisseur`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



-- -----------------------------------------------------
-- Table `bitvoix_db`.`requetes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bitvoix_db`.`requests` (
  `idRequest` INT NOT NULL auto_increment COMMENT 'Id du request',
  `idMembre` INT NOT NULL COMMENT 'Id du Memebre',
  `idService` INT NOT NULL COMMENT 'Id du Service',
  `qualRequest` DECIMAL(3,1) COMMENT 'Score de qualité de service',
  `commRequest` VARCHAR(60)  COLLATE utf8_unicode_ci  COMMENT 'Commentaires du client',
  `statRequest` INT NOT NULL COMMENT 'Statut du request: 1. Ouvert, 2. fermé, 3. Annulé',
  `dateRequest` DATE NOT NULL COMMENT 'date de la requete',
  `cleSerRequest` VARCHAR(60) NOT NULL COLLATE utf8_unicode_ci  COMMENT 'cLé du service',
  PRIMARY KEY (`idrequest`),
  CONSTRAINT `reqmem`
    FOREIGN KEY (`idMembre`)
    REFERENCES `bitvoix_db`.`membres` (`idMembre`),
  CONSTRAINT `reqser`
    FOREIGN KEY (`idService`)
    REFERENCES `bitvoix_db`.`services` (`idService`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bitvoix_db`.`references`

CREATE TABLE IF NOT EXISTS `bitvoix_db`.`references` (
  `idReference` INT NOT NULL auto_increment COMMENT 'Id du references',
  `idService` INT NOT NULL COMMENT 'Id du Service',
  `idMembre` INT NOT NULL COMMENT 'Id du Memebre',
  `courReferences` VARCHAR(45) NOT NULL COMMENT 'courriel reference',
  `switReferences` VARCHAR(1) NOT NULL COMMENT 'Switch reference 0= Non 1=Oui',
  `dateReferences` DATETIME NOT NULL COMMENT 'Date de reference ',
  PRIMARY KEY (`idReference`),
  CONSTRAINT `refser`
    FOREIGN KEY (`idService`)
    REFERENCES `bitvoix_db`.`services` (`idService`),
  CONSTRAINT `refmem`
    FOREIGN KEY (`idMembre`)
    REFERENCES `bitvoix_db`.`membres` (`idMembre`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

drop function if exists f_referido;
delimiter //
create function f_referido(
  idMembre int,
  idService int) 
  returns int
  deterministic
begin 
   declare valor int;
   SELECT count(courReferences)   into valor
     FROM bitvoix_db.`references`
     WHERE  references.switReferences = '0'
	   and  references.idMembre = idMembre
       and  references.idService = idService;
   return valor;
end //
delimiter ;



Create user 'bitvoix_user'@'localhost' identified by 'adminbitvoixcanada2019$';
GRANT ALL PRIVILEGES ON bitvoix_db.* TO 'bitvoix_user'@'localhost' WITH GRANT OPTION;
show grants for 'bitvoix_user'@'localhost';

-- revoke all privileges, grant  option  from 'bitvoix_dbadmin'@'localhost';
-- drop user 'bitvoix_dbadmin'@'localhost';




-- insert categories

INSERT INTO `categories` (`idCategorie`, `desCategorie`) VALUES
(1, 'Autos'),
(2, 'Sante'),
(3, 'Gastronomie'),
(4, 'Beauté'),
(5, 'Produits'),
(6, 'Voyages'),
(7, 'Maison'),
(8, 'Education'),
(9, 'Services');
                                           
-- insert adresses

INSERT INTO `adresse` (`idAdr`, `nroAdr`, `rueAdr`, `desVilAdr`, `codPosAdr`) VALUES
(1, 759, 'Rue Legendre E', 'Montréal', 'H2M1H1'),
(2, 8947, 'Rue Lajeunesse', 'Montréal', 'H2M1S1'),
(3, 529, 'Rue Jarry E', 'Montréal', 'H2P1V4'),
(4, 8762, 'Rue Lajeunesse', 'Montréal', 'H2M1R6'),
(5, 9150, 'Rue Lajeunesse', 'Montréal', 'H2M1G2'),
(6, 545, 'Boul Crémazie E', 'Montréal', 'H2M2V1'),
(7, 9319, 'Ave Christophe-Colomb', 'Montréal', 'H2M1Z7'),
(8, 9763, 'Avenue St Charles', 'Montréal', 'H2C2K9');
                                           
-- insert membres

INSERT INTO `membres` (`idMembre`, `nomMembre`, `preNomMembre`, `courrielMembre`, `oauthProviderMembre`, `oauthUidMembre`,`createdMembre`, `modifiedMembre`, `motPasseMembre` ) VALUES
(1, 'Bitvoix', 'AdminBitvoix', 'admin@bitvoix.com', 'bitvoix', '772312485', '2019-05-10 17:15:59', NOW(), '931fa3e6e1170bbb7e90cf60b515c899903566c3'),
(2, 'Gagnon', 'William', 'wgagnon@bell.ca', 'bitvoix', '223456789', NOW(), NOW(), SHA1('123')),
(3, 'Roy', 'Alice', 'alice2347@gmail.com', 'bitvoix', '323456789', NOW(), NOW(), SHA1('123')),
(4, 'Côté', 'Logan', 'lc8906@gmail.com', 'bitvoix', '423456789', NOW(), NOW(), SHA1('123')),
(5, 'Gauthier', 'Olivia', 'olgauthier@outlook.com', 'bitvoix', '523456789', NOW(), NOW(), SHA1('123')),
(6, 'Morin', 'Liam', 'liamm5@videotron.ca', 'bitvoix', '623456789', NOW(), NOW(), SHA1('123')),
(7, 'Lavoie', 'Léa', 'lealea67@rinochet.com', 'bitvoix', '723456789', NOW(), NOW(), SHA1('123')),
(8, 'Fortin', 'Thomas', 'fortinthomas@proving.com', 'bitvoix', '823456789', NOW(), NOW(), SHA1('123')),
(9, 'Tremblay', 'Emma', 'emmatrem@yahoo.com', 'bitvoix', '123456789', NOW(), NOW(), SHA1('123'));


INSERT INTO `fournisseur` (`idFournisseur`, `nomFournisseur`, `idAdrFournisseur`, `cellFournisseur`, `typeSerFournisseur`, `idForfaitFournisseur`, `datInsFournisseur`, `datEcheFournisseur`, `statuFournisseur`, `longFournisseur`, `latiFournisseur`) VALUES
(1, 'Coiffeur Ahuntsic', 1, '5143821435', '1', '1', '2019-04-26', '2020-04-26', '1', '-73.643657', '45.551113'),
(2, 'Location Auto Montreal', 2, '5143890366', '3', '1', '2019-03-27', '2020-03-27', '1', '-73.642728', '45.548068'),
(3, 'Clinique médicale', 3, '5142743561', '1', '2', '2019-02-28', '2020-02-28', '1', '-73.628843', '45.543587'),
(4, 'Restaurant Da Remo', 4, '5143887117', '3', '1', '2019-01-29', '2020-01-29', '1', '-73.639209', '45.546668'),
(5, 'Marché Tradition', 5, '5143816511', '3', '1', '2019-04-30', '2020-04-30', '1', '-73.645996', '45.548747'),
(6, 'Vacances Tourbec', 6, '5143817082', '3', '2', '2019-05-01', '2020-05-01', '1', '-73.63851', '45.546374'),
(7, 'Lanaudière Plus', 7, '5142480889', '1', '2', '2019-03-02', '2020-03-02', '1', '-73.644007', '45.557504'),
(8, 'Mindfulness Educators', 8, '5142563845', '1', '2', '2019-02-03', '2020-02-03', '1', '-73.652314', '45.555895');

INSERT INTO `services` (`idService`, `idFournisseur`, `titreService`, `desShortService`, `desService`, `idCategorie`, `actService`, `prixService`, `promService`, `refeService`, `refeEfeService`, `datLimService`, `pochetteService`, `autService`) VALUES
(1, 1, 'Coloration Cheveux', 'Votre palette personnalisée', 'Vous vous êtes toujours demandé si les blondes ont plus de plaisir? Et que dire de tous les mystères entourant les rousses? Que vous envisagiez une nuance subtile ou une nouvelle couleur, vibrante laissez-nous créer votre couleur personnalisée!', 4, 1, '105.00', '85.00', '69.00', 114, '2019-12-26', 'beaute1.jpg', '0'),
(2, 2, 'Permis Up', '5h, 10h ou 20h de location de voiture', 'Jusqu’à 20h de location de voiture à double commandes afin d’apprendre à conduire en toute confiance', 1, 1, '180.00', '160.00', '120.00', 221, '2019-12-27', 'auto2.jpg', '1'),
(3, 3, 'Séance d\'ostéopathie', 'Une séance propice au lâcher-prise dans un cadre chaleureux', 'L’ostéopathie est une technique de médecine douce qui utilise les manipulations manuelles visant à apaiser les douleurs physiques ou psychiques. Traitement non thérapeutique, ne remplace pas une consultation médicale. Actes non remboursés par la Sécurité Sociale', 2, 1, '90.00', '50.00', '30.00', 332, '2019-12-28', 'sante2.jpg', '0'),
(4, 4, 'Pizzas pizzas', 'Pizzas au choix à la coupe en illimité pour 1 personne', 'Un large choix de pizzas préparées à base de produits frais et de qualité, à déguster dans un cadre convivial et agréable à souhait', 3, 1, '30.00', '20.00', '14.00', 443, '2019-12-29', 'gastronomie1.jpg', '1'),
(5, 5, 'Ballotin de chocolats', 'Ballotin de chocolats (100% pur beurre de cacao) chez Marché Tradition', 'Chocolat garantit à 100% beurre de cacao, 100% saveur, 100% qualité, 100% fraîcheur', 5, 1, '45.00', '27.00', '19.00', 555, '2019-12-30', 'produits1.jpg', '1'),
(6, 6, 'Ramada Niagara Falls', '1 nuitée avec bons activités et repas au Ramada Niagara Falls', 'Les chutes du Niagara sont les plus puissantes d’Amérique du Nord. Les visiteurs peuvent explorer les imposantes chutes avec la croisière The Hornblower, avec l’attraction Journey behind the Falls ou tout simplement en les observant sur la promenade.', 6, 1, '199.00', '159.00', '99.00', 666, '2019-12-31', 'voyages1.jpg', '0'),
(7, 7, 'Lavage De Vitres', 'Lavage de fenêtres pour une maison à 1 ou 2 étages', 'Nettoyage de l’extérieur des fenêtres, ou des vitres, rebords, rails et moustiquaires sur la Rive-Nord', 7, 1, '160.00', '120.00', '104.00', 777, '2020-01-01', 'maison2.jpg', '1'),
(8, 8, 'PNL', 'Gagner en confiance et améliorer sa vie grâce aux outils de la PNL', 'Technique d’utilisation des connaissances de la psychologie et des neurosciences pour apprendre à communiquer de façon constructive', 8, 1, '300.00', '199.00', '99.00', 888, '2020-01-02', 'education3.jpg', '0');

-- insert adresses

INSERT INTO `requests` (`idRequest`, `idMembre`, `idService`, `qualRequest`, `commRequest`, `statRequest`, `dateRequest`, `cleSerRequest`) VALUES
(1, 1, 8, '4.5', 'Excellent', 1, '2019-04-28', '46789'),
(2, 2, 7, '3.0', 'Bon service', 1, '2019-02-20', '46789'),
(3, 3, 6, '4.0', 'Bon...', 1, '2019-01-28', '46789'),
(4, 4, 5, '2.5', 'Excellent...', 1, '2019-03-08', '46789'),
(5, 5, 4, '4.5', 'Merveilleuse équipe', 1, '2019-04-15', '46789'),
(6, 6, 3, '4.0', 'Professional service', 1, '2019-01-28', '46789'),
(7, 7, 2, '3.5', 'Très agréable', 1, '2019-04-23', '46789'),
(8, 8, 1, '4.5', 'Superbe', 1, '2019-02-11', '46789'),
(9, 1, 8, '5.0', 'Très belle', 1, '2019-01-03', '46789'),
(10, 2, 7, '5.0', 'Ils osnt très professionnel', 1, '2019-02-21', '46789'),
(11, 3, 6, '3.0', 'Nice', 1, '2019-04-12', '46789'),
(12, 4, 5, '2.5', 'Mal', 1, '2019-03-30', '46789'),
(13, 5, 4, '1.0', ':(', 1, '2019-02-22', '46789'),
(14, 6, 3, '5.0', 'Very satisfied', 1, '2019-03-03', '46789'),
(15, 7, 2, '4.0', 'Very professional', 1, '2019-04-07', '46789'),
(16, 8, 1, '4.5', 'Excelent...', 1, '2019-04-28', '46789');

INSERT INTO `facture` (`idFournisseur`, `idForfaitFacture`, `typeSerFacture`, `dateInsFacture`, `dateEcheFacture`, `nomRefFacture`, `statusFacture`, `prixFacture`) VALUES
(3, 2, 1, '2019-05-01', '2020-05-01', '125R2554W3E6', '1', '11.48'),
(6, 2, 1, '2019-05-04', '2020-05-04', '1APR2FR4W6TI', '1', '11.48'),
(7, 2, 1, '2019-05-10', '2020-05-10', '125R2554W45T', '1', '11.48'),
(8, 2, 1, '2019-05-13', '2020-05-13', '125R2ED4W98O', '1', '11.48');