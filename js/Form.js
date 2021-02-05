class Form{
    constructor(){
        this.title = createElement('h1');
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h3');

    }
    hide(){
        // made some of the thing hide
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display(){
        this.title.html("ElecyEf");
    
        this.title.position(650,0);
        
        this.input.position(625,160);
        this.button.position(675,200);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            this.greeting.html("Hello");
            this.greeting.position(675,160);  
            
            gameState = gameState + 1;
        });

    }
   
 
}