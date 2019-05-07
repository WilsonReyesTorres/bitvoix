function formEnregistrer(pourQui){
	var rep = '<div id="divEnreg">'+
'			<span onClick="cacher(\'divEnreg\')">X</span>'+
'			<h1>Enregistrer un film</h1>'+
'			<form id="enregForm"">';
if(pourQui=="M")
	rep+='				Numero:<input type="text" id="num" name="num" readonly><br><br>';
rep+='				Titre:<input type="text" id="titre" name="titre" value=""><br><br>'+
'				Realisateur:<input type="text" id="res" name="res" value=""><br><br>'+
'				Pochette : <input type="file" name="pochette"><br><br>';
if(pourQui=="E"){
	rep+='<input type="button" value="Envoyer" onClick="requetes(\'enregistrer\');">';
}else
	if(pourQui=="M"){
	  rep+='<input type="button" value="Envoyer" onClick="requetes(\'modifier\');">';
	}
rep+='</form></div>';
return rep;
}




function  formFournisseur(){
    var rep1 = /*html*/ `
    <div class="container">
    <form id="enregFormFournisseur">
    <div class="form-group row">
        <label for="nomFournisseur" class="col-sm-4 col-form-label">Nom
            fournisseur</label>
        <div class="col-sm-8">
            <input type="text" class="form-control" id="nomFournisseur"
                name="nomFournisseur" title="Nom Fournisseur" required>
        </div>
    </div>
    <hr>
    <h5>Adresse</h5>
    <div class="form-group row">
        <label for="nroAdr" class="col-sm-4 col-form-label">Numéro
            civique</label>
        <div class="col-sm-8">
            <input type="number" class="form-control" id="nroAdr" name="nroAdr"
                step="1" title="Numéro Civique" pattern="[0-9]{5}" max="99999" required>
        </div>
    </div>
    <div class="form-group row">
        <label for="rueAdr" class="col-sm-4 col-form-label">Rue</label>
        <div class="col-sm-8">
            <input type="text" class="form-control" id="rueAdr" name="rueAdr"
                title="Rue" required>
        </div>
    </div>
    <div class="form-group row">
        <div class="col-sm-4">
            <label for="desVilAdr">Ville</label>
        </div>
        <div class="col-sm-8">
            <select id="desVilAdr" name="desVilAdr" class="form-control"
                required>
                <option selected value="Montréal">Montréal</option>
            </select>
        </div>
    </div>
    <div class="form-group row">
        <label for="codPosAdr" class="col-sm-4 col-form-label">Code
            postal</label>
        <div class="col-sm-8">
            <input type="text" class="form-control" id="codPosAdr"
                name="codPosAdr" title="A9A9A9" pattern="[A-Za-z][0-9][A-Za-z][0-9][A-Za-z][0-9]" required>
        </div>
    </div>
    <div class="form-group row">
        <label for="cellFournisseur"
            class="col-sm-4 col-form-label">Téléphone</label>
        <div class="col-sm-8">
            <input type="tel" class="form-control" min="1.0" max="5.0"
                id="cellFournisseur" name="cellFournisseur"
                pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required>
        </div>
    </div>
    <hr>
    <h5>Service</h5>
    <div class="form-group row">
        <div class="col-sm-4">
            <label for="typeSerFournisseur">Type</label>
        </div>
        <div class="col-sm-8">
            <select id="typeSerFournisseur" name="typeSerFournisseur" class="form-control"
                required disabled>
                <option selected value="1">Personalisé</option>
                <option value="2">Agenda</option>
                <option value="3">Demande</option>
            </select>
        </div>
    </div>
    <div class="form-group row">
        <div class="col-sm-4">
            <label for="idForfaitFournisseur">Forfait</label>
        </div>
        <div class="col-sm-8">
            <select id="idForfaitFournisseur" name="idForfaitFournisseur" class="form-control"
                required disabled>
                <option selected value="1">Base</option>
                <option value="2">Stantard</option>
                <option value="3">Premium</option>
            </select>
        </div>
    </div>
    <div class="form-group row">
        <label for="datInsFournisseur" class="col-sm-4 col-form-label">Date d'inscription</label>
        <div class="col-sm-8">
            <input type="date" class="form-control" id="datInsFournisseur"
                name="datInsFournisseur" title="Date d'inscription"   readonly >
        </div>
    </div>
    <div class="form-group row">
        <label for="datEcheFournisseur" class="col-sm-4 col-form-label">Date d'échéance</label>
        <div class="col-sm-8">
            <input type="date" class="form-control" id="datEcheFournisseur"
                name="datEcheFournisseur" title="Date d'échéance" readonly>
        </div>
    </div>
    <div class="modal-footer d-flex justify-content-center">

        <button type="button" class="btn btn-primary" onclick = "requetesFour(\'enregistrer\')" >Envoyer</button>
    
        <button type="reset" class="btn btn-danger">Effacer</button>

    </div>
</form>

</div>
    `;
    return rep1;
}



function listerJSON(listeFilms){
	dossier="../pochettes/";
	rep="<table border=1>";
	rep+="<caption>Liste des films</caption>";
	rep+="<tr><th>NUMERO</th><th>TITRE</th><th>REALISATEUR</th><th>POCHETTE</th></tr>";
	var taille=listeFilms.length;
	for(i=0;i<taille;i++){
		ligne=listeFilms[i];
		rep+="<tr><td>"+(ligne.num)+"</td><td>"+(ligne.titre)+"</td><td>"+(ligne.res)+"</td><td><img src='pochettes/"+(ligne.pochette)+"' width=80 height=80></td></tr>";		 
	}
	rep+="</table>";
	$('#contenu').html(rep);			
}


function date_actuel(){
    alert('fechaactual');
    var fecha = new Date(); //Fecha actual
    var mes = fecha.getMonth()+1; //obteniendo mes
    var dia = fecha.getDate(); //obteniendo dia
    var ano = fecha.getFullYear() + 1; //obteniendo año
    if(dia<10)
    dia='0'+dia; //agrega cero si el menor de 10
    if(mes<10)
    mes='0'+mes; //agrega cero si el menor de 10
   document.getElementById('datInsFournisseur').value = ano +"-"+mes+"-"+ dia;
   ano+=1;
   document.getElementById('datEcheFournisseur').value = ano +"-"+mes+"-"+ dia;
}


function montreFournisseur(fiche){
    alert("montreFournisseur");
    $('#divprincipal').html(formFournisseur());
    // $('#num').val(fiche.num);
}

function montreFournisseurN(fiche){
    alert("montreFournisseur");
    $('#divprincipal').html(formFournisseur());
    date_actuel();

}
 
function formServicesFour_modal(fiche){
    

    var rep1 = /*html*/ `
    <!-- Div forfait Services-->
 
    <div class="col-lg-9">
        <div class="col">
            <button type="button" class="btn btn-primary font-weight-bold shadow" data-toggle="modal"
                data-target="#FormService">Nouveau Service</button>
            <button type="button" class="btn btn-primary font-weight-bold shadow" data-toggle="modal"
                data-target="#FormFourniseur" onClick="requetesFour('Ficher_Fournisseur');">Profil Fourniseur</button>
        </div>
        <div class="row mt-2">
            <!-- Card Service du Fournisseur -->
            <div class="col-lg-4 col-sm-6 mb-2">`;
  
            if (fiche.idService !== "" ) {
            rep1+=  /*html*/ ` 
             <!-- Card -->
             <div class="card booking-card shadow" id="card-services">

                    <!-- Card image -->
                    <div class="view overlay">
                        <img class="card-img-top" src="images/auto.jpg" alt="Card image cap">
                        <a href="#!">
                            <div class="mask rgba-white-slight"></div>
                        </a>
                    </div>

                    <!-- Card content -->
                    <div class="card-body">

                        <!-- Text -->
                        <p class="card-text">Teinture complète des vitres d'une automobile</p>
                        <ul class="list-unstyled list-inline rating mb-0">
                            <li class="list-inline-item mr-0"><i
                                    class="fas fa-star amber-text text-warning"></i>
                            </li>
                            <li class="list-inline-item mr-0"><i
                                    class="fas fa-star amber-text text-warning"></i>
                            </li>
                            <li class="list-inline-item mr-0"><i
                                    class="fas fa-star amber-text text-warning"></i>
                            </li>
                            <li class="list-inline-item mr-0"><i
                                    class="fas fa-star amber-text text-warning"></i>
                            </li>
                            <li class="list-inline-item"><i
                                    class="fas fa-star-half-alt amber-text text-warning"></i>
                            </li>

                            <li class="list-inline-item">
                                <p class="text-muted">4.5 (413)</p>
                            </li>
                        </ul>
                        <!-- <hr> -->
                        <ul class="list-unstyled list-inline mb-0">
                            <li class="list-inline-item">
                                <p class="card-text small text-muted pt-1">17-05-2019</p>
                            </li>
                            <li class="list-inline-item">
                                <button type="button" class="btn btn-danger" data-toggle="modal"
                                    data-target="#FormService"><i class="fas fa-pencil-alt"></i></button>
                            </li>

                        </ul>


                    </div>

                </div> 
                <!-- Card -->
                `;
                
            }

            rep1+=  /*html*/`
            </div>
        </div>
    </div>
    <!-- Div forfait Logo et Graphique -->
    <div class="col-lg-3 bg-light">
        <h4>Votre forfait:</h4>
        <div class="card booking-card shadow">

            <!-- Card image -->
            <div class="view overlay">
                <img class="card-img-top" src="images/vip.png" alt="Card image cap">
                <a href="#!">
                    <div class="mask rgba-white-slight"></div>
                </a>
            </div>

            <!-- Card content -->
            <div id="graphique" class="card-body">

                <!-- Title -->
                <h5 class="card-title font-weight-bold"><a>VIP</a></h5>

                <!-- Text -->
                <p class="card-text">Date d'échéance : 12-09-2019</p>

            </div>

        </div>
        <button type="button" class="btn btn-primary font-weight-bold shadow mt-2">Changer mon forfait</button>

    </div>


    <!-- Modal Profil -->

    <div class="modal fade" id="FormFourniseur" tabindex="-1" role="dialog"
        aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header bg-primary py-4 shadow">
                    <img src="images/logo.png" alt="">
                    <button type="button" class="close text-white" data-dismiss="modal"
                        aria-label="Close">
                        <span class="text-white" aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <form id="Modifier_Fournisseur" enctype="multipart/form-data" action="" method="POST">
                            <div class="form-group row">
                                <label for="nomFournisseur" class="col-sm-4 col-form-label">Nom fournisseur</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" id="nomFournisseur"
                                        name="nomFournisseur" title="Nom Fournisseur" required>
                                </div>
                            </div>
                            <hr>
                            <h5>Adresse</h5>
                            <div class="form-group row">
                                <label for="nroAdr" class="col-sm-4 col-form-label">Numéro civique</label>
                                <div class="col-sm-8">
                                    <input type="number" class="form-control" id="nroAdr"
                                        name="nroAdr" step="1" title="Numéro Civique" required>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="rueAdr" class="col-sm-4 col-form-label">Rue</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" id="rueAdr"
                                        name="rueAdr" title="Rue" required>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-sm-4">
                                    <label for="desVilAdr">Ville</label>
                                </div>
                                <div class="col-sm-8">
                                    <select id="desVilAdr" name="desVilAdr" class="form-control"
                                        required>
                                        <option selected value="Montréal">Montréal</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="codPosAdr" class="col-sm-4 col-form-label">Code postal</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" id="codPosAdr"
                                        name="codPosAdr" title="Code postal" required>
                                </div>
                            </div>
                            <hr>
                            <div class="form-group row">
                                <label for="cellFournisseur" class="col-sm-4 col-form-label">Téléphone</label>
                                <div class="col-sm-8">
                                    <input type="tel" class="form-control" min="1.0" max="5.0"
                                        id="cellFournisseur" name="cellFournisseur"
                                        title="Téléphone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required>
                                </div>
                            </div>
                            <div class="modal-footer d-flex justify-content-center">

                                <button type="button" class="btn btn-primary"   >Envoyer</button>

                                <button type="reset" class="btn btn-danger">Effacer</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Service -->
    <div class="modal fade" id="FormService" tabindex="-1" role="dialog"
        aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header bg-primary py-4 shadow">
                    <img src="images/logo.png" alt="">
                    <button type="button" class="close text-white" data-dismiss="modal"
                        aria-label="Close">
                        <span class="text-white" aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <form id="AddServiceFuornisseur" >
                            <div class="form-group row">
                                <label for="titreService" class="col-sm-4 col-form-label">Titre
                                    Service</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" id="titreService"
                                        name="titreService" title="Titre Service" required>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="desShortService" class="col-sm-4 col-form-label">Description
                                    courte</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control" id="desShortService"
                                        name="desShortService" title="Description courte" required>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="descFilm"
                                    class="col-sm-4 col-form-label">Déscription</label>
                                <div class="col-sm-8">
                                    <textarea class="form-control" id="descFilm" name="descFilm"
                                        rows="3" title="Déscription du film" required></textarea>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-sm-4">
                                    <label for="">Catégorie</label>
                                </div>
                                <div class="col-sm-8">
                                    <select id="idCatFilm" name="idCatFilm" class="form-control"
                                        required>
                                        <option selected value="">Sélectionnez une option</option>
                                        <option value="">Autos</option>
                                        <option value="">Sante</option>
                                        <option value="">Gastronomie</option>
                                        <option value="">Beauté</option>
                                        <option value="">Produits</option>
                                        <option value="">Voyages</option>
                                        <option value="">Maison</option>
                                        <option value="">Education</option>
                                        <option value="">Services</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="prixService" class="col-sm-4 col-form-label">Prix
                                    Service</label>
                                <div class="col-sm-8">
                                    <input type="number" class="form-control" min="1.0" max="5.0"
                                        id="prixService" name="prixService" step="0.1"
                                        title="Prix Service" required>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="promService" class="col-sm-4 col-form-label">Prix
                                    Promotion</label>
                                <div class="col-sm-8">
                                    <input type="number" class="form-control" min="1.0" max="5.0"
                                        id="promService" name="promService" step="0.1"
                                        title="Prix Promotion" required>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="refeService" class="col-sm-4 col-form-label">Prix
                                    Référe</label>
                                <div class="col-sm-8">
                                    <input type="number" class="form-control" min="1.0" max="5.0"
                                        id="refeService" name="refeService" step="0.1"
                                        title="Prix Référe" required>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="datlimfournisseur" class="col-sm-4 col-form-label">Date
                                    limite</label>
                                <div class="col-sm-8">
                                    <input type="date" class="form-control" id="datlimfournisseur"
                                        name="datlimfournisseur" title="Date limite" required>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-4 col-form-label">Image</label>
                                <div class="custom-file col-sm-8">
                                    <input type="file" class="custom-file-input" id="urlSerfournisseur"
                                        name="urlSerfournisseur" required>
                                    <label class="custom-file-label" for="urlSerfournisseur"
                                        data-browse="Choisir fichier">Sélectionner
                                        fichier</label>
                                </div>
                            </div>
                            <div class="form-check row">
                                <input class="form-check-input" type="checkbox" value="" id="ActService"
                                    name="ActService">
                                <label class="form-check-label" for="ActService">
                                    Service active
                                </label>
                            </div>
                            <div class="modal-footer d-flex justify-content-center">

                                <button type="button" class="btn btn-primary">Envoyer</button>

                                <button type="button" class="btn btn-danger">Effacer</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    return  rep1;
}


function montreServicesFour(fiche){
    alert("Montre  les Services pour Fournisseur");
    $('#divprincipal').html(formServicesFour_modal(fiche));
}

function ModalFournisseur(){
    
}


var vueFournisseur=function(action,donnees){
	switch(action){
		case 'enregistrerFour':
			$('#message').html(donnees);
			setTimeout(function(){ $('#message').html(""); }, 3000);
		break;
		case 'enregistrerJSON':
		case 'enleverJSON' :
		case 'ficheJSON' :
		case 'modifierJSON':
			$('#message').html(donnees.msg);
            setTimeout(function(){ $('#message').html(""); }, 3000);
            
		break;
		case 'enregistrerXML':
			var msg=donnees.getElementsByTagName('msg')[0].firstChild.nodeValue;
			$('#message').html(msg);
			setTimeout(function(){ $('#message').html(""); }, 3000);
		break;
		case 'listerJSON':
			listerJSON(donnees);
        break;
		case 'montreFournisseur':
              montreFournisseur(donnees);
        break;
        case 'montreFournisseurN':
              montreFournisseurN(donnees);
        break;
        case 'montreServicesFour':
              montreServicesFour(donnees)
        break;
        case 'ModalFournisseur':
              ModalFournisseur(donnees);
        break;
       
		
	}
	
}



