
var supporter = new Array();

function supporterset(name, atkx, autoatkx, hpx, moneyx)
{	supporter.push({id:supporter.length, name:name, lv:0, atkx:atkx, autoatkx:autoatkx, hpx, moneyx:moneyx});	}

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

supporter[-1] = 0;		// 이벤트로 습득한 스킬 저장 목적

supporterset("하쿠레이 레이무", 1, 0, 0, 10);
supporterset("키리사메 마리사", 0, 3, 0, 20);
supporterset("앨리스 마가트로이드", 1, 1, 1, 30);
supporterset("루미아", 0, 5, 0, 50);
supporterset("레밀리아 스칼렛", 0, 10, 0, 80);

supporterset("이자요이 사쿠야", 5, 0, 0, 100);
supporterset("플랑도르 스칼렛", 5, 5, 2, 150);
supporterset("홍 메이린", 10, 0, 0, 180);
supporterset("파츄리 노우렛지",0, 20, 0, 200);
supporterset("치르노", 10, 10, 3, 300);

/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

function supporterload()
{	
	for(var i=0; i<supporter.length; i++)
	{
		player.atk += supporter[i].atkx * supporter[i].lv;
		player.autoatk += supporter[i].autoatkx * supporter[i].lv;
		player.maxhp += supporter[i].hpx * supporter[i].lv;
		player.hp += supporter[i].hpx * supporter[i].lv;
		
		supporterskill(supporter[i].name, supporter[i].lv);
	}
}

//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

function supporterlvup(who)
{
	var moneycheck = supporter[who].lv * supporter[who].moneyx + supporter[who].moneyx;
	
	if(player.money >= moneycheck)
	{	
		player.money -= moneycheck;
		supporter[who].lv++;
		msg(supporter[who].name + "의 레벨이 1 상승했습니다.", "blue");
		
		allload();
		chrview("statdetail");
		supporterview();
	}
	else
	{
		msg("돈이 부족합니다.", "red");
	}
}

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

function supporterskill(who, how)
{
	if(who=="하쿠레이 레이무")
	{
		if(how>=10){	addskill("단단한 신체", 1)	;	}
		if(how>=30){	addskill("단단한 신체", 2)	;	addskill("사냥꾼", 1);	}
		if(how>=50){	addskill("몽상천생", 1);	}
		if(how>=100){	addskill("금강불괴", 5);	addskill("전문사냥꾼", 1);	}
	}
	else if(who=="키리사메 마리사")
	{
		if(how>=10){	addskill("생존 지식1", 3);	addskill("생존 지식2", 3);	}
		if(how>=30){	addskill("생존 지식2", 5); 	addskill("생존 지식1", 5);	}
		if(how>=50){	addskill("마스터 스파크", 1);	}
		if(how>=100){	addskill("생존 지식1", 10);	addskill("생존 지식2", 10);	}
	}
	else if(who=="앨리스 마가트로이드")
	{
		if(how>=10){	addskill("지식의 발견", 1);	}
		if(how>=30){	addskill("지식의 발견", 3); 	}
		if(how>=50){	addskill("인형재판", 1);	}
		if(how>=100){	addskill("현자의 가르침", 1);	addskill("매의 발톱", 3);	}
	}
}

///////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////