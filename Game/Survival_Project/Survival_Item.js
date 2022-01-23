
/////////////////////////////////////////////////////////////////////////////////////////////

material = new Array(); 
food = new Array(); 
tool = new Array(); 
equipment = new Array(); 
building = new Array();

material[-1] = "material";
food[-1] = "food";
tool[-1] = " tool";
equipment[-1] = "equipment";
building[-1] = "building";

function materialset(name){material.push({id:material.length, name:name, count:0});}
function toolset(name, material){tool.push({id:tool.length, name:name, material:material, count:0});}
function buildingset(name, material){building.push({id:building.length, name:name, material:material, count:0});}
function foodset(name, hp, hunger, thirst, material){food.push({id:food.length, name:name, hp:hp, hunger:hunger, thirst:thirst, material:material, count:0});}
function equipmentset(name, hp, atk, def, range, material){equipment.push({id:equipment.length, name:name, hp:hp, atk:atk, def:def, range:range, material:material, count:0});}

///////////////////////////////////////////////////////////////////////////////////////////////////

materialset("나무");																			//	1
materialset("철");
materialset("돌");
materialset("나뭇가지");
materialset("나뭇잎");

materialset("가죽");																			// 6
materialset("뼈");
materialset("털");
materialset("식물줄기");
materialset("깃털");

materialset("풀");																			//11
materialset("빳빳한 털");
materialset("질긴 줄기");
materialset("철광석");
materialset("단단한 돌");

materialset("단단한 껍질");


///////////////////////////////////////////////////////////////////////////////////////////////////

equipmentset("나무 검", "0", "5", "0", "1", "나무:3");											// 1
equipmentset("나무 창", "0", "3", "0", "2", "나무:5");
equipmentset("나무 활", "0", "1", "0", "1", "나무:3");
equipmentset("나무 화살", "0", "3", "0", "2", "나뭇가지:1@깃털:1");
equipmentset("나무 망치", "0", "5", "0", "1", "나무:5");

equipmentset("돌 검", "0", "7", "0", "1", "나무:1@돌:2@작업 공간:1");							// 6
equipmentset("돌 창", "0", "5", "0", "2", "나무:3@돌:2@작업 공간:1");
equipmentset("돌 활", "0", "2", "0", "2", "돌:3@작업 공간:1");
equipmentset("돌 화살", "0", "5", "0", "2", "돌:1@나무:1@깃털:1@작업 공간:1");
equipmentset("돌 망치", "0", "10", "0", "1", "나무:1@돌:5@작업 공간:1");

equipmentset("철 검", "0", "10", "0", "1", "나무:1@철:2@대장간:1");								// 11
equipmentset("철 창", "0", "8", "0", "2", "나무:3@철:2@대장간:1");
equipmentset("철 활", "0", "3", "0", "3", "철:3@대장간:1");
equipmentset("철 화살", "0", "7", "0", "2", "철:1@나무:1@깃털:1@대장간:1");
equipmentset("철 망치", "0", "13", "0", "1", "나무:1@철:5@대장간:1");

///////////////////////////////////////////////////////////////////////////////////////////////////

foodset("생선 구이", "10", "15", "-5", "생선:1@모닥불:1");
foodset("고기 구이", "10", "20", "-5", "고기:1@모닥불:1");
foodset("해물탕", "10", "40", "30", "생선:2@물:2@조개:2");
foodset("스떼이끼!", "30", "50", "-10", "고기:3@버섯:2");
foodset("두부", "10", "30", "10", "콩:5@요리용 도구:1");

foodset("밀가루 면", "0", "10", "0", "밀가루:15@요리용 도구:1");
foodset("칼국수", "10", "70", "40", "면:3@고추:1@감자:1@양파:1@버섯:1@물:2");
foodset("해물칼국수", "30", "80", "50", "면:3@고추:1@감자:1@양파:1@버섯:1@물:2@조개:2");
foodset("화채", "0", "10", "20", "과일:3@물:2");
foodset("육포", "0", "30", "0", "고기:3@모닥불:1");

foodset("샐러드", "0", "30", "20", "콩:1@과일:1@파:1@고추:1@감자:1@양파:1@버섯:1");
foodset("스테이크 정식", "40", "20", "0", "고기:2@쌀:1@버섯:1@과일:1");
foodset("양 파x2", "0", "15", "0", "양파:1@파:1");
foodset("떡", "0", "20", "-5", "쌀:3");
foodset("과일떡", "0", "25", "10", "쌀:3@과일:2");

foodset("밀가루", "0", "1", "10", "밀:1");

foodset("생선", "5", "5", "0", "");															
foodset("고기", "10", "10", "-5", "");
foodset("과일", "0", "5", "5", "");
foodset("콩", "0", "3", "3", "");
foodset("파", "0", "5", "5", "");

foodset("밀가루", "0", "3", "0", "");
foodset("고추", "0", "5", "0", "");
foodset("감자", "0", "5", "0", "");
foodset("양파", "0", "5", "0", "");
foodset("쌀", "0", "5", "0", "");

foodset("버섯", "5", "5", "0", "");															
foodset("비상 식량", "50", "50", "50", "");
foodset("물", "0", "2", "10", "");
foodset("조개", "0", "5", "5", "");
foodset("미역", "5", "5", "5", "");

foodset("밀", "", "3", "0", "");

///////////////////////////////////////////////////////////////////////////////////////////////////

toolset("함정", "나무:3");																	// 1									
toolset("가방", "가죽:5@식물 줄기:3");
toolset("수레", "나무:15@작업 공간:1");

///////////////////////////////////////////////////////////////////////////////////////////////////

buildingset("모닥불", "나무:3");																// 1								
buildingset("작업 공간", "나무:10@모닥불:1");
buildingset("대장간", "돌:15@작업 공간:1");
buildingset("창고", "나무:10@돌:10");
buildingset("농장", "나무:20@돌:15@철:10");

buildingset("텐트", "나무:5@나뭇가지:10@나뭇잎:30@식물줄기:5");									// 6
buildingset("오두막", "나무:50@텐트:1");
buildingset("돌담집", "돌:50@오두막:1");
buildingset("벙커", "철:50@돌담집:1");
buildingset("확장된 벙커", "나무:40@돌:40@철:40@벙커:1");

buildingset("요리용 공간", "나무:3@돌:3");
buildingset("작은 텃밭-콩", "돌:5");
buildingset("작은 우물", "돌:5");
buildingset("검은 상자", "나무:5");
buildingset("작은 텃밭-양파", "돌:5@나무:3");

buildingset("작은 텃밭-밀", "돌:3@나무:3@나뭇가지:3@나뭇잎:2");

///////////////////////////////////////////////////////////////////////////////////////////////////

function view(type)							// type이 문자열로 갈때
{		
	$('.bagbutton').css('background','black');
	$('.chrbutton').css('background','black');
	$('#bagarea').html('<br>');
	
	for(var i=0; i<eval(type).length; i++)
	{
		if(eval(type)[i].count!=0)
		{
			$('#bagarea').append(eval(type)[i].name + " : " + eval(type)[i].count)
			if(eval(type)==food){$('#bagarea').append("&nbsp&nbsp<input type='button' value='사용하기' class='button' id='" + eval(type)[i].name +"' onclick='foodeat(this.id)'>")}
			$('#bagarea').append("<br>");
		}
	}
	
	$('#'+ type).css('background-color','red');
	statreload();
	
	if($('#bagarea').html().length<5){$('#bagarea').append('가지고 계신 아이템이 없습니다 !!');}
}

function viewreload(type)						// type 자체가 배열값이 갈때
{		
	$('.bagbutton').css('background','black');
	$('.chrbutton').css('background','black');
	$('#bagarea').html('<br>');
	
	for(var i=0; i<eval(type).length; i++)
	{
		if(eval(type)[i].count!=0)
		{
			$('#bagarea').append(eval(type)[i].name + " : " + eval(type)[i].count)
			if(eval(type)==food){$('#bagarea').append("&nbsp&nbsp<input type='button' value='사용하기' class='button' id='" + eval(type)[i].name +"' onclick='foodeat(this.id)'>")}
			$('#bagarea').append("<br>")
		}
	}
	
	$('#'+ type[-1]).css('background-color','red');
	statreload();
	
	if($('#bagarea').html().length<5){$('#bagarea').append('가지고 계신 아이템이 없습니다 !!');}
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function additem(type, inputname, inputcount)
{
	for(var i=0; i<type.length; i++)
	{
		if(type[i].name==inputname)
		{
			if(type[i].count>=player.maxitem)
			{type[i].count = player.maxitem;	msg("아이템 소지 최대치를 초과하여 더이상 얻을 수 없습니다.")}
			
			
			type[i].count = type[i].count + inputcount;
			msg(type[i].name + "을(를) " + inputcount + "개 얻으셨습니다.");
			
			viewreload(type);
		}
	}
}

function additem2(inputname, inputcount)				// Unknown Item Type
{
	for(var i=0; i<material.length; i++)
	{
		if(material[i].name==inputname)
		{
			if(material[i].count>=player.maxitem)
			{material[i].count = player.maxitem;	msg("아이템 소지 최대치를 초과하여 더이상 얻을 수 없습니다.")}
			
			material[i].count = material[i].count + inputcount;
			msg(material[i].name + "을(를) " + inputcount + "개 얻으셨습니다.");
			
			viewreload(material);
		}
		
		return;
	}
	
	for(var i=0; i<food.length; i++)
	{
		if(food[i].name==inputname)
		{
			if(food[i].count>=player.maxitem)
			{food[i].count = player.maxitem;	msg("아이템 소지 최대치를 초과하여 더이상 얻을 수 없습니다.")}
			
			food[i].count = food[i].count + inputcount;
			msg(food[i].name + "을(를) " + inputcount + "개 얻으셨습니다.");
			
			viewreload(food);
		}
		
		return;
	}
}

function subitem(type, inputname, inputcount)
{
	for(var i=0; i<type.length; i++)
	{
		if(type[i].name==inputname)
		{
			type[i].count = type[i].count - inputcount;
			msg(type[i].name + "을(를) " + inputcount + "개 사용하셨습니다.");
			
			viewreload(type);
		}
	}
}

function subitem2(inputname, inputcount)
{
	for(var i=0; i<material.length; i++)
	{
		if(material[i].name==inputname)
		{
			material[i].count = material[i].count - inputcount;
			msg(material[i].name + "을(를) " + inputcount + "개 사용하셨습니다.");
			
			viewreload(material);
			
			return;
		}
	}
	for(var i=0; i<food.length; i++)
	{
		if(food[i].name==inputname)
		{
			food[i].count = food[i].count - inputcount;
			msg(food[i].name + "을(를) " + inputcount + "개 사용하셨습니다.");
			
			viewreload(food);
			
			return;
		}
	}
}

function searchitem(type, inputname)
{
	for(var i=0; i<type.length; i++)
	{
		if(type[i].name==inputname){return type[i].count;}
	}
}

function searchitem2(inputname)		// type 모를때
{
	for(var i=0; i<material.length; i++)
	{
		if(material[i].name==inputname){return material[i].count;}
	}
	
	for(var i=0; i<building.length; i++)
	{
		if(building[i].name==inputname){return building[i].count;}
	}
	
	for(var i=0; i<food.length; i++)
	{
		if(food[i].name==inputname){return food[i].count;}
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function foodeat(what)
{
	for(var i=0; i<food.length; i++)
	{
		if(food[i].name==what)
		{
			for(var objname in food[i])
			{	
				if(objname==="hp"){player.hp += food[i][objname]*1;}
				else if(objname==="hunger"){player.hunger += food[i][objname]*1;}
				else if(objname==="thirst"){player.thirst += food[i][objname]*1;}
			}
			food[i].count--;
		}
	}
	
	viewreload(food);
	msg(what + "을 먹었습니다.", "blue");
	
	if(player.hunger>=player.maxhunger){player.hunger=player.maxhunger;}
	if(player.thirst>=player.maxthirst){player.thirst=player.maxthirst;}
	if(player.hunger<=0){player.hunger=0;}
	if(player.thirst<=0){player.thirst=0;}
	if(player.hp>player.maxhp){player.hp=player.maxhp;}
}