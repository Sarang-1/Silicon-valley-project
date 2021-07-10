class Form{
    constructor(){
        this.start = createButton("START");
        this.start.style('height','60px');
        this.help = createButton("HELP");
        this.help.style('height','60px');
        this.options = createButton("OPTIONS");
        this.options.style('height','60px');
        this.miniGames = createButton("MINI GAMES");
        this.miniGames.style('height','60px');
        this.miniGames.style('font-size','17px');
    }
    display(){
        this.start.position(250,200);
        this.help.position(270,265);
        this.options.position(290,330);
        this.miniGames.position(310,395)
        //this.miniGames.hide();
        
        this.start.mousePressed(()=>{
            click.play();
         if(assembled === false){
             gameState = "assemble";
             this.hide();
             componentG.setVisibleEach(true);
             dark.visible = true;
             ground.visible = true;
             document.getElementById("name").style.display = "none";
            }else if(landed === true){
                tutorial.style.display = "none";
                speechBubble.visible = false;
                gameState = "landed";
                this.hide();
                document.getElementById("name").style.display = "none";
                overview.style.display = "inline-block";
                details.style.display = "inline-block";
                size.style.display = "inline-block";
                exception.style.display = "inline-block";
                send.style.display = "inline-block";
                end.style.display = "inline-block";
            } else {
             this.hide();
             rocket.visible = true;
             gameState = "tutorial";
             document.getElementById("name").style.display = "none";
            }
        });
    

        this.help.mousePressed(()=>{
         this.hide();
         gameState = "help";
         click.play();
        });

        this.options.mousePressed(()=>{
         this.hide();
         gameState = "options";
         click.play();

        });
        

        if(gameState === "options"){
         background(bg2);
         fill(255);
         textSize(25);
         stroke(255);
         text("VOLUME",400,200);
         text("TUTORIALS",400,300);

         var k=document.getElementById("sl");
         k.style.display = "inline-block";

         var l = document.getElementsByClassName("switch");
         l[0].style.display = "inline-block";
         
         isChecked = document.getElementById("check").checked;
         
         if(isChecked === true){
             speechState = 0;
         } else {
             speechState = 31;
         }

        }else{
         var k=document.getElementById("sl");
         k.style.display = "none";

         var l = document.getElementsByClassName("switch");
         l[0].style.display = "none";
        }

        if(gameState === "help"){
            background(bg2);
            fill("yellow");
            stroke("green");
            strokeWeight(2);
            textSize(30);
            text("* It is an online game, so you need to have an active internet connection.",70,150);
            text("* You can set the game controls by clicking on options button.",70,210);
            text("* There are tutorials to help you out at every stage of the game.",70,270);
            text("* This game has a very detailed storyline and consist of three stages:-",70,330);
            text("1. At first, there is the assembling stage. You will have to set up for your own rocket.",100,380);
            text("2. Then comes the flying stage, control your rocket with the help of tutorials.",100,420);
            text("3. At last, you reach to your destination. Follow up the tasks to unlock further ones.",100,460);

        }

        this.miniGames.mousePressed(()=>{
            click.play();
            this.hide();
            gameState = "mini-games";
            
        });



    }

    hide(){
        this.start.hide();
        this.help.hide();
        this.options.hide();
        this.miniGames.hide();
    }
}