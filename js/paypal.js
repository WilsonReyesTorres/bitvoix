 function openDialog(dialog){
    document.getElementById(dialog).style.display = "block";
  }
  
   function closeDialog(dialog){
     document.getElementById(dialog).style.display = "none";
  }
  
  window.onclick = function(event) {
     if (event.target == document.getElementById('myModal')) {
       document.getElementById('myModal').style.display = "none";
     }
  }
  
  paypal.Buttons({
    locale: 'fr_CA',
    style: {
     size: 'small',
     color: 'gold',
     shape: 'pill',
     label: 'checkout'
    },
    createOrder: function(data, actions) {
      // Configurer la transaction: Montant de la transaction
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: '11.48'
          }
        }]
      });
    },
    onApprove: function(data, actions) {
      // Verifier la transaction
      return actions.order.capture().then(function(details) {
        // Afficher un message a l'acheteur
        let code_html = "<h2>" + data.orderID + "</h2>";
        code_html += "<p>Merci " + details.payer.name.given_name + "</p>";
        code_html += "<p>Votre commande numéro " +  details.id + " est bien complétée</p>";
        code_html += "<p>Un courriel confirmant votre paiement sera envoyé à <b>" + details.payer.email_address + "</b></p>";
        document.getElementById('paypal-button-container').innerHTML = code_html;

        $.ajax({
          url: 'serveur/controleurFacture.php',
          type: 'POST',
          data:  {
              "action": 'enregistrer',
              "nomRefFacture" : data.orderID
          },
          dataType: 'json',
          success: function (donnees) {
            code_html += "Facture <b> BitVoix:</br>"+ donnees.idFacture;
            document.getElementById('paypal-button-container').innerHTML = code_html;
          },
          fail: function () {
              alert("Vous avez un GROS problème");
          }
      });

       imgLogoForfait=/*html*/`<div class="view overlay">
                        <img class="card-img-top" src="images/standardbv.png" alt="Card image cap">
                        <a href="#!">
                            <div class="mask rgba-white-slight"></div>
                        </a>
                    </div>
                    <div id="graphique" class="card-body">
                        <h5 class="card-title font-weight-bold"><a>STANDARD BITVOIX</a></h5>
                        <p class="card-text">Date d'échéance : Confirmer</p>
                    </div>`;
        $('#imgForfait').html(imgLogoForfait);
      });
    }
  
  }).render('#paypal-button-container');
  
  window.onload = function(){
    openDialog('myModal');
}
  
