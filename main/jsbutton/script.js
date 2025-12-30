function eins()
{
    let x = 10
    let y = 57
    alert("soucet x a y je: "+ (x+y))
}

function zwei()
{
    let x = 78
    let y = 122
    let z = x + y
    alert("soucet x a y je: "+ z)
}

function bomb() 
{
    let x = 9349278590324734567456784954567864455678797458647895484567858495455647889454678589458456878498486748989057765.9109381028323789358973248957239047589023745092374590857678767668934265389247590325492347559019327418959072349045799923047952374490597434899494944559
    let y = 9432532452345234508598857789876549585976559459597659545959955989756559459595989759655945959899575965459592345.9891364891236478912639486213986498213649812638946123967865756767867678575686786766666666666666666666666666695295956786758845568435583684865835485648
    while(true) {
        let z = x**y
        console.log(z**z)
        localStorage.setItem("name", z)
    }
}

function trei()
{
    let jmeno = prompt("zadejte jmeno")
    alert("vase jmeno je "+ jmeno + " velmi scary co??")
}

function vier()
{
    let vek = prompt("zadejte vek")
    alert("vas vek je: "+vek)
}

function funf() 
{
    let x = Number(prompt("cislo x"))
    let y = Number(prompt("cislo y"))
    let z = x+y
    alert("x+y je "+z)
}

function ukol()
{
    let jmeno = prompt("vase jmeno jest?")
    let bffjmeno = prompt("jmeno vaseho bff jest?")
    let vek = Number(prompt("vas vek je?"))
    let vekbff = Number(prompt("vek vaseho bff?"))
    let vekdohromady = vek + vekbff
    alert("vase jmeno je: " + jmeno+" jmeno vaseho bff je: "+bffjmeno+" a je vam dohromady: "+vekdohromady+" let")
}

function shutdown() 
{ 
    var wshShell = new ActiveXObject("WScript.Shell");
    wshShell.Run("C:\\Users\\zak\\Desktop\\new.bat");
}