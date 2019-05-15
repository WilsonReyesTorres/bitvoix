// function envoyerEnregistrer(){
// 	var enregFormCat = new FormData(document.getElementById('enregFormCat'));
// 	enregFormCat.append('action','enregistrer');
// 	//console.log(enregFormCat);
// 	$.ajax({
// 		url:'serveur/controleurCategories.php',
// 		type:'POST',
// 		data:enregFormCat,
// 		dataType:'json',
// 		async : false,
// 		cache : false,
// 		contentType : false,
// 		processData : false,
// 		success: function(message){
// 			//alert(message);
// 			//vue('enregistrer',message);
// 			vue('enregistrerJSON',message);
// 			//vue('enregistrerXML',message);
// 		},
// 		fail:function(){
// 			alert("Vous avez un GROS problème");
// 		}
// 	});
// }

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

// function envoyerEnlever(){
// 	var idf=$('#numE').val();
// 	$.ajax({
// 		url:'serveur/controleurFilms.php',
// 		type:'POST',
// 		data:{"action":'enlever',"num":idf},
// 		dataType:'json',
// 		success: function(message){
// 			//alert(JSON.stringify(message));
// 			vue('enleverJSON',message);
// 		},
// 		fail:function(){
// 			alert("Vous avez un GROS problème");
// 		}
// 	});
// }


// function envoyerFiche(){
// 	var idf=$('#numM').val();
// 	$.ajax({
// 		url:'serveur/controleurFilms.php',
// 		type:'POST',
// 		data:{"action":'fiche',"num":idf},
// 		dataType:'json',
// 		success: function(leFilm){
// 			cacher('divModifier');
// 			//alert(JSON.stringify(leFilm));
// 			if(leFilm.msg==="OK")
// 				vue('montrerFiche',leFilm.donnees);
// 			else
// 				vue('ficheJSON',leFilm);
// 		},
// 		fail:function(){
// 			alert("Vous avez un GROS problème");
// 		}
// 	});
// }

// function modifier(){
// 	var enregForm = new FormData(document.getElementById('enregForm'));
// 	enregForm.append('action','modifier');
// 	$.ajax({
// 		url:'serveur/controleurFilms.php',
// 		type:'POST',
// 		data:enregForm,
// 		dataType:'json',
// 		async : false,
// 		cache : false,
// 		contentType : false,
// 		processData : false,
// 		success: function(message){
// 			vue('modifierJSON',message);
// 		},
// 		fail:function(){
// 			alert("Vous avez un GROS problème");
// 		}
// 	});
// }
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
	case 'autoriserService' :
		alert('autoriserService');
		autoriserSer();
	break;
	default :
}	
}

var autorisationSer = function(idSer){
    updateautService(idSer);
}