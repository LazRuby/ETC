
var allscript = $('#textscript').html();		//스크립트 전체 읽어옴
var startindex = 0;							    //스토리 진행 처음위치 
var lastindex = 0;							    //스토리 진행 끝날위치
var println = "";							    //처음-끝을 allscript에서 뽑아와 이곳에 저장
var finalscript = new Array();				    //println을 각 (누구-대사-이미지) 단위로 나눠 저장
var storytemp = new Array();				    //storystart함수에서 누구-대사-이미지를 각각 잠시 저장할 배열
var storywhere = 0;							    //story진행중 어디인지 표시

$('#textscript').remove();

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
		
window.onload = function() 
{ 
    $('#storyarea').bind('click', function(){ storystart(); }) 
    	
    startindex = allscript.indexOf("#0001");	
    lastindex = allscript.indexOf("#0002");		

    println = allscript.substring(startindex + 6, lastindex-1);
    finalscript = println.split("\n");
	
    storystart();
}

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////	

function storymsg(name,string,color,size)
{
    if(string == "close")
    {
        top.window.opener = top;
        top.window.open('','_parent', '');
        top.window.close();
        return;
    }
	if (!color) { color = 'white'; }
	if (!size) { size = '1.2em' }
	
	$('#textarea').html("<b><span style='size:1.5em; color:"+color+";'>: " + name + " :</span></b><br><br><span style='font-size:"+size+"; color:"+color+";'>"+string+"</span><br>");
}

function storystart()
{
	if(storywhere==finalscript.length-1)
	{
		storywhere = 0;
		return;
	}
	
	var storystaningimgtemp = new Array();		//스탠딩 이미지 누구누구인지 배열로 저장
	
	storytemp = finalscript[storywhere].split("/");
	try{storystandingimg = storytemp[2].split("o")} catch(e){}
	
	//////////////////////////////////////////////////////////////
	
	if(storytemp[0]=="모니카"){storytemp[10]="red"}
	else if(storytemp[0]=="달타냥"){storytemp[10]="blue"}
    else if(storytemp[0]=="사유리"){storytemp[10]="fuchsia"}
    else if(storytemp[0]=="System"){storytemp[10]="black"}
    
	storymsg(storytemp[0], storytemp[1], storytemp[10]);
	
	///////////////////////////////////////////////////////////////
	
	$('#chrarea').html('');
	for(var i=0; i<storystandingimg.length; i++)
	{
		//if(storystandingimg[i].length<=3){continue;}
		$('#chrarea').append('<img src="Img/' + storystandingimg[i] + '.png" class="storychrimg" style="z-index:20">')
	}
	
	storywhere ++;
}