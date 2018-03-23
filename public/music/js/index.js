window.onload=function(){
	$("#mc_play").css("-webkit-animation-play-state","running");
	$("#mc_play").click(function(){
		if($('#mc_play').hasClass('on')) {
			$('#mc_play audio').get(0).pause();
			$('#mc_play').attr('class', 'stop');
			$("#musicfx").paused;
		} else {
			$('#mc_play audio').get(0).play();
			$('#mc_play').attr('class', 'on');
			$("#musicfx").paused;
		}
		event.stopPropagation(); //阻止冒泡  
	});	
};
var medisArray = new Array();
function createLrc() {
    var CHlrc = "[00:00.000]当冰冷降临世间↵[00:03.030]当希望灭绝人间↵[00:05.570]我们能寄予希望的圣人↵[00:07.920]都不过是一个个无力的金铸雕像↵[00:10.950]当你的美梦沦落↵[00:13.320]当我们只得以崇拜强权↵[00:15.910]前所未有的噩梦底下↵[00:18.400]连血液都渐趋陈腐↵[00:22.480]我想要隐藏内心的真相↵[00:25.090]好构筑庇护你的天国↵[00:27.870]只是我内心的野兽凶猛强横↵[00:30.560]令到我们无处可藏↵[00:33.160]不管各自以何为食↵[00:35.770]我们同是被贪婪堆砌的动物↵[00:38.460]由我主宰的欲望王国平地而起↵[00:41.280]君临天下，唯我独尊↵[00:44.250]当你感受到我的炙热↵[00:46.790]请凝视我的双眸↵[00:49.260]我内心的恶魔就在那↵[00:51.840]它以我的心灵为居所↵[00:54.890]不要轻易靠近↵[00:57.620]里面暗无天日↵[00:59.860]我内心的恶魔就在那↵[01:02.500]我内心的恶魔就在那↵[01:05.820]当帘幕降下↵[01:06.790]一切都将宣告终结↵[01:09.070]光明渐淡↵[01:11.720]所有罪恶都蠢蠢欲动↵[01:14.490]他们翻挖你的坟墓↵[01:17.330]撕下你的伪装↵[01:19.760]我撕心裂肺地嘶吼↵[01:22.580]在因你而起的这片狼藉中↵[01:26.540]我不愿让你悲伤↵[01:29.350]但我他妈的身不由己↵[01:32.050]尽管我为你做下了一切↵[01:34.500]但我决心不再隐瞒真相↵[01:37.040]无论你我以何为生↵[01:39.780]我们都是被贪婪堆砌的动物↵[01:42.450]由我构筑起的欲望王国↵[01:45.090]它已然矗立大地，埋下一片阴影↵[01:50.400]当你感受到我的炙热↵[01:50.870]请凝视我的双眸↵[01:53.240]我内心的恶魔就在那↵[01:55.770]它就躲藏在那一方天地↵[01:58.780]不要轻易涉足↵[02:01.510]内里暗无天日↵[02:03.890]它躲藏在那里↵[02:06.450]它蛰伏在那里！↵[02:09.500]人们讥讽我咎由自取↵[02:11.860]我笑答这是命中注定↵[02:14.660]尽管灵魂深处依旧纠结↵[02:17.200]但我还是选择将你放下↵[02:19.880]你的双瞳明亮如皓日当空↵[02:22.490]我希望能将其占为己有↵[02:25.110]但我已经无从挣脱桎梏↵[02:27.770]除非你能引领我走出黑暗↵[02:31.400]当你被我的炙热明惑时↵[02:33.460]直视我的双眸↵[02:35.940]看清深藏于此的恶魔↵[02:38.480]看清它的狰狞面貌！↵[02:41.470]不要轻易接近我！↵[02:43.990]我的内心暗无天日！↵[02:46.530]因为我是恶魔寄居的容器！↵[02:49.100]因为我是被恶魔凭依的傀儡!";
    var ENlrc = "[00:00.000]When the days are cold↵[00:03.030]And the cards all fold↵[00:05.570]And the saints we see↵[00:07.920]Are all made of gold↵[00:10.950]When your dreams all fail↵[00:13.320]And the ones we hail↵[00:15.910]Are the worst of all↵[00:18.400]And the blood’s run stale↵[00:22.480]I want to hide the truth↵[00:25.090]I want to shelter you↵[00:27.870]But with the beast inside↵[00:30.560]There’s nowhere we can hide↵[00:33.160]No matter what we breed↵[00:35.770]We still are made of greed↵[00:38.460]This is my kingdom come↵[00:41.280]This is my kingdom come↵[00:44.250]When you feel my heat↵[00:46.790]Look into my eyes↵[00:49.260]It’s where my demons hide↵[00:51.840]It’s where my demons hide↵[00:54.890]Don’t get too close↵[00:57.620]It’s dark inside↵[00:59.860]It’s where my demons hide↵[01:02.500]It’s where my demons hide↵[01:05.820]When the curtain’s call↵[01:06.790]Is the last of all↵[01:09.070]When the lights fade out↵[01:11.720]All the sinners crawl↵[01:14.490]So they dug your grave↵[01:17.330]And the masquerade↵[01:19.760]Will come calling out↵[01:22.580]At the mess you made↵[01:26.540]Don’t want to let you down↵[01:29.350]But I am hell bound↵[01:32.050]Though this is all for you↵[01:34.500]Don't wanna hide the truth↵[01:37.040]No matter what we breed↵[01:39.780]We still are made of greed↵[01:42.450]This is my kingdom come↵[01:45.090]This is my kingdom come↵[01:50.400]When you feel my heat↵[01:50.870]Look into my eyes↵[01:53.240]It’s where my demons hide↵[01:55.770]It’s where my demons hide↵[01:58.780]Don’t get too close↵[02:01.510]It’s dark inside↵[02:03.890]It’s where my demons hide↵[02:06.450]It’s where my demons hide↵[02:09.500]They say it's what you make↵[02:11.860]I say it's up to fate↵[02:14.660]It's woven in my soul↵[02:17.200]I need to let you go↵[02:19.880]Your eyes, they shine so bright↵[02:22.490]I want to save their light↵[02:25.110]I can't escape this now↵[02:27.770]Unless you show me how↵[02:31.400]When you feel my heat↵[02:33.460]Look into my eyes↵[02:35.940]It’s where my demons hide↵[02:38.480]It’s where my demons hide↵[02:41.470]Don’t get too close↵[02:43.990]It’s dark inside↵[02:46.530]It’s where my demons hide↵[02:49.100]It’s where my demons hide";
    var CHlrcs = CHlrc.split("↵");
    var ENlrcs = ENlrc.split("↵");
    for (var i=0;i<CHlrcs.length;i++) {
    	var time = CHlrcs[i].substring(CHlrcs[i].indexOf("[") + 1, CHlrcs[i].indexOf("]"));
    	medisArray.push({
            time: (time.split(":")[0] * 60 + parseFloat(time.split(":")[1])).toFixed(3),
            CHlrc: CHlrcs[i].substring(CHlrcs[i].indexOf("]") + 1, CHlrcs[i].length),
            ENlrc : ENlrcs[i].substring(ENlrcs[i].indexOf("]") + 1, ENlrcs[i].length),
        });
//(t.split(“:”)[0] * 60 + parseFloat(t.split(“:”)[1])).toFixed(3)这里是要把原来的mm:ss的时间格式改为秒。
    }
    var div = $(".lyric_list");
    $.each(medisArray, function (i, item) {
        var div_list = $("<p lrctime="+item.time+">");
        div_list.html(item.ENlrc+"<br>"+item.CHlrc);
        div.append(div_list);
    });  
}
createLrc();
var i=0;
$(".lyric_list p").eq(0).css("color","aqua");
function myFunction(event) {
	if ($(".lyric_list p").eq(i).attr("lrctime")<=event.currentTime) {
		$(".lyric_list p").css("color","white");
		$(".lyric_list p").eq(i).css("color","aqua");
		$(".lyric_list").css("top",-$(".lyric_list p").eq(i).position().top+48)
		i=i+1;
	}		
	if (event.currentTime==0) {
		$(".lyric_list").css("top","24px");
	    $(".lyric_list p").eq(0).css("color","aqua");
		i=0;
	}
}	


//canvas背景动画
function Star(id, x, y){
	this.id = id;
	this.x = x;
	this.y = y;
	this.r = Math.floor(Math.random()*2)+1;
	var alpha = (Math.floor(Math.random()*10)+1)/10/2;
	this.color = "rgba(255,255,255,"+alpha+")";
}

Star.prototype.draw = function() {
	ctx.fillStyle = this.color;
	ctx.shadowBlur = this.r * 2;
	ctx.beginPath();
	ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
	ctx.closePath();
	ctx.fill();
}

Star.prototype.move = function() {
	this.y -= .15;
	if (this.y <= -10) this.y = HEIGHT + 10;
	this.draw();
}

Star.prototype.die = function() {
    stars[this.id] = null;
    delete stars[this.id];
}


function Dot(id, x, y, r) {
	this.id = id;
	this.x = x;
	this.y = y;
	this.r = Math.floor(Math.random()*5)+1;
	this.maxLinks = 2;
	this.speed = .5;
	this.a = .5;
	this.aReduction = .005;
	this.color = "rgba(255,255,255,"+this.a+")";
	this.linkColor = "rgba(255,255,255,"+this.a/4+")";

	this.dir = Math.floor(Math.random()*140)+200;
}

Dot.prototype.draw = function() {
	ctx.fillStyle = this.color;
	ctx.shadowBlur = this.r * 2;
	ctx.beginPath();
	ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
	ctx.closePath();
	ctx.fill();
}

Dot.prototype.link = function() {
	if (this.id == 0) return;
	var previousDot1 = getPreviousDot(this.id, 1);
	var previousDot2 = getPreviousDot(this.id, 2);
	var previousDot3 = getPreviousDot(this.id, 3);
	if (!previousDot1) return;
	ctx.strokeStyle = this.linkColor;
	ctx.moveTo(previousDot1.x, previousDot1.y);
	ctx.beginPath();
	ctx.lineTo(this.x, this.y);
	if (previousDot2 != false) ctx.lineTo(previousDot2.x, previousDot2.y);
	if (previousDot3 != false) ctx.lineTo(previousDot3.x, previousDot3.y);
	ctx.stroke();
	ctx.closePath();
}

function getPreviousDot(id, stepback) {
	if (id == 0 || id - stepback < 0) return false;
	if (typeof dots[id - stepback] != "undefined") return dots[id - stepback];
	else return false;//getPreviousDot(id - stepback);
}

Dot.prototype.move = function() {
	this.a -= this.aReduction;
	if (this.a <= 0) {
		this.die();
		return
	}
	this.color = "rgba(255,255,255,"+this.a+")";
	this.linkColor = "rgba(255,255,255,"+this.a/4+")";
	this.x = this.x + Math.cos(degToRad(this.dir))*this.speed,
	this.y = this.y + Math.sin(degToRad(this.dir))*this.speed;

	this.draw();
	this.link();
}

Dot.prototype.die = function() {
    dots[this.id] = null;
    delete dots[this.id];
}


var canvas  = document.getElementById('canvas'),
	ctx = canvas.getContext('2d'),
	WIDTH,
	HEIGHT,
	mouseMoving = false,
	mouseMoveChecker,
	mouseX,
	mouseY,
	stars = [],
	initStarsPopulation = 80,
	dots = [],
	dotsMinDist = 2,
	maxDistFromCursor = 50;

setCanvasSize();
init();

function setCanvasSize() {
	WIDTH = document.documentElement.clientWidth,
    HEIGHT = document.documentElement.clientHeight;                      

	canvas.setAttribute("width", WIDTH);
	canvas.setAttribute("height", HEIGHT);
}

function init() {
	ctx.strokeStyle = "white";
	ctx.shadowColor = "white";
	for (var i = 0; i < initStarsPopulation; i++) {
		stars[i] = new Star(i, Math.floor(Math.random()*WIDTH), Math.floor(Math.random()*HEIGHT));
		//stars[i].draw();
	}
	ctx.shadowBlur = 0;
	animate();
}

function animate() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    for (var i in stars) {
    	stars[i].move();
    }
    for (var i in dots) {
    	dots[i].move();
    }
//  drawIfMouseMoving();
    requestAnimationFrame(animate);
}
//鼠标滑动效果，未提高性能，暂时关闭
window.onmousemove = function(e){
	mouseMoving = true;
	mouseX = e.clientX;
	mouseY = e.clientY;
	clearInterval(mouseMoveChecker);
	mouseMoveChecker = setTimeout(function() {
		mouseMoving = false;
	}, 100);
}


function drawIfMouseMoving(){
	if (!mouseMoving) return;

	if (dots.length == 0) {
		dots[0] = new Dot(0, mouseX, mouseY);
		dots[0].draw();
		return;
	}

	var previousDot = getPreviousDot(dots.length, 1);
	var prevX = previousDot.x;
	var prevY = previousDot.y;

	var diffX = Math.abs(prevX - mouseX);
	var diffY = Math.abs(prevY - mouseY);

	if (diffX < dotsMinDist || diffY < dotsMinDist) return;

	var xVariation = Math.random() > .5 ? -1 : 1;
	xVariation = xVariation*Math.floor(Math.random()*maxDistFromCursor)+1;
	var yVariation = Math.random() > .5 ? -1 : 1;
	yVariation = yVariation*Math.floor(Math.random()*maxDistFromCursor)+1;
	dots[dots.length] = new Dot(dots.length, mouseX+xVariation, mouseY+yVariation);
	dots[dots.length-1].draw();
	dots[dots.length-1].link();
}
setInterval(drawIfMouseMoving, 17);

function degToRad(deg) {
	return deg * (Math.PI / 180);
}