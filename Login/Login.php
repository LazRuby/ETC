<!doctype html> <html>

<head>
	<meta charset="UTF-8">
	<title>LazRuby's World</title>
	<link rel= "stylesheet" type="text/css" href="Rain CSS.css?ver=1">
	<link rel="shortcut icon" href="..\ETC\Icon.ico">
</head>

<body>

	<img src="../Img/back1.jpg" id="imga" class="backimg">
	<img src="../Img/back2.jpg" id="imgb" class="backimg">
	
	<canvas id="sky"></canvas>
	
	<div id="musicslot"><audio controls autoplay loop><source src="../Sound/Our Monents Never End.mp3" type="audio/mp3"></audio></div> <br><br>

	<div id="loginslot">
		<form name="loginform" method="post" action="Login.php">
			<input type=text size="17" placeholder="Please Input ID.." autofocus name="inputid" onkeypress="JavaScript:press(this.form)"><br>
			<input type=password size="17" placeholder="Please Input Password.." name="inputpass" onkeypress="JavaScript:press(this.form)"><br>
		</form>
	</div>
	
	<img src="../Img/Login Icon.png" style="width:50px; height:50px; position:absolute; margin-top:60px" id="loginimg">
	<img src="../Img/Music Icon.png" style="width:50px; height:50px; position:absolute; margin-top:60px" id="musicimg">
	
	<script> 
		$("#loginslot").css("margin-left", window.innerWidth-152); 
		$("#musicslot").css("margin-left", window.innerWidth-300);
		$("#loginimg").css("margin-left", window.innerWidth-205);
		$("#musicimg").css("margin-left", window.innerWidth-255);
	</script>
	
	<script src="..\ETC\Jquery.js"></script>
	<script src="Rain JS.js?ver=4"></script>
	
	<script>
		$('input[name=inputid]').val('<?= $_POST["inputid"] ?>');
		$('input[name=inputpass]').val('<?= $_POST["inputpass"] ?>');	
	</script>
	
	<?php
	
	if(strlen($_POST["inputid"])>=1)
	   {

             $cnt = mysql_connect("localhost", "lazruby", "!wn22131967")
             or die ("Fail Login.");
             mysql_select_db("lazruby.savedata", $cnt);

             $id=$_POST["inputid"];
             $query = "select ID, Pass from lazruby.logindata where ID='$id'";
             $result = mysql_query($query, $cnt);
             $array = mysql_fetch_array($result);

             $loginID = $array[ID];
             $loginPass = $array[Pass];

             mysql_close($cnt);

             if(($_POST["inputid"]==$loginID)&&($_POST["inputpass"]==$loginPass))
             {
                      echo ('<script> 
                                 sessionStorage.setItem("LoginID", $("input[name=inputid]").val());
                                 location.href="http://www.lazruby.com/Main/Main.php"; 
                             </script>');}
             else{echo ('<script> alert("Please Check Your ID or Password. \n아이디와 비밀번호를 확인해주세요."); </script>');}
	   }

    ?>
    
</body>

</html>

