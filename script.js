

var tableau = document.getElementById("idTable");

// relier les évenement à des fonctions 
document.getElementById("add").addEventListener("click", f_add);
document.getElementById("del").addEventListener("click", f_del);
document.getElementById("more").addEventListener("click", _augmenter);
document.getElementById("less").addEventListener("click", _diminuer);


/*Ajouter une ligne________________*/
function f_add(e) {

    var nodeTr = document.createElement("tr");
    //////////////////////////////////////
    var nodeTd = document.createElement("td");
    var textnode = document.createTextNode("cellule1")
    nodeTd.appendChild(textnode);

    var nodeTd1 = document.createElement("td");
    var textnode1 = document.createTextNode("cellule2")
    nodeTd1.appendChild(textnode1);

    // var nodeTd2 = document.createElement("td");
    // var textnode2 = document.createTextNode("cellule3")
    // nodeTd.appendChild(textnode2);

    nodeTr.appendChild(nodeTd)
    nodeTr.appendChild(nodeTd1)
    //nodeTr.appendChild(nodeTd2)



    document.getElementById("idTable").appendChild(nodeTr);

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

