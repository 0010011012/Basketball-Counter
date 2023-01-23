class Stat{
constructor(wurfwert){
    this.numgetroffen=0;
    this.numvorbei=0;
    this.wurfwert=wurfwert;
}
getgetroffen(){
    return this.numgetroffen;
}
getroffen(){
    console.log("getroffen")
    this.numgetroffen++;
}
getvorbei(){
    return this.numvorbei;
}
vorbei(){
    console.log("vorbei")
    this.numvorbei++;
}
getwuerfe(){
    return this.numvorbei+this.numgetroffen;
}
getquote(){
    if(this.getwuerfe()==0){
        return 0
    }
    return this.getgetroffen()/this.getwuerfe()*100;
}
getscore(){
    return this.wurfwert*this.getgetroffen();
}

}
stat_2er=new Stat(2);
stat_3er=new Stat(3);
stat_gesamt=new Stat(0);
fill_a="white"
function setup(){
    createCanvas(1000,700);
    button2er = createButton("2er-Getroffen");
    button2er.position(600 , 280)
    button2er.size(300,50)
    button2er.mouseReleased(zweierHit)
    button2ern = createButton("2er-nicht-Getroffen");
    button2ern.position(600 , 380)
    button2ern.size(300,50)
    button2ern.mouseReleased(zweiernoHit)
    button3er = createButton("3er-Getroffen");
    button3er.position(600 , 480)
    button3er.size(300,50)
    button3er.mouseReleased(dreierHit)
    button3ern = createButton("3er-nicht-Getroffen");
    button3ern.position(600 , 580)
    button3ern.size(300,50)
    button3ern.mouseReleased(dreiernoHit)
}

function zweierHit(){
    textSize(100);
    fill(fill_a);
    text("2er-Getroffen", 350 , 400);
        stat_2er.getroffen();
        stat_gesamt.getroffen();
}

function zweiernoHit(){
    stat_2er.vorbei();
    stat_gesamt.vorbei();
}

function dreierHit(){
    textSize(100);
    fill(fill_a);
    text("3er-Getroffen", 350 , 400);
    stat_3er.getroffen();
    stat_gesamt.getroffen();
}

function dreiernoHit(){
    stat_3er.vorbei();
    stat_gesamt.vorbei();
}

function draw(){
    createCanvas(1000,700);
    background("black");
    textSize(32);
    fill(fill_a);
    text("2er-Getroffen: "+stat_2er.getgetroffen(), 15 , 40);

    text("2er-Gesamt: "+stat_2er.getwuerfe(), 15 , 80);

    text("2er-Quote: "+stat_2er.getquote()+"%", 15 , 120);

    text("3er-Getroffen: "+stat_3er.getgetroffen(), 15 , 200);

    text("3er-Gesamt: "+stat_3er.getwuerfe(), 15 , 240);

    text("3er-Quote: "+stat_3er.getquote()+"%", 15 , 280);

    text("Gesamt-Getroffen: "+stat_gesamt.getgetroffen(), 15 , 360);

    text("Wurf-Gesamt: "+stat_gesamt.getwuerfe(), 15 , 400);

    text("Gesamt-Quote: "+stat_gesamt.getquote()+"%", 15 , 440);

    text("Punkte: "+(stat_2er.getscore()+stat_3er.getscore()), 15 , 500);

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
