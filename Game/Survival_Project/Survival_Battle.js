
var battleswitch = false;
var loop;
var dmgnum = 0;
var atkcool = 0;
var enemyatkcool = 100;
var atkcount = 0;

///////////////////////////////////////////////////////////////////////////////////////////////////

function battlestart(who)
{
	if(statcheck(3,3,3)){return;}
	
	bigareachange("battlearea");
	createenemy(who); createenemy(who);
	battleswitch = true;
	loop = setInterval(function(){battleloop()}, 50);
	$('#playerimg').css('background', 'Chr/' + player.img + '.png');
}

function battleend(what)
{
	battleswitch = false;
	clearInterval(loop);
	bigareachange("main");
	
	if(what=="승리")
	{
		msg(enemy.name+"을(를) 쓰러트렸다.");
		msg(enemy.exp+"의 경험치와 " + enemy.money + "의 돈을 얻었다.");
		
		player.exp += enemy.exp;
		player.money += enemy.money;
		
		if(player.exp>=player.lv*4+player.lv*player.lv*2+10)
		{
			player.exp -= player.lv*4+player.lv*player.lv*2+10;
			player.lv++;
			
			player.maxhp += 5;
			player.atk += 1;
			player.maxhunger += 1;
			player.maxthisrt += 1;
			
			msg("레벨이 올랐습니다.","red")
		}
		
		if(enemy.drop!="empty")
		{
			var rannum = Math.floor(Math.random() * 100) + 1;
			
			if(rannum<=enemy.dropper){additem2(enemy.drop,1);}
		}
	}
	else if(what=="패배") { msg("패배하였습니다..","red"); player.hp = 0;}
	
	player.hp = Math.round(player.hp + player.hpregen);
	chrview("statdetail");
	$('#enemyimg').css('background','');
	$('#playerimg').css('background','');
	
	if(mainstory==4){story("메인");}
}

function battleloop()
{
	autoatk();
	if(key[90]){key[90]=false; atk("player");}
	
	$('#playerinfo').html("<h2>: " + player.name + " :</h2>" + "<meter value=" + player.hp + " max=" + player.maxhp + " style='width:25vw; height:5vh;'></meter> <br>Lv : " + player.lv + "<br> ATK : " + player.atk + " / AutoATK : " + player.autoatk + " / Def : " + player.def);
	$('#enemyinfo').html("<h2>: " + enemy.name + " :</h2>" + "<meter value=" + enemy.hp + " max=" + enemy.maxhp + " style='width:25vw; height:5vh;'></meter> <br>Lv : " + enemy.lv + "<br> ATK : " + enemy.atk + " / AutoATK : " + enemy.autoatk + " / Def : " + enemy.def);
	atkcool--;
	enemyatkcool = enemyatkcool - enemy.atkspeed;
	
	if(enemyatkcool<=0){atk("enemy");}
	
	if(enemy.hp<=0){battleend("승리");}
	else if(player.hp<=0){battleend("패배");}
	
	if(mainstory==4){player.hp=player.maxhp;}
}
////////////////////////////////////////////////////////////////////////////////////////////////////

function atk(who)
{
	var tempotherwho;		// 스트링값	
	
	if(atkcool>0){return;}
	
	if(who=="player"){tempotherwho="enemy"; otherwho = eval("enemy");}
	else if(who=="enemy"){tempotherwho="player"; otherwho = eval("player"); enemyatkcool = 300;}
	
	who=eval(who);
	
	var dmg = who.atk;
	var otherwho;
	
	if(avoidcal(who)) {bluedmgview(tempotherwho, "빗나감!!"); return; }
	if(crical(who)) 
	{
		dmg = dmg + who.atk * who.crix; 
		
		var randmg = (Math.floor(Math.random() * 10) + 1)/100 * dmg; 
		var finaldmg = Math.floor(dmg * (100 - otherwho.def)/100 - otherwho.def/2 + randmg);
		
		otherwho.hp = otherwho.hp - finaldmg;
		reddmgview(tempotherwho, finaldmg);
		
		if(who==player){gospecialskill();}
		
		atkcool=4;
		
		if($('#' + tempotherwho + 'dmgeft').length<3)
		{
			$('#' + tempotherwho + 'img').append('<div id="' + tempotherwho + 'dmgeft"><img src="Img/베기 기본.gif?ver=' + atkcount + '" onclick="atk2();" class="atkeft">');
			setTimeout(function() {$('#' + tempotherwho + 'dmgeft').remove();}, 700);
			atkcount++;
		}
		
		return;
	}

	var randmg = (Math.floor(Math.random() * 10) + 1)/100 * dmg; 
	var finaldmg = Math.floor(dmg * (100 - otherwho.def)/100 - otherwho.def/2 + randmg);
	
	otherwho.hp = otherwho.hp - finaldmg;
	dmgview(tempotherwho, finaldmg);
	
	atkcool=4;
	
	if(who==player){gospecialskill(tempotherwho);}
	
	if($('#' + tempotherwho + 'dmgeft').length<3)
	{
		$('#' + tempotherwho + 'img').append('<div id="' + tempotherwho + 'dmgeft"><img src="Img/베기 기본.gif?ver=' + atkcount + '" onclick="atk2();" class="atkeft">');
		setTimeout(function() {$('#' + tempotherwho + 'dmgeft').remove();}, 700);
		atkcount++;
	}
}

function atk2(){atk("player");}

function autoatk()
{
	var autodmg = player.autoatk/20;
	enemy.hp -= autodmg;
	
	autodmg = enemy.autoatk/20;
	player.hp -= autodmg;
}

////////////////////////////////////////////////////////////////////////////////////////////////////

function crical(who)
{
	var rannum = Math.floor(Math.random() * 100) + 1;
	
	if((who==player)&&(rannum<=(player.criper-enemy.luck))){return true;}
	else if((who==enemy)&&(rannum<=(enemy.criper-player.luck))){return true;}
}

function avoidcal(who)
{
	var rannum = Math.floor(Math.random() * 100) + 1;
	
	if((who==player)&&(rannum>=(player.hit-enemy.avoid))){return true;}
	else if((who==enemy)&&(rannum>=(enemy.hit-player.avoid))){return true;}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

function dmgview(who, how)
{
	var rany = Math.floor(Math.random() * 16) + 21;
	var ranx = Math.floor(Math.random() * 23) + 4;
		
	$('#' + who + 'img').append('<div id="' + dmgnum + '"class="dmgview" style="margin-left:' + ranx + 'vw; margin-top:' + rany +'vh;">' + how + '</div>');
	$('#' + dmgnum).animate({"margin-top":rany-20+"vh"},1300, function(){});
	$('#' + dmgnum).animate({opacity:"0"},1300, function(){$(this).remove()});
	dmgnum++;
}

function bluedmgview(who, how)
{
	var rany = Math.floor(Math.random() * 16) + 21;
	var ranx = Math.floor(Math.random() * 23);
		
	$('#' + who + 'img').append('<div id="' + dmgnum + '"class="dmgview" style="color:blue; text-size:1.3wh; margin-left:' + ranx + 'vw; margin-top:' + rany +'vh;">' + how + '</div>');
	$('#' + dmgnum).animate({"margin-top":rany-20+"vh"},1300, function(){});
	$('#' + dmgnum).animate({opacity:"0"},1300, function(){$(this).remove()});
	dmgnum++;
}

function reddmgview(who, how)
{
	var rany = Math.floor(Math.random() * 16) + 21;
	var ranx = Math.floor(Math.random() * 23) + 4;
		
	$('#' + who + 'img').append('<div id="' + dmgnum + '"class="dmgview" style="color:red; text-size:1.3wh; margin-left:' + ranx + 'vw; margin-top:' + rany +'vh;">' + how + '</div>');
	$('#' + dmgnum).animate({"margin-top":rany-20+"vh"},1300, function(){});
	$('#' + dmgnum).animate({opacity:"0"},1300, function(){$(this).remove()});
	dmgnum++;
}