function openDialog(dialog) {
  document.getElementById(dialog).style.display = "block";
}

function closeDialog(dialog) {
  document.getElementById(dialog).style.display = "none";
}

window.onclick = function (event) {
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
  createOrder: function (data, actions) {
    // Configurer la transaction: Montant de la transaction
    return actions.order.create({
      purchase_units: [{
        amount: {
          value: '9.99'
        }
      }]
    });
  },
  onApprove: function (data, actions) {
    // Verifier la transaction
    return actions.order.capture().then(function (details) {
      // Afficher un message a l'acheteur
      let code_html = "<h2>data.orderID" + data.orderID + "</h2>";
      code_html += "<p>Merci " + details.payer.name.given_name + "</p>";
      code_html += "<p>Votre commande numéro " + details.id + " est bien complétée</p>";
      code_html += "<p>Un courriel confirmant votre paiement sera envoyé à " + details.payer.email_address + "</p>";
      document.getElementById('paypal-button-container').innerHTML = code_html;
      // Ajouter dans la BD la confirmation du paiement
      // ajouterInfoPaypal();
    });
  }

}).render('#paypal-button-container');

window.onload = function () {
  openDialog('myModal');
}