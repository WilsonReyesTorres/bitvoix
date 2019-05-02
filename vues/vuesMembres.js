

function menuMembre(membrePrenom) {
	$('#loginDiv').addClass("dropdown");
	rep = '<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"' +
		'data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
		membrePrenom +
		'</a>' +
		'<div class="dropdown-menu" aria-labelledby="navbarDropdown">' +
		'<span class="lien dropdown-item" onClick="requetes(\'profil\');">Profil</span>'+
		'<span class="lien dropdown-item" onClick="requetes(\'logout\');">Déconnexion</span>'+
		'</div>';
	$('#loginDiv').html(rep);
}
function menuConnexion() {
	$('#loginDiv').removeClass("dropdown");
	rep = '<a class="nav-link" href="#" data-toggle="modal" data-target="#modalLRForm">Se'+
'Connecter<span class="sr-only">(current)</span></a>';
	$('#loginDiv').html(rep);
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

	}

}