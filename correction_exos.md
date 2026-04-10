```javascript
// Exercice 1 : Positif ou négatif

/*

Consigne

- Créez une variable `nombre`
- Si >= 0 → `"Positif"`
- Sinon → `"Négatif"`

*/

let nombre = 10

if ( nombre >= 0 ) {
    console.log("La temperature est positive")
}
else if ( nombre < 0 ) {
    console.log("La température est négative")
}
else {
    console.log("Veuillez entrer une temperature valide")
}

// ------------------------------------------------------------

// Exercice 2 : Mot de passe

/*

Mettez en place une variable qui contiendra une chaine de caractères

Faites une condition qui fait en sorte que si le mot de passe est "Admin" alors le message afficher sera "Accès autorisé" sinon "Accès refusé"

*/

let motDePasse = prompt("Entrez votre mot de passe")

if ( motDePasse == "Admin" ) {
    alert("Accès autorisé ✅")
}
else {
    alert("Accès non autorisé ⚠️")
}

// ------------------------------------------------------------

// Exercice 3 : Heure de la journée

/*

Mise en place d'une variable contenant l'heure (en chiffres)

exemple : let nomDeVariable = 12

Mettez en place une condition qui fait en sorte que si l'heure est en dessous de 12h on affiche un message "C'est le matin", si l'heure est en dessous de 18h alors on affiche "C'est l'après midi" sinon c'est le soir

*/

let heure = 12

if ( heure < 12 ) {
    console.log("C'est le matin")
}
else if ( heure < 18 ) {
    console.log("C'est l'après midi")
}
else {
    console.log("C'est le soir")
}

// ---

let heureTwo = parseInt(prompt('Entrez une heure'))

if ( heureTwo >= 0 && heureTwo < 12 ) {
    console.log("C'est le matin")
}
else if ( heureTwo >= 12 && heureTwo < 18 ) {
    console.log("C'est l'après midi")
}
else if ( isNaN(heureTwo) ) {
    console.log("Veuillez entrer une heure valide")
}
else {
    console.log("C'est le soir")
}

// ------------------------------------------------------------
```