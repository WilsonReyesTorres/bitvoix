function modalConnecter() {
	rep = '<div class="modal-header bg-primary py-4 shadow">' +
		'<!-- Logo bitvoix -->' +
		'' +
		'<img src="images/logo.png" alt="">' +
		'' +
		'<button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">' +
		'<span class="text-white" aria-hidden="true">&times;</span>' +
		'</button>' +
		'</div>' +
		'' +
		'<!--Modal cascading tabs-->' +
		'<div class="modal-c-tabs">' +
		'' +
		'<!-- Nav tabs -->' +
		'' +
		'<ul class="nav nav-tabs md-tabs tabs-2 text-primary darken-3 justify-content-center"' +
		'role="tablist">' +
		'<li class="nav-item">' +
		'<a class="nav-link active" data-toggle="tab" id="tabSign" href="#panel7" role="tab"><i' +
		'class="fas fa-user mr-1"></i>' +
		'Se Connecter</a>' +
		'</li>' +
		'<li class="nav-item">' +
		'<a class="nav-link" data-toggle="tab" id="tabSinsc" href="#panel8" role="tab"><i' +
		'class="fas fa-user-plus mr-1"></i>' +
		'S\'inscrire</a>' +
		'</li>' +
		'</ul>' +
		'' +
		'' +
		'<!-- Tab panels -->' +
		'<div class="tab-content">' +
		'<!--Panel 7-->' +
		'<div class="tab-pane fade in show active" id="panel7" role="tabpanel">' +
		'' +
		'<!--Body-->' +
		'<div class="modal-body mb-1">' +
		'<div id="messageLogin"></div>' +
		'<form id="loginForm">' +
		'<div class="input-group mb-3">' +
		'<div class="input-group-prepend">' +
		'<span class="input-group-text" id="basic-addon1"><i' +
		'class="fas fa-envelope prefix"></i></span>' +
		'</div>' +
		'<input type="email" id="courrielMembre" name="courrielMembre"' +
		'class="form-control" placeholder="Courriel" aria-label="Courriel"' +
		'aria-describedby="basic-addon1">' +
		'</div>' +
		'' +
		'<div class="input-group mb-3">' +
		'<div class="input-group-prepend">' +
		'<span class="input-group-text" id="basic-addon1"><i' +
		'class="fas fa-lock prefix"></i></span>' +
		'</div>' +
		'<input type="password" id="motPasseMembre" name="motPasseMembre"' +
		'class="form-control" placeholder="Mot de passe" aria-label="Courriel"' +
		'aria-describedby="basic-addon1">' +
		'</div>' +
		'' +
		'<div class="text-center mt-3">' +
		'<button type="button" class="btn btn-primary shadow"' +
		'onClick="requetes(\'loginSubmit\');">Se Connecter</button>' +
		'</div>' +
		'</form>' +
		'<p' +
		'class="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-4">' +
		'ou connectez vous avec :</p>' +
		'' +
		'<div class="row my-3 d-flex justify-content-center">' +
		'<!--Facebook-->' +
		'<a href="javascript:void(0);" onclick="fbLogin()" id="fbLink"><img src="images/fblogin.png" height="30px" /></a>' +
		'' +
		'<!--Google +-->' +
		'<div id="gSignIn"></div>' +
		'</div>' +
		'</div>' +
		'' +
		'</div>' +
		'<!--/.Panel 7-->' +
		'' +
		'<!--Panel 8-->' +
		'<div class="tab-pane fade" id="panel8" role="tabpanel">' +
		'' +
		'<!--Body-->' +
		'<div class="modal-body">' +
		'<div id="messageEnregistrer"></div>' +
		'<form id="membreForm">' +
		'<div class="input-group mb-3">' +
		'<div class="input-group-prepend">' +
		'<span class="input-group-text"><i class="fas fa-user mr-1"></i></span>' +
		'</div>' +
		'<input type="text" id="preNomMembre" name="preNomMembre"' +
		'class="form-control" placeholder="Prénom" aria-label="Prenom"' +
		'aria-describedby="basic-addon1">' +
		'' +
		'</div>' +
		'' +
		'<div class="input-group mb-3">' +
		'<div class="input-group-prepend">' +
		'<span class="input-group-text"><i class="fas fa-user mr-1"></i></span>' +
		'</div>' +
		'<input type="text" id="nomMembre" name="nomMembre" class="form-control"' +
		'placeholder="Nom" aria-label="Nom" aria-describedby="basic-addon1">' +
		'</div>' +
		'' +
		'<div class="input-group mb-3">' +
		'<div class="input-group-prepend">' +
		'<span class="input-group-text"><i' +
		'class="fas fa-envelope prefix"></i></span>' +
		'</div>' +
		'<input type="email" id="courrielMembre" name="courrielMembre"' +
		'class="form-control" placeholder="Courriel" aria-label="Courriel"' +
		'aria-describedby="basic-addon1">' +
		'</div>' +
		'' +
		'<div class="input-group mb-3">' +
		'<div class="input-group-prepend">' +
		'<span class="input-group-text"><i class="fas fa-lock prefix"></i></span>' +
		'</div>' +
		'<input type="password" id="motPasseMembre" name="motPasseMembre"' +
		'class="form-control" placeholder="Mot de passe" aria-label="Password"' +
		'aria-describedby="basic-addon1">' +
		'</div>' +
		'' +
		'<div class="input-group mb-3">' +
		'<div class="input-group-prepend">' +
		'<span class="input-group-text" id="basic-addon1"><i' +
		'class="fas fa-lock prefix"></i></span>' +
		'</div>' +
		'<input type="password" id="motPasseMembreConf" name="motPasseMembreConf"' +
		'class="form-control" placeholder="Confirmer le mot de passe"' +
		'aria-label="Courriel" aria-describedby="basic-addon1">' +
		'</div>' +
		'' +
		'' +
		'<div class="text-center form-sm mt-2">' +
		'<button type="button" class="btn btn-primary shadow"' +
		'onClick="requetes(\'insertMembre\');">S\'inscrire</button>' +
		'</div>' +
		'' +
		'</form>' +
		'' +
		'</div>' +
		'' +
		'</div>' +
		'<!--/.Panel 8-->' +
		'</div>' +
		'' +
		'</div>';
	$('#modalContent').html(rep);
}

function menuMembre(membrePrenom) {
	$('#loginDiv').addClass("dropdown");
	rep = '<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"' +
		'data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
		membrePrenom +
		'</a>' +
		'<div class="dropdown-menu" aria-labelledby="navbarDropdown">' +
		'<span class="lien dropdown-item" onClick="requetes(\'majProfil\');">Mise à jour Membre</span>' +
		'<span class="lien dropdown-item" onClick="requetesFour(\'FourAccueil\');">Fournisseur</span>' +
		'<span class="lien dropdown-item" onClick="requetes(\'logout\');">Déconnexion</span>' +
		'</div>';
	$('#loginDiv').html(rep);
}

function menuConnexion() {
	$('#loginDiv').removeClass("dropdown");
	rep = '<a class="nav-link" href="#" data-toggle="modal" data-target="#modalLRForm">Se Connecter<span class="sr-only">(current)</span></a>';
	$('#loginDiv').html(rep);
}

function formMajUser(donnees) {
	var rep = '<div class="modal-header bg-primary py-4 shadow">' +
		'<!-- Logo bitvoix -->' +
		'<img src="images/logo.png" alt="">' +
		'<button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">' +
		'<span class="text-white" aria-hidden="true">&times;</span>' +
		'</button>' +
		'</div>' +
		'' +
		'<div class="modal-body">' +
		'<div id="messageEnregistrer"></div>' +
		'<form id="membreFormUp">' +
		'<div class="input-group mb-3">' +
		'<div class="input-group-prepend">' +
		'<span class="input-group-text"><i class="fas fa-user mr-1"></i></span>' +
		'</div>' +
		'<input type="text" id="preNomMembre" name="preNomMembre" value="' + donnees.preNomMembre + '"' +
		' class="form-control" placeholder="Prénom" aria-label="Prenom" aria-describedby="basic-addon1">' +
		'</div>' +
		'<div class="input-group mb-3">' +
		'<div class="input-group-prepend">' +
		'<span class="input-group-text"><i class="fas fa-user mr-1"></i></span>' +
		'</div>' +
		'<input type="text" id="nomMembre" name="nomMembre" class="form-control" value="' + donnees.nomMembre + '"' +
		' placeholder="Nom" aria-label="Nom" aria-describedby="basic-addon1">' +
		'</div>' +
		'<div class="input-group mb-3">' +
		'<div class="input-group-prepend">' +
		'<span class="input-group-text"><i class="fas fa-envelope prefix"></i></span>' +
		'</div>' +
		'<input type="email" id="courrielMembre" readonly name="courrielMembre" value="' + donnees.courrielMembre + '"' +
		' class="form-control" placeholder="Courriel" aria-label="Courriel"' +
		' aria-describedby="basic-addon1">' +
		'</div>' +
		'<input type="hidden" id="idMembre" name="idMembre" value="' + donnees.idMembre + '">' +
		'<div class="text-center form-sm mt-2">' +
		'<button type="button" class="btn btn-primary shadow" onClick="requetes(\'updateMembre\');">Mise à jour Membre</button>' +
		'</div>' +
		'</form>' +
		'</div>' +
		'</div>';
	$('#modalContent').html(rep);
	$('#modalLRForm').modal('show');
	//$('#modalLRForm').modal('hide');
}

function servicesAccueil(donnees) {
	rep = '<!-- Icons Services -->' +
		'' +
		'<div class="row">' +
		'<div class="col">' +
		'<button type="button" class="btn btn-primary btn-lg rounded-circle" onClick="filtrerServ(\'1\');"><i class="fas fa-car"></i></button>' +
		'<a href="javascript:void(0);" onClick="filtrerServ(\'1\');">Autos</a>' +
		'</div>' +
		'<div class="col">' +
		'<button type="button" class="btn btn-warning btn-lg rounded-circle" onClick="filtrerServ(\'2\');"><i class="fas fa-heartbeat"></i></button>' +
		'<a href="javascript:void(0);" onClick="filtrerServ(\'2\');">Santé</a>' +
		'</div>' +
		'<div class="col">' +
		'<button type="button" class="btn btn-success btn-lg rounded-circle" onClick="filtrerServ(\'3\');"><i class="fas fa-utensils"></i></button>' +
		'<a href="javascript:void(0);" onClick="filtrerServ(\'3\');">Gastronomie</a>' +
		'</div>' +
		'<div class="col">' +
		'<button type="button" class="btn btn-danger btn-lg rounded-circle" onClick="filtrerServ(\'4\');"><i class="fas fa-star"></i></button>' +
		'<a href="javascript:void(0);" onClick="filtrerServ(\'4\');">Beauté</a>' +
		'</div>' +
		'<div class="col">' +
		'<button type="button" class="btn btn-primary btn-lg rounded-circle" onClick="filtrerServ(\'5\');"><i class="fas fa-shopping-bag"></i></button>' +
		'<a href="javascript:void(0);" onClick="filtrerServ(\'5\');">Produits</a>' +
		'</div>' +
		'<div class="col">' +
		'<button type="button" class="btn btn-warning btn-lg rounded-circle" onClick="filtrerServ(\'6\');"><i class="fas fa-plane"></i></button>' +
		'<a href="javascript:void(0);" onClick="filtrerServ(\'6\');">Voyages</a>' +
		'</div>' +
		'<div class="col">' +
		'<button type="button" class="btn btn-success btn-lg rounded-circle" onClick="filtrerServ(\'7\');"><i class="fas fa-home"></i></button>' +
		'<a href="javascript:void(0);" onClick="filtrerServ(\'7\');">Maison</a>' +
		'</div>' +
		'<div class="col">' +
		'<button type="button" class="btn btn-danger btn-lg rounded-circle" onClick="filtrerServ(\'8\');"><i class="fas fa-pencil-alt"></i></button>' +
		'<a href="javascript:void(0);" onClick="filtrerServ(\'8\');">Education</a>' +
		'</div>' +
		'<div class="col">' +
		'<button type="button" class="btn btn-primary btn-lg rounded-circle" onClick="filtrerServ(\'9\');"><i class="fas fa-wrench"></i></button>' +
		'<a href="javascript:void(0);" onClick="filtrerServ(\'9\');">Services</a>' +
		'</div>' +
		'</div>';
	rep += '<div class="row mt-2">';
	//esto va dentro de un for
	for (j = 0; j < donnees.length; j++) {


		rep += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">' +
			'<!-- Card -->' +
			'<div class="card booking-card shadow" data-toggle="modal" data-target="#serviceModal' + donnees[j].idService + '" id="card-services">' +
			'' +
			'<!-- Card image -->' +
			'<div class="view overlay">' +
			'<img class="card-img-top" src="pochettes/' + donnees[j].pochetteService + '" alt="Card image cap">' +
			'<a href="#!">' +
			'<div class="mask rgba-white-slight"></div>' +
			'</a>' +
			'</div>' +
			'' +
			'<!-- Card content -->' +
			'<div class="card-body">' +
			'' +
			'<!-- Title -->' +
			'<h5 class="font-weight-bold"><a>' + donnees[j].titreService + '</a></h5>' +
			'<p class="card-text small text-muted ">' + donnees[j].nomFournisseur + '</p>' +
			'<!-- Text -->' +
			'<p class="card-text">' + donnees[j].desShortService + '</p>' +
			'<ul class="list-unstyled list-inline rating mb-0">';
		var qualf = parseFloat(donnees[j].qualServ).toFixed(1);

		for (i = 0; i < qualf; i++) {
			if ((qualf - i) >= 1) {
				rep += '<li class="list-inline-item mr-0"><i class="fas fa-star amber-text text-warning"></i></li>';
			}
			if ((qualf - i) == 0.5) {
				rep += '<li class="list-inline-item"><i class="fas fa-star-half-alt amber-text text-warning"></i></li>';
			}
		}
		rep += '<li class="list-inline-item">' +
			'<p class="text-muted">' + qualf + ' (' + donnees[j].nomQ + ')</p>' +
			'</li>' +
			'</ul>' +
			'<!-- <hr> -->' +
			'<ul class="list-unstyled list-inline mb-0">' +
			'<li class="list-inline-item">' +
			'<p class="card-text small text-muted pt-1">' + donnees[j].desVilAdr + '</p>' +
			'</li>' +
			'<li class="list-inline-item">' +
			'<del class="chip mr-0 font-weight-bold text-muted">' + parseFloat(donnees[j].prixService).toFixed(0) + '$</del>' +
			'</li>' +
			'<li class="list-inline-item">' +
			'<del class="chip mr-0 font-weight-bold text-muted">' + parseFloat(donnees[j].promService).toFixed(0) + '$</del>' +
			'</li>' +
			'<li class="list-inline-item">' +
			'<div class="chip text-primary font-weight-bold mr-0">' + parseFloat(donnees[j].refeService).toFixed(0) + '$</div>' +
			'</li>' +
			'</ul>' +
			'' +
			'</div>' +
			'' +
			'</div>' +
			'<!-- Card --></div>' +
			'<div class="modal fade bd-example-modal-lg" id="serviceModal' + donnees[j].idService + '"  tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"' +
			'aria-hidden="true">' +
			'<div class="modal-dialog modal-lg">' +
			'<div class="modal-content">' +
			'<div class="modal-header bg-primary py-4 shadow">' +
			'<!-- Logo bitvoix -->' +
			'' +
			'<img src="images/logo.png" alt="">' +
			'' +
			'<button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">' +
			'<span class="text-white" aria-hidden="true">&times;</span>' +
			'</button>' +
			'</div>' +
			'<div class="row m-3">' +
			'<div class="col-sm-12 col-md-6 col-lg-6">' +
			'<img src="pochettes/' + donnees[j].pochetteService + '" class="card-img-top img-thumbnail" alt="' + donnees[j].titreService + '"></br>' +
			'</div>' +
			'<div class="col-sm-12 col-md-6 col-lg-6">' +
			'<h5 class="font-weight-bold"><a>' + donnees[j].titreService + '</a></h5>' +
			'<h6 class="card-text small">' + donnees[j].nomFournisseur + '</h6>' +
			'<h6 class="card-text small">' + donnees[j].nroAdr + ' ' + donnees[j].rueAdr + ' ' + donnees[j].desVilAdr + ' ' + donnees[j].codPosAdr + '</h6>' +
			'<p class="card-text">' + donnees[j].desShortService + '</p>' +
			'<ul class="list-unstyled list-inline rating mb-0">';

		for (i = 0; i < qualf; i++) {
			if ((qualf - i) >= 1) {
				rep += '<li class="list-inline-item mr-0"><i class="fas fa-star amber-text text-warning"></i></li>';
			}
			if ((qualf - i) == 0.5) {
				rep += '<li class="list-inline-item"><i class="fas fa-star-half-alt amber-text text-warning"></i></li>';
			}
		}
		rep += '<li class="list-inline-item">' +
			'<p class="text-muted">' + qualf + ' (' + donnees[j].nomQ + ')</p>' +
			'</li>' +
			'</ul>' +
			'<button class="btn btn-info font-weight-bold shadow" disabled><del>' + parseFloat(donnees[j].prixService).toFixed(0) + '$</del></button>' +
			'<button class="btn btn-outline-info font-weight-bold shadow" data-toggle="modal"' + ' data-target="#reqModal' + donnees[j].idService + '"' +
			'onclick="document.getElementById(\'cleSerRequest' + donnees[j].idService + '\').setAttribute(\'value\', getRndInteger(10000,99999));" id="buttonReq' + donnees[j].idService + 
			'" disabled >' +
			parseFloat(donnees[j].promService).toFixed(0) + '$</button>' +
			'<button class="btn btn-info font-weight-bold shadow" id="buttonRef' + donnees[j].idService + '" disabled>' + parseFloat(donnees[j].refeService).toFixed(0) + '$</button>' +
			'<img id="bitvoixButton" class="imgLien" src="images/bitVoix.png" alt=""  data-toggle="modal"' +
			' width="37px"></img>' +
			'<p class="card-text mt-4">Date Limite : <b>' + donnees[j].datLimService + '</b></p>' +
			'</div>' +
			'<div class="col-lg-12">' +
			'<h5 class="font-weight-bold mt-2">Description</h5>' +
			'<hr>' +
			'<p class="card-text">' + donnees[j].desService + '</p>' +
			'</div>' +
			'</div>' +
			'</div>' +
			'</div>' +
			'</div>';

		///////

		rep += '<!-- Modal2 -->' +
			'<div class="modal fade bd-example-modal-sm" role="dialog" id="reqModal' + donnees[j].idService + '">' +
			'<div class="modal-dialog bd-example-modal-sm">' +
			'<div class="modal-content">' +
			'<div class="modal-header bg-primary py-4 shadow">' +
			'' +
			'<img src="images/logo.png" alt="">' +
			'' +
			'<button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">' +
			'<span class="text-white" aria-hidden="true">&times;</span>' +
			'</button>' +
			'</div>' +
			'<div class="col-lg-12">' +
			'<h5 class="font-weight-bold mt-2">Demande de Service</h5>' +
			'<hr>' +
			'</div>' +
			'<div class="modal-body">' +
			'<form id="formRequest' + donnees[j].idService + '">' +
			'' +
			'<input type="hidden" name="idService" id="idService" value="' + donnees[j].idService + '" >' +
			'' +
			'' +
			'<div class="input-group mb-3">' +
			'<div class="input-group-prepend">' +
			'<span class="input-group-text"><i class="fas fa-check-square"></i></span>' +
			'</div>' +
			'<input type="text" class="form-control" placeholder="Nom" aria-label="Nom" value="' + donnees[j].titreService + '" readonly>' +
			'</div>' +
			'' +
			'<div class="input-group mb-3">' +
			'<div class="input-group-prepend">' +
			'<span class="input-group-text"><i class="fab fa-slack-hash"></i></span>' +
			'</div>' +
			'<input type="text" class="form-control" id="cleSerRequest' + donnees[j].idService + '"  name="cleSerRequest' + donnees[j].idService + '" readonly>' +
			'</div>' +
			'<small id="emailHelp" class="form-text text-muted">Gardez ce numéro pour avoir accès à un meilleur prix de votre service</small>' +
			'' +
			'' +
			'' +
			'<div class="text-center form-sm mt-2">' +
			'<button class="btn btn-primary shadow" data-dismiss="modal" onClick="requetes(\'request\');">Confirmer</button>' +
			'</div>' +
			'</form>' +
			'</div>' +
			'</div>' +
			'</div>' +
			'</div>' +
			'<!-- Fin Modal2 -->';

		rep += '<!-- Modal3 -->' +
			'<div class="modal fade bd-example-modal-sm" role="dialog" id="refModal' + donnees[j].idService + '">' +
			'<div class="modal-dialog bd-example-modal-sm">' +
			'<div class="modal-content">' +
			'<div class="modal-header bg-primary py-4 shadow">' +
			'' +
			'<img src="images/logo.png" alt="">' +
			'' +
			'<button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">' +
			'<span class="text-white" aria-hidden="true">&times;</span>' +
			'</button>' +
			'</div>' +
			'<div class="col-lg-12">' +
			'<h5 class="font-weight-bold mt-2">BitVoix de Service</h5>' +
			'<small id="emailHelp" class="form-text text-muted">Recommandez cette service à un(e) ami(e)</small>' +
			'<hr>' +
			'</div>' +
			'<div class="modal-body">' +
			'<form id="formRef' + donnees[j].idService + '">' +
			'' +
			'<input type="hidden" name="idService" id="idService" value="' + donnees[j].idService + '" >' +
			'' +
			'' +
			'<div class="input-group mb-3">' +
			'<div class="input-group-prepend">' +
			'<span class="input-group-text"><i class="fas fa-check-square"></i></span>' +
			'</div>' +
			'<input type="text" class="form-control" placeholder="Nom" aria-label="Nom" value="' + donnees[j].titreService + '" readonly>' +
			'</div>' +
			'' +
			'<div class="input-group mb-3">' +
			'<div class="input-group-prepend">' +
			'<span class="input-group-text"><i class="fas fa-envelope prefix"></i></span>' +
			'</div>' +
			'<input type="email" placeholder="Courriel personne à référencer" class="form-control" id="cleSerRequest" name="cleSerRequest" >' +
			'</div>' +
			'' +
			'' +
			'' +
			'' +
			'<div class="text-center form-sm mt-2">' +
			'<button class="btn btn-primary shadow" data-dismiss="modal">Confirmer</button>' +
			'</div>' +
			'</form>' +
			'</div>' +
			'</div>' +
			'</div>' +
			'</div>' +
			'<!-- Fin Modal3 -->';


	}
	//fin del for
	rep += '</div>';
	$('#divprincipal').html(rep);
}

var vue = function (action, donnees) {
	switch (action) {
		case 'erreurInsertMembreJSON':
			$('#messageEnregistrer').html(donnees);
			setTimeout(function () {
				$('#messageEnregistrer').html("");
			}, 3000);
			$('#membreForm')[0].reset();
			break;
		case 'erreurLoginSubmitJSON':
			$('#messageLogin').html(donnees);
			setTimeout(function () {
				$('#messageLogin').html("");
			}, 3000);
			$('#loginForm')[0].reset();
			break;
		case 'enregisterOKJSON':
			$('#messageLogin').html(donnees);
			setTimeout(function () {
				$('#messageLogin').html("");
			}, 3000);
			$('#membreForm')[0].reset();
			break;
		case 'LoginOKJSON':
			menuMembre(donnees);
			$('#loginForm')[0].reset();
			break;
		case 'menuConnexion':
			menuConnexion();
			break;
		case 'servicesAccueil':
			servicesAccueil(donnees);
			break;
		case 'formMajUser':
			formMajUser(donnees);
			break;
		case 'modalConnecter':
			modalConnecter(donnees);
			break;
	}

}