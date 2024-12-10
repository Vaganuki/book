var dosbox=new Dosbox({
    id:"dosbox",
    onload: function(dosbox){
        dosbox.run("","");
    },
    onrun: function(dosbox, app) {
        console.log("App '"+app+"' est en court d'exécution");
    }
});