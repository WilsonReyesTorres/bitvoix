/*FB.getLoginStatus(function (response) {
    if (response.status === 'connected') {
        //display user data
        getFbUserData();
    }
});*/

window.fbAsyncInit = function () {
    // FB JavaScript SDK configuration and setup
    FB.init({
        appId: '408547653278594', // FB App ID
        cookie: true, // enable cookies to allow the server to access the session
        xfbml: true, // parse social plugins on this page
        version: 'v3.3' // use graph api version 2.8
    });
    FB.AppEvents.logPageView();
    // Check whether the user already logged in
};
//este codigo no estâ en el ejemplo Verifier si le usager est connecté

// Load the JavaScript SDK asynchronously
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Facebook login with JavaScript SDK
function fbLogin() {
    FB.login(function (response) {
        if (response.authResponse) {
            // Get and display the user profile data
            getFbUserData();
        } else {
            document.getElementById('status').innerHTML =
                'User cancelled login or did not fully authorize.';
        }
    }, {
        scope: 'email'
    });
}

// Fetch the user profile data from facebook
function getFbUserData() {
    FB.api('/me', {
            locale: 'en_US',
            fields: 'id,first_name,last_name,email,link,gender,locale,picture'
        },
        function (response) {
            /*document.getElementById('fbLink').setAttribute("onclick", "fbLogout()");
            document.getElementById('fbLink').innerHTML = 'Logout from Facebook';
            document.getElementById('status').innerHTML = 'Thanks for logging in, ' + response.first_name +
                '!';
            document.getElementById('userData').innerHTML = '<p><b>FB ID:</b> ' + response.id +
                '</p><p><b>Name:</b> ' + response.first_name + ' ' + response.last_name +
                '</p><p><b>Email:</b> ' + response.email + '</p><p><b>Gender:</b> ' + response.gender +
                '</p><p><b>Locale:</b> ' + response.locale + '</p><p><b>Picture:</b> <img src="' + response
                .picture.data.url + '"/></p><p><b>FB Profile:</b> <a target="_blank" href="' + response
                .link + '">click to view profile</a></p>';*/
            $('#modalLRForm').modal('hide');
            // Save user data
            saveUserData(response);
        });
}

// Logout from facebook
function fbLogout() {
    FB.logout(function () {
        document.getElementById('fbLink').setAttribute("onclick", "fbLogin()");
        document.getElementById('fbLink').innerHTML = '<img src="fblogin.png"/>';
        document.getElementById('userData').innerHTML = '';
        document.getElementById('status').innerHTML = 'You have successfully logout from Facebook.';
    });
}

// Save user data to the database
function saveUserData(membreData) {
    $.ajax({
        method: "POST",
        url: "serveur/controleurMembres.php",
        data: {
            oauthProviderMembre: "facebook",
            action: "loginOauth",
            preNomMembre: membreData.first_name,
            nomMembre: membreData.last_name,
            courrielMembre: membreData.email,
            oauthUidMembre: membreData.id
        },
        dataType: 'json',
        success: function (message) {
            vue('LoginOKJSON', message.msg);
        },
        fail: function () {
            alert("Vous avez un GROS problème");
        }
    })

}