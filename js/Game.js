class Game{
    constructor(){

    }

    start(){
        if(gameState === 0){
            form = new Form();
            form.display();
        }

      
        
        wall1 = createSprite(625,550,5,100);
        wall1.shapeColor = "yellow";
        wall2 = createSprite(640,550,5,100);
        wall2.shapeColor = "yellow";
        wall3 = createSprite(632,485,100,5);
        wall3.shapeColor = "yellow";
        wall4 = createSprite(688,503,100,5);     
        wall4.shapeColor = "yellow";
        wall5 = createSprite(575,503,100,5);
        wall5.shapeColor = "yellow";
        wall6 = createSprite(580,438,5,100);
        wall6.shapeColor = "yellow";
        wall7 = createSprite(680,438,5,100);
        wall7.shapeColor = "yellow";
        wall8 = createSprite(565,438,5,100);
        wall8.shapeColor = "yellow";
        wall9 = createSprite(695,438,5,100);
        wall9.shapeColor = "yellow";
        wall10 = createSprite(475,503,100,5);
        wall10.shapeColor = "yellow";
        wall11 = createSprite(788,503,100,5);
        wall11.shapeColor = "yellow";
        wall12 = createSprite(747,485,100,5);
        wall12.shapeColor = "yellow";
        wall13 = createSprite(513,485,100,5);
        wall13.shapeColor = "yellow";
        wall14 = createSprite(785,485,100,5);
        wall14.shapeColor = "yellow"; 
        
        elec = createSprite(632,550,10,10);
        elec.shapeColor = "blue";

        computer = createSprite(920,500,200,200);

        fan = createSprite(400,500,200,200);
        
        tele = createSprite(625,300,200,200);
       
    }

    play(){
        form.hide();
        background(rgb(255,255,255));
       
        if(keyIsDown(RIGHT_ARROW)){
            elec.x = elec.x+1 
            elecSound.play();
        }
        if(keyIsDown(LEFT_ARROW)){
            elec.x = elec.x-1
            elecSound.play();
        }
        if(keyIsDown(UP_ARROW)){
            elec.y = elec.y-1
            elecSound.play();
        }
        if(keyIsDown(DOWN_ARROW)){
            elec.y = elec.y+1
            elecSound.play();
        }
      
        if(elec.isTouching(computer)){
            computer.addImage("compWork",computerWork);
            computer.scale = 0.1;
        }

        if(elec.isTouching(fan)){
            fan.addImage("fanWork",fanWork);
            fan.scale = 0.1;
        }
        if(elec.isTouching(tele)){
            tele.addImage("tvWork",teleWork);
            tele.scale = 0.15;
        }

        elec.bounce(wall1);
        elec.bounce(wall2);
        elec.bounce(wall3);
        elec.bounce(wall4);
        elec.bounce(wall5);
        elec.bounce(wall6);
        elec.bounce(wall7);
        elec.bounce(wall8);
        elec.bounce(wall9);
        elec.bounce(wall10);
        elec.bounce(wall11);
        elec.bounce(wall12);
        elec.bounce(wall13);
        elec.isTouching(computer);




    drawSprites();
    }

}