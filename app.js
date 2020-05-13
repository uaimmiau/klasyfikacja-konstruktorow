const nazwy = document.getElementsByClassName('name');
var nazwyLength = nazwy.length;
const punkty = document.getElementsByClassName('points');
var punktyLength = punkty.length;

var tab = [];


wpisywanko = () => {
    tab.sort( (a,b) => b.points - a.points);
    var i = 0;
    for(i = 0; i < nazwyLength; i++){
        nazwy[i].innerText = tab[i].name;
    }
    for(i = 0; i < punktyLength; i++){
        punkty[i].innerText = tab[i].points;
    }
    tworzenieLisineruf();
}

//LISINERY I INNE BAJERY
const teams = document.getElementsByClassName('team');
const racePoints = document.getElementsByClassName('racePoints');

teamsEventListener = licznik => {
    var test = 0;
    teams[licznik].addEventListener('click', e => {
        for(i = 0; i < racePoints.length; i++){
            racePoints[i].style.display = "none";
        }
        if(test == 0){
            racePoints[licznik].style.display = "flex";
            test = 1;
        }else{
            test = 0;
        }
        console.log(test,"witaj o przybyszu który zauważyłeś upośledzenie systemu zamykania, to się kiedyś zateguje")
    })
}

tworzenieLisineruf = () => {
    for(i = 0; i < teams.length; i++){
        teamsEventListener(i);
    }
    for(i = 0; i < racePoints.length; i++){
        var racePoint = racePoints[i].querySelectorAll('p');
        console.log(racePoint[0])
        racePoint[0].innerText = tab[i].r1;
        racePoint[1].innerText = tab[i].r2;
        racePoint[2].innerText = tab[i].r3;
        racePoint[3].innerText = tab[i].r4;
        racePoint[4].innerText = tab[i].r5;
        racePoint[5].innerText = tab[i].r6;
        racePoint[6].innerText = tab[i].r7;
    }
}


fetch("zespoly.json").then( res => {
    return res.json();
}).then( tablica => {
    tab = tablica;
    wpisywanko();
}).catch( err => {
    console.error(err);
});