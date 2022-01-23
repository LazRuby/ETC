
var defenemy = new Array();

defenemy.info =
	{
		hp:0,
		maxhp:0,
		speed:0,
		def:0,
		type:"",
		img:""
		
	}

var restenemylist = new Array();
var restenemycount=0;

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

function defstart()
{
	for(var i=0; i<29; i++)
	{
		var rannum = Math.floor(Math.random() * 4) + 1;
		restenemylist.push(rannum);
	}
	
	bigareachange("defarea");
	restenemylist.push(5);
	restenemycount = 0;
	createdefenemy();
	setInterval(function(){defloop()}, 100);
}

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

function createdefenemy()
{
	if(restenemycount==30){return;}
	
	if(restenemylist[restenemycount]==1)
	{
		var enemyinfo =
		{
			hp:player.day*2 + 5,
			maxhp:player.day*2 + 5,
			speed:10,
			def:10,
			x:$('.mondiv').css('margin-left'),
			y:$('.mondiv').css('margin-top'),
			img:"monimg1"
		}
	}
	else if(restenemylist[restenemycount]==2)
	{
		var enemyinfo =
		{
			hp:player.day*5 + 5,
			maxhp:player.day*5 + 5,
			speed:5,
			def:10,
			x:$('.mondiv').css('margin-left'),
			y:$('.mondiv').css('margin-top'),
			img:"monimg2"
		}	
	}	
	else if(restenemylist[restenemycount]==3)
	{
		var enemyinfo =
		{
			hp:player.day + 5,
			maxhp:player.day + 5,
			speed:20,
			def:0,
			x:$('.mondiv').css('margin-left'),
			y:$('.mondiv').css('margin-top'),
			img:"monimg3"
		}
	}
	else if(restenemylist[restenemycount]==4)
	{
		var enemyinfo =
		{
			hp:player.day*3 + 5,
			maxhp:player.day*3 + 5,
			speed:10,
			def:30,
			x:$('.mondiv').css('margin-left'),
			y:$('.mondiv').css('margin-top'),
			img:"monimg4"
		}
	}
	else if(restenemylist[restenemycount]==5)
	{
		var enemyinfo =
		{
			hp:player.day*7 + 5,
			maxhp:player.day*7 + 5,
			speed:15,
			def:50,
			x:$('.mondiv').css('margin-left'),
			y:$('.mondiv').css('margin-top'),
			img:"monimg5"
		}
	}
	
	defenemy.push(enemyinfo);
	$('#defarea').append('<div id="defenemy' + restenemycount + '" class="mondiv"><img src="Img/' + defenemy[restenemycount].img + '.png">');
	restenemycount++;
	setTimeout(function(){createdefenemy();}, 2000);
}

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

function defloop()
{
	for(var i=0; i<30; i++)
	{
		var xtemp = $('#defenemy'+i).css('margin-left')-40;
		var ytemp = $('#defenemy'+i).css('margin-top')-40;
		
		try
		{
			xtemp = xtemp.replace(/\px/g,'');
			ytemp = ytemp.replace(/\px/g,'');
			
			if(defenemy[i].hp==0){return;}
			else if((xtemp<=1115)&&(xtemp>=860)&&(ytemp<=340)&&(ytemp>=250)){ $('#defenemy'+i).css('margin-left', xtemp-defenemy[i].speed); }
			else if((xtemp<=880)&&(xtemp>=860)&&(ytemp<=340)&&(ytemp>=115)){ $('#defenemy'+i).css('margin-top', ytemp-defenemy[i].speed); }
			else if((xtemp<=880)&&(xtemp>=860)&&(ytemp<=160)&&(ytemp>=80)){ $('#defenemy'+i).css('margin-left', xtemp-defenemy[i].speed); }
			else if((xtemp<=630)&&(xtemp>=550)&&(ytemp<=545)&&(ytemp>=75)){ $('#defenemy'+i).css('margin-top', Number(ytemp)+Number(defenemy[i].speed)); }
			else if((xtemp<=630)&&(xtemp>=330)&&(ytemp<=575)&&(ytemp>=505)){ $('#defenemy'+i).css('margin-left', xtemp-defenemy[i].speed); }
			else if((xtemp<=375)&&(xtemp>=280)&&(ytemp<=575)&&(ytemp>=335)){ $('#defenemy'+i).css('margin-top', ytemp-defenemy[i].speed); }
			else if((xtemp<=370)&&(xtemp>=70)&&(ytemp<=370)&&(ytemp>=300)){ $('#defenemy'+i).css('margin-left', xtemp-defenemy[i].speed); }
			else if(defenemy[30].hp==0){defclear();}
			else if(((xtemp>=70)&&(xtemp<=110))&&((ytemp>=295)&&(ytemp<=360)&&(defenemy[i].hp>0)))
			{
				deflife--;
				defenemy[i].hp=0;
				$('#defenemy').html('');
				
				if(deflife==0){}
			}	
		}
		catch(e){}
	}
}