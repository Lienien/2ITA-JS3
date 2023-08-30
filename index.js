//Oppgave 1
/*
var n = prompt("Skjekk om det er positivt eller negativt", "Skriv tallet her");

n = parseInt(n);

if (isNaN(n)) {
    alert("Dette er ikke et tall");
} else {
    if (n > 0) {
        alert("Tallet er positivt");
    } else if (n < 0) {
        alert("Tallet er negativt");
    } else {
        alert("Tallet er null");
    }
}
*/

//Oppgave 2
/*
var num1 = prompt("Skriv det første tallet", "Skriv tallet her");
var num2 = prompt("Skriv det andre tallet", "Skriv tallet her");

if (num1 > num2) {
    console.log({num1} + "er større enn" + {num2});
} else if(num2 > num1) {
    console.log({num1} + "er mindre enn" + {num2});
} else {
    console.log("Tallene er like store");
}
*/

//Oppgave 3
/*
var årstid = prompt("Skriv et tall fra 1 til 4", "skriv tallet her")

if (årstid == 1) {
    console.log("Vår");
} else if(årstid == 2) {
    console.log("Sommer");
} else if(årstid == 3) {
    console.log("Høst");
} else if(årstid == 4) {
    console.log("Vinter");
} else {
    console.log("Skriv et tall mellom 1 og 4");
}
*/

//Oppgave 4

var T1 = Math.floor(Math.random() * 101);
var T2 = Math.floor(Math.random() * 101);
var T3 = Math.floor(Math.random() * 101);
var T4 = Math.floor(Math.random() * 101);
var T5 = Math.floor(Math.random() * 101);
var T6 = Math.floor(Math.random() * 101);

console.log("Tallene er " + T1+", "+T2+", "+T3+", "+T4+", "+T5+" og "+T6);

//Oppgave 7
/*
var riktigTall = Math.floor(Math.random() * 51); // Velger et tilfeldig tall mellom 0 og 50
var ok = 0;

function sjekkTall() {
    var gjettetTall = parseInt(document.getElementById("gjettetall").value);
    if (isNaN(gjettetTall)) {
        document.getElementById("resultat").innerHTML = "Vennligst skriv inn et tall";
    } else if (gjettetTall < 0 || gjettetTall > 50) {
        document.getElementById("resultat").innerHTML = "Tallet må være mellom 0 og 50";
    } else if (gjettetTall < riktigTall) {
        document.getElementById("resultat").innerHTML = "Tallet er for lite";
        ok++;
    } else if (gjettetTall > riktigTall) {
        document.getElementById("resultat").innerHTML = "Tallet er for stort";
        ok++;
    } else {
        ok++;
        document.getElementById("resultat").innerHTML = "Gratulerer! Du gjettet riktig på " + ok + " forsøk!";
        document.getElementById("antall-forsok").innerHTML = ""; // Slett teksten "Antall forsøk" hvis spillet er vunnet
    }
}

function tilfeldigTall() {
    var tilfeldigTall = Math.floor(Math.random() * 51); // Velger et tilfeldig tall mellom 0 og 100
    document.getElementById("gjettetall").value = tilfeldigTall;
    sjekkTall();
}
*/