// BitVoix

function  ImageArray(SelecValue,pochetteSelec){
    var categories = new Array("","Autos","Santé","Gastronomie","Beauté","Produits","Voyages","Maison","Education","Services");
    var catephysique  = new Array("","auto","sante","gastronomie","beaute","produits","voyages","maison","education","services")
    ins_image = "";
    SelecValue = parseInt(SelecValue);
    if (SelecValue > 0){
        for(i=1;i<=3;i++){
            imgout = catephysique[SelecValue]+i+".jpg";
            if (imgout == pochetteSelec){
                img_sel = "checked";
            } else{
                img_sel = "" ;
            }
            ins_image  +=  '<label>  <input type="radio" name="pochetteService" value="'+catephysique[SelecValue]+i+'.jpg" '+ img_sel+'> <img  title="'+categories[SelecValue]+'" src="pochettes/'+catephysique[SelecValue]+i+'.jpg">  </label>'
        }
    }else{
        ins_image="";
    }   
    $('#div-images').html(""); 
    $('#div-images').html(ins_image); 
}

function commmandesFour(listCommand) {
    var taille = listCommand.length;
    var prix = 0.0;
    rep = `
    <table class="table table-hover">
        <thead class="bg-primary text-white shadow">
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Membre</th>
                <th scope="col">Service</th>
                <th scope="col">Prix</th>
                <th scope="col">No. Ref</th>
                <th scope="col">Clé Service</th>
                <th scope="col">Verification</th>
            </tr>
        </thead>
        <tbody>`;
        for(var i=0; i <taille ; i++){
            ligne=listCommand[i];
            if (ligne.NroRefe >= ligne.reefeEfeService){
                prix =  ligne.refeService;
            } else
               prix = ligne.promService;
            rep+=`
            <tr>
                <th scope="row">`+ligne.idRequest+`</th>
                <td>`+ligne.nomMembre +` ` +ligne.preNomMembre+`</td>
                <td>`+ligne.titreService+`</td>
                <td>`+prix+`</td>
                <td>`+ligne.NroRefe+`</td>
                <td>`+ligne.cleSerRequest+`</td>
                <td>
                    <button type="button" class="btn btn-primary btn-sm" onClick="FerRequets(`+ligne.idRequest+`);"><i class="fas fa-check" title="Autorizer"></i></button>
                    <button type="button" class="btn btn-danger btn-sm" onClick="DelRequets(`+ligne.idRequest+`);"><i class="fas fa-trash-alt"></i></button>
                </td>
            </tr>`;
            };
          rep += /*html*/   `
        </tbody>
    </table>
    `
    $('#divfour').html(rep);
}


function disegne() {
    $('#tableau_analytique').highcharts({
        title: {
            text: 'SIMULATION: Flux de caisse'
        },
        xAxis: {
            categories: ['JAN', 'FEV', 'MAR', 'AVR', 'MAI', 'JUIN', 'JUI', 'AOUT', 'SEP', 'OCT', 'NOV', 'DEC']
        },
        yAxis: {
            title: 'Porcentaje %',
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '%'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
                type: 'column',
                name: 'Service 1',
                data: [50, 23, 21, 45, 78, 23]
            }, {
                type: 'column',
                name: 'Service 2',
                data: [25, 23, 21, 67, 89, 0]
            }, {
                type: 'column',
                name: 'Service 3',
                data: [20, 18, 19, 78, 28, 67]
            },
            {
                name: 'Obj-Ser1.',
                data: [80, 60, 45, 56, 45, 23]

            },
            {
                name: 'Obj-Ser2.',
                data: [50, 40, 35, 50, 45, 23]

            },
            {
                name: 'Obj-Ser3.',
                data: [10, 12, 20, 50, 25, 50]

            }
        ],
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                }
            }
        }
    });
}

function  formFournisseur(ModiNew){
    var rep1 = /*html*/ ` 
    
    <div class="container objformFournisseur border pt-2 shadow rounded font-weight-bold " >
    <h2> Devenir fournisseur</h2> <hr>
    <form id="enregFormFournisseur">
    <div class="form-group row">
        <label for="nomFournisseur" class="col-sm-4 col-form-label">Nom
            fournisseur</label>
        <div class="col-sm-8">
            <input type="text" class="form-control" id="nomFournisseur"
                name="nomFournisseur" title="Nom Fournisseur" placeholder="Nom Fournisseur" required>
        </div>
    </div>
    <hr>
    <h5>Adresse</h5>
    <div class="form-group row">
        
        <label for="nroAdr" class="col-sm-4 col-form-label">Numéro
            civique</label>
        <div class="col-sm-8">
            <input type="hidden" id="idAdrFournisseur" name="idAdrFournisseur">
            <input type="number" class="form-control" id="nroAdr" name="nroAdr"
                step="1" title="Numéro Civique" pattern="[0-9]{5}" max="99999" placeholder="Numéro Civique" required>
        </div>
    </div>
    <div class="form-group row">
        <label for="rueAdr" class="col-sm-4 col-form-label">Rue</label>
        <div class="col-sm-8">
            <input type="text" class="form-control" id="rueAdr" name="rueAdr"
                title="Rue" placeholder="Rue"  required>
        </div>
    </div>
    <div class="form-group row">
        <div class="col-sm-4">
            <label for="desVilAdr">Ville</label>
        </div>
        <div class="col-sm-8">
            <select id="desVilAdr" name="desVilAdr" class="form-control"
                required>
                <option selected value="Montréal">Montréal</option>
            </select>
        </div>
    </div>
    <div class="form-group row">
        <label for="codPosAdr" class="col-sm-4 col-form-label">Code
            postal</label>
        <div class="col-sm-8">
            <input type="text" class="form-control" id="codPosAdr"
                name="codPosAdr" title="A9A9A9" pattern="[A-Za-z][0-9][A-Za-z][0-9][A-Za-z][0-9]"
                placeholder="Code postal"  required>
        </div>
    </div>
    <div class="form-group row">
        <label for="cellFournisseur"
            class="col-sm-4 col-form-label">Téléphone</label>
        <div class="col-sm-8">
            <input type="tel" class="form-control" 
                id="cellFournisseur" name="cellFournisseur"
                pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                placeholder="Téléphone" required>
        </div>
    </div>
    <hr>
    <h5>Service</h5>
    <div class="form-group row">
        <div class="col-sm-4">
            <label for="typeSerFournisseur">Additionnelles</label>
        </div>
        <div class="col-sm-8">
            <select id="typeSerFournisseur" name="typeSerFournisseur" class="form-control"
                required disabled>
                <option selected value="1">Personalisé</option>
                <option value="2">Agenda</option>
                <option value="3">Demande</option>
            </select>
        </div>
    </div>
    <div class="form-group row">
        <div class="col-sm-4">
            <label for="idForfaitFournisseur">Forfait Bitvoix</label>
        </div>
        <div class="col-sm-8">
            <select id="idForfaitFournisseur" name="idForfaitFournisseur" class="form-control"
                required disabled>
                <option selected value="1">Base</option>
                <option value="2">Stantard</option>
                <option value="3">Premium</option>
            </select>
        </div>
    </div>
    <div class="form-group row">
        <label for="datInsFournisseur" class="col-sm-4 col-form-label">Date d'inscription</label>
        <div class="col-sm-8">
            <input type="date" class="form-control" id="datInsFournisseur"
                name="datInsFournisseur" title="Date d'inscription"   readonly >
        </div>
    </div>
    <div class="form-group row">
        <label for="datEcheFournisseur" class="col-sm-4 col-form-label">Date d'échéance</label>
        <div class="col-sm-8">
            <input type="date" class="form-control" id="datEcheFournisseur"
                name="datEcheFournisseur" title="Date d'échéance" readonly>
        </div>
    </div>

    <div class="modal-footer d-flex justify-content-center"> `;
       if (ModiNew == "N"){
        rep1+= /*html*/ `
        <button type="button" class="btn btn-primary" data-dismiss="modal" onclick = "requetesFour(\'enregistrer\')" >Enregistrer</button> 
        <button type="reset" class="btn btn-danger">Effacer</button>`;
       }else if (ModiNew == "M") {
        rep1+= /*html*/ `
        <button type="button" class="btn btn-primary"  data-dismiss="modal" onclick = "requetesFour(\'modifier\')" >Modifier</button> `;           
       }
    rep1+= /*html*/`

    </div>
</form>

</div>
    `;
    return rep1;
}



function listerJSON(listeFilms){
	dossier="../pochettes/";
	rep="<table border=1>";
	rep+="<caption>Liste des films</caption>";
	rep+="<tr><th>NUMERO</th><th>TITRE</th><th>REALISATEUR</th><th>POCHETTE</th></tr>";
	var taille=listeFilms.length;
	for(i=0;i<taille;i++){
		ligne=listeFilms[i];
		rep+="<tr><td>"+(ligne.num)+"</td><td>"+(ligne.titre)+"</td><td>"+(ligne.res)+"</td><td><img src='pochettes/"+(ligne.pochette)+"' width=80 height=80></td></tr>";		 
	}
	rep+="</table>";
	$('#contenu').html(rep);			
}


function date_actuel(){
    // alert('fechaactual');
        var fecha = new Date(); //Fecha actual
        var fechafin = new Date(); //Fecha actual
        fechafin.setMonth(fecha.getMonth() + 3);
        var mes = fecha.getMonth(); //obteniendo mes
        var mesfin = fechafin.getMonth();
        var dia = fecha.getDate(); //obteniendo dia
        var ano = fecha.getFullYear(); //obteniendo año
        var anofin = fechafin.getFullYear();
        if (dia < 10)
            dia = '0' + dia; //agrega cero si el menor de 10
        if (mes < 10)
            mes = '0' + mes; //agrega cero si el menor de 10
        if (mesfin < 10)
            mesfin = '0' + mesfin;
    document.getElementById('datInsFournisseur').value = ano +"-"+mes+"-"+ dia;
    document.getElementById('datEcheFournisseur').value = anofin +"-"+mesfin+"-"+ dia;
}


function montreFournisseur(fiche){
    // alert("montreFournisseur");
    // $('#divprincipal').html(formFournisseur());
    // $('#num').val(fiche.num);
    $('#idAdrFournisseur').val(fiche.idAdrFournisseur);
    $('#nomFournisseur').val(fiche.nomFournisseur);
    $('#cellFournisseur').val(fiche.cellFournisseur);
    $('#typeSerFournisseur').val(fiche.typeSerFournisseur);
    $('#idForfaitFournisseur').val(fiche.idForfaitFournisseur);
    $('#datInsFournisseur').val(fiche.datInsFournisseur);
    $('#datEcheFournisseur').val(fiche.datEcheFournisseur);
    $('#nroAdr').val(fiche.nroAdr);
    $('#rueAdr').val(fiche.rueAdr); 
    $('#desVilAdr').val(fiche.desVilAdr); 
    $('#codPosAdr').val(fiche.codPosAdr);

    // $('#statuFournisseur').val(fiche.statuFournisseur);
    // $('#longFournisseur').val(fiche.num);
    // $('#latiFournisseur').val(fiche.num);

    
}

function montreFournisseurN(fiche){
    // alert("montreFournisseur");
    $('#divprincipal').html(formFournisseur('N'));
    date_actuel();

}
 
function montreetoile(NroEtoile,total)
{   var cadena = "";
    var Nro=Math.floor(NroEtoile);
    var decimal = NroEtoile - Nro;
    if (Nro>0){
        for (var i=0; i < Nro; i++ ){
            cadena += "<li class=\"list-inline-item mr-0\"><i class=\"fas fa-star amber-text text-warning\"></i></li>"; 
        }
        if (decimal >= 0.5){
            cadena += "<li class=\"list-inline-item mr-0\"><i class=\"fas fa-star-half-alt amber-text text-warning\"></i> </li>";
        } else {
            // cadena += "<li class=\"list-inline-item\"><i class=\"fas fa-star-half-alt amber-text text-warning\"></i> </li>";
            cadena += "<li class=\"list-inline-item mr-0\"><i class=\"fas fa-star text-warning\"></i></li>";
        }
    } else {
       Nro = -1;  
    }
   
    //etoile vide
    for (var j = Nro + 1; j< 5; j++){
        cadena += "<li class=\"list-inline-item mr-0\"><i class=\"far fa-star text-warning\"></i></li>";
    }
    cadena += "<li class=\"list-inline-item\"> <p class=\"text-muted\">"+NroEtoile+" ("+total+")</p> </li>";

    // <li class="list-inline-item mr-0"><i
    //     class="fas fa-star amber-text text-warning"></i>
    // </li>
    // <li class="list-inline-item mr-0"><i
    //     class="fas fa-star amber-text text-warning"></i>
    // </li>
    // <li class="list-inline-item mr-0"><i
    //     class="fas fa-star amber-text text-warning"></i>
    // </li>
    // <li class="list-inline-item mr-0"><i
    //     class="fas fa-star amber-text text-warning"></i>
    // </li>
    // <li class="list-inline-item"><i
    //     class="fas fa-star-half-alt amber-text text-warning"></i>
    // </li>
    // <li class="list-inline-item">
    //     <p class="text-muted">4.5 (413)</p>
    // </li>
   return cadena
}

function elimineModal(){
  
    $('#FormService').modal('hide');
    // $('#FormService').removeClass('show'); 
    $('#FormService').modal('toggle');
    $('.modal-backdrop').remove();
}

function montreFormService(TypeTrasaction){
    rep1 = /*html*/`
    <form id="AddServiceFuornisseur" >
    <div class="form-group row">
        <label for="titreService" class="col-sm-4 col-form-label">Titre
            Service</label>

        <div class="col-sm-8">
            <input type="text" class="form-control" id="titreService"
                name="titreService" title="Titre Service" required>
            <input type="hidden" class="form-control" id="idService"
                name="idService">    
        </div>
    </div>
    <div class="form-group row">
        <label for="desShortService" class="col-sm-4 col-form-label">Description
            courte</label>
        <div class="col-sm-8">
            <input type="text" class="form-control" id="desShortService"
                name="desShortService" title="Description courte" required>
        </div>
    </div>
    <div class="form-group row">
        <label for="desService"
            class="col-sm-4 col-form-label">Déscription</label>
        <div class="col-sm-8">
            <textarea class="form-control" id="desService" name="desService"
                rows="3" title="Déscription du Service" required></textarea>
        </div>
    </div>
    <div class="form-group row">
        <div class="col-sm-4">
            <label for="">Catégorie</label>
        </div>
        <div class="col-sm-8">
            <select id="idCategorie" name="idCategorie" class="form-control" onchange="ImageArray(this.value,'X')"
                required>
                <option value="">Sélectionnez une option</option>
                <option value="1">Autos</option>
                <option value="2">Sante</option>
                <option value="3">Gastronomie</option>
                <option value="4">Beauté</option>
                <option value="5">Produits</option>
                <option value="6">Voyages</option>
                <option value="7">Maison</option>
                <option value="8">Education</option>
                <option  selected  value="9">Services</option>
            </select>
        </div>
    </div>
    <div class="form-group row">
        <label for="prixService" class="col-sm-4 col-form-label">Prix
            Service</label>
        <div class="col-sm-8">
            <input type="number" class="form-control" 
                id="prixService" name="prixService" step="0.1"
                title="Prix Service" required>
        </div>
    </div>
    <div class="form-group row">
        <label for="promService" class="col-sm-4 col-form-label">Prix
            Promotion</label>
        <div class="col-sm-8">
            <input type="number" class="form-control" 
                id="promService" name="promService" step="0.1"
                title="Prix Promotion" required>
        </div>
    </div>
    <div class="form-group row">
        <label for="refeService" class="col-sm-4 col-form-label">Prix Référe</label>
        <div class="col-sm-8">
            <input type="number" class="form-control" 
                id="refeService" name="refeService" step="0.1"
                title="Prix Référe" required>
        </div>
    </div>
    
    <div class="form-group row">
        <label for="refeEfeService" class="col-sm-4 col-form-label">Nombre de références</label>
        <div class="col-sm-8">
            <input type="number" class="form-control" 
                id="refeEfeService" name="refeEfeService" step="1"
                title="Nombre de références" required>
        </div>
    </div>
    <div class="form-group row">
        <label for="datLimService" class="col-sm-4 col-form-label">Date
            limite</label>
        <div class="col-sm-8">
            <input type="date" class="form-control" id="datLimService"
                name="datLimService" title="Date limite" required>
        </div>
    </div>
    <div class="form-group row">
        <label class="col-sm-4 col-form-label">Image</label>
        <div class="col-sm-8 p-3" id="div-images">
            <!--imagenes-->
        </div>
    </div>
     <div class="form-check row">
        <input hiden class="form-check-input" type="checkbox" value="1" id="actService"
            name="actService">
        <label hiden class="form-check-label" for="actService">
            Service active
        </label>
    </div>
    <div class="modal-footer d-flex justify-content-center">`;
      if (TypeTrasaction === 'M'){
        rep1 += /*html*/`<button type="button" class="btn btn-primary" data-dismiss="modal" onclick="requetesFour('ModifierService'); elimineModal()">Modifier</button> `;
      } else{
         rep1 += /*html*/` <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="requetesFour('EnregistrerService'); elimineModal()">Enregistrer</button> `;
      }
        rep1+= /*html*/`  

    </div>
    </form>`;
return rep1;

}




function formServicesFour_modal(fiche){
    for(var j=0; j < fiche.length; j++){
        ligne = fiche[j];
    }
     var rep1 = /*html*/ `
    <!-- Div forfait Services-->
    <div class="row"> 
    <div class="col-lg-9">
        <div>
            <button type="button" class="btn btn-primary font-weight-bold shadow" onclick="requetesFour('FourAccueil');">Services</button>
            <button type="button" class="btn btn-primary font-weight-bold shadow" data-toggle="modal"
                data-target="#FormService" onClick="requetesFour('ServiceBlank')" >Nouveau Service</button>
            <button type="button" class="btn btn-primary font-weight-bold shadow" data-toggle="modal"
                data-target="#FormFourniseur" onClick="requetesFour('Ficher_Fournisseur');">Profil Fourniseur</button>
            <button type="button" class="btn btn-primary font-weight-bold shadow" onclick="requetesFour('FourCommand');">Commandes</button>    
            <button type="button" class="btn btn-primary font-weight-bold shadow" onclick="requetesFour('HistoireFact');">Histoire Facturation</button>    
        </div>
        <div class="row mt-2" id="divfour">
            <!-- Card Service du Fournisseur -->
            `;
            
            if (fiche[0].idService !== "" ) {
                var i;
                
                for(var i=0; i < fiche.length; i++){
                ligne = fiche[i];

                rep1+=  /*html*/ ` 
                <!-- Card -->
                <div class="col-lg-4 col-sm-6 mb-2">
                <div class="card booking-card shadow" id="card-services">

                        <!-- Card image -->
                        <div class="view overlay">
                            <img class="card-img-top" src="pochettes/` + ligne.pochetteService + `" alt="Card image cap">
                            <a href="#!">
                                <div class="mask rgba-white-slight"></div>
                            </a>
                        </div>

                        <!-- Card content -->
                        <div class="card-body">

                            <!-- Text -->
                            <p class="card-text"> ` + ligne.titreService + /*html*/ ` </p>
                            <ul class="list-unstyled list-inline rating mb-0"> `+ montreetoile(ligne.Quality,ligne.kcount)+/*html*/`
                            </ul>
                            <!-- <hr> -->
                            <ul class="list-unstyled list-inline mb-0">
                                <li class="list-inline-item">
                                    <p class="card-text small text-muted pt-1">`+ligne.datLimService+/*html*/`</p>
                                </li>
                                <li class="list-inline-item">
                                    <button type="button" class="btn btn-danger" data-toggle="modal"
                                        data-target="#FormService"><i class="fas fa-pencil-alt" 
                                        onclick="ModalRequetesSer(\'`+ligne.idService+`\')" ></i></button>
                                </li>

                            </ul>


                        </div>

                    </div> 
                    <!-- Card -->
                </div>
                    `;
                }
            }

            rep1+=  /*html*/`
           
        </div>
    </div>
    <!-- Div forfait Logo et Graphique -->
  
    <div class="col-lg-3 bg-light">
    <h4>Votre forfait:</h4>
    <div class="card booking-card shadow" id="imgForfait">

        <!-- Card image -->
        <div class="view overlay">`;
        
        if (ligne.idForfaitFournisseur == "1"){
            rep1+=`<img class="card-img-top" src="images/basebv.png" alt="Card image cap">`;
        }else{
            rep1+=`<img class="card-img-top" src="images/standardbv.png" alt="Card image cap">`;
        }

         rep1+= /*html*/`   <a href="#!">
                <div class="mask rgba-white-slight"></div>
            </a>
        </div>

        <!-- Card content -->
        <div id="graphique" class="card-body">
            <!-- Title -->`;
            if (ligne.idForfaitFournisseur =="1"){
            rep1+= /*html*/`   <h5 class="card-title font-weight-bold"><a>BASE BITVOIX</a></h5>`;
            }else{
                rep1+= /*html*/`   <h5 class="card-title font-weight-bold"><a>STANDARD BITVOIX</a></h5>`;
            }
          
            rep1+= /*html*/` <p class="card-text">Date d'échéance : `+ligne.datEcheFournisseur+`</p>`;
           
            rep1+= /*html*/`</div>

    </div>
    <button type="button" class="btn btn-primary font-weight-bold shadow mt-2" data-toggle="modal" data-target=".bd-example-modal-xl">Changer mon forfait</button>
   <div id="Paye"></div>
    <div  class="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header bg-primary py-4 shadow">
                    <img src="images/logo.png" alt="">
                    <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
                        <span class="text-white" aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <h3>Forfaits <b>les plus populaires</b></h3>
                    <p>Nos clients ont aimé ces forfaits. Choisissez le vôtre!</p>
                    <div class="card-deck">
                        <div class="card shadow card-forfait">
                            <img src="images/basebv.png" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title"><b>BASE</b> BITVOIX</h5>
                                <p class="card-text">Trois (3) services ou produits <b>GRATUITS</b></p>
                                <p class="card-text">Durée de trois (3) mois</p>
                                <p class="card-text">Publiez votre annonce sur la page la plus visitée et captez un maximum d'attention</p>
                                <p class="card-text font-weight-bold">0.00$</p>
                                <button type="button" class="btn btn-primary font-weight-bold shadow disabled">Gratuit</button>
                            </div>
                        </div>
                        <div class="card shadow card-forfait">
                            <img src="images/standardbv.png" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title"><b>STANDARD</b> BITVOIX</h5>
                                <p class="card-text">Services ou produits <b>ILLIMITÉS</b></p>
                                <p class="card-text">Durée de 1 an</p>
                                <p class="card-text">Publiez votre annonce sur la page la plus visitée et captez un maximum d'attention</p>
                                <p class="card-text font-weight-bold">9.99$</p>
                                <div id="paypal-button-container"></div>
                                <script src="js/paypal.js"></script>
                            </div>
                        </div>
                        <div class="card shadow card-forfait">
                            <img src="images/premiumbv.png" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title"><b>PREMIUM</b> BITVOIX</h5>
                                <p class="card-text">Services ou produits <b>ILLIMITÉS</b></p>
                                <p class="card-text">Durée de 1 an</p>
                                <p class="card-text">Administration de agenda et <br>marketing</p>
                                <p class="card-text font-weight-bold">29.99$</p>
                                <button type="button" class="btn btn-primary font-weight-bold shadow disabled"><i class="fab fa-paypal"></i> PayPal</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
 

    <!-- Graphique Marketing -->

    <div class="card booking-card shadow mt-2" data-toggle="modal" data-target=".graphMarketingModal" id="card-graphmrketing">

        <!-- Card image -->
        <div class="view overlay">
            <img class="card-img-top" src="images/graphiquemarketing.jpg" alt="Card image cap">
            <a href="#!">
                <div class="mask rgba-white-slight"></div>
            </a>
        </div>

        <!-- Card content -->
        <div id="graphique" class="card-body">

            <!-- Title -->
            <h5 class="card-title font-weight-bold"><a>Graphique Marketing</a></h5>

        </div>

    </div>
    

    <div class="modal fade graphMarketingModal" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header bg-primary py-4 shadow">
                    <img src="images/logo.png" alt="">
                    <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
                        <span class="text-white" aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <h3>Graphique <b>Marketing</b></h3>
                    <div id="tableau_analytique">Ici la graphique</div>
                
                </div>
            </div>
        </div>
    </div>
    </div>

    <!-- Fin Graphique Marketing -->

    </div>

    <!-- <div id="tableau_analytique" class="col-lg-4 bg-light"></div> -->
    <!-- Modal Profil -->

    <div class="modal fade" id="FormFourniseur" tabindex="-1" role="dialog"
        aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header bg-primary py-4 shadow">
                    <img src="images/logo.png" alt="">
                    <button type="button" class="close text-white" data-dismiss="modal"
                        aria-label="Close">
                        <span class="text-white" aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">`;
                /**************      Include form du Fournisser  *************/
                rep1+= formFournisseur('M');
                rep1+=  /*html*/ `
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Service -->
    <div class="modal fade" id="FormService" tabindex="-1" role="dialog"
        aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header bg-primary py-4 shadow">
                    <img src="images/logo.png" alt="">
                    <button type="button" class="close text-white" data-dismiss="modal"
                        aria-label="Close">
                        <span class="text-white" aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="container" id="NewService">
                    <!-- Form Service-->
                    `+montreFormService('M')+ /*html*/`
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    return  rep1;
}


function montreServicesFour(fiche){
    // var Myjson = JSON.stringify(donneFuornisseur).length;
    // alert( "Hola"+myJSON);

    // alert("Montre  les Services pour Fournisseur");
    $('#divprincipal').html(formServicesFour_modal(fiche));
    disegne();
}


function montreGetServicesFour(donnees){
    $('#idAdrFournisseur').val(donnees.idAdrFournisseur);
    $('#idService').val(donnees.idService);
    $('#idFournisseur').val(donnees.idFournisseur);
    $('#titreService').val(donnees.titreService);
    $('#desShortService').val(donnees.desShortService);
    $('#desService').val(donnees.desService);
    $('#idCategorie').val(donnees.idCategorie);
    $('#actService').val(donnees.actService);
    $('#prixService').val(donnees.prixService);
    $('#promService').val(donnees.promService);
    $('#refeService').val(donnees.refeService);
    $('#refeEfeService').val(donnees.refeEfeService);
    $('#datLimService').val(donnees.datLimService);
    $('#pochetteService').val(donnees.pochetteService);
    $('#autService').val(donnees.autService);
    $('#div-images').html(ImageArray(donnees.idCategorie,donnees.pochetteService));
}

function vueServiceBlank(){
    // alert("Nuevo");
    $('#NewService').html(montreFormService('N'));
    $('#idAdrFournisseur').val('');
    $('#idService').val('');
    $('#idFournisseur').val('');
    $('#titreService').val('');
    $('#desShortService').val('');
    $('#desService').val('');
    $('#idCategorie').val('0.0');
    $('#actService').val('0');;
    $('#prixService').val('0.0');
    $('#promService').val('0.0');
    $('#refeService').val('0.0');
    $('#refeEfeService').val('0');
    $('#datLimService').val('');
    $('#pochetteService').val('');
    $('#autService').val('');
    $('#div-images').html(ImageArray(donnees.idCategorie,donnees.pochetteService));
}



function voirHistoireFact(listeFac) {
    
	var taille = listeFac.length;
	rep = /*html*/ `
	<h3>Factures</h3>
	<table class="table table-hover">
		<thead class="bg-primary text-white shadow">
			<tr>
				<th scope="col">ID</th>
				<th scope="col">Fournisseur</th>
				<th scope="col">Forfait</th>
				<th scope="col">Date</th>
				<th scope="col"># PayPal</th>
				<th scope="col">Prix</th>
				<th scope="col">Voir facture</th>
			</tr>
		</thead>
		<tbody>`
			for (i = 0; i < taille; i++) {
				ligne = listeFac[i];
				rep += /*html*/ `
			<tr>
				<th scope="row">` + (ligne.idFacture) + `</th>
				<td>` + (ligne.nomFournisseur) + `</td>`
				var forfait = "";
				var forfait = parseInt(ligne.idForfaitFacture);
				switch (forfait) {
					case 1:
						forfait = "Base";
						break;
					case 2:
						forfait = "Stantard";
						break;
					case 3:
						forfait = "Premium";
						break;
				}
				rep += `<td>` + forfait + `</td>
				<td>` + (ligne.dateInsFacture) + `</td>
				<td>` + (ligne.nomRefFacture) + `</td>
				<td>11,48$</td>
				<td>
					<button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#modalFacture` + (ligne.idFacture) + `" title="Voir facture"><i class="fas fa-eye"></i></button>
				</td>
			</tr>
			<div class="modal fade bd-qw-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
				aria-hidden="true" id="modalFacture` + (ligne.idFacture) + `">
				<div class="modal-dialog modal-xl">
					<div class="modal-content">
						<div class="modal-header bg-primary py-4 shadow">
							<!-- Logo bitvoix -->

							<img src="images/logo.png" alt="">

							<button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
								<span class="text-white" aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
							<div class="container my-2 text-left">
								<div class="card">
									<div class="card-header">
										Facture No.
										<strong> ` + (ligne.idFacture) + `</strong>
										<span class="float-right"> <strong>Date:</strong> ` + (ligne.dateInsFacture) + `</span>
									</div>
									<div class="card-body">
										<div class="row mb-4">
											<div class="col-sm-6">
												<h6 class="mb-3">Facturé à:</h6>
												<div><strong>` + (ligne.nomFournisseur) + `</strong></div>
												<div>` + (ligne.nroAdr) + ` ` + (ligne.rueAdr) + `</div>
												<div>` + (ligne.desVilAdr) + `, ` + (ligne.codPosAdr) + `</div>
												<div>Courriel : ` + (ligne.courrielMembre) + `</div>
												<div>Téléphone : ` + (ligne.cellFournisseur) + `</div>
											</div>
											<div class="col-sm-6">
												<h6 class="mb-3">Ref. PayPal : <b>`+(ligne.nomRefFacture)+`</b></h6>
												<div><strong>BitVoix</strong></div>
												<div>9155 Rue Saint-Hubert</div>
												<div>Montréal, H2M1Y8</div>
												<div>Courriel : info@bitvoix.com</div>
												<div>Téléphone : 5144310342</div>
											</div>
										</div>
										<hr>
										<div class="row">
											<div class="col-sm-1">
												<div class="font-weight-bold">#</div>
												<hr>
												<div>1</div>
											</div>
											<div class="col-sm-2">
												<div class="font-weight-bold">Item</div>
												<hr>
												<div>Standard BitVoix</div>
											</div>
											<div class="col-sm-5">
												<div class="font-weight-bold">Description</div>
												<hr>
												<div>Services ou produits ILLIMITÉS - Durée de 1 an</div>
											</div>
											<div class="col-sm-2">
												<div class="font-weight-bold">Unit Cost</div>
												<hr>
												<div>$9,99</div>
											</div>
											<div class="col-sm-1">
												<div class="font-weight-bold">Qty</div>
												<hr>
												<div>1</div>
											</div>
											<div class="col-sm-1">
												<div class="font-weight-bold">Total</div>
												<hr>
												<div>$9,99</div>
											</div>
										</div><br>
										<div class="row">
											<div class="col-lg-4 col-sm-5">
											</div>
											<div class="col-lg-4 col-sm-5 ml-auto">
												<div class="row">
													<div class="col-sm-9">
														<div class="font-weight-bold">Sous-total</div>
														<hr>
														<div class="font-weight-bold">TPS (5%)</div>
														<hr>
														<div class="font-weight-bold">TVQ (9,975%)</div>
														<hr>
														<div class="font-weight-bold">Total</div>
													</div>
													<div class="col-sm-3">
														<div>$9,99</div>
														<hr>
														<div>$0,49</div>
														<hr>
														<div>$0,99</div>
														<hr>
														<div class="font-weight-bold">$11,48</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
    			</div>
			</div>
			`
				}
			
			rep+= `
		</tbody>
	</table>
	
	`;
 
    $('#divfour').html(rep);
}


var vueFournisseur=function(action,donnees){
	switch(action){
		case 'enregistrerFour':
			$('#message').html(donnees);
			setTimeout(function(){ $('#message').html(""); }, 3000);
		break;
		case 'enregistrerJSON':
		case 'enleverJSON' :
		case 'ficheJSON' :
		case 'modifierJSON':
			$('#message').html(donnees.msg);
            setTimeout(function(){ $('#message').html(""); }, 3000);
            
		break;
		case 'enregistrerXML':
			var msg=donnees.getElementsByTagName('msg')[0].firstChild.nodeValue;
			$('#message').html(msg);
			setTimeout(function(){ $('#message').html(""); }, 3000);
		break;
		case 'listerJSON':
			listerJSON(donnees);
        break;
		case 'montreFournisseur':
              montreFournisseur(donnees);
        break;
        case 'montreFournisseurN':
              montreFournisseurN(donnees);
        break;
        case 'montreServicesFour':
              montreServicesFour(donnees)
        break;
        case 'ModalFournisseur':
              ModalFournisseur(donnees);
        break;
        case 'montreGetServicesFour':
              montreGetServicesFour(donnees);
        break;
        case 'vueServiceBlank':
              vueServiceBlank();
        break; 
        case 'commmandesFour':
              commmandesFour(donnees);     
        break;
        case 'voirHistoireFact':
              voirHistoireFact(donnees);
        break;
	}
	
}
