<?php
include_once '../librairie/membre.php';
$rep = array();

function logout()
{
    if (session_status() !== PHP_SESSION_ACTIVE) {session_start();}
    //session_start();
    //load and initialize membre class
    $membre = new Membre();
    //remove session data
    unset($_SESSION['sessData']);
    session_unset();
    session_destroy();
    //store logout status into the ession
    $sessData['status']['type'] = 'success';
    $sessData['status']['msg'] = 'You have logout successfully from your account.';
    $_SESSION['sessData'] = $sessData;
    //redirect to the home page
    //header("Location:index.php");
    $locationLogout = 'login';
    echo $locationLogout;

}

function loginSubmit()
{
    //start session
    if (session_status() !== PHP_SESSION_ACTIVE) {session_start();}
    //session_start();
    $locationLog = "";
    //Charger et initialiser la classe membre
    $membre = new Membre();
    //vérifier si les détails de connexion sont vides
    if (!empty($_POST['courrielMembre']) && !empty($_POST['motPasseMembre'])) {
        //get membre data from membre class
        $conditions['where'] = array(
            'courrielMembre' => $_POST['courrielMembre'],
            'motPasseMembre' => sha1($_POST['motPasseMembre']),
        );
        $conditions['return_type'] = 'single';
        $membreData = $membre->getRows($conditions);
        //set membre data and status based on login credentials
        if ($membreData) {
            //Update membre
            $membreUpd = array(
                'oauthProviderMembre' => 'bitvoix',
                'oauthUidMembre' => random_int(100000000, 999999999),
            );
            $conditions['where'] = array(
                'idMembre' => $membreData['idMembre']);
            $update = $membre->update($membreUpd, $conditions);
            if ($update) {
                $sessData['membreLoggedIn'] = true;
                $sessData['membreId'] = $membreData['idMembre'];
                $sessData['oauth_provider'] = $membreData['oauthProviderMembre'];
                $sessData['status']['type'] = 'success';
                $sessData['status']['msg'] = $membreData['preNomMembre'];
            } else {
                $sessData['status']['type'] = 'error';
                $sessData['status']['msg'] = 'Il y a eu un problème avec la mise à jour, SVP essayez plus tard.';
            }

        } else {
            $sessData['status']['type'] = 'error';
            $sessData['status']['msg'] = 'Courriel ou mot de passe erronés, veuillez réessayer.';
        }
    } else {
        $sessData['status']['type'] = 'error';
        $sessData['status']['msg'] = 'Entrez le courriel et le mot de passe.';
    }
    //store login status into the session
    $_SESSION['sessData'] = $sessData;
    $reponse = array(
        'status' => ($sessData['status']['type'] == 'success') ? 'success' : 'error',
        'msg' => $sessData['status']['msg']);
    echo json_encode($reponse);
}
function loginOauth()
{
    if (session_status() !== PHP_SESSION_ACTIVE) {session_start();}
    //session_start();
    $locationEnr = "";
    $membre = new Membre();
    //Verifie si le membre existe dans la bd
    $prevCon['where'] = array('courrielMembre' => $_POST['courrielMembre']);
    $prevCon['return_type'] = 'single';
    //$prevCon['return_type'] = 'count';
    $prevMembre = $membre->getRows($prevCon);
    if ($prevMembre['idMembre'] != null) {
        //Update membre
        $membreData = array(
            'oauthProviderMembre' => $_POST['oauthProviderMembre'],
            'oauthUidMembre' => $_POST['oauthUidMembre'],
        );
        $conditions['where'] = array(
            'idMembre' => $prevMembre['idMembre']);
        $update = $membre->update($membreData, $conditions);
        if ($update) {
            $sessData['membreLoggedIn'] = true;
            $sessData['membreId'] = $prevMembre['idMembre'];
            $sessData['oauth_provider'] = $prevMembre['oauthProviderMembre'];
            $sessData['status']['type'] = 'success';
            $sessData['status']['msg'] = $prevMembre['preNomMembre'];
        } else {
            $sessData['status']['type'] = 'error';
            $sessData['status']['msg'] = 'Il y a eu un problème avec la mise à jour, SVP essayez plus tard.';
        }
    } else {

        $membreData = array(
            'preNomMembre' => $_POST['preNomMembre'],
            'nomMembre' => $_POST['nomMembre'],
            'courrielMembre' => $_POST['courrielMembre'],
            'oauthProviderMembre' => $_POST['oauthProviderMembre'],
            'oauthUidMembre' => $_POST['oauthUidMembre'],
        );

        //insert membre data in the database

        $insert = $membre->insert($membreData);
        //set status based on data insert
        if ($insert) {
            $sessData['membreLoggedIn'] = true;
            $sessData['membreId'] = $insert;
            $sessData['oauth_provider'] = $membreData['oauthProviderMembre'];
            $sessData['status']['type'] = 'success';
            $sessData['status']['msg'] = $membreData['preNomMembre'];
        } else {
            $sessData['status']['type'] = 'error';
            $sessData['status']['msg'] = 'Il y a eu un problème, SVP essayez plus tard.';
        }
    }

    //store signup status into the session
    $_SESSION['sessData'] = $sessData;
//echo '<script>alert('.$sessData['status']['msg'].');</script>';
    //On va essayer avec celle-ci
    $reponse = array(
        'status' => ($sessData['status']['type'] == 'success') ? 'success' : 'error',
        'msg' => $sessData['status']['msg']);
    echo json_encode($reponse);
}

function validerLogin()
{
    //start session
    if (session_status() !== PHP_SESSION_ACTIVE) {session_start();}
    //session_start();
    $sessData = !empty($_SESSION['sessData']) ? $_SESSION['sessData'] : '';
    if (!empty($sessData['status']['msg'])) {
        $statusMsg = $sessData['status']['msg'];
        $statusMsgType = $sessData['status']['type'];
        $reponse = array(
            'status' => ($sessData['status']['type'] == 'success') ? 'success' : 'error',
            'msg' => $sessData['status']['msg']);
        //unset($_SESSION['sessData']['status']);
    } else {
        $reponse = array(
            'status' => 'nonLogin',
            'msg' => '');

    }
    echo json_encode($reponse);
}
function membreUpdate()
{
    if (session_status() !== PHP_SESSION_ACTIVE) {session_start();}
    //var_dump($_SESSION['sessData'] ["membreId"]);
    $membre = new Membre();
    $membreData = array(
        'nomMembre' => $_POST['nomMembre'],
        'preNomMembre' => $_POST['preNomMembre'],
    );
    $conditions['where'] = array(
        'idMembre' => $_POST['idMembre']);
    $update = $membre->update($membreData, $conditions);
    if ($update) {
        $_SESSION['sessData']['membreLoggedIn'] = true;
        $_SESSION['sessData']["membreId"] = $_POST['idMembre'];
        $_SESSION['sessData']['status']['type'] = 'success';
        $_SESSION['sessData']['status']['msg'] = $_POST['preNomMembre'];
    } else {
        $sessData['status']['type'] = 'error';
        $sessData['status']['msg'] = 'Il y a eu un problème avec la mise à jour, SVP essayez plus tard.';
    }
    //store signup status into the session
    $_SESSION['sessData'] = $sessData;
    $reponse = array(
        'status' => ($sessData['status']['type'] == 'success') ? 'success' : 'error',
        'msg' => $sessData['status']['msg']);
    echo json_encode($reponse);
}
function chercheUser()
{
    if (session_status() !== PHP_SESSION_ACTIVE) {session_start();}
    //var_dump($_SESSION['sessData'] ["membreId"]);
    $membre = new Membre();
    $prevCon['where'] = array('idMembre' => $_SESSION['sessData']["membreId"]);
    $prevCon['return_type'] = 'single';
    $membreAct = $membre->getRows($prevCon);
    echo json_encode($membreAct);
}
function listerMembres()
{
    if (session_status() !== PHP_SESSION_ACTIVE) {session_start();}
    //var_dump($_SESSION['sessData'] ["membreId"]);
    $membre = new Membre();
    $prevCon['return_type'] = 'all';
    $membreAct = $membre->getRows($prevCon);
    echo json_encode($membreAct);
}
function enregistrerMembre()
{
    if (session_status() !== PHP_SESSION_ACTIVE) {session_start();}
    //session_start();
    $locationEnr = "";
    $membre = new Membre();

    //valide que tous les champs du formulaire soient remplis
    if (!empty($_POST['preNomMembre']) && !empty($_POST['nomMembre']) && !empty($_POST['courrielMembre']) && !empty($_POST['motPasseMembre']) && !empty($_POST['motPasseMembreConf'])) {
        //password and confirm password comparison
        if ($_POST['motPasseMembre'] !== $_POST['motPasseMembreConf']) {
            $sessData['status']['type'] = 'error';
            $sessData['status']['msg'] = 'Les mots de passe ne correspondent pas';
        } else {
            //Verifie si le membre existe dans la bd
            $prevCon['where'] = array('courrielMembre' => $_POST['courrielMembre']);
            $prevCon['return_type'] = 'single';
            //$prevCon['return_type'] = 'count';
            $prevMembre = $membre->getRows($prevCon);
            if ($prevMembre['idMembre'] != null) {
                //Update membre
                $membreData = array(
                    'preNomMembre' => $_POST['preNomMembre'],
                    'nomMembre' => $_POST['nomMembre'],
                    'motPasseMembre' => sha1($_POST['motPasseMembre']),
                    'oauthProviderMembre' => 'bitvoix',
                    'oauthUidMembre' => random_int(100000000, 999999999),
                );
                $conditions['where'] = array(
                    'idMembre' => $prevMembre['idMembre']);
                $update = $membre->update($membreData, $conditions);
                if ($update) {
                    $sessData['status']['type'] = 'success';
                    $sessData['status']['msg'] = 'Connectez-vous avec votre courriel et mot de passe';
                } else {
                    $sessData['status']['type'] = 'error';
                    $sessData['status']['msg'] = 'Il y a eu un problème avec la mise à jour, SVP essayez plus tard.';
                }
            } else {
                //insert membre data in the database
                $membreData = array(
                    'preNomMembre' => $_POST['preNomMembre'],
                    'nomMembre' => $_POST['nomMembre'],
                    'courrielMembre' => $_POST['courrielMembre'],
                    'motPasseMembre' => sha1($_POST['motPasseMembre']),
                    'oauthProviderMembre' => 'bitvoix',
                    'oauthUidMembre' => random_int(100000000, 999999999),
                );
                $insert = $membre->insert($membreData);
                //set status based on data insert
                if ($insert) {
                    $sessData['status']['type'] = 'success';
                    $sessData['status']['msg'] = 'Connectez-vous avec votre courriel et mot de passe';
                } else {
                    $sessData['status']['type'] = 'error';
                    $sessData['status']['msg'] = 'Il y a eu un problème, SVP essayez plus tard.';
                }
            }
        }
    } else {
        $sessData['status']['type'] = 'error';
        $sessData['status']['msg'] = 'Tous les champs sont obligatoires, SVP remplisez tous le champs.';
    }
    //store signup status into the session
    $_SESSION['sessData'] = $sessData;
//echo '<script>alert('.$sessData['status']['msg'].');</script>';
    //On va essayer avec celle-ci
    $reponse = array(
        'status' => ($sessData['status']['type'] == 'success') ? 'success' : 'error',
        'msg' => $sessData['status']['msg']);
    echo json_encode($reponse);
}

//controleur membres
$action = $_POST['action'];
switch ($action) {
    case 'enregistrerMembre':
        enregistrerMembre();
        break;
    case 'loginSubmit':
        loginSubmit();
        break;
    case 'logout':
        logout();
        break;
    case 'validerLogin':
        validerLogin();
        break;
    case 'loginOauth':
        loginOauth();
        break;
    case 'chercheUser':
        chercheUser();
        break;
    case 'membreUpdate':
        membreUpdate();
        break;
    case 'listerMembres':
        listerMembres();
        break;
}
