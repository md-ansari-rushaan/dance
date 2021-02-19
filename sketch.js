var canvas;
var music;
var BoxG1,BoxG2,BoxG3,BoxG4;
var BoxP;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    BoxG1 = createSprite(100,580,180,20);
    BoxG2 = createSprite(300,580,180,20);
    BoxG3 = createSprite(500,580,180,20);
    BoxG4 = createSprite(700,580,180,20);
    BoxG1.shapeColor= "green";
    BoxG2.shapeColor = "red";
    BoxG3.shapeColor = "blue";
    BoxG4.shapeColor = "yellow";


    //create box sprite and give velocity
    BoxP = createSprite(Math.round(random(20,750)),300,40,40);
    BoxP.velocityX=4;
    BoxP.velocityY=4;
    BoxP.shapeColor = "white";

    music.play();
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    var edges = createEdgeSprites();
    
    
    //add condition to check if box touching surface and make it box
    if(BoxP.isTouching(BoxG1)){
        BoxP.shapeColor = "green";
    }
    else if(BoxP.isTouching(BoxG2)){
        BoxP.shapeColor = "Red";
        BoxP.velocityX=0;
        BoxP.velocityY=0;
        music.stop();
    }
    else if(BoxP.isTouching(BoxG3)){
        BoxP.shapeColor = "Blue";
    }
    else if(BoxP.isTouching(BoxG4)){
        BoxP.shapeColor = "yellow";
    }
    BoxP.bounceOff(edges);
    BoxP.bounceOff(BoxG1);
    BoxP.bounceOff(BoxG2);
    BoxP.bounceOff(BoxG3);
    BoxP.bounceOff(BoxG4);
    drawSprites();
}
