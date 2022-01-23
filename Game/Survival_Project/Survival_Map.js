function mapsearch(type)
{
	var rannum = Math.floor(Math.random() * 100) + 1;
	
	if(type=="초원")
	{
			if(statcheck(0,3,3)){return;}
			
			switch(true)
			{
				case rannum<5 :
					additem(food, "파", 1);
					break;
				case rannum<10 :
					additem(food, "고추", 1);
					break;
				case rannum<20 :
					additem(material, "나뭇가지", 1);
					break;
				case rannum<40 :
					additem(material, "돌", 1);
					break;
				case rannum<60 :
					additem(material, "식물줄기", 1);
					break;
				case rannum<70 :
					additem(material, "뼈", 1);
					break;
				case rannum<90 :
					additem(material, "나뭇잎", 1);
					break;
				case rannum<95 :
					additem(food, "고기", 1);
					break;
				default :
					msg("아무것도 발견하지 못했다.")
					break;
			}
			
			player.hunger -= 3;
			player.thirst -= 3;
	}
	else if(type=="냇가")
	{
			if(statcheck(0,3,2)){return;}
			
			switch(true)
			{
				case rannum<10 :
					additem(food, "감자", 1);
					break;
				case rannum<30 :
					additem(food, "물", 1);
					break;
				case rannum<50 :
					additem(food, "생선", 1);
					break;
				case rannum<60 :
					additem(food, "쌀", 1);
					break;
				default :
					msg("아무것도 발견하지 못했다.")
					break;
			}
			
			player.hunger -= 3;
			player.thirst -= 2;
	}
	else if(type=="숲")
	{
			if(statcheck(0,5,3)){return;}
			
			switch(true)
			{
				case rannum<5 :
					additem(food, "파", 1);
					break;
				case rannum<10 :
					additem(food, "고추", 1);
					break;
				case rannum<15 :
					additem(food, "버섯", 1);
					break;
				case rannum<30 :
					additem(food, "과일", 1);
					break;
				case rannum<45 :
					additem(material, "나무", 1);
					break;
				case rannum<60 :
					additem(material, "돌", 1);
					break;
				case rannum<75 :
					additem(material, "나뭇잎", 1);
					break;
				case rannum<90 :
					additem(material, "식물줄기", 1);
					break;
				default :
					msg("아무것도 발견하지 못했다.")
					break;
			}
			
			player.hunger -= 5;
			player.thirst -= 3;
	}
	
	else if(type=="고산지")
	{
			if(statcheck(0,5,5)){return;}
			
			switch(true)
			{
				case rannum<20 :
					additem(material, "단단한 돌", 1);
					break;
				case rannum<40 :
					additem(material, "돌", 1);
					break;
				case rannum<60 :
					additem(material, "철광석", 1);
					break;
				case rannum<70 :
					additem(material, "뼈", 1);
					break;
				case rannum<90 :
					additem(material, "깃털", 1);
					break;
				default :
					msg("아무것도 발견하지 못했다.")
					break;
			}
			
			player.hunger -= 5;
			player.thirst -= 5;
	}
	
	else if(type=="밀림")
	{
			if(statcheck(0,5,5)){return;}
			
			switch(true)
			{
				case rannum<20 :
					additem(material, "나뭇가지", 1);
					break;
				case rannum<40 :
					additem(material, "질긴 줄기", 1);
					break;
				case rannum<60 :
					additem(material, "식물줄기", 1);
					break;
				case rannum<70 :
					additem(material, "뼈", 1);
					break;
				case rannum<90 :
					additem(material, "가죽", 1);
					break;
				case rannum<95 :
					additem(food, "고기", 1);
					break;
				default :
					msg("아무것도 발견하지 못했다.")
					break;
			}
			
			player.hunger -= 5;
			player.thirst -= 5;
	}
	
	else if(type=="바다")
	{
			if(statcheck(0,5,3)){return;}
			
			switch(true)
			{
				case rannum<10 :
					additem(food, "물", 1);
					break;
				case rannum<20 :
					additem(food, "미역", 1);
					break;
				case rannum<30 :
					additem(food, "생선", 1);
					break;
				case rannum<40 :
					additem(food, "조개", 1);
					break;
				default :
					msg("아무것도 발견하지 못했다.")
					break;
			}
			
			player.hunger -= 3;
			player.thirst -= 3;
	}
	
	if(type=="산")
	{
			if(statcheck(0,3,3)){return;}
			
			switch(true)
			{
				case rannum<20 :
					additem(material, "버섯", 1);
					break;
				case rannum<40 :
					additem(material, "과일", 1);
					break;
				case rannum<60 :
					additem(material, "나무", 1);
					break;
				case rannum<70 :
					additem(material, "돌", 1);
					break;
				case rannum<90 :
					additem(material, "나뭇잎", 1);
					break;
				default :
					msg("아무것도 발견하지 못했다.")
					break;
			}
			
			player.hunger -= 3;
			player.thirst -= 3;
	}
	
	statreload();
}

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

function mapaction(what)
{
	if(nowlocation=="초원")
	{
		if(what=="탐색")
		{
			if(mainstory==3){mainstory++; battlestart("고블린"); return;}
			
			
			var rannum = Math.floor(Math.random() * 3) + 1;
			
			switch(true)
			{
				case rannum==1 : battlestart("고블린"); break;
				case rannum==2 : battlestart("새끼 늑대"); break;
				case rannum==3 : battlestart("슬라임"); break;
			}
		}
		else if(what=="관찰")
		{
			if(mainstory==2){story("메인"); supporter[0].lv++; msg("하쿠레이 레이무가 아군으로 합류했습니다!!","blue"); return;}
			
			var rannum = Math.floor(Math.random() * 6) + 1;
			
			switch(true)
			{
				case rannum==1 : msg("넓은 초원이다."); break;
				case rannum==2 : msg("이곳 몬스터가 제일 약한것 같아."); break;
				case rannum==3 : msg("평범한 재료수집이 가능하겠는걸."); break;
				case rannum==4 : msg("저 멀리 숲이 보인다."); break;
				case rannum==5 : msg("특정한때 관찰을하면 뭔가 특별한걸 볼 수 있을까?"); break;
				case rannum==6 : msg("딱히 특별한것은 없는것 같다."); break;
				case rannum==7 : msg("어? 누군가 지나간것 같은데..."); break;
			}
		}
	}
	
	
	else if(nowlocation=="숲")
	{
		if(what=="탐색")
		{
			var rannum = Math.floor(Math.random() * 3) + 1;
			
			switch(true)
			{
				case rannum==1 : battlestart("성난 늑대"); break;
				case rannum==2 : battlestart("변이 생명체"); break;
				case rannum==3 : battlestart("홉고블린"); break;
			}
		}
		else if(what=="관찰")
		{
			if((supporter[0].lv>=1)&&(supporter[1].lv==0))
			{
				story("키리사메 마리사"); 
				return;
			}
			if((supporter[1].lv>=3)&&(supporter[2].lv==0)&&(chrlovelv.alice==0))
			{
				story("마가트로이드 앨리스"); 
				return;
			}
			if((supporter[1].lv>=5)&&(supporter[2].lv==0)&&(chrlovelv.alice==1))
			{
				story("마가트로이드 앨리스"); 
				return;
			}
			
			var rannum = Math.floor(Math.random() * 6) + 1;
			
			switch(true)
			{
				case rannum==1 : msg("울창한 숲이다."); break;
				case rannum==2 : msg("이곳에는 총 3종류의 몬스터가 있는것 같다."); break;
				case rannum==3 : msg("재료수집하기 좋은곳인걸?"); break;
				case rannum==4 : msg("주위에 초원, 사막, 산이 보인다."); break;
				case rannum==5 : msg("특정한때 관찰을하면 뭔가 특별한걸 볼 수 있을까?"); break;
				case rannum==6 : msg("딱히 특별한것은 없는것 같다."); break;
				case rannum==7 : msg("흠, 누군가의 레벨이 5라면..."); break;
			}
		}
	}
	
	
	else if(nowlocation=="산")
	{
		if(what=="탐색")
		{
			var rannum = Math.floor(Math.random() * 3) + 1;
			
			switch(true)
			{
				case rannum==1 : battlestart("???"); break;
				case rannum==2 : battlestart("숲의 요정"); break;
				case rannum==3 : battlestart("곰"); break;
			}
		}
		else if(what=="관찰")
		{
			var rannum = Math.floor(Math.random() * 5) + 1;
			
			switch(true)
			{
				case rannum==1 : msg("푸른 산이다."); break;
				case rannum==2 : msg("이곳에는 총 3종류의 몬스터가 있는것 같다."); break;
				case rannum==3 : msg("산에는 어떤 이상한녀석이 살고 있을까?"); break;
				case rannum==4 : msg("특정한때 관찰을하면 뭔가 특별한걸 볼 수 있을까?"); break;
				case rannum==5 : msg("딱히 특별한것은 없는것 같다."); break;
			}
		}
	}
	
	
	else if(nowlocation=="냇가")
	{
		if(what=="탐색")
		{
			var rannum = Math.floor(Math.random() * 3) + 1;
			
			switch(true)
			{
				case rannum==1 : battlestart("아기 생선"); break;
				case rannum==2 : battlestart("물의 요정"); break;
				case rannum==3 : battlestart("작은 하마"); break;
			}
		}
		else if(what=="관찰")
		{
			var rannum = Math.floor(Math.random() * 5) + 1;
			
			switch(true)
			{
				case rannum==1 : msg("강인지 냇가인지..."); break;
				case rannum==2 : msg("이곳에는 총 3종류의 몬스터가 있는것 같다."); break;
				case rannum==3 : msg("주로 음식을 구할때 와야겠다."); break;
				case rannum==4 : msg("특정한때 관찰을하면 뭔가 특별한걸 볼 수 있을까?"); break;
				case rannum==5 : msg("딱히 특별한것은 없는것 같다."); break;
				case rannum==6 : msg("낮은 확률로 뭔가 발견할지도..."); break;
			}
		}
	}
	
	
	else if(nowlocation=="고산지")
	{
		if(what=="탐색")
		{
			var rannum = Math.floor(Math.random() * 3) + 1;
			
			switch(true)
			{
				case rannum==1 : battlestart("성난매"); break;
				case rannum==2 : battlestart("바위 골렘"); break;
				case rannum==3 : battlestart("드워프"); break;
			}
		}
		else if(what=="관찰")
		{
			var rannum = Math.floor(Math.random() * 5) + 1;
			
			switch(true)
			{
				case rannum==1 : msg("상당히 높고 황량한 산이다."); break;
				case rannum==2 : msg("이곳에는 총 3종류의 몬스터가 있는것 같다."); break;
				case rannum==3 : msg("숨이 차는걸...?"); break;
				case rannum==4 : msg("특정한때 관찰을하면 뭔가 특별한걸 볼 수 있을까?"); break;
				case rannum==5 : msg("딱히 특별한것은 없는것 같다."); break;
			}
		}
	}
	
	
	else if(nowlocation=="밀림")
	{
		if(what=="탐색")
		{
			var rannum = Math.floor(Math.random() * 3) + 1;
			
			switch(true)
			{
				case rannum==1 : battlestart("오우거"); break;
				case rannum==2 : battlestart("엔트"); break;
				case rannum==3 : battlestart("거대 개미"); break;
			}
		}
		else if(what=="관찰")
		{
			var rannum = Math.floor(Math.random() * 5) + 1;
			
			switch(true)
			{
				case rannum==1 : msg("울창한 밀림이다."); break;
				case rannum==2 : msg("이곳에는 총 3종류의 몬스터가 있는것 같다."); break;
				case rannum==3 : msg("끈 ㅡ적끈적해 !!"); break;
				case rannum==4 : msg("특정한때 관찰을하면 뭔가 특별한걸 볼 수 있을까?"); break;
				case rannum==5 : msg("딱히 특별한것은 없는것 같다."); break;
			}
		}
	}
	
	else if(nowlocation=="바다")
	{
		if(what=="탐색")
		{
			var rannum = Math.floor(Math.random() * 3) + 1;
			
			switch(true)
			{
				case rannum==1 : battlestart("킹크랩"); break;
				case rannum==2 : battlestart("망둥어"); break;
				case rannum==3 : battlestart("거대 게"); break;
			}
		}
		else if(what=="관찰")
		{
			var rannum = Math.floor(Math.random() * 5) + 1;
			
			switch(true)
			{
				case rannum==1 : msg("바람이 시원한 바다다."); break;
				case rannum==2 : msg("이곳에는 총 3종류의 몬스터가 있는것 같다."); break;
				case rannum==3 : msg("식량조달하기 좋군."); break;
				case rannum==4 : msg("특정한때 관찰을하면 뭔가 특별한걸 볼 수 있을까?"); break;
				case rannum==5 : msg("딱히 특별한것은 없는것 같다."); break;
			}
		}
	}
}