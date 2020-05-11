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
}

fetch("zespoly.json").then( res => {
    return res.json();
}).then( tablica => {
    tab = tablica;
    wpisywanko();
}).catch( err => {
    console.error(err);
});
