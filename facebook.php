<html lang="en">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Facebook APIs</title>
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
</head>

<?php include("includes/nav.php"); ?>

<body>
	<script type="text/javascript" src="facebook.js"></script>

	<div id="status"></div>
	<input type="button" value="Facebook Login" onclick="btnClick()"><br>
	<ul>
        <li>Name: <span id="name_result"></span></li>
	    <li>Friend Count: <span id="read_result"></span></li>
	    <li>Shares: <span id="shares_result"></span></li>
	</ul>
	<button onclick="javascript:logout();" id="logout">Logout</button>
	
</body>
</html>