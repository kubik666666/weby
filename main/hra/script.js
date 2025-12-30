
document.addEventListener("DOMContentLoaded", () => {
  const saveButton = document.getElementById("saveButton");
  const select = document.getElementById("abilitySelect");
  const output = document.getElementById("output");
  const input = document.getElementById("jmenoInput");

  if (saveButton && select && output && input) {
    saveButton.addEventListener("click", () => {
      const playername = input.value;
      const ability = select.value;
      if (ability && playername) {
        localStorage.setItem("ability", ability);
        localStorage.setItem("playername", playername);
        output.textContent = `Uloženo: jmeno: ${playername}, ability: ${ability}`;
      } else {
        output.textContent = "neco jsi nevyplnil :D";
      }
    });
  }
  const outputschopnosti = document.getElementById("outputschopnosti");
  const outputjmena = document.getElementById("outputjmena");

  if (outputschopnosti && outputjmena)  {
    const displayability = localStorage.getItem("ability");
    const displayname = localStorage.getItem("playername");
    if (displayability) {

      outputschopnosti.textContent = `Vybraná schopnost: ${displayability}`;
      outputjmena.textContent = `jmeno: ${displayname}`;
    } else {
      outputschopnosti.textContent = "promenne nebyly nalezeny";
    }
  }
  const outputeventu = document.getElementById("outputeventu")
  if (outputeventu) {

    const seznam = document.querySelector('.vybereventu');
    seznam.addEventListener('click', (event) => {
      const cil = event.target.closest('li'); 
      if (!cil) return;
      const hodnota = cil.dataset.value;
      if (hodnota === "vytah"){
        outputeventu.textContent = ("nemas kartu mas smulu")
      }
      if (hodnota === "schody") {
        outputeventu.textContent = ("co se da delat no")
      }
    });
  }
  const znamka = document.getElementById("znamka")
  if (znamka){
    ability = localStorage.getItem("ability")
    if(ability === "perfectstudent") {
      const znamkamatika = 1
      znamka.textContent = "tva znamka je 1 jsi prece perfektni"
      localStorage.setItem("znamkamatika", znamkamatika)
    }
    if(ability === "kecac") {
      const znamkamatika = 4
      localStorage.setItem("znamkamatika", znamkamatika)
      znamka.textContent = "mas 4 tvoje schopnost ti ted nepomuze"
    }
    if(ability === "cheater") {
      const znamkamatika = 2
      localStorage.setItem("znamkamatika", znamkamatika)
      znamka.textContent = "mas stesti nebyl jsi chycen pri podvadeni mas 2"
    }
  }
  const znamkatvyid = document.getElementById("znamkatvy")
  if (znamkatvyid){
    ability = localStorage.getItem("ability")
    if(ability === "perfectstudent") {
      const znamkatvy = 1
      znamkatvyid.textContent = "jelikoz jsi perfektni a programujes v c++ tak mas 1"
      localStorage.setItem("znamkatvy", znamkatvy)
    }
    if(ability === "kecac") {
      const znamkatvy = 2
      localStorage.setItem("znamkatvy", znamkatvy)
      znamkatvyid.textContent = "okecal jsi to i kdyz si toho moc nepamatujes mas 2"
    }
    if(ability === "cheater") {
      const znamkatvy = 5
      localStorage.setItem("znamkatvy", znamkatvy)
      znamkatvyid.textContent = "byl jsi pristizen pri pokusu podvadeni mas 5 a ucitel te ted nema rad"
    }
  }
  const znamkatea1 = document.getElementById("znamkatea1")
  if (znamkatea1){
    localStorage.setItem("znamkatea", 1)
  }
  const znamkatea5 = document.getElementById("znamkatea5")
  if (znamkatea5) {
    localStorage.setItem("znamkatea", 5)
  }
  const znamkafyidspink = document.getElementById("znamkafyspink")
  if (znamkafyidspink) {
    ability = localStorage.getItem("ability")
    if (ability === "perfectstudent") {
      znamkafyidspink.textContent = "i kdyz jsi perfektni tak fyzika neni milosrdna mas 2"
      const znamkafy = 2
      localStorage.setItem("znamkafy", znamkafy)
    }
    if (ability === "kecac") {
      znamkafyidspink.textContent = "ukecavani skoro vyslo mas 3"
      const znamkafy = 3
      localStorage.setItem("znamkafy", znamkafy)
    }
    if (ability === "cheater") {
      znamkafyidspink.textContent = "nestihl jsi si pripravit tahak a nic nevis coz znamena 5"
      const znamkafy = 5
      localStorage.setItem("znamkafy", znamkafy)
    }
  }
  const znamkafyid = document.getElementById("znamkafy")
  if (znamkafyid) {
    ability = localStorage.getItem("ability")
    if (ability === "perfectstudent") {
      znamkafyid.textContent = "daval jsi pozor a jsi perfektni mas 1"
      const znamkafy = 1
      localStorage.setItem("znamkafy", znamkafy)
    }
    if (ability === "kecac") {
      znamkafyid.textContent = "svoji schopnost jsi ani nepotreboval mas 1"
      const znamkafy = 1
      localStorage.setItem("znamkafy", znamkafy)
    }
    if (ability === "cheater") {
      znamkafyid.textContent = "pripravil jsi si tahak mas 1"
      const znamkafy = 1
      localStorage.setItem("znamkafy", znamkafy)
    }
  }
  const znamkykonecid = document.getElementById("znamkykonec")
  if (znamkykonecid) {
    const znamkamatika = localStorage.getItem("znamkamatika")
    const znamkamatvy = localStorage.getItem("znamkatvy")
    const znamkatea = localStorage.getItem("znamkatea")
    const znamkafy = localStorage.getItem("znamkafy")
    znamkykonecid.textContent = `matika: ${znamkamatika}, tvy: ${znamkamatvy}, tea: ${znamkatea}, fyzika: ${znamkafy}`
  }
});