function RandomMsg(num)
{
	$('#Navselection ul li:nth-child(4)').html('이야기하자');
	chatcount=0;
	
	switch (num) 
	{
		case 0  : $('#Msg').html('어서오세요.' + sessionStorage.getItem("LoginID") + '님<br>접속을 환영합니다!<br>무엇을 도와드릴까요?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <small>Click!!</small> →')
				  break;
		case 1  : $('#Msg').html('안녕하세요?<br>좋은하루 보내고 계신가요?')
				  break;
		case 2  : $('#Msg').html('심심하신가봐요?')
				  break;
		case 3  : $('#Msg').html('뭐하고 계신가요?')
				  break;
		case 4  : $('#Msg').html('그렇게 계속 쳐다보시면<br>부끄러운데...')
				  break;
		case 5  : $('#Msg').html('ㅁ..만지지 말아주세요...')
				  break;
		case 6  : $('#Msg').html('흠냐흠냐...<br>나른하네요...')
				  break;
		case 7  : $('#Msg').html('흠..냐..아..!?<br>아..안졸았어요!!')
				  break;
		case 8  : $('#Msg').html('저기저저기저기,<br>배고프지 않으신가요?')
				  break;
		case 9  : $('#Msg').html('네? <br>저말고 다른 사람 있냐구요?')
				  break;
		case 10  : $('#Msg').html('오늘은 날씨가 좋은걸요?')
				  break;
		case 11  : $('#Msg').html('어제 옷 사러 갔는데 너무 비싸서 못샀어요..!')
				  break;
		case 12  : $('#Msg').html('제 이마에 부적요?<br>저도 몰라요.')
				  break;
		case 13  : $('#Msg').html('No Game, No Life...<br>가 아니라..<br>No Pain, No Gain!!')
				  break;
		case 14  : $('#Msg').html('무슨 도움이 필요하신가요?')
				  break;
		case 15  : $('#Msg').html('도대체 언제까지 누르실 생각이신가요!?')
				  break;
		case 16 : $('#Msg').html(sessionStorage.getItem("LoginID") + '~님..<br>애인 없죠...?')
				  break;
		case 17 : $('#Msg').html('제 이름이요?<br>저도 몰라요.')
				  break;
		case 18 : $('#Msg').html('제 생일이요?<br>저도 몰라요.')
				  break;
		case 19 : $('#Msg').html('혹시, 지금을 아깝다라고 생각해본적 있으신가요?')
				  break;
		case 20 : $('#Msg').html('조금 힘들다고 울지 마세요. 어차피 내일도 힘들어요.')
				  break;
		case 21 : $('#Msg').html('도망치는건 부끄러운게 아니에요!')
				  break;
		case 22 : $('#Msg').html('그나저나 이 기능은 왜 만드는걸까요?')
				  break;
		case 23 : $('#Msg').html('무언가라도 하지 않으면, 마음이 불안해져버려요.')
				  break;
		case 24 : $('#Msg').html('짜~잔~!<br>제가 왔습니다아!!')
				  break;
		case 25 : $('#Msg').html('우으.. 감기 걸렸어요..<br>콜록콜록..')
				  break;
		case 26 : $('#Msg').html('제 알바비 얼마냐구요?<br>비밀입니다!!')
				  break;
		case 27 : $('#Msg').html('사람과의 관계든, 어떠한 물체든, 굳어져버린다면 바꾸기 어려워진답니다.')
				  break;
		case 28 : $('#Msg').html('학교에서 성적이 좋다고 사회에서 꼭 인정받는건 아니에요.')
				  break;
		case 29 : $('#Msg').html('모든건 마음먹기 달렸답니다?')
				  break;
		case 30 : $('#Msg').html('살아있다면, 행복해질 기회는 언제든 찾아온답니다.')
				  break;
		case 31 : $('#Msg').html('자신을 믿으세요.')
				  break;
		case 32 : $('#Msg').html('잘못된 일에 너무 신경쓰지 마세요. 만회할 기회는 반드시 찾아온답니다.')
		 		  break;
		case 33 : $('#Msg').html('싫은 걸 억지로 해봤자 더 싫어질 뿐인데...')
		 		  break;
		case 34 : $('#Msg').html('삶은 언제나 예측불허인걸요 !')
				  break;
		case 35 : $('#Msg').html('누구나 실패를 합니다. 다만 그 실패를 어떻게 살리느냐는 다릅니다!')
			 	  break;
		case 36 : $('#Msg').html('한번 기억한건 절대 잊을 수 없어요. 기억해 내지 못할뿐.')
			 	  break;
		case 37 : $('#Msg').html('Time Waits For No One.')
		 		  break;
		case 38 : $('#Msg').html('남한테 한 소리 들었다고 바뀐다면, 당신의 인생은 누구의 것인가요?')
		 		  break;
		case 39 : $('#Msg').html('이 세상에서 만난 모든 인연이, 당신을 성장시키는 교사랍니다.')
				  break;
		case 40 : $('#Msg').html('미래는 아무도 몰라요. 그렇기에 무한한 가능성도 존재하는걸요.')
		 		  break;
		case 41 : $('#Msg').html('계획대로 되지 않는 게 인생이란건가요?')
		 		  break;
		case 42 : $('#Msg').html('소중한것은 언제나 옆에 있어요. 다만, 당연하다고 여겨 보고있지 않을뿐.')
		 		  break;
		case 43 : $('#Msg').html('어른이 되면 뭐든 할 수 있을줄 알았는데, 오히려 어릴때가 뭐든지 가능했어요.')
		 		  break;
		case 44 : $('#Msg').html('내일의 당신이, 오늘의 당신보다 성장하기를.')
		 		  break;
		case 45 : $('#Msg').html('겉모습만으로 사람을 판단하는 멍청한짓을 하고계신건 아니지요?')
		 		  break;
		case 46 : $('#Msg').html('갑자기 여행이 가고 싶어요!!')
		  		  break;
		case 47 : $('#Msg').html('전 음악중에 New Age랑 EDM을 좋아해요.')
				  break;
		case 48 : $('#Msg').html('뭔가 더 필요하신게 있다면 말해주세요.<BR>들어만 드릴게요. 후훗')
				  break;
		case 49 : $('#Msg').html('볼일이 끝나셨다면 나가주실래요?<br>퇴근하고 싶다구요!')
				  break;
		default : $('#Msg').html('사장님이 알바비를 안줘요..')
				  break;
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function chathtml(msg, navstring, color) 
{
	if(color==null){color="black";} 
	
	$('#Msg').html('<span id="msgspan" style="color:' + color + '">' + msg); 
	$('#Navselection ul li:nth-child(4)').html(navstring + '</span>');
}

function chat()
{ 
	switch (chatcount) 
	{
		case 0  : chathtml("이야기하자", "< 계속 이야기한다 >", "red");
		  break;
		case 1  : chathtml("네, 좋아요.", "여긴 뭐하는 곳이야?");
		  break;
		case 2  : chathtml("여긴 뭐하는 곳이야?", "< 계속 이야기한다 >", "red");
		  break;
		case 3  : chathtml("학습용 홈페이지에요!<br>라고 전해달라네요.!", "넌 여기서 뭐하는건데?");
		  break;
		case 4  : chathtml("넌 여기서 뭐하는건데?", "< 계속 이야기한다 >", "red");
		  break;
		case 5  : chathtml("아르바이트중이에요!<br>돈이 조금 필요해서요..", "헤에..무슨 일 하는거야?");
		  break;
		case 6  : chathtml("헤에..무슨 일 하는거야?", "< 계속 이야기한다 >", "red");
		  break;
		case 7  : chathtml("음..사용법 설명이라던가<br>위에 있는 부탁을<br>들어주는 정도에요.", "노래는 총 몇곡이야?");
		  break;
		case 8  : chathtml("노래는 총 몇곡이야?", "< 계속 이야기한다 >", "red");
		  break;
		case 9  : chathtml("현재는 5곡정도라고 하네요! 추후 추가될수도 있다고해요.", "근데 학습용 홈페이지가 뭐야?");
		  break;
		case 10  : chathtml("근데 학습용 홈페이지가 뭐야?", "< 계속 이야기한다 >", "red");
		  break;
		case 11  : chathtml("어음.. 이것저것 해보는곳. 이라는데요?", "..? 뭐야 그게?");
		  break;
		case 12  : chathtml("..? 뭐야 그게?", "< 계속 이야기한다 >", "red");
		  break;
		case 13  : chathtml("저도 모르겠어요!<br>그저 그대로 전했을 뿐이니까요.", "놀이터같은곳인가..");
		  break;
		case 14  : chathtml("놀이터같은곳인가..", "< 계속 이야기한다 >", "red");
		  break;
		case 15  : chathtml("뭐.. 비슷하지 않을까요?", "할짓없는 어른이인가보네.");
		  break;
		case 16  : chathtml("할짓없는 사람인가보네.", "< 계속 이야기한다 >", "red");
		  break;
		case 17  : chathtml("하하..그래도 아무런 가치가 없는것을 하면서", "<계속>");
		  break;
		case 18  : chathtml("시간을 보내는것보다는 좋다고 생각해요.", "헤에? 멋있는 말을 하는걸?");
		  break;
		case 19  : chathtml("헤에? 멋있는 말을 하는걸?", "< 계속 이야기한다 >", "red");
		  break;
		case 20  : chathtml("후후.. 사실 이렇게 말하고도 이게 가치가 있는 일인지는 저도 잘 모르겠네요.", "<계속>");
		  break;
		case 21  : chathtml("그런데.. 여긴 어떻게 오시게 된건가요?", "무슨뜻이야?");
		  break;
		case 22  : chathtml("무슨뜻이야?", "< 계속 이야기한다 >", "red");
		  break;
		case 23  : chathtml("듣기로는 여기, 아무에게도 주소를 알려주지 않고", "<계속>");
		  break;
		case 24  : chathtml("혼자만 사용한다고 들었거든요.", "비밀 공간이란건가?");
		  break;
		case 25  : chathtml("비밀 공간이란건가?", "< 계속 이야기한다 >", "red");
		  break;
		case 26  : chathtml("네, 게다가 어쩌다 주소를 발견해도", "<계속>");
		  break;
		case 27  : chathtml("회원가입할때 가입전용 비밀번호도 필요하잖아요.", "<계속>");
		  break;
		case 28  : chathtml("도대체 어떻게 들어오신거에요?", "아아..음.뭐.. 잘.");
		  break;
		case 29  : chathtml("아아..음.뭐.. 잘.", "< 계속 이야기한다 >", "red");
		  break;
		case 30  : chathtml("에..제 꿀알바를 방해하시고서 대답이 겨우 그거에요?", "어른의 사정이란다.");
		  break;
		case 31  : chathtml("어른의 사정이란다.", "< 계속 이야기한다 >", "red");
		  break;
		default : $('#Msg').html('(업데이트를 기다려주세요!)<br>(오른쪽 캐릭터 이미지를 클릭해도 대사가 바뀝니다!)')
		  break;
	}
	
	chatcount++;
}