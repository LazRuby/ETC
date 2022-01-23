<!DOCTYPE html><html>

<!--
<link rel= "stylesheet" type="text/css" href="Survival.css?ver=<?php $timestamp = date("Y-m-d-H-i-s", time(0)); echo $timestamp ?>">
	<style> @font-face{ font-family:Goyang; src:url(ETC/Goyang.ttf); } </style>
	
	<script src="Survival_Main.js?ver=<?php echo $timestamp ?>" charset="utf-8"></script>
	<script src="Survival_Item.js?ver=<?php echo $timestamp ?>" charset="utf-8"></script>
	<script src="Survival_Map.js?ver=<?php echo $timestamp ?>" charset="utf-8"></script>
	<script src="Survival_Skill.js?ver=<?php echo $timestamp ?>" charset="utf-8"></script>
	<script src="Survival_Battle.js?ver=<?php echo $timestamp ?>" charset="utf-8"></script>
	<script src="Survival_Enemy.js?ver=<?php echo $timestamp ?>" charset="utf-8"></script>
	<script src="Survival_Supporter.js?ver=<?php echo $timestamp ?>" charset="utf-8"></script>
	<script src="Survival_Action.js?ver=<?php echo $timestamp ?>" charset="utf-8"></script>
	<script src="Survival_Defence.js?ver=<?php echo $timestamp ?>" charset="utf-8"></script>
-->

<head>
	<meta charset="UTF-8">
	<title>LazRuby's World</title>
	
	<script src="ETC\Jquery.js"></script>
	<link rel="shortcut icon" href="ETC\Icon.ico">
	<link rel= "stylesheet" type="text/css" href="Survival.css">
	<style> @font-face{ font-family:Goyang; src:url(ETC/Goyang.ttf); } </style>
	
	<script src="Survival_Main.js?ver=0" charset="utf-8"></script>
	<script src="Survival_Item.js?ver=0" charset="utf-8"></script>
	<script src="Survival_Map.js?ver=0" charset="utf-8"></script>
	<script src="Survival_Skill.js?ver=0" charset="utf-8"></script>
	<script src="Survival_Battle.js?ver=0" charset="utf-8"></script>
	<script src="Survival_Enemy.js?ver=0" charset="utf-8"></script>
	<script src="Survival_Supporter.js?ver=0" charset="utf-8"></script>
	<script src="Survival_Action.js?ver=0" charset="utf-8"></script>
	<script src="Survival_Defence.js?ver=0" charset="utf-8"></script>
	
	<?php 
	
	   $fp = fopen("Survival_Story.txt","r");
	   $fr = fread($fp, filesize("Survival_Story.txt")*2);
	   fclose($fp); 
	
	   function getFileNames($directory) 
	   {
	        $results = array();
	        $handler = opendir($directory);
	    
	        while ($file = readdir($handler)) {if ($file != '.' && $file != '..' && is_dir($file) != '1') {$results[] = $file;}}
	    
	        closedir($handler);
	    
	        return $results;
	   }
	
	   //$imgname = getFileNames("/home/lazruby/html/Game/Survival_Project/Img");
	   //$chrname = getFileNames("/home/lazruby/html/Game/Survival_Project/Chr");
	   $imgname = getFileNames("Img");
	   $chrname = getFileNames("Chr");
	
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
	
	<script src="Survival_Storyload.js?ver=<?php echo $timestamp ?>" charset="utf-8"></script>
	
	<div id="main" class="bigarea">
		<div id="msgarea"></div>
		<div id="msgareacover"></div>
		<div id="actionarea"></div>
		<div id="statarea"></div>
		<div id="bagarea"></div>
	</div>	
	
	<div id="bagmenu" class="bigarea">
		<div class="bagname">캐릭터</div>
		<div id="statdetail" class="chrbutton">스테이터스</div>
		<div id="skillandeq" class="chrbutton">스킬/장비</div>
		<div style="width:6vw; height:4vh;"></div>
		
		<div class="bagname">가방</div>
		<div id="material" class="bagbutton">재료</div>
		<div id="food" class="bagbutton">음식</div>
		<div id="equipment" class="bagbutton">장비</div>
		<div id="building" class="bagbutton">건물</div>
		<div id="tool" class="bagbutton">도구</div>
	</div>
	
	<div id="storyarea" class="bigarea">
		<div id="chrarea"></div>
		<div id="textarea"></div>
		<div id="facearea"></div>
	</div>
	
	<div id="battlearea" class="bigarea">
		<div id="playerarea">
			<div id="playerimg"></div>
			<div id="playerinfo"></div>
		</div>
		<div id="enemyarea">
			<div id="enemyimg"></div>
			<div id="enemyinfo"></div>
		</div>
	</div>
	
	<div id="map" class="bigarea">
		<img src="Img/Map.png?ver=1" usemap="#001" border="0" 
		style="position:absolute; opacity:0;
		left:0; right:0; margin-left:auto; margin-right:auto; 
		top:0; bottom:0; margin-top:auto; margin-bottom:auto;">
		<map name="001" id="mapid">
			 <area shape="circle" id="고산지" coords="235,190,45" class="mapmouseover"/>
			 <area shape="circle" id="바다" coords="555,185,45" class="mapmouseover"/>
			 <area shape="circle" id="밀림" coords="405,310,45" class="mapmouseover"/>
			 <area shape="circle" id="냇가" coords="300,385,45" class="mapmouseover"/>
			 <area shape="circle" id="숲" coords="195,540,45" class="mapmouseover"/>
			 <area shape="circle" id="산" coords="610,625,45" class="mapmouseover"/>
			 <area shape="circle" id="초원" coords="245,670,45" class="mapmouseover"/>
			 <area shape="circle" id="닫기" coords="1040,55,55" class="mapmouseover"/>
		</map>
	</div>
	
	<div id="defarea" class="bigarea"></div>
	
</body>
</html>