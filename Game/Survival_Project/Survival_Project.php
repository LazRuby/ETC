<!DOCTYPE html><html>

<head>
	<meta charset="UTF-8">
	<title>LazRuby's World</title>
	<script src="ETC\Jquery.js"></script>
	<link rel="shortcut icon" href="ETC\Icon.ico">

	<script>
		
		
		window.onload = function()
		{

			sessionStorage.setItem('LoginID', 'LazRuby');

			$('html').bind('click', gamestart);
			$('html').bind('keyup', gamestart);
			
			function gamestart()
			{
				$('div').animate({opacity:"0"},2500,function(){location.href="Survival.php"});
			}
		
			var tozero = function() {$('small').animate({opacity:"0"},700, function(){toone()});}
			var toone = function() {$('small').animate({opacity:"1"},700, function(){tozero()});}
			tozero();
		}
	</script>
	
	<style>
		@font-face{ font-family:Goyang; src:url(ETC/Goyang.ttf); }
	   	body{background-color:black; font-family:'Goyang', Goyang;}
	   
	  
	
	   div
	   {
	       width:500px;
	       height:700px;
	   
	       color:white;
	       font-size:1.1em;
	       text-align:center;
	       
	       left:0; right:0; margin-left:auto; margin-right:auto;
           top: 0; bottom:0; margin-top:5%; margin-bottom:auto;
           
           background:url("Img/Moon2.gif") no-repeat;
	   }
	   
	   h1{color:red;}
	</style>
	
</head>

<body>
	<br><br>
	<div>
		<h1>외계행성에서 살아남기</h1>
		<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
		눈을 떠보니 남아있는것은, 부셔진 파편과 광활한 초원이였다. <br><br>
		<small>Please Press Any Key for Start a Game...</small>
	</div>
</body>
</html>