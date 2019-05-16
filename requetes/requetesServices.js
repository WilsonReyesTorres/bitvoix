// BitVoix

function envoyerRequest(formRequete) {
	var formRequest = new FormData(document.getElementById(formRequete));
	formRequest.append('action', 'enregistrer');
	$.ajax({
		url: 'serveur/controleurRequests.php',
		type: 'POST',
		data: formRequest,
		dataType: 'json',
		contentType: false,
		processData: false,
		success: function (message) {
			/*
			if (message.status == 'error')
				vue('erreurLoginSubmitJSON', message.msg);
			else {
				$('#modalLRForm').modal('hide');
				vue('modalConnecter', message.msg)
				//vue('LoginOKJSON', message.msg);
			}*/
		},
		fail: function () {
			alert("Vous avez un GROS problème");
		}
	});
}

function envoyerReference(formReference) {
	var formRef = new FormData(document.getElementById(formReference));
	formRef.append('action', 'enregistrer');
	$.ajax({
		url: 'serveur/controleurReferences.php',
		type: 'POST',
		data: formRef,
		dataType: 'json',
		contentType: false,
		processData: false,
		success: function (message) {
			/*
			if (message.status == 'error')
				vue('erreurLoginSubmitJSON', message.msg);
			else {
				$('#modalLRForm').modal('hide');
				vue('modalConnecter', message.msg)
				//vue('LoginOKJSON', message.msg);
			}*/
		},
		fail: function () {
			alert("Vous avez un GROS problème");
		}
	});
}
function montrerServicesCat(idcateg) {
    $.ajax({
        url: 'serveur/controleurServices.php',
        type: 'POST',
        data: {
            "action": 'listerServCardsCat',
            "idcateg": idcateg
        },
        dataType: 'json',
        success: function (donnes) {
            vue('servicesAccueil',donnes);
        },
        fail: function () {
            alert("Vous avez un GROS problème");
        }
    });
}

var filtrerServ = function (idcateg){
    montrerServicesCat(idcateg);
}
//Variables pour envoyer les formulaires des requests
var envoyerForm = function (formRequete){
    envoyerRequest(formRequete);
}

//Variables pour envoyer les formulaires des références
var envoyerRef = function (formReference){
    envoyerReference(formReference);
}

//controleur des requetes
var requetesServ = function (action, idcateg) {
    switch (action) {
        case 'montrerServicesCat':
        montrerServicesCat(idcateg);
            break;
    }
}
