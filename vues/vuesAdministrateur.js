function listerJSONAut(listeAut) {
    
	var taille = listeAut.length;
	rep = /*html*/ `
	<div class="container mt-3">
		<h3>Bienvenue Administrateur !</h3>
		<br>
		<!-- Nav tabs -->
		<ul class="nav nav-tabs">
			<li class="nav-item">
				<a class="nav-link active" data-toggle="tab" href="#tab-vuerequetes" onClick="requetesAdm('listerAutorisations');">Autorisations</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" data-toggle="tab" href="#tab-vuerequetes" onClick="requetesAdm('listerCategories');">Catégories</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" data-toggle="tab" href="#tab-vuerequetes" onClick="requetesAdm('listerFournisseurs');">Fournisseurs</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" data-toggle="tab" href="#tab-vuerequetes">Membres</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" data-toggle="tab" href="#tab-vuerequetes">Services</a>
			</li>
		</ul>
		<div class="tab-content">
			<div id="tab-vuerequetes" class="container tab-pane active"><br>
				<h3>Autorisations</h3>
				<table class="table table-hover">
					<thead class="bg-primary text-white shadow">
						<tr>
							<th scope="col">ID</th>
							<th scope="col">Fournisseur</th>
							<th scope="col">Titre</th>
							<th scope="col">Categorie</th>
							<th scope="col">Prix</th>
							<th scope="col">Autorisation</th>
						</tr>
					</thead>
					<tbody>`
						for (i = 0; i < taille; i++) {
							ligne = listeAut[i];
							if (ligne.autService == 0) {
							rep += /*html*/ `
						<tr>
							<th scope="row">` + (ligne.idService) + `</th>
							<td>` + (ligne.titreService) + `</td>
							<td>` + (ligne.nomFournisseur) + `</td>
							<td>` + (ligne.desCategorie) + `</td>
							<td>` + (ligne.prixService) + `</td>
							<td>
								<button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#modalAutorisation` + (ligne.idService) + `"><i class="fas fa-eye"></i></button>
								<button type="button" class="btn btn-danger btn-sm" onClick="requetesAdm('autoriserService');"><i class="fas fa-check" title="Autorizer"></i></button>
							</td>
						</tr>
						<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" id="modalAutorisation` + (ligne.idService) + `">
							<div class="modal-dialog modal-lg">
								<div class="modal-content">
									<div class="modal-header bg-primary py-4 shadow">
										<!-- Logo bitvoix -->

										<img src="images/logo.png" alt="">

										<button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
											<span class="text-white" aria-hidden="true">&times;</span>
										</button>
									</div>
									<div class="row m-3">
										<div class="col-sm-12 col-md-6 col-lg-6">
											<img src="pochettes/` + (ligne.pochetteService) + `" class="card-img-top img-thumbnail" alt="..."></br>
										</div>
										<div class="col-sm-12 col-md-6 col-lg-6">
											<h5 class="font-weight-bold"><a>` + (ligne.titreService) + `</a></h5>
											<p class="card-text small">Montréal</p>
											<p class="card-text">` + (ligne.desShortService) + `</p>
											<button class="btn btn-info font-weight-bold shadow" disabled><del>` + (ligne.prixService) + `$</del></button>
											<button class="btn btn-outline-info font-weight-bold shadow">` + (ligne.promService) + `$</button>
											<button class="btn btn-info font-weight-bold shadow">` + (ligne.refeService) + `$</button>
											<p class="card-text mt-4">Date Limite : <b>` + (ligne.datLimService) + `</b></p>
										</div>
										<div class="col-lg-12">
											<h5 class="font-weight-bold mt-2">Description</h5>
											<hr>
											<p class="card-text">` + (ligne.desService) + `</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						`
							}
						}
						rep+= `
					</tbody>
				</table>
			</div>
		</div>
	</div>
	`
	$('#divprincipal').html(rep);
}

function listerJSONCat(listeCat) {
    
	var taille = listeCat.length;
	rep = `
	<h3>Catégories</h3>
	<div class="row justify-content-md-center">
		<div class="col col-lg-4">
			<table class="table table-hover">
				<thead class="bg-primary text-white shadow">
					<tr>
						<th scope="col">ID</th>
						<th scope="col">Déscription</th>
					</tr>
				</thead>
				<tbody>`
			for (i = 0; i < taille; i++) {
				ligne = listeCat[i];
				rep += `
					<tr>
						<th scope="row">` + (ligne.idCategorie) + `</th>
						<td>` + (ligne.desCategorie) + `</td>
					</tr>
				`
			}
			rep += /*html*/`
				</tbody>
			</table>
		</div>
	</div>
	`

	$('#tab-vuerequetes').html(rep);
}

function listerJSONFour(listeFour) {
    
	var taille = listeFour.length;
	rep = /*html*/`
	<h3>Fournisseurs</h3>
	<table class="table table-hover">
		<thead class="bg-primary text-white shadow">
			<tr>
				<th scope="col">ID</th>
				<th scope="col">Nom</th>
				<th scope="col">Téléphone</th>
				<th scope="col">Adresse</th>
				<th scope="col">Forfait</th>
			</tr>
		</thead>
		<tbody>`
	for (i = 0; i < taille; i++) {
		ligne = listeFour[i];
		rep += `
			<tr>
				<th scope="row">` + (ligne.idFournisseur) + `</th>
				<td>` + (ligne.nomFournisseur) + `</td>
				<td>` + (ligne.cellFournisseur) + `</td>
				<td>` + (ligne.nroAdr) + ` ` + (ligne.rueAdr) + `, ` + (ligne.desVilAdr) + `, ` + (ligne.codPosAdr) + `</td>
				<td>` + (ligne.idForfaitFournisseur) + `</td>
			</tr>
		`
	}
	rep += /*html*/`
		</tbody>
	</table>
	`

	$('#tab-vuerequetes').html(rep);
}


var vueAdministrateur = function (action, donnees) {
	switch (action) {
		// case 'enregistrer':
		// 	$('#message').html(donnees);
		// 	setTimeout(function () {
		// 		$('#message').html("");
		// 	}, 3000);
		// 	break;
		// case 'enregistrerJSON':
		// case 'enleverJSON':
		// case 'ficheJSON':
		// case 'modifierJSON':
		// 	$('#message').html(donnees.msg);
		// 	setTimeout(function () {
		// 		$('#message').html("");
		// 	}, 3000);
		// 	break;
		// case 'enregistrerXML':
		// 	var msg = donnees.getElementsByTagName('msg')[0].firstChild.nodeValue;
		// 	$('#message').html(msg);
		// 	setTimeout(function () {
		// 		$('#message').html("");
		// 	}, 3000);
		// 	break;
		case 'listerJSONAut':
			listerJSONAut(donnees);
			break;
		case 'listerJSONCat':
			listerJSONCat(donnees);
			break;
		case 'listerJSONFour':
			listerJSONFour(donnees);
			break;
		// case 'montrerFiche':
		// 	montrerFiche(donnees);
		// 	break;

	}

}