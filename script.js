x = 0

function motiv() {
    if(x == 0) {        //svetly mod
        document.getElementById("motivb").innerHTML = "tmavy rezim" 
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        document.getElementById("motivb").style.backgroundColor = "rgb(94, 94, 94)"
        document.getElementById("motivb").style.color = "white" 
        x = 1       
    }
    else if(x == 1) {        //tmavy mod
        document.getElementById("motivb").innerHTML = "svetly rezim" 
        document.body.style.backgroundColor = "rgb(94, 94, 94)";
        document.body.style.color = "white";
        document.getElementById("motivb").style.backgroundColor = "white"
        document.getElementById("motivb").style.color = "black" 
        x = 0       
    }
    
}