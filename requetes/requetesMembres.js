$(document).ready(function () {
	validerLogin();
	//montrerServices();
	//funciones al cargar la pagina
});



function envoyerInsertMembre() {
	var membreForm = new FormData(document.getElementById('membreForm'));
	membreForm.append('action', 'enregistrerMembre');
	$.ajax({
		url: 'serveur/controleurMembres.php',
		type: 'POST',
		data: membreForm,
		dataType: 'json',
		//async : false,
		//cache : false,
		contentType: false,
		processData: false,
		success: function (message) {
			if (message.status == 'error')
				vue('erreurInsertMembreJSON', message.msg);
			else {
				$('#panel8').removeClass("active");
				$('#panel8').removeClass("show");
				$('#tabSinsc').removeClass("active");
				$('#tabSign').addClass("active");
				$('#panel7').addClass("active");
				$('#panel7').addClass("show");
				vue('enregisterOKJSON', message.msg);
			}

			//envoyerLogin();
		},
		fail: function () {
			alert("Vous avez un GROS problème");
		}
	});
}

function envoyerLoginSubmit() {
	var loginForm = new FormData(document.getElementById('loginForm'));
	loginForm.append('action', 'loginSubmit');
	$.ajax({
		url: 'serveur/controleurMembres.php',
		type: 'POST',
		data: loginForm,
		dataType: 'json',
		contentType: false,
		processData: false,
		success: function (message) {
			if (message.status == 'error')
				vue('erreurLoginSubmitJSON', message.msg);
			else {
				$('#modalLRForm').modal('hide');
				vue('LoginOKJSON', message.msg);
				if(message.msg=='AdminBitvoix'){
					$('#map').hide();
					listerAut();
				}
				
			}
		},
		fail: function () {
			alert("Vous avez un GROS problème");
		}
	});
}

function envoyerUpdateMembre() {
	var membreFormUp = new FormData(document.getElementById('membreFormUp'));
	membreFormUp.append('action', 'membreUpdate');
	$.ajax({
		url: 'serveur/controleurMembres.php',
		type: 'POST',
		data: membreFormUp,
		dataType: 'json',
		contentType: false,
		processData: false,
		success: function (message) {
			if (message.status == 'error')
				vue('erreurLoginSubmitJSON', message.msg);
			else {
				$('#modalLRForm').modal('hide');
				vue('modalConnecter', message.msg)
				//vue('LoginOKJSON', message.msg);
			}
		},
		fail: function () {
			alert("Vous avez un GROS problème");
		}
	});
}
function validerLogin() {
	$.ajax({
		url: 'serveur/controleurMembres.php',
		type: 'POST',
		data: 'action=validerLogin',
		dataType: 'json',
		success: function (message) {
			if (message.status == 'error')
				vue('erreurLoginSubmitJSON', message.msg);
			if (message.status == 'success') {
				$('#modalLRForm').modal('hide');
				vue('LoginOKJSON', message.msg);
				if(message.msg=='AdminBitvoix'){
					$('#map').hide();
					listerAut();
				}
				else{
					montrerServices();
				}
			}
			if (message.status == 'nonLogin')
				montrerServices();
		},
		fail: function () {
			alert("Vous avez un GROS problème");
		}
	});
}

function montrerServices() {
	$.ajax({
		url: 'serveur/controleurServices.php',
		type: 'POST',
		data: {
			"action": 'listerServCards',
			"idcateg": 0
		},
		dataType: 'json',
		success: function (donnes) {

			vue('servicesAccueil', donnes);

		},
		fail: function () {
			alert("Vous avez un GROS problème");
		}
	});

}

function envoyerMajProfil() {
	$.ajax({
		url: 'serveur/controleurMembres.php',
		type: 'POST',
		data: 'action=chercheUser',
		dataType: 'json',
		success: function (donnes) {
			//alert(donnes);
			vue('formMajUser', donnes);
		},
		fail: function () {
			alert("Vous avez un GROS problème");
		}
	});
}

function envoyerLogout() {
	$.ajax({
		url: 'serveur/controleurMembres.php',
		type: 'POST',
		//data:{"action":'login'},
		data: 'action=logout',
		//dataType:'json',
		dataType: 'text',
		success: function (formHtml) {

			//$('.container').html(formHtml);
			if (formHtml == 'login')
				vue('menuConnexion', formHtml);
			//envoyerLogin();
		},
		fail: function () {
			alert("Vous avez un GROS problème");
		}
	});
}


//controleur des requetes
var requetes = function (action) {
	switch (action) {
		case 'insertMembre':
			envoyerInsertMembre();
			break;
		case 'loginSubmit':
			envoyerLoginSubmit();
			break;
		case 'logout':
			envoyerLogout();
			break;
		case 'majProfil':
			envoyerMajProfil();
			break;
		case 'updateMembre':
			envoyerUpdateMembre();
			break;
			default:
	}
}