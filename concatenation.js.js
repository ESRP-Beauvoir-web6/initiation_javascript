/* 

En utilisant cette fois les opérateurs de calcul et la concaténation

Vous allez avoir : 

- Une variable contenant le nom d'un produit
- Une variable contenant un prix
- Une variable contenant une quantité (5)

Vous allez avec l'aide des opérateurs et de la concaténation créer la phrase suivante dans un console.log(): 

Vous avez acheté 2 chaises pour un prix total de *** euros

*/

let produit = "Ordinateur"
let prix = 2
let quantite = 1
let total = prix * quantite

console.log("Vous avez acheté " + quantite + " " + produit + "s pour un prix total de " + total + " €")

console.log(`Vous avez acheté ${quantite} ${produit}s pour un prix total de ${prix * quantite} €`)

let chaine1 = "Bonjour "
let chaine2 = "à tous"

let result = chaine1 + chaine2

console.log(result)

// + dans le contexte de nombres sert à calculer la somme
// + dans le contexte d'une chaine de caractères sert à assembler