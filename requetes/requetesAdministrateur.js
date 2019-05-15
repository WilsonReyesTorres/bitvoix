function listerCat(){
	$.ajax({
		url:'serveur/controleurCategories.php',
		type:'POST',
		data:{"action":'lister'},
        dataType:'json',
		success: function(listeCat){
            vueAdministrateur('listerJSONCat',listeCat);
		},
		fail:function(){
			alert("Vous avez un GROS problème");
        }
    });
}

function listerAut(){
	$.ajax({
		url:'serveur/controleurServices.php',
		type:'POST',
		data:{"action":'lister'},
        dataType:'json',
		success: function(listeAutori){
            vueAdministrateur('listerJSONAut',listeAutori);
		},
		fail:function(){
			alert("Vous avez un GROS problème");
        }
    });
}

function listerSer(){
	$.ajax({
		url:'serveur/controleurServices.php',
		type:'POST',
		data:{"action":'lister'},
        dataType:'json',
		success: function(listeServ){
            vueAdministrateur('listerJSONSer',listeServ);
		},
		fail:function(){
			alert("Vous avez un GROS problème");
        }
    });
}

function listerFac(){
	$.ajax({
		url:'serveur/controleurFacture.php',
		type:'POST',
		data:{"action":'lister'},
        dataType:'json',
		success: function(listeFact){
            vueAdministrateur('listerJSONFac',listeFact);
		},
		fail:function(){
			alert("Vous avez un GROS problème");
        }
    });
}

function listerFour(){
	$.ajax({
		url:'serveur/controleurFournisseur.php',
		type:'POST',
		data:{"action":'lister'},
        dataType:'json',
		success: function(listeFourni){
            vueAdministrateur('listerJSONFour',listeFourni);
		},
		fail:function(){
			alert("Vous avez un GROS problème");
        }
    });
}

function listerMem(){
	$.ajax({
		url:'serveur/controleurMembres.php',
		type:'POST',
		data:{"action":'listerMembres'},
        dataType:'json',
		success: function(listeMemb){
            vueAdministrateur('listerJSONMem',listeMemb);
		},
		fail:function(){
			alert("Vous avez un GROS problème");
        }
    });
}

function autoriserSe(){
	$.ajax({
		url:'serveur/controleurServices.php',
		type:'POST',
		data:{"action":'lister'},
        dataType:'json',
		success: function(listeFourni){
            vueAdministrateur('listerJSONFour',listeFourni);
		},
		fail:function(){
			alert("Vous avez un GROS problème");
        }
    });
}

function updateautService(idService){
    $.ajax({
        url: 'serveur/controleurServices.php',
        type: 'POST',
        data: {
            "action": 'autoriser',
            "idService": idService
        },
        dataType: 'json',
        success: function (donneSerFuornisseur) {
            alert('Service ID #' + idService + ' a été autorisé');
			listerAut();
        },
        fail: function () {
            alert("Vous avez un GROS problème");
        }
    });
    
    
 }


//controleur des requetes
var requetesAdm=function(action){
switch(action){
	case 'enregistrer' :
		envoyerEnregistrer();
	break;
	case 'listerCategories' :
        listerCat();
	break;
	case 'enlever' :
		envoyerEnlever();
	break;
	case 'fiche' :
		envoyerFiche();
	break;
	case 'modifier' :
		modifier();
	break;
	case 'listerAutorisations' :
		listerAut();
	break;
	case 'listerFournisseurs' :
		listerFour();
	break;
	case 'listerMembres' :
		listerMem();
	break;
	case 'autoriserService' :
		alert('autoriserService');
		autoriserSer();
	break;
	case 'listerServices' :
		listerSer();
	break;
	case 'listerFactures' :
		listerFac();
	break;
	default :
}	
}

var autorisationSer = function(idSer){
    updateautService(idSer);
}