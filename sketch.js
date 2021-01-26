
var child,school,flag;
var backgroundImg, happyImg, sadImg, schoolImg, flagImg;

function preload(){
  backgroundImg = loadImage("background.jpg");
  happyImg  = loadImage("happy emoji.png");
  sadImg = loadImage("sad emoji.png");
  schoolImg = loadImage("school.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  school = createSprite(displayWidth/2,50,10,10);
  school.addImage(schoolImg);


  child = createSprite(displayWidth/2,displayHeight/2,10,10);
  child.addImage(happyImg);
  child.scale = 0.16;

}



function draw() {
  background(backgroundImg);

  
  camera.y = child.y;
  camera.x = child.x; 

  allOldText();
  allNewText();

  if(keyDown(LEFT_ARROW)){
    child.x = child.x-2;
  }

  if(keyDown(RIGHT_ARROW)){
    child.x = child.x+2;
  }

  if(keyDown(UP_ARROW)){
    child.y = child.y-2;
  }

  if(keyDown(DOWN_ARROW)){
    child.y = child.y+2;
  }

  if(child.x < displayWidth/2){
    child.addImage(sadImg)
  }

  if(child.x > displayWidth/2){
    child.addImage(happyImg)
  }

  
  line(displayWidth/2,-20000,displayWidth/2,displayHeight+20000)
  textSize(32);
  textFont("Georgia");
  fill(255);
  text("જૂની શિક્ષણ નીતિ",100,50)
  text("નવી શિક્ષણ નીતિ",displayWidth/2 + 250,50)
  drawSprites();
}

function allOldText(){
  textSize(28);
  textFont("Alatsi");
  fill(255);

  text("10 + 2 ", displayWidth/2 - 300,displayHeight/2);
  text("શાળા પ્રણાલી", displayWidth/2 - 300,displayHeight/2 + 50);

  text("આ નીતિ ફક્ત ગુણ અને શિક્ષણવિદો પર ધ્યાન કેન્દ્રિત કરે છે ", displayWidth/2 - 1000,displayHeight/2 - 200);

  text("આ નીતિ વિદ્યાર્થીઓને તેમની પોતાની ભાષામાં અભ્યાસ કરવાની મંજૂરી આપતી નથી", displayWidth/2 - 1300,displayHeight/2 - 100);
  
  text("આપણી કોઈપણ કુશળતામાં અમને કોઈ ઇન્ટર્નશિપ નથી મળી રહી", displayWidth/2 - 1000,displayHeight/2 + 200);

  text("પરીક્ષાઓ ફક્ત અંગ્રેજી અને હિન્દીમાં લેવામાં આવે છે", displayWidth/2 - 1000,displayHeight/2 + 70);

  text("શિક્ષકોને ફક્ત વિદ્યાર્થીને રેન્ક આપવાનો અધિકાર છે", displayWidth/2 -700, displayHeight/2 +300);

  text("વિદ્યાર્થીઓને ફક્ત શૈક્ષણિક પ્રદર્શનના આધારે ક્રમ આપવામાં આવે છે", displayWidth/2 - 1500,displayHeight/2 - 270);

  text("વિદ્યાર્થીઓને કોડિંગ, માટીકામ વગેરે જેવી કોઈ કુશળતા શીખવવામાં આવતી નથી.", displayWidth/2 - 1200,displayHeight/2  + 400);

  text("બોર્ડની પરીક્ષા વાર્ષિક ધોરણે લેવામાં આવે છે", displayWidth/2 - 1400,displayHeight/2 + 10);

  text("કોઈ સાંસ્કૃતિક અભ્યાસ પૂરો પાડવામાં આવેલ નથી", displayWidth/2 - 1400,displayHeight/2 +300);

  text("પાત્રતા અભ્યાસક્રમ પૂર્ણ કર્યા પછી જ પૂરી પાડવામાં આવે છે", displayWidth/2 - 1600,displayHeight/2 + 140);

  text("ક collegeલેજ પ્રવેશ માટે 12 ગુણ મહત્વના છે", displayWidth/2 - 1800,displayHeight/2 - 200);

  text("ફી પ્રતિબંધિત નથી", displayWidth/2 - 1400,displayHeight/2 + 480);

  text("વિદ્યાર્થીઓ વિષયો સુધી મર્યાદિત છે", displayWidth/2 - 1750,displayHeight/2 + 350);
  
}

function allNewText(){
  textSize(28);
  textFont("Alatsi");
  fill(255);

  text(" 5 + 3 + 3 + 4 ", displayWidth/2 + 50,displayHeight/2);
  text("શાળા પ્રણાલી", displayWidth/2 + 50,displayHeight/2 + 50);

  text("આ નીતિ માત્ર ગુણ અને શિક્ષણવિદો પર ધ્યાન કેન્દ્રિત કરતી નથી, તે કુશળતા અને બિન-શૈક્ષણિક પ્રવૃત્તિઓ પર પણ કેન્દ્રિત છે", displayWidth/2 + 200,displayHeight/2 - 250);

  text("વિદ્યાર્થીઓ હવે તેમની પ્રાદેશિક ભાષામાં અભ્યાસ કરી શકે છે", displayWidth/2 + 300,displayHeight/2 - 100);
  
  text("આપણી સ્કૂલ-યુગમાં આપણી કુશળતામાં ઇન્ટર્નશિપ મેળવી શકીએ છીએ", displayWidth/2 + 500,displayHeight/2 + 200);

  text("હવે પરીક્ષા પ્રાદેશિક ભાષાઓમાં ઉપલબ્ધ છે", displayWidth/2 + 250,displayHeight/2 + 120);

  text("શિક્ષકો અને વિદ્યાર્થીઓ એક બાળક ક્રમ આપે છે", displayWidth/2 +250, displayHeight/2 +300);

  text("વિદ્યાર્થીઓને શૈક્ષણિક પ્રદર્શન અને સર્જનાત્મકતાના આધારે પણ સ્થાન આપવામાં આવે છે", displayWidth/2 + 1000,displayHeight/2 - 310);

  text("વિદ્યાર્થીઓને કોડિંગ, માટીકામ, વગેરે જેવી ઘણી કુશળતા શીખવવામાં આવે છે..", displayWidth/2 + 700,displayHeight/2  + 400);

  text("હવે બોર્ડની પરીક્ષાઓ બે સેમેસ્ટરમાં લેવામાં આવે છે", displayWidth/2 + 900,displayHeight/2 + 10);

  text("ભારતીય સંસ્કૃતિ શાળામાં શીખવવામાં આવે છે", displayWidth/2 + 900,displayHeight/2 +300);

  text("સંપૂર્ણ અભ્યાસક્રમ પછી લાયકાત આપવામાં આવે છે અને અભ્યાસક્રમો વચ્ચે પ્રમાણપત્રો અને ડિપ્લોમા પૂરા પાડવામાં આવે છે", displayWidth/2 + 1100,displayHeight/2 + 140);

  text("કોલેજ પ્રવેશ માટે 12 ગુણ મહત્વપૂર્ણ નથી, વિદ્યાર્થીઓ પ્રવેશ પરીક્ષા આપી શકે છે", displayWidth/2 + 800,displayHeight/2 - 200);

  text("ફી પ્રતિબંધિત છે", displayWidth/2 + 300,displayHeight/2 + 400);

  text("વિદ્યાર્થીઓ ઇચ્છે તે કોઈપણ વિષય લઈ શકે છે", displayWidth/2 + 1250,displayHeight/2 + 350);
  
}