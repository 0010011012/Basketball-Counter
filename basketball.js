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
    this.numgetroffen++;
}
getvorbei(){
    return this.numvorbei;
}
vorbei(){
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
stat_freethrow=new Stat(1)
stat_2er=new Stat(2);
stat_3er=new Stat(3);
stat_gesamt=new Stat(0);
fill_a="white"
function setup(){
    createCanvas(1000,700);
    button2er = createButton("2er-Getroffen");
    button2er.position(640 , 280)
    button2er.size(300,50)
    button2er.mouseReleased(zweierHit)

    button2ern = createButton("2er-nicht-Getroffen");
    button2ern.position(640 , 380)
    button2ern.size(300,50)
    button2ern.mouseReleased(zweiernoHit)

    button3er = createButton("3er-Getroffen");
    button3er.position(640 , 480)
    button3er.size(300,50)
    button3er.mouseReleased(dreierHit)

    button3ern = createButton("3er-nicht-Getroffen");
    button3ern.position(640 , 580)
    button3ern.size(300,50)
    button3ern.mouseReleased(dreiernoHit)

    buttonft = createButton("Freiwurf-Getroffen");
    buttonft.position(640 , 80)
    buttonft.size(300,50)
    buttonft.mouseReleased(freethrowHit)

    buttonftn = createButton("Freiwurf-nicht-Getroffen");
    buttonftn.position(640 , 180)
    buttonftn.size(300,50)
    buttonftn.mouseReleased(freethrownoHit)
}

function zweierHit(){
    textSize(100);
    fill(fill_a);
    text("2er-Getroffen", 350 , 400);
        debounce(()=>stat_2er.getroffen());
        stat_gesamt.getroffen();
}

function freethrowHit(){
    stat_freethrow.getroffen();
    stat_gesamt.getroffen();
}

function freethrownoHit(){
    stat_freethrow.vorbei();
    stat_gesamt.vorbei();
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

    text("Punkte:",15,500);

    text("Freiwurf-Getroffen: "+stat_freethrow.getgetroffen(), 290 , 40)

    text("Freiwurf-Gesamt: "+stat_freethrow.getwuerfe(), 290 , 80);

    text("Freiwurf-Quote: "+stat_freethrow.getquote()+"%", 290 , 120);

    p = stat_2er.getscore()+stat_3er.getscore()+stat_freethrow.getscore();
    punktetafel(p , 15 , 520)
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
    if(keyCode === 16){
        freethrowHit()
    }
    if(keyCode === 13){
        freethrownoHit()
    }
}



function debounce(func, timeout = 20){
    let timer;
      clearTimeout(timer);
      timer = setTimeout(() => { func(); }, timeout);
  }
  function punktetafel(num , x , y){

    var p = num + "";
    translate(x-90,y)

    for( var i = 0; i <= p.length; i++ )
    {
        var d = int( p[i] );
        translate(90,0)
        digitalanzeige(d);
    }

  }
  function digitalanzeige(num){
    positionen=[
        ["WO", "N", "OO", "OU", "S", "WU"],
        ["OO" , "OU"],
        ["OO" , "WU" , "N" , "S" , "AE"],
        ["N" , "OO" , "OU" , "S" , "AE"],
        ["WO" , "OO" , "OU" , "AE"],
        ["WO" , "N" , "OU" , "S" , "AE"],
        ["WO" , "N" , "OU" , "S" , "WU" , "AE"],
        ["N" , "OO" , "OU"],
        ["WO" , "N" , "OO" , "OU" , "S" , "WU" , "AE"],
        ["WO" , "N" , "OO" , "OU" , "S" , "AE"]

    ];
    if(num==undefined){
        return
    }
    for(var i=0 ; i<positionen[num].length ; i++){
        var pos=positionen[num][i]
    if(pos=="WO"){
    //westen oben
    rect(0,10, 10,60);
    }
    if(pos=="N"){
    //norden
    rect(10,0, 60,10);
    }
    if(pos=="AE"){
    //äquator
    rect(10,70, 60,10);
    }
    if(pos=="OO"){
    //osten oben
    rect(70,10, 10,60);
    }
    if(pos=="WU"){
    //westen unten
    rect(0,80, 10,60)
    }
    if(pos=="OU"){
    //osten unten
    rect(70,80, 10,60)
    }
    if(pos=="S"){
    //süden
    rect(10,140, 60,10)
    }
    }
  }