
var player = 
	{
		name:sessionStorage.getItem("LoginID"),
		
		maxhp:100,
		hp:100,
		hpregen:3,
		
		maxhunger:100,
		hunger:100,
		maxthirst:100,
		thirst:100,
		
		atk:1,
		autoatk:3,
		def:5,
		range:1,
		criper:5,
		crix:1.5,
		avoid:0,
		hit:80,
		luck:10,
		
		lv:1,
		exp:0,
		money:50,
		day:1,
		img:"normal",
		maxitem:20,
		
		img:"주인공"
	}

var chrlovelv =
	{
		reimu:0,
		marisa:0,
		alice:0
	}

var nowlocation = "초원";
var key =[];
var supporternum = 0;
var mainstory = 0;

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

//if(sessionStorage.getItem("LoginID")==null) {location.href="http://www.lazruby.com";}

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
		
window.onload = function()
{	
	$('.bagbutton').bind('click', function(){view(this.id);});
	$('.chrbutton').bind('click', function(){chrview(this.id);});
	statreload();
	chrview("statdetail");
	homeview();
	additem(food, "비상 식량", 3);
	
	$('#enemyimg').bind('click', function(){ if(battleswitch){atk("player");} });
	$('html').bind('keyup', function(e){key[e.which] = true;});
	$('#mapid>*').bind('click', function(){ movemap(this.id); })
	$('#storyarea').bind('click', function(){ storystart(); })
	
	setInterval(function(){mainloop()}, 200);

	allload();
	if((player.lv==1)&&(material[0].count==0)){material[0].count += 3; mainstory++;}		// 시작 나무 3개 지원
	//defstart();
	
	//$('#imgpreloadplace').remove();
	//battlestart("실험용몬스터");
}

//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////

function allload()
{
	player.maxhp = 100 + player.lv*5;
	player.atk = player.lv;
	player.autoatk = 0;
	player.maxhunger = 100 + player.lv;
	player.maxthirst = 100 + player.lv;
	player.maxitem = 10;
	player.hpregen = 3;
	player.criper = 5;
	player.avoid = 0;
	player.hit = 80;
	
	buildingload();
	supporterload();
	skillload();
}

function statreload()
{
	$('#statarea').html("<h3>: " + player.name + " :</h3>배고픔 : <meter value=" + player.hunger + " max=" + player.maxhunger +"></meter><br>갈 증 : <meter value=" + player.thirst + " max=" + player.maxthirst +"></meter></h3>");
}

function chrview(what)
{
	$('.bagbutton').css('background','black');
	$('.chrbutton').css('background','black');
	
	if(what=="statdetail")
	{
		$('#bagarea').html("<h3>: " + player.name + " :</h3>레벨 : " + player.lv + "<br>경험치 : " + player.exp + " / " + (player.lv*4+player.lv*player.lv*2+10) + "<br>돈 : " + player.money +"<br>" + player.day + "일 경과<br><br>")
		$('#bagarea').append("배고픔 : " + player.hunger + " / " + player.maxhunger + "<br>갈증 : " + player.thirst + " / " + player.maxthirst + "<br><br>")
		$('#bagarea').append("체력 : " +player.hp + " / "+ player.maxhp + "<br>체력 재생력 : " + player.hpregen + "<br>수동 공격력 : " + player.atk + "<br>자동 공격력 : " + player.autoatk + "<br>방어력 : " + player.def + "<br>사정거리 : " + player.range + "<br>")
		$('#bagarea').append("크리티컬 확률 : " + player.criper + "<br>크리티컬 배율 : " + player.crix + "<br>회피율 : " + player.avoid + "<br>명중률 : " + player.hit + "<br>운 : " + player.luck)
	}
	
	$('#'+ what).css('background','red');
}

//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////

function msg(string,color,size)
{
	if (!color) { color = 'white'; }
	if (!size) { size = '1.1em' }
	
	$('#msgarea').prepend("<br><span style='color:"+color+"; font-size:"+size+"'>"+string+"</span><br>");
}

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

function bigareachange(what)
{
	$('#bagmenu>*').css('opacity',0); 
	
	$('.bigarea').css('opacity',0); $('.bigarea>*').css('opacity',0); 
	$('#'+what).css('opacity',1); $('#'+what+'>*').css('opacity',1);
	
	$('.bigarea').css('z-index',10); $('.bigarea>*').css('z-index',10); 
	$('#'+what).css('z-index',20); $('#'+what+'>*').css('z-index',20);
	
	if(what=="storyarea"){$('#textarea').css('z-index',21);}
	if(what=="main"){$('#bagmenu').css('opacity',1); $('#bagmenu>*').css('opacity',1);}
}

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

function statcheck(hp, hunger, thirst)
{
	if(player.hp<hp){msg("체력이 부족하여 움직일 수 없다."); return true;}
	if(player.hunger<hunger){msg("배고파서 움직일 수 없다."); return true;}		
	if(player.thirst<thirst){msg("목말라서 움직일 수 없다."); return true;}
}

//////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

function action(what)
{
	if(what=="채집"){mapsearch(nowlocation);}
	else if(what=="건설"){buildview();}
	else if(what=="생산"){createview();}
	else if(what=="성장"){supporterview();}
	else if(what=="이동"){bigareachange("map");}
	else if(what=="관찰"){mapaction("관찰");}
	else if(what=="탐색"){mapaction("탐색");}
	else if(what=="집"){homeview();}
	else {bigareachange("map");}
}

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

function materialsplit(what)
{
	var name = eval(what);
	
	need = new Array();
	
	for(var i=0; i<name.length; i++)
	{
		if(name[i].material.indexOf("@") != -1)
		{
			var temp = new Array();
			var temp2, temp3, temp4;
			
			temp = name[i].material.split('@');
		
			for(var j=0; j<temp.length; j++){temp2=temp[j].split(":"); need.push(temp2[0]); need.push(temp2[1]);}
			
			need.push("&");
		}
		else
		{
			if(what=="food"){continue;}
			
			var temp = name[i].material.split(':');
			var temp2 = temp[0];
			var temp3 = temp[1];
			
			need.push(temp2); need.push(temp3); need.push("&");
		}
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

function mainloop()
{
	if(key[13]){key[13]=false; storystart();}
	
	for(var i=0; i< supporternum+1; i++)
	{
		var ranx = Math.floor(Math.random() * 4) - 1.5;
		var rany = Math.floor(Math.random() * 4) - 1.5;
		
		try
		{
			var nowx = $('#supporter' + i).css('margin-left').split("px");
			var nowy = $('#supporter' + i).css('margin-top').split("px");
		
			$('#supporter' + i).css('margin-left', Number(nowx[0] - ranx) + "px");
			$('#supporter' + i).css('margin-top', Number(nowy[0] - rany) + "px");
		}
		catch(e){}
	}
	
	if(mainstory>=1)
	{	
		if(mainstory==1){story("메인");}
		else if((mainstory==5)&&(searchitem(building,"모닥불")>=1)){story("메인");}
		else if((mainstory==6)&&(supporter[0].lv>=3)){story("메인");}
		else if((mainstory==7)&&(nowlocation=="숲")){setTimeout(function(){story("메인")}, 10000);}
	}
}