const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,ground01,box01,box02,box03,box04,box05,box06,box07,box08,box09,
box1,box2,box3,box4,box5,box5,box6,box7,box8,box9,box010,box011,box012,box013,box014,
box015,box016,launcher,sling,tanker,bgm,bgm1,army,army1;

var stage1=1;
var stage0=0
var stage2=3;
var story=2;
var win=4;
var Stage= stage0;
var score=0;
//var point=6;

var gameState="onSling";

function preload()
{
  poster = loadImage("uri.webp")
  backgroundImg = loadImage("bg.jpg")
  bgImg=loadImage("bg 2.jpg")
  bgm1=loadSound("Jagga_Jiteya_cut.mp3")
  bgm = loadSound("uri_song_cut.mp3");
  army = loadImage("Squad.jpg")
  army1 = loadImage("army1.jpg")
}

function setup() {
	createCanvas(1350,600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	//#1 biggggg
	ground1= new Ground(300,600,400,20)
		//level 1
		box1=new Army(165,380,80,130)
		box2=new Box(245,380,50,140)
		box3=new Army(295,380,80,130)
     	box4=new Box(385,380,50,140)
		box5=new Box(300,300,400,20)
		box6=new Army(425,380,80,130)
	
		//level 2 
		box7=new Army(235,200,80,130)
		box8=new Box(285,200,50,140)
		box9=new Army(365,220,80,130)
		box10=new Box(165,220,50,140)
		box11=new Box(450,220,50,140)
		box12=new Box(300,100,400,20)
	
		//level 3
		box13=new Army(285,70,80,140)

	//launcher
	launcher = new Polygon(1050,400,40,50)
	sling=new SlingShot(launcher.body,{x:1175,y:450})
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgImg);

  if(Stage===stage2){
  background(backgroundImg);
  }

  if(Stage===stage0){
	  textStyle(ITALIC && BOLD);
	  fill("white")
	  textFont("georgia");
	  textSize(30);
	  textAlign(CENTER)
	  text("HAPPY ARMY DAY...",725,75)
	  text("Salute to the real heroes \n who lead by example,Live by Chance\n Love by Choice,and kill by profession",725,500)
	  image(army,400,100)

	  fill("black")
	  textSize(15);
	  text("CLICK SPACE TO CoNTINUE.",700,450)

	  if(keyWentDown("Space")){
		  Stage=stage1;
		  bgm1.loop();
	  }
  }
  //stage2 PLAY>>>>>
  if(Stage===stage2){
  ground1.display();
 // fill(rgb(random(0,255), random(0,255), random(0,255)));
 fill ("Black")
  //box1.setPosition({x:165,y:380})
  box1.display();
  box1.score();
  box2.display();
  box3.display();
  box3.score();
  box4.display();
  box5.display();
  box6.display();
  box6.score();
  box7.display();
  box7.score();
  box8.display();
  box9.display();
  box9.score();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box13.score();

  textSize(20)
  text("CLICK SPACE TO GET THE STONE AGAIN.",650,100)

  text("Score : "+ score,1200,100)

 // text("point: "+point,1250,50)
 // box14.display();
 // box15.display();
 //box16.display();

  sling.display();
  launcher.display();
  

  if(launcher.body.position.x<0||
	launcher.body.position.y>600||keyWentDown("Space")){      
	  Matter.Body.setPosition(launcher.body,{x:1100,y:400})
	  sling.attach();
	  gameState="onSling"
	}
  }

  	//stage1
	if(Stage===stage1){
		image(army1,350,25)
		textStyle(ITALIC && BOLD);
		fill("white")
		textFont("georgia");
		textSize(15);
		textAlign(CENTER)
		text("Click on Enter to Continue",675,450)

		fill("orange")
		textSize(25);
		text("Advance ",600,200)
		fill("white")
		text("Happy Re  ",745,200)
		fill("green")
		text("public Day",870,200)

		
		fill("white")
		textSize(20);
		text("So, This Game is Dedicated to all the warriors on our borders",675,575)
		textSize(25);
		text("Our Flag does not fly Because the wind Moves it. It flys with the last breath of \n each soldier who died protecting it.",650,500)
	  
		if(keyWentDown("Enter")){
			Stage=story;
			//bgm1.loop();
		}
		}

		//story
		if(Stage===story){
			bgm.stop();
		 image(poster,500,50)
		  textStyle(ITALIC && BOLD);
		  textFont("georgia");
		  fill("white")
		  textSize(25);
		  textAlign(CENTER)
		  text("You are on a mission to collaborate with the Indian Army, To perform an undercover operation\n at Balacot.Unfortunately,You are out of ammunitions..Indian Commandoes are capable of surviving \n even the hardest situation.",660,300)
		  
		// text("Indian Commandoes are capable of surviving even the hardest situation.",650,300)
		  text("Colonel: Major, I am confident that you can handle the situation.You can use any weapon that you find.",665,450)
		  text("Major: Hey,You have found a weapon! Pick up the stones and use them against the enemies.",600,500)
		  textSize(15)
		  text("Click on Space to Continue",600,550);
		  
		  
		   if(keyWentDown("Space")){
			  Stage=stage2;
			  bgm1.stop();
			  bgm.loop();

		  }
		}
		
//var point=get_point();
		//if(point===0){
		//	Stage=win
			//console.log(point)
		//}
		//console.log(point)
  
  drawSprites();
}

function attached(lsling,lbodyA){
	lsling.bodyA=lbodyA;
	gameState="onSling"
  }

function mouseDragged(){
	if(gameState!=="launch"){
	Matter.Body.setPosition(launcher.body,{x: mouseX , y: mouseY});
}
}

function mouseReleased(){
	sling.fly();
	gameState="launch"
}

async function setBg(){
	var respond = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
	var respondjson = await respond.json();
	var daytime = respondjson.datetime
    var hour = daytime.slice(11,13)

	if(hour>=06&&hour<=18){
		bg="bg.jpg"
	}else{
		bg="bg night.jpg"
	}
	bgImg = loadImage(bg)
}




