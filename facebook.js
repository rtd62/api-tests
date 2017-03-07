window.fbAsyncInit = function() {
	FB.init({
		appId   : '746459578850470',
		xfbml   : true,
		version : 'v2.8',
		status  : true,
		cookie  : true,
		oauth   : true
	});
};

(function(d, s, id){
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {return;}
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/ja_JP/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function btnClick() {
	FB.login(function (response) {
		if (response.authResponse) {
			var body = 'Reading JS SDK documentation';
            
            FB.api('/me', function(response) {
				if (!response || response.error) {
					var read_err_text = 'Error';
					$("#name_result").text(read_err_text);
				} else {
					var read_ok_text = response.name;
					$("#name_result").text(read_ok_text);
				}
			});

			FB.api('/me/friends', function(response) {
				if (!response || response.error) {
					var read_err_text = 'Error';
					$("#read_result").text(read_err_text);
				} else {
					var read_ok_text = response.summary.total_count;
					$("#read_result").text(read_ok_text);
				}
			});
            
            FB.api('/me/posts', function(response) {
				if (!response || response.error) {
					var read_err_text = 'Error';
					$("#shares_result").text(read_err_text);
				} else {
					var read_ok_text = response.shares.count;
					$("#shares_result").text(read_ok_text);
				}
			});

		} else {
			alert('User is logged out');
		}
	}, {scope: 'public_profile,user_friends'}); 
};

// Log User Out
function logout() {
            FB.logout(function(response) {
            });
        }