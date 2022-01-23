var enemy =
	{
		name:"Enemy",
		
		maxhp:0,
		hp:0,
		
		atk:0,
		autoatk:0,
		atkspeed:0,
		def:0,
		range:1,
		criper:10,
		crix:1.5,
		avoid:10,
		hit:80,
		luck:0,
		
		lv:0,
		exp:0,
		money:0,
		drop:"empty",
		dropper:0
	}

/* /////////////////////////////////////////////////////////////////////////// */

function createenemy(who)
{
	switch(true)
	{
		case who=="실험용몬스터" :
		enemy =
		{
			name:who,
			
			lv:10,
			exp:enemy.lv*enemy.lv + enemy.lv*2 + 2,
			money:enemy.lv*5 + enemy.lv,
			drop:"나무",
			dropper:30,
			
			maxhp:enemy.lv*enemy.lv*2 + enemy.lv*10 + 10 + player.autoatk + 100000000,
			hp:enemy.lv*enemy.lv*2 + enemy.lv*10 + 10 + player.autoatk + 100000000,
			
			atk:enemy.lv*enemy.lv + enemy.lv*3 + 100,
			autoatk:enemy.lv*enemy.lv + (enemy.lv+2)*3 + 100,
			
			atkspeed:40,
			def:0,
			range:1,
			criper:30,
			crix:1.5,
			avoid:30,
			hit:80,
			luck:0
		}
		break;
	
		case who=="고블린" :
			enemy =
			{
				name:who,
				
				lv:1,
				exp:enemy.lv*enemy.lv + enemy.lv*2 + 2,
				money:enemy.lv*5 + enemy.lv,
				drop:"나무",
				dropper:30,
				
				maxhp:enemy.lv*enemy.lv*2 + enemy.lv*10 + 10 + player.autoatk,
				hp:enemy.lv*enemy.lv*2 + enemy.lv*10 + 10 + player.autoatk,
				
				atk:enemy.lv*enemy.lv + enemy.lv*3,
				autoatk:enemy.lv*enemy.lv + (enemy.lv+2)*3,
				
				atkspeed:10,
				def:0,
				range:1,
				criper:10,
				crix:1.5,
				avoid:10,
				hit:80,
				luck:0
			}
			break;
		
		case who=="새끼 늑대" :
			enemy =
			{
				name:who,
				
				lv:2,
				exp:enemy.lv*enemy.lv + enemy.lv*2 + 2,
				money:enemy.lv*5 + enemy.lv,
				drop:"빳빳한 털",
				dropper:10,
				
				maxhp:enemy.lv*enemy.lv*2 + enemy.lv*10 + 10  + player.autoatk,
				hp:enemy.lv*enemy.lv*2 + enemy.lv*10 + 10  + player.autoatk,
				
				atk:enemy.lv*enemy.lv + enemy.lv*3,
				autoatk:enemy.lv*enemy.lv + (enemy.lv+2)*3,
				
				atkspeed:10,
				def:0,
				range:1,
				criper:10,
				crix:1.5,
				avoid:10,
				hit:80,
				luck:0
			}
			break;
		case who=="슬라임" :
			enemy =
			{
				name:who,
				
				lv:3,
				exp:enemy.lv*enemy.lv + enemy.lv*2 + 2,
				money:enemy.lv*5 + enemy.lv,
				drop:"풀",
				dropper:10,
				
				maxhp:enemy.lv*enemy.lv*2 + enemy.lv*10 + 10  + player.autoatk,
				hp:enemy.lv*enemy.lv*2 + enemy.lv*10 + 10  + player.autoatk,
				
				atk:enemy.lv*enemy.lv + enemy.lv*3,
				autoatk:enemy.lv*enemy.lv + (enemy.lv+2)*3,
				
				atkspeed:10,
				def:0,
				range:1,
				criper:10,
				crix:1.5,
				avoid:10,
				hit:80,
				luck:0
			}
			break;
		
		case who=="성난 늑대" :
			enemy =
			{
				name:who,
				
				lv:5,
				exp:enemy.lv*enemy.lv + enemy.lv*2 + 2,
				money:enemy.lv*5 + enemy.lv,
				drop:"고기",
				dropper:30,
				
				maxhp:enemy.lv*enemy.lv*2 + enemy.lv*10 + 10  + player.autoatk,
				hp:enemy.lv*enemy.lv*2 + enemy.lv*10 + 10  + player.autoatk,
				
				atk:enemy.lv*enemy.lv + enemy.lv*3,
				autoatk:enemy.lv*enemy.lv + (enemy.lv+2)*3,
				
				atkspeed:10,
				def:0,
				range:1,
				criper:10,
				crix:1.5,
				avoid:10,
				hit:80,
				luck:0
			}
			break;
		
		case who=="변이 생명체" :
			enemy =
			{
				name:who,
				
				lv:7,
				exp:enemy.lv*enemy.lv + enemy.lv*2 + 2,
				money:enemy.lv*5 + enemy.lv,
				drop:"empty",
				
				maxhp:enemy.lv*enemy.lv*2 + enemy.lv*10 + 10  + player.autoatk,
				hp:enemy.lv*enemy.lv*2 + enemy.lv*10 + 10  + player.autoatk,
				
				atk:enemy.lv*enemy.lv + enemy.lv*3,
				autoatk:enemy.lv*enemy.lv + (enemy.lv+2)*3,
				
				atkspeed:10,
				def:0,
				range:1,
				criper:10,
				crix:1.5,
				avoid:10,
				hit:80,
				luck:0
			}
			break;
		
		case who=="홉고블린" :
			enemy =
			{
				name:who,
				
				lv:9,
				exp:enemy.lv*enemy.lv + enemy.lv*2 + 2,
				money:enemy.lv*5 + enemy.lv,
				drop:"과일",
				dropper:30,
				
				maxhp:enemy.lv*enemy.lv*2 + enemy.lv*10 + 10  + player.autoatk,
				hp:enemy.lv*enemy.lv*2 + enemy.lv*10 + 10  + player.autoatk,
				
				atk:enemy.lv*enemy.lv + enemy.lv*3,
				autoatk:enemy.lv*enemy.lv + (enemy.lv+2)*3,
				
				atkspeed:10,
				def:0,
				range:1,
				criper:10,
				crix:1.5,
				avoid:10,
				hit:80,
				luck:0
			}
			break;
	
			case who=="거대 게" :
			enemy =
			{
					name:who,
		
					lv:5,
					exp:enemy.lv*enemy.lv + enemy.lv*2 + 2,
					money:enemy.lv*5 + enemy.lv,
					drop:"단단한 껍질",
					dropper:30,
		
					maxhp:enemy.lv*enemy.lv*2 + enemy.lv*10 + 10  + player.autoatk,
					hp:enemy.lv*enemy.lv*2 + enemy.lv*10 + 10  + player.autoatk,
		
					atk:enemy.lv*enemy.lv + enemy.lv*3,
					autoatk:enemy.lv*enemy.lv + (enemy.lv+2)*3,
		
					atkspeed:10,
					def:50,
					range:1,
					criper:10,
					crix:1.5,
					avoid:10,
						hit:80,
							luck:0
			}
			break;
	
			case who=="망둥어" :
			enemy =
			{
					name:who,
			
					lv:9,
					exp:enemy.lv*enemy.lv + enemy.lv*2 + 2,
					money:enemy.lv*5 + enemy.lv,
					drop:"생선",
					dropper:30,
			
					maxhp:enemy.lv*enemy.lv*2 + enemy.lv*10 + 10  + player.autoatk,
					hp:enemy.lv*enemy.lv*2 + enemy.lv*10 + 10  + player.autoatk,
			
					atk:enemy.lv*enemy.lv + enemy.lv*3,
					autoatk:enemy.lv*enemy.lv + (enemy.lv+2)*3,
			
					atkspeed:10,
					def:0,
					range:1,
					criper:10,
					crix:1.5,
					avoid:50,
					hit:80,
					luck:0
			}
			break;
	
			case who=="킹크랩" :
			enemy =
			{
				name:who,
			
				lv:7,
				exp:enemy.lv*enemy.lv + enemy.lv*2 + 2,
				money:enemy.lv*5 + enemy.lv,
				drop:"empty",
				dropper:30,
			
				maxhp:enemy.lv*enemy.lv*2 + enemy.lv*10 + 10  + player.autoatk,
				hp:enemy.lv*enemy.lv*2 + enemy.lv*10 + 10  + player.autoatk,
			
				atk:enemy.lv*enemy.lv + enemy.lv*3,
				autoatk:enemy.lv*enemy.lv + (enemy.lv+2)*3,
			
				atkspeed:30,
				def:0,
				range:1,
				criper:40,
				crix:1.2,
				avoid:10,
				hit:80,
				luck:0
			}
			break;
			
			case who=="거대 거미" :
				enemy =
				{
					name:who,
				
					lv:10,
					exp:enemy.lv*enemy.lv + enemy.lv*2 + 2,
					money:enemy.lv*5 + enemy.lv,
					drop:"단단한 껍질",
					dropper:30,
				
					maxhp:enemy.lv*enemy.lv*2 + enemy.lv*10 + 10  + player.autoatk,
					hp:enemy.lv*enemy.lv*2 + enemy.lv*10 + 10  + player.autoatk,
				
					atk:enemy.lv*enemy.lv + enemy.lv*3,
					autoatk:enemy.lv*enemy.lv + (enemy.lv+2)*3,
				
					atkspeed:10,
					def40,
					range:1,
					criper:10,
					crix:1.2,
					avoid:10,
					hit:80,
					luck:0
				}
				break;
			
			case who=="엔트" :
				enemy =
				{
					name:who,
				
					lv:15,
					exp:enemy.lv*enemy.lv + enemy.lv*2 + 2,
					money:enemy.lv*5 + enemy.lv,
					drop:"과일",
					dropper:30,
				
					maxhp:enemy.lv*enemy.lv*2 + enemy.lv*10 + 10  + player.autoatk,
					hp:enemy.lv*enemy.lv*2 + enemy.lv*10 + 10  + player.autoatk,
				
					atk:enemy.lv*enemy.lv + enemy.lv*3,
					autoatk:enemy.lv*enemy.lv + (enemy.lv+2)*3,
				
					atkspeed:10,
					def:0,
					range:1,
					criper:10,
					crix:1.2,
					avoid:10,
					hit:80,
					luck:0
				}
				break;
			
			case who=="오우거" :
				enemy =
				{
					name:who,
				
					lv:15,
					exp:enemy.lv*enemy.lv + enemy.lv*2 + 2,
					money:enemy.lv*5 + enemy.lv,
					drop:"empty",
					dropper:30,
				
					maxhp:enemy.lv*enemy.lv*2 + enemy.lv*10 + 10  + player.autoatk,
					hp:enemy.lv*enemy.lv*2 + enemy.lv*10 + 10  + player.autoatk,
				
					atk:enemy.lv*enemy.lv + enemy.lv*3 + 30,
					autoatk:enemy.lv*enemy.lv + (enemy.lv+2)*3,
				
					atkspeed:3,
					def:0,
					range:1,
					criper:100,
					crix:1.5,
					avoid:10,
					hit:80,
					luck:0
				}
				break;
			
			case who=="성난 매" :
				enemy =
				{
					name:who,
				
					lv:15,
					exp:enemy.lv*enemy.lv + enemy.lv*2 + 2,
					money:enemy.lv*5 + enemy.lv,
					drop:"깃털",
					dropper:30,
				
					maxhp:enemy.lv*enemy.lv*2 + enemy.lv*10 + 10  + player.autoatk,
					hp:enemy.lv*enemy.lv*2 + enemy.lv*10 + 10  + player.autoatk,
				
					atk:enemy.lv*enemy.lv,
					autoatk:1,
				
					atkspeed:50,
					def:0,
					range:1,
					criper:30,
					crix:1.2,
					avoid:10,
					hit:80,
					luck:0
				}
				break;
			
			case who=="바위 골렘" :
				enemy =
				{
					name:who,
				
					lv:15,
					exp:enemy.lv*enemy.lv + enemy.lv*2 + 2,
					money:enemy.lv*5 + enemy.lv,
					drop:"돌",
					dropper:30,
				
					maxhp:enemy.lv*enemy.lv*3 + enemy.lv*20 + 10  + player.autoatk,
					hp:enemy.lv*enemy.lv*3 + enemy.lv*20 + 10  + player.autoatk,
				
					atk:enemy.lv*enemy.lv + 1,
					autoatk:enemy.lv*enemy.lv,
				
					atkspeed:10,
					def:0,
					range:1,
					criper:20,
					crix:1.2,
					avoid:10,
					hit:80,
					luck:0
				}
				break;
			
			case who=="드워프" :
				enemy =
				{
					name:who,
				
					lv:20,
					exp:enemy.lv*enemy.lv + enemy.lv*2 + 2,
					money:enemy.lv*5 + enemy.lv,
					drop:"철광석",
					dropper:30,
				
					maxhp:enemy.lv*enemy.lv*2 + enemy.lv*10 + 10  + player.autoatk,
					hp:enemy.lv*enemy.lv*2 + enemy.lv*10 + 10  + player.autoatk,
				
					atk:enemy.lv*enemy.lv + enemy.lv*3,
					autoatk:enemy.lv*enemy.lv + (enemy.lv+2)*3,
				
					atkspeed:10,
					def:0,
					range:1,
					criper:10,
					crix:1.5,
					avoid:10,
					hit:80,
					luck:0
				}
				break;
			
			case who=="아기 생선" :
				enemy =
				{
					name:who,
					
					lv:5,
					exp:enemy.lv*enemy.lv + enemy.lv*2 + 2,
					money:enemy.lv*5 + enemy.lv,
					drop:"생선",
					
					maxhp:enemy.lv*enemy.lv*2 + enemy.lv*10 + 10  + player.autoatk,
					hp:enemy.lv*enemy.lv*2 + enemy.lv*10 + 10  + player.autoatk,
					
					atk:enemy.lv*enemy.lv + enemy.lv,
					autoatk:enemy.lv*enemy.lv,
					
					atkspeed:50,
					def:0,
					range:1,
					criper:20,
					crix:1.5,
					avoid:10,
					hit:80,
					luck:0
				}
				break;
			
			case who=="물의 요정" :
				enemy =
				{
					name:who,
					
					lv:7,
					exp:enemy.lv*enemy.lv + enemy.lv*2 + 2,
					money:enemy.lv*5 + enemy.lv,
					drop:"물",
					
					maxhp:enemy.lv*enemy.lv*2 + enemy.lv*10 + 10  + player.autoatk,
					hp:enemy.lv*enemy.lv*2 + enemy.lv*10 + 10  + player.autoatk,
					
					atk:enemy.lv*enemy.lv + enemy.lv*3,
					autoatk:enemy.lv*enemy.lv + (enemy.lv+2)*3,
					
					atkspeed:10,
					def:0,
					range:1,
					criper:10,
					crix:1.5,
					avoid:10,
					hit:80,
					luck:0
				}
				break;
	
			case who=="작은 하마" :
				enemy =
				{
					name:who,
					
					lv:10,
					exp:enemy.lv*enemy.lv + enemy.lv*2 + 2,
					money:enemy.lv*5 + enemy.lv,
					drop:"empty",
					
					maxhp:enemy.lv*enemy.lv*2 + enemy.lv*10 + 10  + player.autoatk,
					hp:enemy.lv*enemy.lv*2 + enemy.lv*10 + 10  + player.autoatk,
					
					atk:enemy.lv*enemy.lv + enemy.lv*2,
					autoatk:enemy.lv*enemy.lv + (enemy.lv+2)*3,
					
					atkspeed:30,
					def:0,
					range:1,
					criper:10,
					crix:1.5,
					avoid:10,
					hit:80,
					luck:0
				}
				break;
			
			case who=="곰" :
				enemy =
				{
					name:who,
					
					lv:10,
					exp:enemy.lv*enemy.lv + enemy.lv*2 + 15,
					money:enemy.lv*5 + enemy.lv + 10,
					dropper:30,
					
					maxhp:enemy.lv*enemy.lv*2 + enemy.lv*10 + 10  + player.autoatk,
					hp:enemy.lv*enemy.lv*2 + enemy.lv*10 + 10  + player.autoatk,
					
					atk:enemy.lv*enemy.lv + enemy.lv*3 + 20,
					autoatk:enemy.lv*enemy.lv + (enemy.lv+2)*3,
					
					atkspeed:10,
					def:0,
					range:1,
					criper:10,
					crix:1.5,
					avoid:10,
					hit:80,
					luck:0
				}
				break;
			
			case who=="숲의 요정" :
				enemy =
				{
					name:who,
					
					lv:10,
					exp:enemy.lv*enemy.lv + enemy.lv*3 + 2,
					money:enemy.lv*5 + enemy.lv + 10,
					drop:"empty",
					
					maxhp:enemy.lv*enemy.lv*2 + enemy.lv*10 + 10  + player.autoatk,
					hp:enemy.lv*enemy.lv*2 + enemy.lv*10 + 10  + player.autoatk,
					
					atk:0,
					autoatk:enemy.lv*enemy.lv + (enemy.lv+2)*7,
					
					atkspeed:10,
					def:0,
					range:1,
					criper:10,
					crix:1.5,
					avoid:10,
					hit:80,
					luck:0
				}
				break;
			
			case who=="???" :
				enemy =
				{
					name:who,
					
					lv:20,
					exp:enemy.lv*enemy.lv + enemy.lv*2 + 2,
					money:enemy.lv*5 + enemy.lv,
					drop:"empty",
					
					maxhp:enemy.lv*enemy.lv*2 + enemy.lv*10 + 10  + player.autoatk,
					hp:enemy.lv*enemy.lv*2 + enemy.lv*10 + 10  + player.autoatk,
					
					atk:enemy.lv*enemy.lv + enemy.lv*3,
					autoatk:enemy.lv*enemy.lv + (enemy.lv+2)*3,
					
					atkspeed:10,
					def:0,
					range:1,
					criper:10,
					crix:1.5,
					avoid:10,
					hit:80,
					luck:0
				}
				break;
		
			default :break;
			}
			
	$('#enemyimg').css('background','url("Img/' + enemy.name + '.jpg")');
	$('#enemyimg').css('background-size','100% 100%');
}
