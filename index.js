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