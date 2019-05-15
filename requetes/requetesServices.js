/*function montrerServices(){
	$.ajax({
		url: 'serveur/controleurServices.php',
		type: 'POST',
		data: 'action=listerServCards',
		dataType: 'json',
		success: function (donnes) {
		
				vue('servicesAccueil',donnes);
			
		},
		fail: function () {
			alert("Vous avez un GROS problème");
		}
	});

}*/

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


//controleur des requetes
var requetesServ = function (action, idcateg) {
    switch (action) {
        case 'montrerServicesCat':
        montrerServicesCat(idcateg);
            break;
    }
}
