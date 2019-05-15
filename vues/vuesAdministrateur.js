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
				<a class="nav-link" data-toggle="tab" href="#tab-vuerequetes" onClick="requetesAdm('listerMembres');">Membres</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" data-toggle="tab" href="#tab-vuerequetes" onClick="requetesAdm('listerServices');">Services</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" data-toggle="tab" href="#tab-vuerequetes" onClick="requetesAdm('listerFactures');">Factures</a>
			</li>
		</ul>
		<div class="tab-content">
			<div id="tab-vuerequetes" class="container tab-pane active mt-2">
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
							<td>` + (ligne.nomFournisseur) + `</td>
							<td>` + (ligne.titreService) + `</td>
							<td>` + (ligne.desCategorie) + `</td>
							<td>` + (ligne.prixService) + `</td>
							<td>
								<button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#modalAutorisation` + (ligne.idService) + `"><i class="fas fa-eye"></i></button>
								<button type="button" class="btn btn-danger btn-sm" onClick="autorisationSer('` + (ligne.idService) + `');"><i class="fas fa-check" title="Autorizer"></i></button>
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

function listerJSONSer(listeSer) {
    
	var taille = listeSer.length;
	rep = /*html*/ `
	<h3>Services autorisés</h3>
	<table class="table table-hover">
		<thead class="bg-primary text-white shadow">
			<tr>
				<th scope="col">ID</th>
				<th scope="col">Fournisseur</th>
				<th scope="col">Titre</th>
				<th scope="col">Categorie</th>
				<th scope="col">Prix</th>
			</tr>
		</thead>
		<tbody>`
			for (i = 0; i < taille; i++) {
				ligne = listeSer[i];
				if (ligne.autService == 1) {
				rep += /*html*/ `
			<tr data-toggle="modal" data-target="#modalAutorisation` + (ligne.idService) + `">
				<th scope="row">` + (ligne.idService) + `</th>
				<td>` + (ligne.nomFournisseur) + `</td>
				<td>` + (ligne.titreService) + `</td>
				<td>` + (ligne.desCategorie) + `</td>
				<td>` + (ligne.prixService) + `</td>
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
	
	`
	$('#tab-vuerequetes').html(rep);
}

function listerJSONFac(listeFac) {
    
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
												<h6 class="mb-3">Ref. PayPal : <b>125R2554W</b></h6>
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
	
	`
	$('#tab-vuerequetes').html(rep);
}

function listerJSONCat(listeCat) {
    
	var taille = listeCat.length;
	rep = `
	<h3>Catégories</h3>
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
	`

	$('#tab-vuerequetes').html(rep);
}

function listerJSONMem(listeMem) {
    
	var taille = listeMem.length;
	rep = `
	<h3>Membres</h3>
	<table class="table table-hover">
		<thead class="bg-primary text-white shadow">
			<tr>
				<th scope="col">ID</th>
				<th scope="col">Nom</th>
				<th scope="col">Prénom</th>
				<th scope="col">Adresse courriel</th>
				<th scope="col">Connexion</th>
				<th scope="col">Création connexion</th>
				<th scope="col">Dernière connexion</th>
			</tr>
		</thead>
		<tbody>`
	for (i = 0; i < taille; i++) {
		ligne = listeMem[i];
		rep += `
			<tr>
				<th scope="row">` + (ligne.idMembre) + `</th>
				<td>` + (ligne.nomMembre) + `</td>
				<td>` + (ligne.preNomMembre) + `</td>
				<td>` + (ligne.courrielMembre) + `</td>
				<td>` + (ligne.oauthProviderMembre) + `</td>
				<td>` + (ligne.createdMembre) + `</td>
				<td>` + (ligne.modifiedMembre) + `</td>
			</tr>
		`
	}
	rep += /*html*/`
		</tbody>
	</table>
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
				<td>` + (ligne.nroAdr) + ` ` + (ligne.rueAdr) + `, ` + (ligne.desVilAdr) + `, ` + (ligne.codPosAdr) + `</td>`
				var forfait = "";
				var forfait = parseInt(ligne.idForfaitFournisseur);
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
		case 'listerJSONAut':
			listerJSONAut(donnees);
			break;
		case 'listerJSONSer':
			listerJSONSer(donnees);
			break;
		case 'listerJSONFac':	
			listerJSONFac(donnees);
			break;
		case 'listerJSONCat':
			listerJSONCat(donnees);
			break;
		case 'listerJSONFour':
			listerJSONFour(donnees);
			break;
		case 'listerJSONMem':
			listerJSONMem(donnees);
			break;

	}

}