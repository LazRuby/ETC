var slot = new Array();
var slottemp = dbcodeload.split('_');
var key =[];
var playerstat = {nowx:"", nowy:"", startinglocationx:"", startinglocationy:"", sight:1,  life:3, timelimit:600, bomb:0, flash:0, portal:0, portalx:-1, portaly:-1}
var loopcount=0;
var moveloop;						// 위 변수명 추가 하고 아래 말고 더 아래에 소지템 갱신 / 사용 획득 / 색변경

/////////////////////////////////////////////////////////////////////////

window.onload = function(){tablemaking();}
setInterval("timeloop()", 1000);
$('#time').html("<br>남은 시간 : " + timelimit);
$('#sight').html("<br>시야 : " + playerstat.sight);
$('#item').html("<br>---<소지 아이템>---<br><br>");
$('#item').append("평범한 안경 : 기본시야 + 1칸<br>");
$('#item').append("낡은 지도 : 지나온 길을 기록한다.<br>");
$('#item').append("<br>-----------------<br>");

$(document).keydown(function(e){key[e.which] = true; if(loopcount==0){loop(); loopcount=1; moveloop=setInterval("loop()", 150);}})	
$(document).keyup(function(e){useitem(); key[e.which] = false; loopcount=0; clearInterval(moveloop);})

function loop()
{
	if(key[37]){movetrg("left");}
	else if(key[38]){movetrg("up");}
	else if(key[39]){movetrg("right");}
	else if(key[40]){movetrg("down");}
}

function timeloop()
{
	playerstat.timelimit -= 1;
	$('#time').html("<br>남은 시간 : " + playerstat.timelimit);
	$('#sight').html("<br>시야 : " + playerstat.sight);
	$('#item').html("<br>---<소지 아이템>---<br><br>");
	if(playerstat.sight>=1){$('#item').append("평범한 안경 : 기본시야 1칸<br>");}
	if(playerstat.sight>=2){$('#item').append("만원경 : 기본시야 " + parseInt(playerstat.sight-1) + "칸 증가<br>");}
	if(playerstat.bomb>=1){$('#item').append("휴대용 폭탄 [Z] : " + playerstat.bomb + "개<br>(Z:사용시 주위 벽 파괴)<br>");}
	if(playerstat.flash>=1){$('#item').append("휴대용 섬광탄 [X] : " + playerstat.flash + "개<br>(X:사용시 주위 3칸을 밝힌다)<br>");}
	if(playerstat.portal>=1){$('#item').append("휴대용 포탈 [C, A] : " + playerstat.portal + "개<br>(C:저장위치로 순간이동, A:현재위치 저장)<br>");}
	$('#item').append("낡은 지도 : 지나온 길을 기록한다.<br>");
	$('#item').append("<br>-----------------<br>");
}

//////////////////////////////////////////////////////////////////////////

function tablemaking()
{
	$("#Area").html('<table id="tableid">');
		
	for(var i=0; i<40; i++)
	{	
		slot[i] = new Array();
		$("#tableid").append("<tr id='tr_"+i+"'>");
		
		for(var j=0; j<70; j++)
		{
			slot[i][j]={object:slottemp[j+i*70], eft:""}
			
			$("#tr_"+i).append('<td id='+i+'_'+j+' onmouseover="javascript:targeta='+i+'; targetb='+j+';"></td>');

			if(slot[i][j].object==5){$('#'+i+'_'+j).css('background-color','pink');}
			else{$('#'+i+'_'+j).css('background-color','black');}
			
			if(slot[i][j].object==6){playerstat.nowx=i; playerstat.nowy=j; playerstat.startinglocationx=i; playerstat.startinglocationy=j;}
		}
		
		$("#tableid").append('</tr>');
	}
	
	$("#Area").append('</table>');
	
	playerstat.nowx=Number(playerstat.nowx); playerstat.nowy=Number(playerstat.nowy);
	
	colorchange()
}
//////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////


function movetrg(dir)
{
	if(dir=="left"){try{if(slot[playerstat.nowx][playerstat.nowy-1].object!=1){playerstat.nowy--;}}catch(e){}}
	else if(dir=="up"){try{if(slot[playerstat.nowx-1][playerstat.nowy].object!=1){playerstat.nowx--;}}catch(e){}}
	else if(dir=="right"){try{if(slot[playerstat.nowx][playerstat.nowy+1].object!=1){playerstat.nowy++;}}catch(e){}}
	else if(dir=="down"){try{if(slot[playerstat.nowx+1][playerstat.nowy].object!=1){playerstat.nowx++;}}catch(e){}}
	
	slotevent(slot[playerstat.nowx][playerstat.nowy].object);
	colorchange();
}

var nowxi = function sumxi(a){return parseInt(playerstat.nowx + a);}
var nowyj = function sumyj(a){return parseInt(playerstat.nowy + a);}
var sn = function slotsumxi(a,b){return slot[Number(playerstat.nowx)+Number(a)][Number(playerstat.nowy)+Number(b)].object}

function colorchange()
{for(var i=-playerstat.sight; i<playerstat.sight+1; i++){for(var j=-playerstat.sight; j<playerstat.sight+1; j++){
	try{sightevent(i,j);}catch(e){}
	$('#'+playerstat.nowx+'_'+playerstat.nowy).css('background-color','violet');
}}}

function sightevent(i,j)
{	
	if(sn(i,j)==1){$('#'+parseInt(playerstat.nowx+i)+'_'+parseInt(playerstat.nowy+j)).css('background-color','gray');}
	else if((sn(i,j)==2)||(sn(i,j)==26)||(sn(i,j)==27)||(sn(i,j)==28)){$('#'+parseInt(playerstat.nowx+i)+'_'+parseInt(playerstat.nowy+j)).css('background-color','yellow');}
	else if(sn(i,j)==5){$('#'+parseInt(playerstat.nowx+i)+'_'+parseInt(playerstat.nowy+j)).css('background-color','pink');}
	else if((sn(i,j)>=7)&&(sn(i,j)<=23)){$('#'+parseInt(playerstat.nowx+i)+'_'+parseInt(playerstat.nowy+j)).css('background-color','yellow');}
	else if(sn(i,j).length>=3){$('#'+parseInt(playerstat.nowx+i)+'_'+parseInt(playerstat.nowy+j)).css('background-color','springgreen');}
	else{$('#'+parseInt(playerstat.nowx+i)+'_'+parseInt(playerstat.nowy+j)).css('background-color','white');}

}

function slotevent(num)
{
	if(num=='2'){effectmsg("맵핵을 발견했습니다!! <br>모든 맵을 밝힙니다!!<br>"); for(var i=0; i<40; i++){for(var j=0; j<70; j++){if(slot[i][j].object=='1'){$('#'+i+'_'+j).css('background-color','gray');} else if(slot[i][j].object=='0'){$('#'+i+'_'+j).css('background-color','white');}}}}
	else if(num=='3')
	{
		effectmsg("앗! 함정입니다!! <br>시작위치로 강제이동됩니다!!<br>"); 
		colorchange();
		$('#'+parseInt(playerstat.nowx)+'_'+parseInt(playerstat.nowy)).css('background-color','white'); 
		$('#'+parseInt(playerstat.nowx)+'_'+parseInt(playerstat.nowy)).css('background-color','white');
		playerstat.nowx=playerstat.startinglocationx; playerstat.nowy=playerstat.startinglocationy;
		colorchange();
	}
	else if(num=='4'){alert("악독한 제작자가 당신 엿먹으라고\n당신의 캐릭터를 죽이고\n도망갔습니다!!\n처음부터 다시 시작합니다!!"); location.reload();}
	else if(num=='5'){alert("축하드립니다!\n미로를 클리어하셨습니다!!"); location.href="http://www.lazruby.com/Html,%20PHP/Maze/Maze.php";}
	else if((num>=7)&&(num<=14))
	{
		effectmsg("만원경을 획득하였습니다!!<br>기본 시야가 증가합니다!<br><br>[최대 시야 10칸]"); 
		playerstat.sight += (num-6); 
		if(playerstat.sight>=10){playerstat.sight=10;} 
		slot[playerstat.nowx][playerstat.nowy].object=0;
		colorchange();
	}
	else if((num>=15)&&(num<=22))
	{
		effectmsg("섬광탄을 발견했습니다!! <br>시야가 순간적으로 넓어집니다!!<br>"); 
		for(var i=-slot[playerstat.nowx][playerstat.nowy].object+14; i<slot[playerstat.nowx][playerstat.nowy].object-13; i++){for(var j=-slot[playerstat.nowx][playerstat.nowy].object+14; j<slot[playerstat.nowx][playerstat.nowy].object-13; j++){
		try{sightevent(i, j)} catch(e){}
		$('#'+playerstat.nowx+'_'+playerstat.nowy).css('background-color','violet');
		}}
		
		slot[playerstat.nowx][playerstat.nowy].object=0;
		colorchange();
	}
	else if(num=='23')
	{
		effectmsg("휴대용 폭탄을 획득하였습니다!!<br><br>Z키로 사용시<br>사방 1칸의 벽이 파괴됩니다!!"); 
		playerstat.bomb++;
		slot[playerstat.nowx][playerstat.nowy].object=0;
		colorchange();
	}
	else if(num=='24')
	{
		effectmsg("함정입니다!!<br><br>시야가 1칸 감소합니다!!"); 
		playerstat.sight--;
		if(playerstat.sight==0){playerstat.sight=1;}
		slot[playerstat.nowx][playerstat.nowy].object=0;
		colorchange();
	}
	else if(num=='25')
	{
		effectmsg("함정입니다!!<br><br>미로 제한시간이<br>30초 감소합니다!!"); 
		playerstat.timelimit-=30;
		slot[playerstat.nowx][playerstat.nowy].object=0;
	}
	else if(num=='26')
	{
		effectmsg("휴대용 섬광탄을 획득하였습니다!!<br>X키로 사용시<br>사방3칸의 시야가 밝혀집니다!!"); 
		playerstat.flash++;
		slot[playerstat.nowx][playerstat.nowy].object=0;
		colorchange();
	}
	else if(num=='27')
	{
		effectmsg("모래시계를 발견했습니다!!<br><br>미로 제한시간이<br>30초 증가합니다!!"); 
		playerstat.timelimit+=30;
		slot[playerstat.nowx][playerstat.nowy].object=0;
	}
	else if(num=='28')
	{
		effectmsg("휴대용 포탈을 획득하였습니다!!<br>C:저장위치로 순간이동<br>A:현재위치 저장<br>초기값:시작위치"); 
		slot[playerstat.nowx][playerstat.nowy].object=0;
		playerstat.portal++;
		if(playerstat.portalx==-1){playerstat.portalx=playerstat.startinglocationx; playerstat.portaly=playerstat.startinglocationy;}
		colorchange();
	}
	else if(sn(0,0).length>=3)
	{ 
		colorchange();
		var portaltemp = slot[playerstat.nowx][playerstat.nowy].object.split('p');
		effectmsg("<br>포탈을 발견했습니다!!"); 
		$('#'+parseInt(playerstat.nowx)+'_'+parseInt(playerstat.nowy)).css('background-color','springgreen'); 
		playerstat.nowx=Number(portaltemp[0]); playerstat.nowy=Number(portaltemp[1]);
		colorchange();
	}
	else if(num=='31')
	{
		effectmsg("함정을 발견했습니다!<br>소지중인 휴대용폭탄의 갯수가<br>1개 감소합니다!!<br>(소지중일 경우)"); 
		slot[playerstat.nowx][playerstat.nowy].object=0;
		if(playerstat.bomb>=1){playerstat.bomb--;}
	}
	else if(num=='32')
	{
		effectmsg("함정을 발견했습니다!<br>소지중인 휴대용섬광탄의 갯수가<br>1개 감소합니다!!<br>(소지중일 경우)"); 
		slot[playerstat.nowx][playerstat.nowy].object=0;
		if(playerstat.flash>=1){playerstat.flash--;}
	}
	else if(num=='33')
	{
		effectmsg("함정을 발견했습니다!<br>소지중인 휴대용포탈의 갯수가<br>1개 감소합니다!!<br>(소지중일 경우)"); 
		slot[playerstat.nowx][playerstat.nowy].object=0;
		if(playerstat.portal>=1){playerstat.portal--;}
	}
}

function useitem(e)
{
	if((key[90])&&(playerstat.bomb>=1))
	{
		for(var i=-1; i<2; i++){for(var j=-1; j<2; j++){
			try{slot[playerstat.nowx+i][playerstat.nowy+j].object=0;}catch(e){}
		}}
		effectmsg("휴대용 폭탄을 사용하였습니다!!<br><br>사방 1칸의 벽이 파괴됩니다!!"); 
		playerstat.bomb--;
		colorchange();
	}
	else if((key[88])&&(playerstat.flash>=1))
	{
		for(var i=-3; i<4; i++){for(var j=-3; j<4; j++){
			try{sightevent(i, j);}catch(e){}
		}}
		effectmsg("휴대용 섬광탄을 사용하였습니다!!<br><br>사방 3칸의 시야가 밝혀집니다!!"); 
		playerstat.flash--;
		colorchange();
	}
	else if((key[65])&&(playerstat.portal>=1))
	{
		effectmsg("<br>현재 위치를 저장합니다!!");

		playerstat.portalx=playerstat.nowx; playerstat.portaly=playerstat.nowy;
	}
	else if((key[67])&&(playerstat.portal>=1))
	{
		effectmsg("휴대용 포탈을 사용하였습니다!!<br><br>저장한 위치로 이동합니다!!");
		playerstat.portal--;
		colorchange();
		$('#'+parseInt(playerstat.nowx)+'_'+parseInt(playerstat.nowy)).css('background-color','white'); 
		$('#'+parseInt(playerstat.nowx)+'_'+parseInt(playerstat.nowy)).css('background-color','white');
		playerstat.nowx=playerstat.portalx; playerstat.nowy=playerstat.portaly;
		colorchange();
	}
	else if(key[81]){alert(nowxi(0)+"/"+nowyj(0))}
}

//////////////////////////////////////////////////////////////

function effectmsg(msg)
{
	$('#msgarea').html("<br>");
	$('#msgarea').append(msg);
	$('#msgarea').append("<br>");
	
	$('#msgarea').animate({width:"280px", height:"150px"},200,function(){$('#msgarea').animate({width:"330px", height:"200px"},200);});
}

//////////////////////////////////////////////////////////

function test(){
console.log(slot[playerstat.nowx+1][playerstat.nowy].object);
console.log(slot[playerstat.nowx][playerstat.nowy+1].object);
console.log(slot[playerstat.nowx-1][playerstat.nowy].object);
console.log(slot[playerstat.nowx][playerstat.nowy-1].object);}