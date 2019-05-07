// $(document).ready(function(){


//     $("#enregFormFournisseur").submit(function(event) {
//         /* stop form from submitting normally */
//         alert("Proceso Grabar");
//         event.preventDefault();
    
//         // onClick="requetesFour(\'enregistrer\');"
//         /* get the action attribute from the <form action=""> element */
//         // var url = $(this).attr('action');
    
//         //     $.ajax({
//         //     url : url,
//         //     type : 'GET',
//         //     success : function(code_html, statut){
//         //     $("#article").html(code_html);
//         //     }
//         //     });
//         });
    
    
// });         





function envoyerEnregistrerFour(){
    var enregForm = new FormData(document.getElementById('enregFormFournisseur'));
    alert( 'envio a grabar');
    enregForm.append('action', 'enregistrer');
    $.ajax({
        url: 'serveur/controleurFournisseur.php',
        type: 'POST',
        data: enregForm,
        dataType: 'json',
        contentType: false,
		processData: false,
        success: function (message) {
            alert('Dibujar Acceuil');
            ServicesFournisseur();
        },
        fail: function () {
            alert("Vous avez un GROS problème");
        }
    });
}


function FourAccueil() {
    $.ajax({
        url: 'serveur/controleurFournisseur.php',
        type: 'POST',
        data: {"action": "fiche"},
        dataType: 'json',
        success: function (donneFuornisseur) {
            if (donneFuornisseur.idFournisseur === "" ){
                alert('No existe fournisseur');
                vueFournisseur('montreFournisseurN', donneFuornisseur);
             }
            else{
                alert('existe fournisseur');
                  ServicesFournisseur();
             }
        },
        fail: function () {
            alert("Vous avez un GROS problème");
        }
    });

}

function ServicesFournisseur(){

$.ajax({
    url: 'serveur/controleurServices.php',
    type: 'POST',
    data: {
        "action": 'listSerFour'
    },
    dataType: 'json',
    success: function (donneFuornisseur) {
        // alert('Services du Fournisseur');
         vueFournisseur('montreServicesFour', donneFuornisseur);
    },
    fail: function () {
        alert("Vous avez un GROS problème");
    }
});
}


function  Ficher_Fournisseur(){
    var enregForm = new FormData(document.getElementById('Modifier_Fournisseur'));
    alert( 'Consulter le donnes de Fournisseur');
    enregForm.append('action', 'fiche');
    $.ajax({
        url: 'serveur/controleurFournisseur.php',
        type: 'POST',
        data: enregForm,
        dataType: 'json',
        contentType: false,
		processData: false,
        success: function (donnees) {
            if (donnees.idFournisseur !== ""){
               alert("Mostar Furnisseur");
            }
            //alert(message);
            //vue('enregistrer',message);
            //vue('enregistrerJSON',message);
            //vue('enregistrerXML', message);
        },
        fail: function () {
            alert("Vous avez un GROS problème");
        }
    });
} 

//controleur des requetes
var requetesFour = function (action) {
    alert(action);
    switch (action) {
        case 'enregistrer':
             envoyerEnregistrerFour();
             break;
        case 'FourAccueil':
            FourAccueil();
            break;
        case 'Ficher_Fournisseur':
            Ficher_Fournisseur();
            break;
        // case 'enlever':s
        //     // envoyerEnlever();
        //     break;
        // case 'fiche':
        //     envoyerFiche();
        //     break;
        // case 'modifier':
        //     modifier();
        //     break;
        default:
    }
}


