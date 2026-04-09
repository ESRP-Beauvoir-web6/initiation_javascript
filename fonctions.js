/*

Mettez en place une fonction qui calcule l'aire d'un rectangle (l x L)

*/

/*

function blabla(longueur, largeur) {

}

blabla(parametre1, parametre2)



*/



// ----------- CONSTRUCTION
function airePerimetre() {
    let longeurRectangle = parseInt(prompt("Veuillez entrer une longeur"))
    let largeurRectangle = parseInt(prompt("Veuillez entrer une largeur"))
    
    let aire = longeurRectangle * largeurRectangle
    let perimetre = 2 * (longeurRectangle + largeurRectangle)


    console.log(aire)
    console.log(perimetre) 
}

// ----------- UTILISATION
airePerimetre()