<!DOCTYPE html><html>

<head>
	<meta charset="UTF-8">
	<title>Creation Account</title>
	<script src="..\ETC\Jquery.js"></script>
	<link rel="shortcut icon" href="..\ETC\Icon.ico">
	
	<style>
	   html{background-color:#bbbbbb;}
	   body{font-size:1.2em; text-align:center; font-weight:bold;}
	   input[type="radio"]{width: 15px; height: 15px; margin-top:5px;}
	</style>
	
	<script>
	
	    window.onload = function() {
		    $("*").keyup(function (e){if(e.keyCode == 13){createcheck();}});
	  	 	$('#ok').bind('click', createcheck);
			$('#cancel').bind('click', function(){window.close()});

			$('input[name=inputid]').val('<?= $_POST["inputid"] ?>');
			$('input[name=inputpass]').val('<?= $_POST["inputpass"] ?>');
			$('input[name=inputname]').val('<?= $_POST["inputname"] ?>');
			$('input[name=inputbirth]').val('<?= $_POST["inputbirth"] ?>');
	    }

	   	/////////////////////////////
	     
		function createcheck(){
			function len(id, count){if($('#input'+id).val().length<count){$('#alert').html("<br>" + id.toUpperCase()+"은/는 최소 "+count+"글자 이상입니다.<br><br>"); return true;}}
			$('#alert').css('color','red');
			
			if(len("id",3)||len("pass",3)||len("name",1)){return;}
			if($('#inputpass').val()!=$('#inputrepass').val()){$('#alert').html("<br>비밀번호가 서로 일치하지 않습니다.<br><br>"); return;}
			if($("input[name=inputgender]:checked").val()==null)	{$('#alert').html("<br>중성이라고 주장하시는건 아니죠?<br><br>"); return;}
			if($("#inputbirth").val().length<3)	{$('#alert').html("<br>생년월일을 입력해주세요.<br><br>"); return;}
			if($("#inputownerpass").val().length<1)	{$('#alert').html("<br>회원가입에 필요한 전용 비밀번호를 입력해주세요.<br><br>"); return;}

			creatform.submit();
	   	}

		/////////////////////////////
		
	</script>
</head>

<body>

	<div id="alert">
		LazRuby's World에 오신것을 환영합니다.<br>
		이용을 위한 회원가입을 부탁드립니다.<br><br>
	</div>
	
	<form name="creatform" id="creatform" method="post" action="Create.php">
		ID : <input type="text" size="17" placeholder="Plz Input ID.." autofocus id="inputid" name="inputid"><br>
		Password : <input type="password" size="17" placeholder="Plz Input Password.." id="inputpass" name="inputpass"><br>
		Re-Password : <input type="password" size="17" placeholder="Plz Input Password.." id="inputrepass"><br><br>
		
		Name : <input type="text" size="15" placeholder="Plz Input Name.." id="inputname" name="inputname"><br>
		Man : <input type="radio" value="m" name="inputgender">&nbsp;&nbsp; Female : <input type="radio" value="f" name="inputgender"><br>
		Birthday : <input type="date" id="inputbirth" name="inputbirth"><br><br>
		
		: Secret Password for Create Account :<br>
		<input type="password" id="inputownerpass" name="inputownerpass" required><br><br>
		
		<input type="hidden" value="<?=$_SERVER['REMOTE_ADDR'];?>" id="inputip" name="inputip">
	</form>
		
	<input type="button" value="완료" id="ok">&nbsp;&nbsp;<input type="button" value="취소" id="cancel">
	
	<?php if(strlen($_POST["inputid"])>=3){
	    
        $cnt = mysql_connect("localhost", "lazruby", "!wn22131967")
            or die ("서버 접속 실패.");
        mysql_select_db("lazruby", $cnt);
        
        $idcheck1 = $_POST["inputid"];
        $query = "Select count(*) as Count from lazruby.logindata where ID = '$idcheck1'";
        $idcheck2 = mysql_query($query, $cnt);
        $idcheck3 = mysql_fetch_array($idcheck2);
        if($idcheck3[Count]==1){echo "<script>alert('이미 존재하는 아이디입니다!!'); </script>"; exit;}
        
        $ipcheck1 = $_POST["inputip"];
        $query = "Select count(*) as Count from lazruby.logindata where IP = '$ipcheck1'";
        $ipcheck2 = mysql_query($query, $cnt);
        $ipcheck3 = mysql_fetch_array($ipcheck2);
        if($ipcheck3[Count]==1){echo "<script>alert('해당 IP에서는 더이상 아이디를 만들 수 없습니다!!'); </script>"; exit;}
        
        $query = "Select Pass as Password from lazruby.logindata where ID = 'Owner'";
        $ownerpass2 = mysql_query($query, $cnt);
        $ownerpass3 = mysql_fetch_array($ownerpass2);
        if($ownerpass3[Password]!=$_POST["inputownerpass"]){echo "<script>alert('가입에 필요한 비밀번호가 틀렸습니다!!'); </script>"; exit;}
              
        $savedatatemp = Array();
        $savedatatemp[0] = $_POST["inputid"];
        $savedatatemp[1] = $_POST["inputpass"];
        $savedatatemp[2] = $_POST["inputname"];      //0:ID, 1:Pass, 2:Name, 3:Gender, 4:Birth, 5:IP
        $savedatatemp[3] = $_POST["inputgender"];
        $savedatatemp[4] = $_POST["inputbirth"];
        $savedatatemp[5] = $_POST["inputip"];
        
        $query="Insert into lazruby.logindata(ID,Pass,Name,Gender,Birth,IP) values('$savedatatemp[0]', '$savedatatemp[1]', '$savedatatemp[2]', '$savedatatemp[3]', '$savedatatemp[4]', '$savedatatemp[5]')";
        mysql_query($query, $cnt);
        
        echo "<script> if(confirm('회원가입이 완료되었습니다!! 창을 닫으시겠습니까?')){window.close();} </script>";
        
        mysql_close($cnt);
	}       
    ?>
    
</body>
</html>