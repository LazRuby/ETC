
var allscript = $('#textscript').html();		//스크립트 전체 읽어옴
var startindex = 0;							//스토리 진행 처음위치 
var lastindex = 0;							//스토리 진행 끝날위치
var println = "";							//처음-끝을 allscript에서 뽑아와 이곳에 저장
var finalscript = new Array();				//println을 각 (누구-대사-이미지) 단위로 나눠 저장
var storytemp = new Array();				//storystart함수에서 누구-대사-이미지를 각각 잠시 저장할 배열
var storywhere = 0;							//story진행중 어디인지 표시


$('#textscript').remove();

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

function story(where)
{
	var nextcount = 0;
	
	if(where=="메인")
	{
		if(mainstory==1)
		{
			startindex = allscript.indexOf("#0004");	lastindex = allscript.indexOf("#0005");		nextcount++;
			mainstory++;	msg("관찰을 실행해주세요.", "red");
		}
		else if(mainstory==2)
		{
			startindex = allscript.indexOf("#0005");	lastindex = allscript.indexOf("#0006");		nextcount++;
			mainstory++;	msg("탐색을 실행해주세요.", "red");
		}	
		else if(mainstory==4)
		{
			startindex = allscript.indexOf("#0006");	lastindex = allscript.indexOf("#0007");		nextcount++;
			mainstory++;	msg("건설 - 모닥불을 만들어주세요.", "red");
		}
		else if(mainstory==5)
		{
			startindex = allscript.indexOf("#0007");	lastindex = allscript.indexOf("#0008");		nextcount++;
			mainstory++;	msg("성장 - 레이무 레벨을 3까지 올려주세요.", "red");
		}
		else if(mainstory==6)
		{
			startindex = allscript.indexOf("#0008");	lastindex = allscript.indexOf("#0009");		nextcount++;
			mainstory++;	msg("이동 - 숲으로 이동해주세요.", "red");
		}
		else if(mainstory==7)
		{
			startindex = allscript.indexOf("#0009");	lastindex = allscript.indexOf("#0010");		nextcount++;
			mainstory++;	msg("관찰을 실행해주세요.", "red");
		}
	}	
	else if(where=="하쿠레이 레이무")
	{
		if(chrlovelv.reimu==0)
		{
			startindex = allscript.indexOf("#0001");
			lastindex = allscript.indexOf("#0002");
			
			nextcount++;
		}
	}
	else if(where=="키리사메 마리사")
	{
		if(chrlovelv.marisa==0)
		{
			startindex = allscript.indexOf("#0002");	
			lastindex = allscript.indexOf("#0003");
			
			supporter[1].lv++;
			msg(supporter[1].name + "가 아군으로 합류했습니다.", "blue");
			allload();	chrview("statdetail");
			homeview();	nextcount++;
		}
		else if(chrlovelv.marisa==1)
		{
			startindex = allscript.indexOf("#0003");	
			lastindex = allscript.indexOf("#0004");
			
			nextcount++;
		}
	}
	else if(where=="마가트로이드 앨리스")
	{
		if(chrlovelv.alice==0)
		{
			startindex = allscript.indexOf("#0010");
			lastindex = allscript.indexOf("#0011");
			
			nextcount++;	chrlovelv.alice++;
		}
		else if(chrlovelv.alice==1)
		{
			startindex = allscript.indexOf("#0011");
			lastindex = allscript.indexOf("#0012");
			
			supporter[2].lv++;
			msg(supporter[2].name + "가 아군으로 합류했습니다.", "blue");
			allload();	chrview("statdetail");
			homeview();	nextcount++;
			chrlovelv.alice++;
		}
	}
	
	if(nextcount==1)
	{
		println = allscript.substring(startindex + 6, lastindex-1);
		finalscript = println.split("\n");
		bigareachange("storyarea");
		$('#chrarea').css('background','url("Img/' + nowlocation + '.jpg")');
		$('#chrarea').css('background-size','75vw 55vh');
		$('body').css('background','url("Img/배경.png")');
	
		storystart();
	}
}

/////////////////////////////////////////////////////////			4. 대사창 이미지 추가
/////////////////////////////////////////////////////////	

function storymsg(name,string,color,size)
{
	if (!color) { color = 'white'; }
	if (!size) { size = '1.2em' }
	
	$('#textarea').html("<br><b><span style='size:1.5em; color:"+color+";'>: " + name + " :</span></b><br><br><span style='font-size:"+size+"'>"+string+"</span><br>");
}

function storystart()
{
	if(storywhere==finalscript.length-1)
	{
		storywhere = 0;
		bigareachange("main");
		$('body').css("background-image", "url(Img/" + nowlocation + ".jpg)"); 
		$('body').css('background-size','100vw 100vh');
		$('#chrarea').html('');
		return;
	}
	
	var storystaningimgtemp = new Array();		//스탠딩 이미지 누구누구인지 배열로 저장
	
	storytemp = finalscript[storywhere].split("/");
	try{storystandingimg = storytemp[2].split(",")} catch(e){}
	
	//////////////////////////////////////////////////////////////
	
	if(storytemp[0]=="하쿠레이 레이무"){storytemp[10]="red"}
	else if(storytemp[0]==""){storytemp[0]=player.name}
	else if(storytemp[0]=="키리사메 마리사"){storytemp[10]="blue"}
	
	storymsg(storytemp[0], storytemp[1], storytemp[10]);
	
	///////////////////////////////////////////////////////////////
	
	$('#chrarea').html('');
	for(var i=0; i<storystandingimg.length; i++)
	{
		if(storystandingimg[i].length<=3){continue;}
		$('#chrarea').append('<img src="Chr/' + storystandingimg[i] + '.png" class="storychrimg" style="z-index:20">')
	}
	
	if(storytemp[3]==""){$('#facearea').html('<img src="Chr/' + storystandingimg[0] + 's.png" style="width:100%; height:100%">');}
	else{$('#facearea').html('<img src="Chr/' + storytemp[3] + 's.png" style="width:100%; height:100%">');}
	
	storywhere ++;
}