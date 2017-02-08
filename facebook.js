// Initialize Facebook JS SDK
window.fbAsyncInit = function () {
    FB.init({
        appId: '746459578850470',
        xfbml: true,
        version: 'v2.8'
    });
    FB.getLoginStatus(function (response) {
        if (response.status === 'connected') {
            document.getElementById('status').innerHTML = 'You are logged in.';
            document.getElementById('login').style.visibility = 'hidden';
        } else if (response.status === 'not_authorized') {
            document.getElementById('status').innerHTML = 'You are not logged in.';
        } else {
            document.getElementById('status').innerHTML = 'You are not logged into Facebook.';
        }
    });
};
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Login to Facebook with Extra Permissions
function login() {
    FB.login(function (response) {
        if (response.status === 'connected') {
            document.getElementById('status').innerHTML = 'You are logged in.';
            document.getElementById('login').style.visibility = 'hidden';
        } else if (response.status === 'not_authorized') {
            document.getElementById('status').innerHTML = 'You are not logged in.';
        } else {
            document.getElementById('status').innerHTML = 'You are not logged into Facebook.';
        }
    }, {
        scope: 'email'
    });
}

// Get Basic User Info
// TODO: Get user's friend count
function getInfo() {
    FB.api('/me/friends', 'GET', {
        fields: 'total_count'
    }, function (response) {
        document.getElementById('status').innerHTML = response.id;
    });
}

//Log User Out
function logout() {
            FB.logout(function(response) {
            });
        }