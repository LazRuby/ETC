
var need = new Array();		// 전체 재료를 배열 하나하나에 담아서 정리
var needcount=0;			// 현재 컴퓨터가 보고있는 need의 위치
var viewcount=0;			// 재료 카운트 후 보여줄지 말지 판단하는 카운트
var nowviewcount=0;			// 현재 사람이 보고있는 need의 위치

function mainview(){$('#actionarea').html('<span><button class="action">집</button><button class="action">탐색</button> <button class="action">채집</button> <button class="action">관찰</button> <button class="action">건설</button> <button class="action">성장</button> <button class="action">이동</button></span><br><br><br>'); $('.action').bind('click', function(){ action($(this).html()); });}

function homeview()
{
	mainview();
	
	$('#actionarea').css('background','url("Img/배경.png") no-repeat 100% 100%');
	
	function imginput(where) 
	{ 	for(var i=0; i<where.length; i++)
		{	if(where[i].count>=1) { $('#actionarea').append('<img src="Img/' + where[i].name + '.png" class="homeimg">'); }}}
	
	imginput(building);	imginput(tool);
	
	for(var i=0; i<supporter.length; i++)
	{	
		if(supporter[i].lv>=1)
		{ 	
			var ranx = Math.floor(Math.random() * 35) + 1;
			var rany = Math.floor(Math.random() * 60) + 1;
			
			$('#actionarea').append('<img src="Supporter/' + supporter[i].name + '.png" id="supporter' + i + '" style="margin-left:' + ranx + 'vw; margin-top:' + rany + 'vh; position:absolute; " class="spticon" onclick="story(&#39;' + supporter[i].name + '&#39;)">');
			
			supporternum = i;
		}
	}
	
	$('#actionarea').append('<img src="Img/HomeMap.png" usemap="#002" border="0" class="homeimg">	<map name="002">	<area shape="circle" id="모닥불" coords="380,390,20" class="homeevent"/> <area shape="circle" id="요리용 공간" coords="445,350,20" class="homeevent"/>	</map>');
	$('.homeevent').bind('click', function(){ homeevent(this.id);})
}

function buildview()
{	
	mainview();
	materialsplit("building");
	var buildingcount = 0;
	
	for(var i=0; i<need.length; i++){if(need[i]=="&"){buildingcount++;}}
	
	for(var i=0; i<buildingcount; i++)
	{
		viewcount=0;

		while(1)
		{
			if(need[needcount]=="&"){needcount++; break;}
			else if(need[needcount]==null){return;}
		
			if(searchitem2(need[needcount])<need[needcount+1]){viewcount++;}
			needcount++; needcount++;
		}
		
		if(viewcount>0) {nowviewcount=needcount; continue;}
		
		$('#actionarea').append("<span style='color:red;'>" + building[i].name + " </span> - <input type='button' class='button' value='건설하기' onclick='create(building, " + building[i].id +")'><br>");
	
		$('#actionarea').append('/ ')
		
		for(var trash=0; nowviewcount<needcount-1; nowviewcount = nowviewcount+2)
		{
			if(need[nowviewcount]=="&"){nowviewcount++;}
			$('#actionarea').append(need[nowviewcount] + " : " + need[nowviewcount+1] + " / ")
		}
		
		if(building[i].name=="모닥불"){$('#actionarea').append('<br>따듯한 모닥불입니다. 아이콘 클릭시 잠을 잘 수 있습니다.<br><br>')}
		else if(building[i].name=="작업 공간"){$('#actionarea').append('<br>아이콘 클릭시 간단한 도구를 만들 수 있습니다.<br><br>')}
		else if(building[i].name=="대장간"){$('#actionarea').append('<br>작업공간보다 더 많은 도구를 만들 수 있습니다.<br><br>')}
		else if(building[i].name=="창고"){$('#actionarea').append('<br>아이템 최대 소지수가 늘어납니다.<br><br>')}
		else if(building[i].name=="농장"){$('#actionarea').append('<br>매 아침마다 과일 1개를 얻습니다.<br><br>')}
		
		else if(building[i].name=="텐트"){$('#actionarea').append('<br>최대 체력이 증가합니다. 체력 재생력이 증가합니다.<br><br>')}
		else if(building[i].name=="오두막"){$('#actionarea').append('<br>최대 허기, 갈증이 증가합니다. 체력 재생력이 증가합니다.<br><br>')}
		else if(building[i].name=="돌담집"){$('#actionarea').append('<br>최대 체력 및 방어력이 증가합니다.<br><br>')}
		else if(building[i].name=="벙커"){$('#actionarea').append('<br>최대 체력 및 공격력이 증가합니다.<br><br>')}
		else if(building[i].name=="확장된 벙커"){$('#actionarea').append('<br>크리티컬 확률, 회피율, 명중률이 증가합니다.<br><br>')}
		
		else if(building[i].name=="요리용 공간"){$('#actionarea').append('<br>아이콘 클릭시 요리가 가능해집니다.<br><br>')}
		else if(building[i].name=="작은 텃밭-콩"){$('#actionarea').append('<br>매일 콩 하나를 얻습니다.<br><br>')}
		else if(building[i].name=="작은 우물"){$('#actionarea').append('<br>3일마다 물 하나를 얻습니다.<br><br>')}
		else if(building[i].name=="검은 상자"){$('#actionarea').append('<br>누군가 찾아올지도...?<br><br>')}
		else if(building[i].name=="작은 텃밭-양파"){$('#actionarea').append('<br>3일마다 양파 하나를 얻습니다.<br><br>')}
		
		else if(building[i].name=="작은 텃밭-밀"){$('#actionarea').append('<br>매일 밀 하나를 얻습니다.<br><br>')}
	}
	
	nowviewcount=0;	needcount=0;
	
	if($('#actionarea').html().length < 270) {$('#actionarea').append('<br>지을 수 있는 건물이 없습니다.<br>')}
}

function cookingview()		
{
	mainview();
	materialsplit("food");
	var foodcount = 0;
	
	for(var i=0; i<need.length; i++){if(need[i]=="&"){foodcount++;}}
	
	for(var i=0; i<foodcount; i++)
	{
		viewcount=0;

		while(1)
		{
			if(need[needcount]=="&"){needcount++; break;}
			else if(need[needcount]==null){return;}
		
			if(searchitem2(need[needcount])<need[needcount+1]){viewcount++;}
			needcount++; needcount++;
		}
		
		if((viewcount>0)||(food[i].length<=2)) {nowviewcount=needcount; continue;}
		
		$('#actionarea').append("<span style='color:red;'>" + food[i].name + " </span> - <input type='button' value='요리하기' class='button' onclick='create(food, " + food[i].id +")'><br>");
	
		$('#actionarea').append('/ ')
		
		for(var trash=0; nowviewcount<needcount-1; nowviewcount = nowviewcount+2)
		{
			if(need[nowviewcount]=="&"){nowviewcount++;}
			$('#actionarea').append(need[nowviewcount] + " : " + need[nowviewcount+1] + " / ")
		}
		
		if(food[i].name=="생선 구이"){$('#actionarea').append('<br>익힌 생선구이입니다.<br>체력 10, 배고픔 15, 갈증 -5<br><br>')}
		else if(food[i].name=="고기 구이"){$('#actionarea').append('<br>익힌 생선구이입니다.<br>체력 10, 배고픔 20, 갈증 -5<br><br>')}
		else if(food[i].name=="해물탕"){$('#actionarea').append('<br>자그만치 3가지 음식의 콜라보레이션.<br>체력 10, 배고픔 40, 갈증 30<br><br>')}
		else if(food[i].name=="스떼이끼!"){$('#actionarea').append('<br>스테이크.. 좋아하세요?<br>체력 30, 배고픔 50, 갈증 -10<br><br>')}
		else if(food[i].name=="두부"){$('#actionarea').append('<br>나무에게 주지 말고, 드세요. 입으로 드세요.<br>체력 10, 배고픔 30, 갈증 10<br><br>')}

		else if(food[i].name=="밀가루 면"){$('#actionarea').append('<br>면입니다. 이걸로 뭘 만들까요?<br>체력 0, 배고픔 10, 갈증 0<br><br>')}
		else if(food[i].name=="칼국수"){$('#actionarea').append('<br>자그만치 3가지 음식의 콜라보레이션.<br>체력 10, 배고픔 70, 갈증 40<br><br>')}
		else if(food[i].name=="해물칼국수"){$('#actionarea').append('<br>거기에 조개까지 합 ! 체 !<br>체력 30, 배고픔 80, 갈증 50<br><br>')}
		else if(food[i].name=="화채"){$('#actionarea').append('<br>얼음이 없는게 아쉽네요.<br>체력 0, 배고픔 10, 갈증 20<br><br>')}
		else if(food[i].name=="육포"){$('#actionarea').append('<br>육포는 좋은 비상식량입니다.<br>체력 0, 배고픔 30, 갈증 0<br><br>')}

		else if(food[i].name=="샐러드"){$('#actionarea').append('<br>고기만 먹지 말고 샐러드도 드세요.<br>체력 ' + food[i].hp + ', 배고픔 ' + food[i].hunger + ', 갈증 ' + food[i].thirst + '<br><br>')}
		else if(food[i].name=="스테이크 정식"){$('#actionarea').append('<br>고오급 레스토랑처럼...!<br>체력 ' + food[i].hp + ', 배고픔 ' + food[i].hunger + ', 갈증 ' + food[i].thirst + '<br><br>')}
		else if(food[i].name=="양 파x2"){$('#actionarea').append('<br>파 파.. 퍄퍄?<br>체력 ' + food[i].hp + ', 배고픔 ' + food[i].hunger + ', 갈증 ' + food[i].thirst + '<br><br>')}
		else if(food[i].name=="떡"){$('#actionarea').append('<br>떡 ㅡ 떡 ㅡ 떡 ㅡ.<br>체력 ' + food[i].hp + ', 배고픔 ' + food[i].hunger + ', 갈증 ' + food[i].thirst + '<br><br>')}
		else if(food[i].name=="과일떡"){$('#actionarea').append('<br>떡 ㅡ 과즙, 떡 ㅡ 과즙.<br>체력 ' + food[i].hp + ', 배고픔 ' + food[i].hunger + ', 갈증 ' + food[i].thirst + '<br><br>')}
	
		else if(food[i].name=="밀가루"){$('#actionarea').append('<br>밀가루입니다. 제작시 3개가 생성됩니다.<br>체력 ' + food[i].hp + ', 배고픔 ' + food[i].hunger + ', 갈증 ' + food[i].thirst + '<br><br>')}
	}
	
	nowviewcount=0;	needcount=0;
	
	if($('#actionarea').html().length < 270) {$('#actionarea').append('<br>만들 수 있는 요리가 없습니다.<br>')}
}

function supporterview()
{
	mainview();
	
	for(var i=0; i<supporter.length; i++)
	{
		if(supporter[i].lv>=1)
		{
			$('#actionarea').append(i+1 + "、<span style='color:red'>" + supporter[i].name + "</span> &nbsp; &nbsp; &nbsp; " + supporter[i].lv + " Lv &nbsp; &nbsp; <input type='button' value='Lv Up !' class'button' onclick='supporterlvup(" + i + ")'> &nbsp; &nbsp; 비용 : " + Number(Number(supporter[i].lv * supporter[i].moneyx) + Number(supporter[i].moneyx)) +"<br>");
			$('#actionarea').append("Atk : " + supporter[i].lv * supporter[i].atkx + " / AutoAtk : " + supporter[i].lv * supporter[i].autoatkx + " / MaxHp : " + supporter[i].lv * supporter[i].hpx + "<br><br><br>");
		}
	}
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

function create(where, what)
{
	var firstsplit = new Array();
	var usematerial = new Array();
	
	if(where[what].material.indexOf("@") != -1)
	{
		var temp = new Array();
		var temp2, temp3, temp4;
		
		temp = where[what].material.split('@');
		
		for(var j=0; j<temp.length; j++){temp2=temp[j].split(":"); firstsplit.push(temp2[0]); firstsplit.push(temp2[1]);}
	}
	else
	{
		var temp = where[what].material.split(':');
		var temp2 = temp[0];
		var temp3 = temp[1];
		
		firstsplit.push(temp2); firstsplit.push(temp3);
	}
	
	
	var createtemp = 0;
	
	while(1)
	{
		if(firstsplit[createtemp]=="&"){createtemp++; break;}
		else if(firstsplit[createtemp]==null)
		{
			if(where[what].name=="밀가루"){where[what].count++; where[what].count++;}
			where[what].count++;
			msg(where[what].name + "을(를) 만들었습니다.");
			homeview();
			view(where[-1]);
			
			return;
		}
	
		subitem2(firstsplit[createtemp], firstsplit[createtemp+1]);
		createtemp++; createtemp++;
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

function movemap(where)
{
	if(where=="닫기"){bigareachange("main"); return;}
	
	$('body').prepend('<img src="Img/' + nowlocation + '.jpg" style="width:100vw; height:100vh; position:absolute; top:0; left:0" id="bodyimg">');
	$('body').css("background-image", "url(Img/" + where + ".jpg)"); 
	$('body').css('background-size','100vw 100vh');
	
	$(".bigarea").fadeOut(1500, function (){bigareachange("main");});
	$('#bodyimg').fadeOut(5000, function (){$(this).remove(); $('.bigarea').fadeIn(3000);});
	
	nowlocation = where;
	msg(where + "(으)로 이동하셨습니다.", "blue");
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

function homeevent(what)
{
	if((what=="모닥불")&&(searchitem2(what)>=1))
	{
		if(confirm("주무시겠습니까?\n\n: 하루가 경과하고 체력이 모두 회복됩니다. :"))
		{
			player.hp = player.maxhp;
			msg("아침이 밝았다.","blue"); 		msg("하루가 경과하고 체력이 모두 회복되었다.","blue"); 
			player.day++; 					chrview("statdetail");
			dayevent();
			
		}
	}
	else if((what=="요리용 공간")&&(searchitem2(what)>=1)){cookingview()	;}
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

function dayevent()
{
	if(searchitem(building,"농장")>=1)
	{
		additem(food,"과일",searchitem(building,"농장"));
	}
	if((searchitem(building,"작은 우물")>=1)&&(player.day%3==0))
	{
		additem(food,"물",searchitem(building,"작은 우물"));
	}
	if(searchitem(building,"작은 텃밭-콩")>=1)
	{	console.log(searchitem(building,"작은 텃밭-콩"));
		additem(food,"콩",searchitem(building,"작은 텃밭-콩"));
	}
	if((searchitem(building,"작은 텃밭-양파")>=1)&&(player.day%3==0))
	{ console.log(searchitem(building,"작은 텃밭-양파"));
		additem(food,"양파",searchitem(building,"작은 텃밭-양파"));
	}
	if(searchitem(building,"작은 텃밭-밀")>=1)
	{ console.log(searchitem(building,"작은 텃밭-밀"));
		additem(food,"밀",searchitem(building,"작은 텃밭-밀"));
	}
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

function buildingload()
{
	if(searchitem(building,"창고")>=1){		player.maxitem = player.maxitem + searchitem(building,"창고") * 5;}
	if(searchitem(building,"텐트")>=1){		player.maxhp = player.maxhp + 30; player.hpregen += 5;}
	if(searchitem(building,"오두막")>=1){		player.maxhunger += 10; player.maxthirst += 10;	player.hpregen += 3;}
	if(searchitem(building,"돌담집")>=1){		player.maxhp += 50; player.def += 3; }
	if(searchitem(building,"벙커")>=1){		player.maxhp += 100; player.atk += 30; }
	if(searchitem(building,"확장된 벙커")>=1){	player.criper += 5; player.avoid += 10; player.hit += 10;}	
}