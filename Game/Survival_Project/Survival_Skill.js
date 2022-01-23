
var passiveskill = new Array();
var activeskill = new Array();
var specialskill = new Array();

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

function passiveskillset(name){passiveskill.push({id:passiveskill.length, name:name, lv:0});}
function activeskillset(name){activeskill.push({id:activeskill.length, name:name, lv:0});}
function specialskillset(name, how, how2, how3){specialskill.push({id:specialskill.length, name:name, lv:0, per:how, firstcount:how2, nowcount:how2, dmg:how3});}

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

passiveskillset("단단한 신체");	passiveskillset("금강불괴");		passiveskillset("사냥꾼");
passiveskillset("전문사냥꾼");	passiveskillset("지식의 발견");	passiveskillset("현자의 가르침");
passiveskillset("생존 지식1");	passiveskillset("생존 지식2");	passiveskillset("효율적인 휴식");
passiveskillset("마조히스트");	passiveskillset("매의 눈");		passiveskillset("매의 발톱");
passiveskillset("손은 눈보다 빠르다");	passiveskillset("근데 네 손은 내 눈보다 느리다");		passiveskillset("초고교급 행운");

//////////////////////////////

specialskillset("몽상천생", 20, -1, 30);		specialskillset("마스터 스파크", -1, 18, 20);		// 카운트 1에 발동됨

//////////////////////////////

activeskillset("");

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

function addskill(what, how)
{	
	for(var i=0; i<passiveskill.length; i++)
	{
		if(passiveskill[i].name==what)
		{
			passiveskill[i].lv = passiveskill[i].lv + how;
			msg(passiveskill[i].name + " 스킬의 레벨이 " + how + "올랐습니다.");
			
			return;
		}
	}
	
	for(var i=0; i<activeskill.length; i++)
	{
		if(activeskill[i].name==what)
		{
			activeskill[i].lv = activeskill[i].lv + how;
			msg(activeskill[i].name + " 스킬의 레벨이 " + how + "올랐습니다.");
			
			return;
		}
	}
	
	for(var i=0; i<specialskill.length; i++)
	{
		if(specialskill[i].name==what)
		{
			specialskill[i].lv = specialskill[i].lv + how;
			msg(specialskill[i].name + " 스킬의 레벨이 " + how + "올랐습니다.");
			
			return;
		}
	}
}
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

function searchskilllv(what)
{	
	for(var i=0; i<passiveskill.length; i++)
	{
		if(passiveskill[i].name==what)
		{
			return passiveskill[i].lv;
		}
	}
	
	for(var i=0; i<activeskill.length; i++)
	{
		if(activeskill[i].name==what)
		{
			return activeskill[i].lv;
		}
	}
	
	for(var i=0; i<specialskill.length; i++)
	{
		if(specialskill[i].name==what)
		{
			return specialskill[i].lv;
		}
	}
}

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

function skillload()
{
	player.maxhp = player.maxhp + (searchskilllv("단단한 신체")*10 + searchskilllv("금강불괴")*100);
	player.atk = player.atk + (searchskilllv("사냥꾼")*10 + searchskilllv("전문사냥꾼")*100);
	player.autoatk = player.autoatk + (searchskilllv("지식의 발견")*10 + searchskilllv("현자의 가르침")*100);
	player.maxhunger = player.maxhunger + searchskilllv("생존 지식1");
	player.maxthirst = player.maxthirst + searchskilllv("생존 지식2");
	player.hpregen = player.hpregen + searchskilllv("효율적인 휴식");
	player.def = player.def + searchskilllv("마조히스트");
	player.criper = player.criper + searchskilllv("매의 눈");
	player.crix = player.crix + searchskilllv("매의 발톱");
	player.avoid = player.avoid + searchskilllv("손은 눈보다 빠르다");
	player.hit = player.hit + searchskilllv("근데 네 손은 내 눈보다 느리다");
	player.luck = player.luck + searchskilllv("초고교급 행운");
}


////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////


function gospecialskill(tempotherwho)
{
	for(var i=0; i<specialskill.length; i++)
	{
		if((specialskill[i].lv>=1)&&(specialskill[i].per>=1))
		{
			var rannum = Math.floor(Math.random() * 100) + 1;
			
			if(rannum<=specialskill[i].per)
			{
				var dmg = player.atk;
				var randmg = (Math.floor(Math.random() * 10) + 1)/100 * dmg;
				var finaldmg = Math.floor((specialskill[i].dmg + 100) / 100 * dmg * (100 - enemy.def)/100 - enemy.def/2 + randmg);
			
				enemy.hp = enemy.hp - finaldmg;
				bluedmgview(tempotherwho, finaldmg);
				
				$('#enemyimg').append('<div id="enemydmgeft"><img src="Img/' + specialskill[i].name + '.gif?ver=' + atkcount + '" onclick="atk2();" class="atkeft">');
				setTimeout(function() {$('#enemydmgeft').remove();}, 700);
			}
		}
		else if((specialskill[i].lv>=1)&&(specialskill[i].nowcount>=1))
		{
			if(specialskill[i].nowcount==1)
			{
				var dmg = player.atk;
				var randmg = (Math.floor(Math.random() * 10) + 1)/100 * dmg;
				var finaldmg = Math.floor((specialskill[i].dmg + 100) / 100 * dmg * (100 - enemy.def)/100 - enemy.def/2 + randmg);
				
				enemy.hp = enemy.hp - finaldmg;
				bluedmgview(tempotherwho, finaldmg);
				
				specialskill[i].nowcount = specialskill[i].firstcount; 
				$('#enemyimg').append('<div id="enemydmgeft"><img src="Img/' + specialskill[i].name + '.gif?ver=' + atkcount + '" onclick="atk2();" class="atkeft">');
				setTimeout(function() {$('#enemydmgeft').remove();}, 700);
				return;
			} 
		}
		
		try{specialskill[i].nowcount--;}catch(e){}
	}
}