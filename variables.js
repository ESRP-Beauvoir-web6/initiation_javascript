/* Créez trois variables : 

- Une qui contiendra un prenom
- Une autre avec une ville
- Une autre avec un âge

Vous afficherez dans la console la phrase suivante en utilisant les chaines de caractères et la concatenation : 

Bonjour je m'appelle ***, j'habite à *** et j'ai ** ans !

*/


/*

Le symbole de concatenation dans une chaine de caractères est le +

POur faire une variable utilisez let devant le mot clé

exemple : let ma_variable = 

*/

let prenom = "Jérémy"
let ville = "Rennes"
let age = 40

console.log("Bonjour, je m'appelle " + prenom + " , j'habite à " + ville + " et j'ai " + age + " ans")

console.log(`Bonjour, je m'appelle ${prenom}, j'habite à ${ville} et j'ai ${age} ans`)

let character = ["Jérémy", "Rennes", 40]

console.log(`Bonjour, je m'appelle ${character[0]}, j'habite à ${character[1]} et j'ai ${character[2]} ans`)

let personnage = {
    prenom : "Jeremy",
    ville : "Rennes",
    age : 40
}

console.log(`Bonjour, je m'appelle ${personnage.prenom}, j'habite à ${personnage.ville} et j'ai ${personnage.age} ans`)