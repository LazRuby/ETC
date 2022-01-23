
///////////////////////////////////////////////////////////////////////////////

var slot=new Array();
var tempsave=new Array();					//0=맵메이킹 시작좌표a / 1=맵메이킹 시작좌표b
var mousestat=0, mousestat2=1;				// making html,php 변경 / 아래 맵 그리기 변경 / 더 아래 클릭시 이벤트 변경
var targeta,targetb;
var sight=1;
var portalout=new Array();

var makingslot=0;
///////////////////////////////////////////////////////////////////////////////

function rootmaking()
{
	if(dbcodeload.length<10)
	{
		$("#Area").html('<table>');
		
		for(var i=0; i<40; i++)
		{	
			slot[i] = new Array();
			$("#Area").append('<tr>');
			for(var j=0; j<70; j++)
			{
				slot[i][j]={object:1, sub:""}
				$("#Area").append('<td id='+i+'_'+j+' onmouseover="javascript:targeta='+i+'; targetb='+j+';"></td>');
			}	
			$("#Area").append('</tr>');
		}
	
		$("#Area").append('</table>');
	}
	else
	{	
		var slottemp = dbcodeload.split('_');
		
		$("#Area").html('<table>');
		
		for(var i=0; i<40; i++)
		{	
			slot[i] = new Array();
			$("#Area").append('<tr>');
			for(var j=0; j<70; j++)
			{
				slot[i][j]={object:slottemp[j+i*70], sub:""}
				$("#Area").append('<td id='+i+'_'+j+' onmouseover="javascript:targeta='+i+'; targetb='+j+';"></td>');
				
				if(slot[i][j].object=='0'){$('#'+i+'_'+j).css('background-color','white');}else if(slot[i][j].object=='1'){$('#'+i+'_'+j).css('background-color','gray');}
				else if((slot[i][j].object=='2')||(slot[i][j].object=='26')||(slot[i][j].object=='27')||(slot[i][j].object=='28'))
				{$('#'+i+'_'+j).css('background-color','yellow');}
				else if((slot[i][j].object=='3')||(slot[i][j].object=='4')||(slot[i][j].object=='24')||(slot[i][j].object=='25')||(slot[i][j].object=='31')||(slot[i][j].object=='32')||(slot[i][j].object=='33'))
				{$('#'+i+'_'+j).css('background-color','red');}
				else if(slot[i][j].object=='5'){$('#'+i+'_'+j).css('background-color','pink');}else if(slot[i][j].object=='6'){$('#'+i+'_'+j).css('background-color','violet'); tempsave[0]=i; tempsave[1]=j;}
				else if((slot[i][j].object>=7)&&(slot[i][j].object<=23)){$('#'+i+'_'+j).css('background-color','yellow');}
				else if(slot[i][j].object=='29'){$('#'+i+'_'+j).css('background-color','springgreen');}
				else {$('#'+i+'_'+j).css('background-color','springgreen');}
				
				$("#Area").append('</tr>');
			}
		}
	
		$("#Area").append('</table>');
	}
}

///////////////////////////////////////////////////////////////////////////////

var makingloop = setInterval("mousemaking(targeta, targetb)", 5);

function mousemaking(a, b)
{
	if((mousestat==0)||(mousestat2==0)){return;}
	
	if($("input[name=paletteoption]:checked").val()=="pload")	
	{
		slot[a][b].object = 0;
		$('#'+a+'_'+b).css('background-color','white');			// 길
	}
	else if($("input[name=paletteoption]:checked").val()=="pwall")
	{
		slot[a][b].object = 1;
		$('#'+a+'_'+b).css('background-color','gray');			// 벽
	}
	else if($("input[name=paletteoption]:checked").val()=="pmaphack")
	{
		slot[a][b].object = 2;
		$('#'+a+'_'+b).css('background-color','yellow');		// 아이템 : 모든 맵 보이기
	}
	else if($("input[name=paletteoption]:checked").val()=="prestart")
	{
		slot[a][b].object = 3;
		$('#'+a+'_'+b).css('background-color','red');			// 함정 : 시작 위치로
	}
	else if($("input[name=paletteoption]:checked").val()=="pgameover")
	{
		slot[a][b].object = 4;
		$('#'+a+'_'+b).css('background-color','red');			// 함정 : 게임 오버
	}
	else if($("input[name=paletteoption]:checked").val()=="pgoal")
	{
		slot[a][b].object = 5;
		$('#'+a+'_'+b).css('background-color','pink');			// 오브젝트 : 골인지점
	}
	else if($("input[name=paletteoption]:checked").val()=="pstarting")
	{
		try
		{
			slot[tempsave[0]][tempsave[1]].object=0;
			$('#'+tempsave[0]+'_'+tempsave[1]).css('background-color','white');
		}
		catch(e){}
		finally
		{
			slot[a][b].object = 6;
			tempsave[0]=a; tempsave[1]=b;
			$('#'+a+'_'+b).css('background-color','violet');			// 오브젝트 : 시작지점
		}
	}
	else if($("input[name=paletteoption]:checked").val()=="psight")
	{
		slot[a][b].object =parseInt($("#sightrange option:selected").val()) + 6;
		$('#'+a+'_'+b).css('background-color','yellow');			// 오브젝트 : 시야증가	7~14
	}
	else if($("input[name=paletteoption]:checked").val()=="pflash")
	{
		slot[a][b].object = parseInt($("#flashrange option:selected").val()) + 14
		$('#'+a+'_'+b).css('background-color','yellow');			// 오브젝트 : 섬광탄 15~22
	}
	else if($("input[name=paletteoption]:checked").val()=="pbomb")
	{
		slot[a][b].object = 23
		$('#'+a+'_'+b).css('background-color','yellow');			// 아이템, 폭탄
	}
	else if($("input[name=paletteoption]:checked").val()=="psightminus")
	{
		slot[a][b].object = 24
		$('#'+a+'_'+b).css('background-color','red');			// 시야 1칸 감소
	}
	else if($("input[name=paletteoption]:checked").val()=="ptimeminus")
	{
		slot[a][b].object = 25
		$('#'+a+'_'+b).css('background-color','red');			// 시간제한 -30초
	}
	else if($("input[name=paletteoption]:checked").val()=="ppocketflash")
	{
		slot[a][b].object = 26
		$('#'+a+'_'+b).css('background-color','yellow');			// 휴대용 섬광탄
	}
	else if($("input[name=paletteoption]:checked").val()=="ptimeplus")
	{
		slot[a][b].object = 27
		$('#'+a+'_'+b).css('background-color','yellow');			// 시간 추가
	}
	else if($("input[name=paletteoption]:checked").val()=="ppocketportal")
	{
		slot[a][b].object = 28
		$('#'+a+'_'+b).css('background-color','yellow');			// 휴대용 섬광탄
	}
	else if($("input[name=paletteoption]:checked").val()=="pportalout")
	{
		try
		{
			var portalouttemp = portalout[$('#portalouttext').val()].split('p');
			slot[portalouttemp[0]][portalouttemp[1]].object = 0;
			$('#'+portalouttemp[0]+'_'+portalouttemp[1]).css('background-color','white');
		}catch(e){}
		slot[a][b].object = 29
		portalout[$('#portalouttext').val()]=a+"p"+b;
		$('#'+a+'_'+b).css('background-color','springgreen');			// 포탈 출구
	}
	else if($("input[name=paletteoption]:checked").val()=="pportalin")
	{	
		try
		{
			if(portalout[$('#portalintext').val()].length<=1){}
			
			slot[a][b].object = portalout[$('#portalintext').val()];
			$('#'+a+'_'+b).css('background-color','springgreen');			// 포탈 입구
		}
		catch(e){$('#pportalin').attr("checked", false);}	
	}
	else if($("input[name=paletteoption]:checked").val()=="pcheck")
	{
		console.log(slot[a][b].object);									// 디버깅용
	}
	else if($("input[name=paletteoption]:checked").val()=="pbombminus")
	{
		slot[a][b].object = 31;
		$('#'+a+'_'+b).css('background-color','red');			// 휴대용 폭탄 감소
	}
	else if($("input[name=paletteoption]:checked").val()=="pflashminus")
	{
		slot[a][b].object = 32;
		$('#'+a+'_'+b).css('background-color','red');			// 휴대용 섬광탄 감소
	}
	else if($("input[name=paletteoption]:checked").val()=="pportalminus")
	{
		slot[a][b].object = 33;
		$('#'+a+'_'+b).css('background-color','red');			// 휴대용 포탈 감소
	}
}

////////////////////////////////////////////////////////////////////////////////

function bigevent(num)
{
	if(num==1)
	{
		if(confirm("정말 전체를 길로 바꾸시겠습니까?"))
		{
			for(var i=0; i<40; i++){for(var j=0; j<70; j++){
			slot[i][j].object=0; $('#'+i+'_'+j).css('background-color','white');}}
		}
	}
	else if(num==2)
	{
		if(confirm("정말 전체를 벽으로 바꾸시겠습니까?"))
		{
			for(var i=0; i<40; i++){for(var j=0; j<70; j++){
			slot[i][j].object=1; $('#'+i+'_'+j).css('background-color','gray');}}
		}
	}
	else{alert("귀찮으니까 이기능 안만들게요. 어차피 안쓸텐데.")}
	
}

//////////////////////////////////////////////////////////////////////////////////

function savecode()
{
	var dbcode = "";
	
	for(var i=0; i<40; i++){for(var j=0; j<70; j++){dbcode = dbcode + slot[i][j].object + "_";}}
	
	$("#savecodeslot").attr('value',dbcode);
	$("#palettee").css("z-index","50");
}

function loadcode()
{
	$("#savecodeslot").css("opacity","0");
	$("#palettee").css("z-index","50");
	
	$("input[name=savecodeslot]").attr('value','');
}

function press(f){if((event.keyCode == 13)&&($("input[name=inputid]").val().length>=3)&&($("input[name=inputpass]").val().length>=3)){if((tempsave[0]==null)||(tempsave[1]==null)){if($('input[name=savecodeslot]').val().length>5){alert("시작지점이 없습니다!!"); return;}} Mazeform.submit();}else if(event.keyCode == 13){alert("ID/Password 는 \n최소 3글자 이상\n써주셔야 합니다!!");}}
function press2(){if(($("input[name=inputid]").val().length>=3)&&($("input[name=inputpass]").val().length>=3)){if((tempsave[0]==null)||(tempsave[1]==null)){if($('input[name=savecodeslot]').val().length>5){alert("시작지점이 없습니다!!"); return;}} Mazeform.submit();}else{alert("ID/Password 는 \n최소 3글자 이상\n써주셔야 합니다!!");}}

//////////////////////////////////////////////////////////////////////////////////

function pagemove(num)
{
	if(num=="a"){$("#palettea").css("z-index","10"); $("#paletteb").css("z-index","0"); $("#palettec").css("z-index","0"); $("#paletted").css("z-index","0"); $("#palettee").css("z-index","0");}
	else if(num=="b"){$("#palettea").css("z-index","0"); $("#paletteb").css("z-index","10"); $("#palettec").css("z-index","0"); $("#paletted").css("z-index","0"); $("#palettee").css("z-index","0");}
	else if(num=="c"){$("#palettea").css("z-index","0"); $("#paletteb").css("z-index","0"); $("#palettec").css("z-index","10"); $("#paletted").css("z-index","0"); $("#palettee").css("z-index","0");}
	else if(num=="d"){$("#palettea").css("z-index","0"); $("#paletteb").css("z-index","0"); $("#palettec").css("z-index","0"); $("#paletted").css("z-index","10"); $("#palettee").css("z-index","0");}
}

rootmaking();