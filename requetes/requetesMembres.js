$(document).ready(function () {
	validerLogin();
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
			if(message.status=='error')
				vue('erreurInsertMembreJSON',message.msg);
			else
			{
				$('#panel8').removeClass("active");
				$('#panel8').removeClass("show");
				$('#tabSinsc').removeClass("active");
				$('#tabSign').addClass("active");
				$('#panel7').addClass("active");
				$('#panel7').addClass("show");
				vue('enregisterOKJSON',message.msg);
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
			if(message.status=='error')
				vue('erreurLoginSubmitJSON',message.msg);
			else{
				$('#modalLRForm').modal('hide');
				vue('LoginOKJSON',message.msg);
			}
			

			
		},
		fail: function () {
			alert("Vous avez un GROS problème");
		}
	});
}

function validerLogin() {
	var loginForm = new FormData(document.getElementById('loginForm'));
	loginForm.append('action', 'validerLogin');
	$.ajax({
		url: 'serveur/controleurMembres.php',
		type: 'POST',
		data: loginForm,
		dataType: 'json',
		contentType: false,
		processData: false,
		success: function (message) {
			if(message.status=='error')
				vue('erreurLoginSubmitJSON',message.msg);
			else{
				$('#modalLRForm').modal('hide');
				vue('LoginOKJSON',message.msg);
			}
			

			
		},
		fail: function () {
			alert("Vous avez un GROS problème");
		}
	});
}
function envoyerLogin() {
	$.ajax({
		url: 'serveur/controleurMembres.php',
		type: 'POST',
		data: 'action=login',
		//dataType:'json',
		dataType: 'html',
		success: function (formHtml) {
			$('#container').html(formHtml);
			//vue('listerJSON',listeFilms);
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
			if(formHtml=='login')
				vue('menuConnexion',formHtml);
			//envoyerLogin();
		},
		fail: function () {
			alert("Vous avez un GROS problème");
		}
	});
}
/*
function envoyerRegister() {
	$.ajax({
		url: 'serveur/controleurMembres.php',
		type: 'POST',
		//data:{"action":'login'},
		data: 'action=register',
		//dataType:'json',
		dataType: 'html',
		success: function (formHtml) {
			$('#container').html(formHtml);
			//vue('listerJSON',listeFilms);
		},
		fail: function () {
			alert("Vous avez un GROS problème");
		}
	});
}
*/

//controleur des requetes
var requetes = function (action) {
	switch (action) {
		case 'login':
			envoyerLogin();
			break;
		/*case 'register':
			envoyerRegister();
			break;*/
		case 'insertMembre':
			envoyerInsertMembre();
			break;
		case 'loginSubmit':
			envoyerLoginSubmit();
			break;
		case 'logout':
			envoyerLogout();
			break;
		default:
	}
}