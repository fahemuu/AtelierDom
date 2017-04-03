

var tableau = document.getElementById("idTable");
document.getElementById("add").addEventListener("click", f_add);
document.getElementById("del").addEventListener("click", f_del);
document.getElementById("more").addEventListener("click", _augmenter);
document.getElementById("less").addEventListener("click", _diminuer);
function f_add(e) {



    var cell, ligne;

    // on récupère l'identifiant (id) de la table qui sera modifiée


    ligne = tableau.insertRow(-1); // création d'une ligne pour ajout en fin de table
    // le paramètre est dans ce cas (-1)

    // création et insertion des cellules dans la nouvelle ligne créée
    cell = ligne.insertCell(0);
    cell.innerHTML = "Cellule";

    cell = ligne.insertCell(1);
    cell.innerHTML = "Cellule";
    cell = ligne.insertCell(2);
    cell.innerHTML = "Cellule";
}
/*Supprimer la derniere ligne de la table ___________________ */
function f_del() {
    if (tableau.rows.length) {
        tableau.deleteRow(tableau.rows.length - 1);
    }
}

/* Augmenter la taille de la police de la table */
function _augmenter(e) {
    //On extrait la taille de la police actuelle 
    //
    var style = window.getComputedStyle(tableau, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style);
    //incrementer la taille 
    tableau.style.fontSize = ++fontSize + "px";
}


/* Diminuer la taille de la police de la table */
function _diminuer(e) {
    //On extrait la taille de la police actuelle 
    //
    var style = window.getComputedStyle(tableau, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style);
    //
    //décrementer la taille 
    tableau.style.fontSize = --fontSize + "px";
}

