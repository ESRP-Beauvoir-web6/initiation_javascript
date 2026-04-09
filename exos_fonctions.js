/* EXERCICE 1

Faites une fonction qui calcule la surface d'un triangle

RESULTAT ATTENDU : 

- Le résultat afficher dans la console
- Les valeurs seront entré dans un formulaire du navigateur

*/

// --------------------------------------------------------------------
// --------------------------------------------------------------------

/* EXERCICE 2

Faites une fonction qui vous donne la racine carré d'un nombre

ESULTAT ATTENDU : 

- Le résultat afficher dans la console
- Les valeurs seront entré dans un formulaire du navigateur

*/

// --------------------------------------------------------------------
// --------------------------------------------------------------------

/* EXERCICE 3

Faites une fonction qui calcule l'âge d'une personne à partir de son année de naissance

RESULTAT ATTENDU : 

- Le résultat afficher dans la console
- Les valeurs seront entré dans un formulaire du navigateur

*/


// Exercice 1

function surfaceTriangle() {
    let base = parseInt(prompt("Veuillez entrer une base"))
    let hauteur = parseInt(prompt("Veuillez entrer une hauteur"))

    let resultat = (base * hauteur) / 2

    console.log("La surface du triangle est de " + resultat)
}

surfaceTriangle()

// Exercice 2

function recineCarree() {
    let nombre = parseInt(prompt("Veuillez entrer un nombre"))

    let resultat = Math.sqrt(nombre)

    console.log("La racine carré de " + nombre + " est " + resultat)
}

recineCarree()

// Exercice 3

function calculerAge() {
    let anneeNaissance = parseInt(prompt("Veuillez entrer votre année de naissance"))

    let anneeActuelle = 2026

    let resultat = anneeActuelle - anneeNaissance

    console.log("Vous avez " + resultat + " ans")
}

calculerAge()