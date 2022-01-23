<!DOCTYPE html><html>

<head>
	<title>Maze World !!</title>
	<meta charset="UTF-8">
	<script src="..\ETC\Jquery.js"></script>
	<link rel= "stylesheet" type="text/css" href="Maze CSS2.css?ver=1">
	<link rel= "stylesheet" type="text/css" href="Maze CSS.css?ver=2">
	<link rel="shortcut icon" href="..\ETC\Icon.ico">
	<script>//if(sessionStorage.getItem("LoginID")==null) {location.href="http://www.lazruby.com";}</script>
	<style>
	   td{width:20px;height:15px;border:0px;} 
	   #Area{margin-left:100px; margin-top:140px;} 
	   #msgarea
	   {
	       width:330px;
	       height:200px; 
	       background-color:white; 
	       color:black; 
	       font-size:1.5em; 
	       margin-top:155px;
	       margin-left:1310px;
	       position:absolute;
	       text-align:center;
	       border:double 12px pink;
	   }
	  </style>
</head>

<body onmousedown="javascript:mousestat=1;" onmouseup="javascript:mousestat=0;" oncontextmenu="return false">

	<?php		
       $cnt = mysql_connect("localhost", "lazruby", "!wn22131967")
            or die ("서버 로딩 실패.");
       mysql_select_db("lazruby", $cnt);
       
       $loadid = $_POST["SelectedId"];
       $query = "Select * from lazruby.maze where MazeId = '$loadid';";
       $result = mysql_query($query, $cnt);
       $array = mysql_fetch_array($result);

       $MazeNum = $array[MazeNum];
       $MazeExplanation = $array[MazeExplanation];
       $MazeId = $array[MazeId];
       $MazePass = $array[MazePass];
       $MazeData = $array[MazeData];
       $MazeTime = $array[MazeTime];
       $MazeOpenSwitch = $array[MazeOpenSwitch];
           
       echo "<script>var dbcodeload='$MazeData'; var timelimit='$MazeTime';</script>";
              
       mysql_close($cnt);
    ?>
   
    <div id="msgarea"><br>제한시간안에<br>목표지점(분홍색)으로<br>탈출하세요 !!</div>
   
	<div id="Area"></div>
	
	<div class="palette" id="palette">
		<br><b>:: 게임 진행판 ::</b><br><br>
		
		<div id="name" style="font-size:1.5em; color:Red;">: <?php echo "$MazeId"?> :<br></div>
		<div id="sight"></div>
		<div id="time"></div>
		<div id="item"></div>
		<br><br><a href="Maze.php"><input type="button" value="메인으로" size="8"></a>
	</div>
	
	<script src="MazePlay JS.js?ver=16" charset="utf-8"></script>
	
</body>
</html>