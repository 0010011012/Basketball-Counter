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
            return 0.00
        }
        return (this.getgetroffen()/this.getwuerfe()*100).toFixed(2);
    }
    getscore(){
        return this.wurfwert*this.getgetroffen();
    }
    
    }