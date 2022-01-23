<!DOCTYPE html><html>

<head>
	<meta charset="UTF-8">
	<title>LazRuby's World</title>
	
	<script src="ETC\Jquery.js"></script>
	<link rel="shortcut icon" href="ETC\Icon.ico">
	<link rel= "stylesheet" type="text/css" href="TestGame.css">
	<style> @font-face{ font-family:Goyang; src:url(ETC/Goyang.ttf); } </style>
	
	<script src="TestGame.js" charset="utf-8"></script>

	<?php
	   $fp = fopen("TestGame.txt","r");
	   $fr = fread($fp, filesize("TestGame.txt")*2);
	   fclose($fp); 
	
	   function getFileNames($directory) 
	   {
	        $results = array();
	        $handler = opendir($directory);
	    
	        while ($file = readdir($handler)) {if ($file != '.' && $file != '..' && is_dir($file) != '1') {$results[] = $file;}}
	    
	        closedir($handler);
	    
	        return $results;
	   }
	
	   $imgname = getFileNames("Img");
	?>
	
</head>

<body oncontextmenu="return false" ondragstart="return false" onselectstart="return false">

	<div id="textscript" style="opacity:0; position:absoulte; width:0px; height:0px;"><?= $fr?></div>
	
    <div id="imgpreloadplace" style="opacity:0; position:absoulte; width:0px; height:0px;">
		<?php 
		      for($i=0;$i<count($imgname);$i++)
		      {
		          echo ('<img src="Img/'.$imgname[$i].'" style="opacity:0; position:absoulte; width:0px; height:0px;">');
		      }
		      
		      for($i=0;$i<count($chrname);$i++)
		      {
		          echo ('<img src="Chr/'.$chrname[$i].'" style="opacity:0; position:absoulte; width:0px; height:0px;">');
		      }
		?>
	</div>
	
	<script src="TestGame.js" charset="utf-8"></script>
    
    <div id="musicslot"><audio controls autoplay loop><source src="ETC/Doki%20Doki%20Literature%20Club.mp3" type="audio/mp3"></audio></div>
	
	<div id="storyarea" class="bigarea">
		<div id="chrarea"></div>
		<div id="textarea"></div>
	</div>
	
</body>
</html>