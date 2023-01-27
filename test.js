var stat_ft=new Stat(1)
    var stat_2er=new Stat(2)
    var stat_3er=new Stat(3)
    var stat_gesamt=new Stat(0)

    function zweiertreffer(){
      stat_gesamt.getroffen();
      stat_2er.getroffen();
      updatedisplay();
    }

    function zweiervorbei(){
      stat_gesamt.vorbei();
      stat_2er.vorbei();
      updatedisplay();
    }




    function dreiertreffer(){
      stat_gesamt.getroffen();
      stat_3er.getroffen();
      updatedisplay();
    }

    function dreiervorbei(){
      stat_gesamt.vorbei();
      stat_3er.vorbei();
      updatedisplay();
    }

    function fttreffer(){
      stat_gesamt.getroffen();
      stat_ft.getroffen();
      updatedisplay();
    }

    function ftvorbei(){
      stat_gesamt.vorbei();
      stat_ft.vorbei();
      updatedisplay();
    }

    function updatedisplay(){
        document.getElementById( '2treffer' ).innerHTML = stat_2er.getgetroffen();
        document.getElementById( '2nicht-treffer' ).innerHTML = stat_2er.getvorbei();
        document.getElementById( '2gesamt' ).innerHTML = stat_2er.getgetroffen()+stat_2er.getvorbei();
        document.getElementById( '2quote' ).innerHTML = stat_2er.getquote();

        document.getElementById( '3treffer' ).innerHTML = stat_3er.getgetroffen();
        document.getElementById( '3nicht-treffer' ).innerHTML = stat_3er.getvorbei();
        document.getElementById( '3gesamt' ).innerHTML = stat_3er.getgetroffen()+stat_3er.getvorbei();
        document.getElementById( '3quote' ).innerHTML = stat_3er.getquote();

        document.getElementById( 'fttreffer' ).innerHTML = stat_ft.getgetroffen();
        document.getElementById( 'ftnicht-treffer' ).innerHTML = stat_ft.getvorbei();
        document.getElementById( 'ftgesamt' ).innerHTML = stat_ft.getgetroffen()+stat_ft.getvorbei();
        document.getElementById( 'ftquote' ).innerHTML = stat_ft.getquote();

        document.getElementById( 'gesamt-treffer' ).innerHTML = stat_gesamt.getgetroffen();
        document.getElementById( 'gesamt-nicht-treffer' ).innerHTML = stat_gesamt.getvorbei();
        document.getElementById( 'wuerfe-gesamt' ).innerHTML = stat_gesamt.getwuerfe();
        document.getElementById( 'gesamtquote' ).innerHTML =stat_gesamt.getquote();

        document.getElementById( 'punkt' ).innerHTML = stat_3er.getscore()+stat_2er.getscore()+stat_ft.getscore();
    }