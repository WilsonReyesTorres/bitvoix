// Render Google Sign-in button
function renderButton() {
    gapi.signin2.render('gSignIn', {
        'scope': 'profile email',
        'width': 240,
        'height': 50,
        'longtitle': false,
        'theme': 'dark',
        'onsuccess': onSuccess,
        'onfailure': onFailure
    });
}


// Sign-in success callback
function onSuccess(googleUser) {
    // Get the Google profile data (basic)
    // var profile = googleUser.getBasicProfile();

    // Retrieve the Google account data
    gapi.client.load('oauth2', 'v2', function () {
        var request = gapi.client.oauth2.userinfo.get({
            'userId': 'me'
        });
        request.execute(function (resp) {
            // Display the user details
            var profileHTML = 'Bonjour ' + resp.given_name +
                '! <a href="javascript:void(0);" onclick="signOut();">Sign out</a>';
            document.getElementById("loginDiv").innerHTML = profileHTML;

            document.getElementById("gSignIn").style.display = "none";
            //document.getElementsByClassName("userContent")[0].style.display = "block";
            //Save user data
            saveUserData(resp);
        });
    });
}

// Sign-in failure callback
function onFailure(error) {
    alert(error);
}
// Save user data to the database
function saveUserData(userData) {
    $.post('serveur/userData.php', {
        oauth_provider: 'google',
        userData: JSON.stringify(userData)
    });
}
// Sign out the user
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        document.getElementById("loginDiv").innerHTML = '<a class="nav-link" href="#" data-toggle="modal" data-target="#modalLRForm">Se Connecter<span class="sr-only">(current)</span></a>';
        document.getElementById("loginDiv").style.display = "block";
        document.getElementById("gSignIn").style.display = "block";
    });

    auth2.disconnect();
}