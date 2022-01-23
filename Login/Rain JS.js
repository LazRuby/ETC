
////////////////////////////////////////////////////////////////////////////////////////////////////////

var canvas = document.getElementById('sky');
var sky = canvas.getContext('2d');
	
var window_width = window.innerWidth * 1.5;
var window_height = window.innerHeight * 1.5;
		
var fall_speed = 0.7;
var wind_speed = 5;
	
var rain_weight = 0.11;
var rain_color = '255,255,255';
	
var drop_count;
var drops = [];
		
var picchangenum = 0;
var smallmenu = 0;

var agent = navigator.userAgent.toLowerCase();

var musiccount = 0;

var filter = "win16|win32|win64|mac|macintel"; 

////////////////////////////////////////////////////////////////////////////////////////////////////////

window.onload = function() {
	window.addEventListener('resize', resizer, false);
	$("*").keyup(function (e){if(e.keyCode == 13){loginform.submit();}});
	$('#loginimg').bind('mouseover',function(){$('#loginimg').attr('src','/Img/Login Icon2.png');})
	$('#musicimg').bind('mouseover',function(){$('#musicimg').attr('src','/Img/Music Icon2.png');})
	$('#loginimg').bind('mouseout',function(){$('#loginimg').attr('src','/Img/Login Icon.png');})
	$('#musicimg').bind('mouseout',function(){$('#musicimg').attr('src','/Img/Music Icon.png');})
	$('#loginimg').bind('click', createid);
	$('#musicimg').bind('click', musicchange);
	
	resizer();
	paintSky();
	$("#loginslot").css("margin-left", window.innerWidth-152);
	$("#musicslot").css("margin-left", window.innerWidth-300);
	setTimeout(function(){picchange();}, 8000);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////

if ( navigator.platform ) 
{
	if ( filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) 
	{
		$('html').html("");
		alert("죄송합니다! \n모바일은 현재 지원하지 않습니다! \n \nSorry! \nWe do not yet support mobile!") ;
				
		top.window.opener = top; 
		top.window.open('','_parent', ''); 
		top.window.close();
				
		self.opener=self;
		window.close();
	}
}

if (!(agent.indexOf("chrome") != -1)) 
{
	$('html').html("");
	alert("죄송합니다! \n이곳은 한 학생의 학습용\n웹사이트이기 때문에 \n크롬 외에는 지원하지 않습니다!!\n \nSorry! \nThis site is a learning site who one student. \nso, It is not supported except of Chrome.");
	
	top.window.opener = top; 
	top.window.open('','_parent', ''); 
	top.window.close();
	
	self.opener=self;
	window.close();
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

window.requestAnimFrame = (function()
{
	return	window.requestAnimationFrame       ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame    ||
			window.msRequestAnimationFrame     ||
			window.oRequestAnimationFrame      ||
	function( callback ){window.setTimeout(callback, 1000 / 60);};
})();

function randomFrom(min, max) {return (Math.random() * (max - min) + min);}

function resizer() 
{
	if(window.innerWidth<799){window.resizeTo(800,600);}
	else if(window.innerHeight<599){window.resizeTo(800,600);}
	$("#loginslot").css("margin-left", window.innerWidth-152); 
	$("#musicslot").css("margin-left", window.innerWidth-300);
	$("#loginimg").css("margin-left", window.innerWidth-205);
	$("#musicimg").css("margin-left", window.innerWidth-255);
	
  	window_width = window.innerWidth * 1.5;
  	window_height = window.innerHeight * 1.5;
  	drop_count = window_width * rain_weight;
  
  	canvas.setAttribute('width', window_width);
  	canvas.setAttribute('height', window_height);
}

function paintSky() 
{
  	for (var i = 0; i < drop_count; i++) 
  	{
  		drops[i] = new drop();
		drops[i].reset();
 	}
  	rain();
}

function rain() 
{
	sky.clearRect(0, 0, window_width, window_height);

	var drops_length = drops.length;

	for (var i = 0; i < drops_length; i++) 
	{
		var drop = drops[i];
		drop.fall();
		drop.draw();
	}

	window.requestAnimFrame(rain);
}

function drop() 
{
	this.reset = function() 
	{
		this.r = randomFrom(0.8, 1.6);
		this.l = (this.r * 250);
		this.x = randomFrom((window_width * -0.25), (window_width * 1.125));
		this.y = randomFrom((window_height * -0.25), (window_height * -1));
		this.dx = randomFrom((wind_speed - 3), (wind_speed + 3));
		this.dy = (this.r * (100 * fall_speed));
		this.offset = (this.l * (this.dx / this.dy));
		this.opacity = (this.r * randomFrom(0.2, 0.6));
		this.drip = this.render();
	};
  
 	this.render = function() 
 	{
		var canv = document.createElement('canvas');
		var ctx = canv.getContext('2d');
		canv.setAttribute('width', Math.abs(this.offset) + this.r);
		canv.setAttribute('height', this.l);
    
		ctx.beginPath();
    
		var drip = ctx.createLinearGradient(0, 0, 0, this.l);
		drip.addColorStop(0, 'rgba(' + rain_color + ', 0)');
		drip.addColorStop(1, 'rgba(' + rain_color + ', ' + this.opacity + ')');
		ctx.fillStyle = drip;
        
		var startX = (this.offset >= 0) ? 0 : Math.abs(this.offset);
		ctx.moveTo(startX, 0);
		ctx.lineTo(startX + this.r, 0);
		ctx.lineTo(startX + this.r + this.offset, this.l);
		ctx.lineTo(startX + this.offset, this.l);

		ctx.closePath();
		ctx.fill();
    
		 return canv;
	};
  
	this.draw = function() {sky.drawImage(this.drip, this.x, this.y);};
  
	this.fall = function() 
	{
		this.x += this.dx;
		this.y += this.dy;
    
		if (this.y > (window_height * 1.25)) {this.reset();}
	};
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
		
function picchange()
{
	setTimeout(function(){picchange()}, 8000);
	
	if(picchangenum==0){ $('#imga').animate({ opacity: 0}, 1000, function(){}); $('#imgb').animate({ opacity: 1}, 1000, function() { $("#imga").attr("src","../Img/back3.jpg"); picchangenum=1;});}
	else if(picchangenum==1){$('#imga').animate({ opacity: 1}, 1000, function(){}); $('#imgb').animate({ opacity: 0}, 1000, function() {$("#imgb").attr("src","../Img/back4.jpg"); picchangenum=2;});}
	else if(picchangenum==2){$('#imga').animate({ opacity: 0}, 1000, function(){}); $('#imgb').animate({ opacity: 1}, 1000, function() {$("#imga").attr("src","../Img/back5.jpg"); picchangenum=3;});}
	else if(picchangenum==3){$('#imga').animate({ opacity: 1}, 1000, function(){}); $('#imgb').animate({ opacity: 0}, 1000, function() {$("#imgb").attr("src","../Img/back6.jpg"); picchangenum=4;});}
	else if(picchangenum==4){$('#imga').animate({ opacity: 0}, 1000, function(){}); $('#imgb').animate({ opacity: 1}, 1000, function() {$("#imga").attr("src","../Img/back7.jpg"); picchangenum=5;});}
	else if(picchangenum==5){$('#imga').animate({ opacity: 1}, 1000, function(){}); $('#imgb').animate({ opacity: 0}, 1000, function() {$("#imgb").attr("src","../Img/back8.jpg"); picchangenum=6;});}
	else if(picchangenum==6){$('#imga').animate({ opacity: 0}, 1000, function(){}); $('#imgb').animate({ opacity: 1}, 1000, function() {$("#imga").attr("src","../Img/back9.jpg"); picchangenum=7;});}
	else if(picchangenum==7){$('#imga').animate({ opacity: 1}, 1000, function(){}); $('#imgb').animate({ opacity: 0}, 1000, function() {$("#imgb").attr("src","../Img/back10.jpg"); picchangenum=8;});}
	else if(picchangenum==8){$('#imga').animate({ opacity: 0}, 1000, function(){}); $('#imgb').animate({ opacity: 1}, 1000, function() {$("#imga").attr("src","../Img/back11.jpg"); picchangenum=9;});}
	else if(picchangenum==9){$('#imga').animate({ opacity: 1}, 1000, function(){}); $('#imgb').animate({ opacity: 0}, 1000, function() {$("#imgb").attr("src","../Img/back12.jpg"); picchangenum=10;});}
	else if(picchangenum==10){$('#imga').animate({ opacity: 0}, 1000, function(){}); $('#imgb').animate({ opacity: 1}, 1000, function() {$("#imga").attr("src","../Img/back1.jpg"); picchangenum=11;});}
	else if(picchangenum==11){$('#imga').animate({ opacity: 1}, 1000, function(){}); $('#imgb').animate({ opacity: 0}, 1000, function() {$("#imgb").attr("src","../Img/back2.jpg"); picchangenum=0;});}
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

function createid()
{
	var popupX = (window.screen.width / 2) - (400 / 2);
	var popupY= (window.screen.height /2) - (600 / 2);
	
	window.open('Create.php','회원가입', 'width=400, height=420,  left='+ popupX + ', top='+ popupY + ', screenX='+ popupX + ', screenY= '+ popupY + ', location=no, menubar=no, status=no, toolbar=no');
}

function musicchange()
{
	if(musiccount==0){$('#musicslot').html('<audio controls autoplay loop><source src="../Sound/Spiral Moon.mp3" type="audio/mp3"></audio>'); musiccount=1;}
	else if(musiccount==1){$('#musicslot').html('<audio controls autoplay loop><source src="../Sound/Full Moon.mp3" type="audio/mp3"></audio>'); musiccount=2;}
	else {$('#musicslot').html('<audio controls autoplay loop><source src="../Sound/Our Monents Never End.mp3" type="audio/mp3"></audio>'); musiccount=0;}
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
