<!DOCTYPE html><html>

<head>
	<meta charset="UTF-8">
	<title>LazRuby's World</title>
	<script src="ETC\Jquery.js"></script>
	<link rel="shortcut icon" href="ETC\Icon.ico">

	<script>
		window.onload = function()
		{
			$('html').bind('click', gamestart);
			$('html').bind('keyup', gamestart);
			
			function gamestart()
			{
				$('div').animate({opacity:"0"},2500,function(){location.href="TestGame.php"});
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
           
           background:url("Img/Moon.gif") no-repeat;
	   }
	   
	   h1{color:red;}
	</style>
	
</head>

<body>
	<div style="color:red;">
		<br><br>
		<h1> 방 송 폭 팔 ! B O O M ! </h1>
		<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
		본 게임은 실행 후 10분 이내에 삭제됩니다.<br>아무런 상업적 목적도 없으며 단순한 방송 도네용입니다.<br>'F11' 키를 눌러 전체화면으로 전환하십시오.<BR>
		<small>Please Press Any Key for Start a Game...</small>
	</div>
</body>
</html>