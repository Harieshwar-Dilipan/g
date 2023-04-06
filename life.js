class Life{
    consturcuctor(){
        heart1=createSprite(800,30,50,50);
        heart1.addImage(heartImage);
        heart1.scale=0.05

        heart2=createSprite(850,30,50,50);
        heart2.addImage(heartImage);
        heart2.scale=0.05
        heart2.tint="white";

        heart3=createSprite(900,30,50,50);
        heart3.addImage(heartImage);
        heart3.scale=0.05


        hunger1=createSprite(960,80,50,50);
        hunger1.addImage(hungerImage);
        hunger1.scale=0.5

        hunger2=createSprite(1010,80,50,50);
        hunger2.addImage(hungerImage);
        hunger2.scale=0.5

        hunger3=createSprite(1060,80,50,50);
        hunger3.addImage(hungerImage);
        hunger3.scale=0.5
    }
}