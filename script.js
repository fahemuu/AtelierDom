

var tableau = document.getElementById("idTable");

// relier les évenement à des fonctions 
document.getElementById("add").addEventListener("click", f_add);
document.getElementById("del").addEventListener("click", f_del);
document.getElementById("more").addEventListener("click", _augmenter);
document.getElementById("less").addEventListener("click", _diminuer);


/*Ajouter une ligne________________*/
function f_add(e) {
    //Ajout d'une ligne (tr) 
    var nodeTr = document.createElement("tr");

    //Ajout des cellules de la ligne 
    var nodeTd = document.createElement("td"); //cellule1 1
    var textnode = document.createTextNode("cellule1")
    nodeTd.appendChild(textnode);

    var nodeTd1 = document.createElement("td"); //cellule2 
    var textnode1 = document.createTextNode("cellule2")
    nodeTd1.appendChild(textnode1);


    //ratacher les noeuds td à tr
    nodeTr.appendChild(nodeTd)
    nodeTr.appendChild(nodeTd1)

    //ratacher le noeud tr à la table idTable 
    document.getElementById("idTable").appendChild(nodeTr);

}

/*Supprimer la derniere ligne de la table ___________________ */
function f_del() {
    if (tableau.rows.length) {
        tableau.removeChild(tableau.lastChild);
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

