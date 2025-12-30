function zmena()
{
    document.getElementById("text1").innerText = "novy text crazyyyy" 
}

function pridej()
{
    let pocet = Number(document.getElementById("cislo").innerText)
    pocet += 1
    document.getElementById("cislo").innerText = pocet
}

function odeber()
{
    let pocet = Number(document.getElementById("cislo").innerText)
    pocet -= 1
    document.getElementById("cislo").innerText = pocet
}

function vynuluj()
{
    document.getElementById("cislo").innerText = 0
}

function nword() 
{
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
}

function bilo() 
{
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
}

function barva(b)
{
    if (b == 1) {
        document.getElementById("text1").style.color = "red"
    }
    else if (b == 2) {
        document.getElementById("text1").style.color = "green"
    }
    else if (b == 3) {
        document.getElementById("text1").style.color = "blue"
    }
    else if (b == 4) {
        document.getElementById("text1").style.color = "black"
    }
}

z = true

function zmizeni() 
{
    if(z == true){
        document.getElementById("krtecek").style.display = "none"  
        document.getElementById("button1").innerHTML = "vraceni krtecka"
        z = false
    }
    else if(z == false){
        document.getElementById("krtecek").style.display = ""
        document.getElementById("button1").innerHTML = "zmizeni krtecka"
        z = true
    }
}

i = 2

function zmenaimg() 
{
    if(i == 2) {
        document.getElementById("krtecek").style.display = "none" 
        document.getElementById("pou").style.display = ""
        i = 3
    }
    else if(i == 3){
        document.getElementById("krtecek").style.display = "" 
        document.getElementById("pou").style.display = "none"
        i = 2
    }
}