<!DOCTYPE html><html>

<head>
	<meta charset="UTF-8">
	<title>LazRuby's World</title>
	<script src="..\ETC\Jquery.js"></script>
	<link rel= "stylesheet" type="text/css" href="Maze CSS2.css?ver=1">
	<link rel="shortcut icon" href="..\ETC\Icon.ico">
	
	<style>
		table{border:3px white solid;}
		.num{border:1px white solid; width:100px; height:40px;}
		.name{border:1px white solid; width:250px; height:40px;}
		.exp{border:1px white solid; width:900px; height:40px;}
	</style>
	<script>
		//if(sessionStorage.getItem("LoginID")==null) {location.href="http://www.lazruby.com";}
		function press(){if($("input[name=SelectedId]:checked").val()==null){alert("미로를 선택해주세요."); return;} submitform.submit();}
		function remove(){if($("input[name=SelectedId]:checked").val()==null){alert("미로를 선택해주세요."); return;} $('#removepass').attr('value',prompt("비밀번호를 입력해주세요.")); $('#removename').attr('value', '$("input[name=SelectedId]:checked").val()'); document.submitform.action='Maze.php'; submitform.submit();}
	</script>
</head>

<body oncontextmenu="return false">

	<div id="Area">
	
		<form name="submitform" id="submitform" method="post" action="MazePlay.php">
		
		<input type="hidden" name="removepass" id="removepass">
		
		<table>
			<tr>
				<td class = "num">미로 번호</td>
				<td class = "name">미로 이름</td>
				<td class = "exp">미로 설명</td>
			</tr>

			<?php
			
				$cnt = mysql_connect("localhost", "root", "!wn22131967")    
            		or die ("서버 로딩 실패.");                                     
      			mysql_select_db("lazruby", $cnt);
      			
      			if($_POST["SelectedId"]!=null)
      			{ 			
      			    $removetemp=$_POST["SelectedId"];
      			    
      			    $query = "Select MazePass from lazruby.maze where MazeId='$removetemp'";
      			    $result = mysql_query($query, $cnt);
      			    $dataload = mysql_fetch_array($result);
      			       			    
      			    if($dataload[MazePass]!=$_POST["removepass"]){echo("<script>alert('비밀번호가 틀렸습니다.'); location.href='Maze.php';</script>"); return;}
			 
      			    $query = "DELETE FROM lazruby.maze WHERE MazeId='$removetemp'";
      			    $result = mysql_query($query, $cnt);
      			}

      			$query = "Select max(MazeNum) as Count from lazruby.maze";
       			$result = mysql_query($query, $cnt);
       			$rownum = mysql_fetch_array($result);
       			       			
       			for($i=0; $i<$rownum[Count]+1; $i++)
       			{
       			    $query = "Select MazeId, MazeExplanation, MazeOpenSwitch from lazruby.maze where Mazenum=$i";
       			    $result = mysql_query($query, $cnt);
       			    $dataload = mysql_fetch_array($result);
       			    
       			    if($dataload[MazeOpenSwitch]!='공개'){continue;}
       			    
       			    ?><tr><td class="num"><?=$i?></td>
       			    <td class="name"><?=$dataload[MazeId] ?></td>
       			    <td class="exp"><?=$dataload[MazeExplanation]?>&nbsp;&nbsp;
       			    	→ <input type="radio" name="SelectedId" value="<?=$dataload[MazeId]?>"> ←
       			 	</td></tr><?php
       			}

			?>			

		</table>
			
		</form>
		
		<a href="http://www.lazruby.com/Maze/MazeMaking.html"><input type="button" size="8" value="Maze Create"></a>&nbsp;&nbsp;<input type="button" size="8" value="Maze Remove"  onclick="remove();">&nbsp;&nbsp;<input type="button" size="8" value="Start !"  onclick="press();">
	</div>
	
</body>
</html>