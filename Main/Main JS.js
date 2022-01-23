
/////////////////////////////////////////////////////////////////////////////////////

var musiccount=0;
var chatcount=0;
var scrolltemp=1;

//if(sessionStorage.getItem("LoginID")==null) {location.href="http://www.lazruby.com";}
if(($(window).width()<1100)||($(window).height()<650)){location.href="http://www.lazruby.com/ETC/Size.html";}

/////////////////////////////////////////////////////////////////////////////////////

window.onload = function()
{
	$('#firststart').bind('click',function()
	{
		var myDate = new Date();
		
		//$('nav ul').html('<li>Introduction</li>  <li>About me</li>  <li>Relationship</li>  <li>Dream</li>'); 
		//$('nav li').bind('click',function(){articlechange($(this).text())});
		
		$('nav').css('background', 'url("../Img/Moon Slash.gif?' + myDate.getTime() + '") no-repeat center center');
		setTimeout(function(){$('nav').css('background', '')}, 1000)
		$('nav').css('background-size', '110% 110%');
		
		articlechange($(this).text());
		//$('nav li').hover(function(){$(this).css('color','red')}, function(){$(this).css('color','black')});
	});
	$('#MainBanner').bind('click',function(){window.location.reload() /*$('body').css('filter','invert()')*/});
	$(document).bind('keydown',function(e){		if( e.keyCode == 123 ){e.preventDefault(); e.returnValue = false;}	 });
	window.addEventListener('resize', function()
			{if(($(window).width()<1100)||($(window).height()<650)){location.href="http://www.lazruby.com/ETC/Size.html";}}, false);
}

/////////////////////////////////////////////////////////////////////////////////////

$(window).scroll(function () 
{
	if(($(document).scrollTop()<445)&&(scrolltemp==0))
	{
		$('nav').css("-webkit-border-image","url(../Img/Border.png) 50");
		$('nav li').css('color','white');
		$('body').css("animation","toblack 1s forwards");
		$('header img').css("animation","headerimgtoblack 0.8s forwards");
		$('article').css("-webkit-border-image", "url(../Img/Article_Border.png) 50");
		$('#Msg').css('background','url(../Img/Msg.png)').css('background-size','100% 100%');
		$('#Msg').css('color','white');
		$('footer').css('color','white');
		$('#Whitebackground').css('animation','opacitytozero 1s forwards');	
		$('nav li').hover(function(){$(this).css('color','red')}, function(){$(this).css('color','white')});
		
		if($('#msgspan').css('color')!='rgb(255, 0, 0)'){$('#msgspan').css('color','white');}
		
		scrolltemp=1;
	}
	else if(($(document).scrollTop()>=445)&&(scrolltemp==1))
	{
		$('nav').css("-webkit-border-image","url(../Img/Border_Black.png) 50");
		$('nav li').css('color','black');
		$('body').css("animation","towhite 1.5s forwards");
		$('header img').css("animation","headerimgtowhite 1s forwards");
		$('article').css("-webkit-border-image", "url(../Img/Article_Border_Black.png) 50");
		$('#Msg').css('background','url(../Img/Msg_Black.png)').css('background-size','100% 100%');
		$('#Msg').css('color','black');
		$('footer').css('color','black');
		$('#Whitebackground').css('animation','opacitytoseven 1s forwards');	
		$('nav li').hover(function(){$(this).css('color','red')}, function(){$(this).css('color','black')});
		
		scrolltemp=0;
	}
	
	if($(document).scrollTop()<445){$('#Navselection').hide();}
	else{$('#Navselection').show();}
});

//////////////////////////////////////////////////////////////////////////////////////

function articlechange(pointer)
{
	var wh = window.innerHeight*0.65;
	
	$('article').html('');
	 
	if($('article').css('min-height')!="0px")
	{
		$('article').animate({'min-height':"0px"}, 500, function()
		{
			$('article').animate({'min-height':wh}, 700, function()
			{ 
				$('html, body').animate({scrollTop : wh-wh*0.15}, 300, function(){articleinput(pointer);})
			})
		});
	}
	else
	{
		$('article').animate({'min-height':"0px"}, 500, function()
		{
			$('article').animate({'min-height':wh}, 700, function()
			{ 
				$('html, body').animate({scrollTop : wh-wh*0.15}, 300, function(){articleinput(pointer);})
				
				$('#Chrlocation').html('<img src="../Img/Kagura.png" id="ChrImg"><div id="Msg"></div>');
				$('#ChrImg').bind('click',function(){RandomMsg(parseInt(Math.random()*50));})
				$('.navclass').unbind('click').bind('click',function(){navchange($(this).text())});
				$('#Navselection ul li:nth-child(4)').unbind('click').bind('click',function(){chat();});
				RandomMsg(0);
			})
		});
	}
}

function navchange(what)
{
	var wh = window.innerHeight*0.65;
	
	if(what=="노래 바꿔줘"){musicchange(); return;}
	
	var myDate = new Date();
	
	$('article').html('');
	
	$('article').animate({'min-height':"0px"}, 500, function()
	{	
		$('nav').css('background', 'url("../Img/Moon Slash.gif?' + myDate.getTime() + '") no-repeat center center');
		$('nav').css('background-size', '110% 110%');
				
		$('article').animate({'min-height':wh}, 1200, function()
		{ 
			$('nav').css('background', '');
			$('html, body').animate({scrollTop : wh-wh*0.15}, 300, function()
			{
				if(what=="소개페이지를 보여줘"){articleinput("Introduction");}
				else if(what=="게임하고싶어"){articleinput("Game");}
				else if(what=="갤러리를 보고싶어"){articleinput("Gallery");}

			})
		})
		
		$('nav ul').html('');
		
		if(what=="소개페이지를 보여줘"){$('nav ul').append('<li>Introduction</li>  <li>About me</li>  <li>Relationship</li>  <li>Dream</li>');}
		else if(what=="게임하고싶어"){$('nav ul').append('<li>Flash</li>  <li>Maze</li>  <li>Survival</li>');}
		else if(what=="갤러리를 보고싶어"){$('nav ul').append('<li>Picture</li>  <li>Illustration</li>  <li>Comic</li>');}

		$('nav li').bind('click',function(){articlechange($(this).text())});
	});
}

function audiohtml(musicname) 
{$('#Music').html('<audio controls autoplay loop><source src="../Sound/' + musicname + '.mp3" type="audio/mp3"></audio>')}

function musicchange()
{	
	musiccount++;
	
	if(musiccount==1){audiohtml("Spiral Moon");}	else if(musiccount==2){audiohtml("Our Monents Never End");}	
	else if(musiccount==3){audiohtml("Windfall");}	else if(musiccount==4){audiohtml("Candyland");}	
	else{audiohtml("Full Moon"); musiccount=0;}
	
	$('audio').css('width','100%')
}

///////////////////////////////////////////////////////////////////////////////////////////

function scrolltop(){var wh = window.innerHeight*0.65; $('html, body').animate({scrollTop : wh-wh*0.15}, 300);}

