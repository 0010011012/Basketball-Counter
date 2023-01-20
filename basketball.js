score1=0;
score2=0;
score3=0;
score4=0;
score5=0;
score6=0;
fill_a="white"
function setup(){
    createCanvas(1000,700);
    button2er = createButton("2er-Getroffen");
    button2er.position(600 , 280)
    button2er.size(300,50)
    button2er.mousePressed(zweierHit)
    button2ern = createButton("2er-nicht-Getroffen");
    button2ern.position(600 , 380)
    button2ern.size(300,50)
    button2ern.mousePressed(zweiernoHit)
    button3er = createButton("3er-Getroffen");
    button3er.position(600 , 480)
    button3er.size(300,50)
    button3er.mousePressed(dreierHit)
    button3ern = createButton("3er-nicht-Getroffen");
    button3ern.position(600 , 580)
    button3ern.size(300,50)
    button3ern.mousePressed(dreiernoHit)
}

function zweierHit(){
    textSize(100);
    fill(fill_a);
    text("2er-Getroffen", 350 , 400);
    noLoop()
    setTimeout(function(){
		loop()
	}, 1500)
        score1++;
        score2++;
        score5++;
        score6++;
}

function zweiernoHit(){
    score2++;
    score6++;
}

function dreierHit(){
    textSize(100);
    fill(fill_a);
    text("3er-Getroffen", 350 , 400);
    noLoop()
    setTimeout(function(){
		loop()
	}, 1500)
    score3++;
    score4++;
    score5++;
    score6++;
}

function dreiernoHit(){
    score4++;
    score6++;
}

function draw(){
    createCanvas(1000,700);
    background("black");
    textSize(32);
    fill(fill_a);
    text("2er-Getroffen: "+score1, 15 , 40);
    textSize(32);
    fill(fill_a);
    text("2er-Gesamt: "+score2, 15 , 80);
    textSize(32);
    fill(fill_a);
    text("2er-Quote: "+score1/score2*100+"%", 15 , 120);
    
    textSize(32);
    fill(fill_a);
    text("3er-Getroffen: "+score3, 15 , 200);
    textSize(32);
    fill(fill_a);
    text("3er-Gesamt: "+score4, 15 , 240);
    textSize(32);
    fill(fill_a);
    text("3er-Quote: "+score3/score4*100+"%", 15 , 280);

    textSize(32);
    fill(fill_a);
    text("Gesamt-Getroffen: "+score5, 15 , 360);
    textSize(32);
    fill(fill_a);
    text("Wurf-Gesamt: "+score6, 15 , 400);
    textSize(32);
    fill(fill_a);
    text("Gesamt-Quote: "+score5/score6*100+"%", 15 , 440);
}
function keyPressed(){
    if(keyCode === LEFT_ARROW){
        zweierHit()
    }
    if(keyCode === RIGHT_ARROW){
        zweiernoHit()
    }

    if(keyCode === UP_ARROW){
        dreierHit()
    }
    if(keyCode === DOWN_ARROW){
        dreiernoHit()
    }
}