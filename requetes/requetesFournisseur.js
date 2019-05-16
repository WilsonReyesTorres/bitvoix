// BitVoix

function envoyerEnregistrerFour(){
    var enregForm = new FormData(document.getElementById('enregFormFournisseur'));
    // alert( 'envio a grabar');
    enregForm.append('action', 'enregistrer');
    $.ajax({
        url: 'serveur/controleurFournisseur.php',
        type: 'POST',
        data: enregForm,
        dataType: 'json',
        contentType: false,
		processData: false,
        success: function (message) {
            // alert('Dibujar Acceuil');
            ServicesFournisseur();
        },
        fail: function () {
            alert("Vous avez un GROS problème");
        }
    });
}


function FourAccueil() {
    // alert("FourAccueil Ajax");
    $('#map').hide();
    $.ajax({
        url: 'serveur/controleurFournisseur.php',
        type: 'POST',
        data: {"action": "fiche"},
        dataType: 'json',
        success: function (donneFuornisseur) {
            if (donneFuornisseur.idFournisseur === "" ){
                // alert('No existe fournisseur');

                vueFournisseur('montreFournisseurN', donneFuornisseur);
             }
            else{
                // alert('existe fournisseur');
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
        $('#map').modal('hide');
         vueFournisseur('montreServicesFour', donneFuornisseur);
    },
    fail: function () {
        alert("Vous avez un GROS problème");
    }
});
}


function  Ficher_Fournisseur(){
   // var enregForm = new FormData(document.getElementById('Modifier_Fournisseur'));
    // alert( 'Consulter le donnes de Fournisseur');
    // enregForm.append('action', 'fiche');
    $.ajax({
        url: 'serveur/controleurFournisseur.php',
        type: 'POST',
        data: {"action": "fiche" },
        dataType: 'json',
        success: function (donnees) {
            if (donnees.idFournisseur !== ""){
            //    alert("Mostar Furnisseur donnees");
               vueFournisseur('montreFournisseur',donnees);
            }
        },
        fail: function () {
            alert("Vous avez un GROS problème");
        }
    });
} 

function  modifier_Fournisseur(){
    // alert( 'Modifier le donnes de Fournisseur');
    var donnees2=$('#enregFormFournisseur').serialize()+"&action=modifier";
    // var enregFormFour = new FormData(document.getElementById('enregFormFournisseur'));
    // enregFormFour.append('action', 'modifier');
    //  alert(JSON.stringify(enregFormFour));
   
    $.ajax({
        url: 'serveur/controleurFournisseur.php',
        type: 'POST',
         data: donnees2 , 
          dataType: 'text',
          success: function (donnees) {
           if (donnees.idFournisseur !== ""){
                // alert(" Fournisseur a été modifier ");
                $('#FormFourniseur').modal('hide');
                // ServicesFournisseur();
             }
          },
          fail: function () {
             alert("Vous avez un GROS problème");
         }
     });
 } 


 function GetServiceFournisseur(idService){
    $.ajax({
        url: 'serveur/controleurServices.php',
        type: 'POST',
        data: {
            "action": 'fiche',
            "idService": idService
        },
        dataType: 'json',
        success: function (donneSerFuornisseur) {
            //  alert('Services du Fournisseur a Consulte'+ donneSerFuornisseur.idService);

             vueFournisseur('montreGetServicesFour', donneSerFuornisseur);
        },
        fail: function () {
            alert("Vous avez un GROS problème");
        }
    });
 }

function  UpdDelRequets(NroRequet){
    $.ajax({
        url: 'serveur/controleurRequests.php',
        type: 'POST',
        data: {
            "action": 'enlever',
            "idRequest": NroRequet
        },
        dataType: 'json',
        success: function (donneSerFuornisseur) {
            //  alert('Services du Fournisseur a Consulte'+ donneSerFuornisseur.idService);

             vueFournisseur('montreGetServicesFour', donneSerFuornisseur);
        },
        fail: function () {
            alert("Vous avez un GROS problème");
        }
    });
}
function UpdFerRequets(NroRequet){
    $.ajax({
        url: 'serveur/controleurRequests.php',
        type: 'POST',
        data: {
            "action": 'FermeRequet',
            "idRequest": NroRequet
        },
        dataType: 'json',
        success: function (donneSerFuornisseur) {
            //  alert('Services du Fournisseur a Consulte'+ donneSerFuornisseur.idService);

             vueFournisseur('montreGetServicesFour', donneSerFuornisseur);
        },
        fail: function () {
            alert("Vous avez un GROS problème");
        }
    });
} 

 function EnregistrerService(){
    // alert('Nouveau service');
    var donneesForm=$('#AddServiceFuornisseur').serialize()+"&action=enregistrer";
    //  alert(donneesForm);
    // var enregForm = new FormData(document.getElementById('AddServiceFuornisseur'));
    // alert( 'Enregistrer le Services');
    // enregForm.append('action', 'enregistrer');
    // var myJSON = JSON.stringify(enregForm);
     //alert(myJSON);
    // Document.getElementById('AddServiceFuornisseur').innerHTML = myJSON;
    
    $.ajax({
        url: 'serveur/controleurServices.php',
        type: 'POST',
        data: donneesForm,
        dataType: 'text',
        success: function (message) {
            // alert('Dibujar Acceuil');
            // $('#modalLRForm').modal('hide');
            // $('#FormService').modal('hide');
            
            ServicesFournisseur();
        },
        fail: function () {
            alert("Vous avez un GROS problème");
        }
    });
}


function ModifierService(){
    // alert("Modier le service");
    var donneesForm=$('#AddServiceFuornisseur').serialize()+"&action=modifier"; 
   $.ajax({
       url: 'serveur/controleurServices.php',
       type: 'POST',
       data: donneesForm,
       dataType: 'text',
       success: function (message) {
           // alert('Dibujar Acceuil');
           // $('#modalLRForm').modal('hide');
            $('#FormService').modal('hide');
            $('#FormService').removeClass('show'); 
            $('#FormService').modal('toggle');
            ServicesFournisseur();
       },
       fail: function () {
           alert("Vous avez un GROS problème");
       }
   });
}

function ServiceBlank(){

    $.ajax({
        url: 'serveur/controleurServices.php',
        type: 'POST',
        data:  {
            "action": 'forfaitServic'
        },
        dataType: 'json',
        success: function (donnees) {
            // alert(JSON.stringify(donnees));
            ligne=donnees[0];
            forfait = parseInt(ligne.idForfaitFournisseur);
            switch(forfait) {
                case 1:
                  if  ((parseInt(ligne.nroServ) < 3 ) && (ligne.jours<90)){
                      vueFournisseur('vueServiceBlank',{});
                  } else if(ligne.jours<90){
                    $('#AddServiceFuornisseur').html("");
                    $('#AddServiceFuornisseur').html("Nous invitons à changer de Forfait, pour ajouter un nouveau service ");
                  } else{
                    $('#AddServiceFuornisseur').html("");
                    $('#AddServiceFuornisseur').html(" Nous invitons à changer de Forfait,la période gratuite a fini ");
                  }
                  break;
                case 2:
                  if (parseInt(ligne.jouract) <= 0 ){
                    $('#AddServiceFuornisseur').html("");
                    $('#AddServiceFuornisseur').html(" Nous invitons à renouveler le forfait, la période du service à d'échéance ");
                  }else{
                    vueFournisseur('vueServiceBlank',{});
                  }
                  break;
                default:
                  // code block
              }
        },
        fail: function () {
            alert("Vous avez un GROS problème");
        }
    });
}

function FourCommand(){
    $.ajax({
        url: 'serveur/controleurServices.php',
        type: 'POST',
        data:  {
            "action": 'FourRequetsActif'
        },
        dataType: 'json',
        success: function (donnees) {
                vueFournisseur('commmandesFour',donnees);
        },
        fail: function () {
            alert("Vous avez un GROS problème");
        }
    });
}

// function CreerFacture(nomRefFacture){
//     $.ajax({
//         url: 'serveur/controleurFacture.php',
//         type: 'POST',
//         data:  {
//             "action": 'enregistrer',
//             "nomRefFacture" : nomRefFacture
//         },
//         dataType: 'json',
//         success: function (donnees) {
//             return donnees[0].idFacture;
//                 //donnees[0].
//                 //               
//                 //ligne = fiche[i];
//                 // vueFournisseur('voirNroFact',donnees);
//         },
//         fail: function () {
//             alert("Vous avez un GROS problème");
//         }
//     });
// }

function HistoireFact(){
    $.ajax({
        url: 'serveur/controleurFacture.php',
        type: 'POST',
        data:  {
            "action": 'getListFactFournisseur'
         },
        dataType: 'json',
        success: function (donnees) {
          
          
             vueFournisseur('voirHistoireFact',donnees);
        },
        fail: function () {
            alert("Vous avez un GROS problème");
        }
    }); 
}


//controleur des requetes
var requetesFour = function (action) {
    // alert(action);
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
        case 'modifier':
            modifier_Fournisseur();
            break;
        case 'serviceFournisseur':
             serviceFournisseur();
            break; 
        case 'EnregistrerService':
            EnregistrerService();
            break; 
        case 'ModifierService':
            ModifierService(); 
            break;  
        case 'ServiceBlank':
           ServiceBlank(); 
           break; 
        case 'FourCommand':
           FourCommand();
           break;
        case 'HistoireFact':
           HistoireFact();
           break;   
        default:
    }
}

var ModalRequetesSer = function(NroSer){
    GetServiceFournisseur(NroSer);
}


var DelRequets = function(NroRequet){
    UpdDelRequets(NroRequet); 
    requetesFour('FourCommand');
}
var FerRequets = function(NroRequet){
    UpdFerRequets(NroRequet); 
    requetesFour('FourCommand');
}


var FacPaypal = function(nomRefFacture){
   a = CreerFacture(nomRefFacture);
   return a;
}