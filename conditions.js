// Faites une variable avec une note et créez une condition qui affiche différents scénarios

// 10 = Pas terrible
// 11 à 13 = Assez bien
// 14 à 16 = Bien
// 17 à 20 = Super
// Sinon = Pas bien 

// if = Si
// else if = sinon si
// else = sinon

// &&

// CORRECTION

let note = 10

if ( note == 10 ) {
    console.log("Pas terrible")
}
else if ( note >= 11 && note <= 13 ) {
    console.log("Assez bien")
}
else if ( note >= 14 && note <= 16 ) {
    console.log("Bien")
}
else if ( note >= 17 && note <= 20 ) {
    console.log("Super")
}
else if ( note < 0 ) {
    console.log("Veuillez entrer une note valide")
}
else {
    console.log("Pas bien")
}

let age = 17

if ( age >= 18 ) {
    console.log("Vous êtes majeur")
}
else {
    console.log("Vous êtes mineur")
}