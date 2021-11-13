const age = 20
console.log(age)

const isFemale = true
console.log(isFemale)

const driverstatus = "bob"
console.log(driverstatus)

const firstName = "Bram"
console.log(firstName)

const totalAmount = 150
console.log(totalAmount)

if (age >= 18 && age < 26) {
    console.log("Welkom binnen, u bent 18+ en vrouw & u krijgt 50% korting");
} else if (age <= 26 && isFemale) {
    console.log("Welkom binnen, u bent 18+ en vrouw")
} else {
    console.log("Helaas, u bent te jong om binnen te komen of u bent geen vrouw");
}

if (firstName == "Bram" || firstName == "Sarah") {
    console.log("Jij krijgt een gratis biertje Omdat je Bram of Sarah heet! Proost")
}


if (driverstatus == "bob") {
    console.log("U mag naar huis rijden")
} else {
    console.log("Neemt u maar een taxi")
}

if (totalAmount >100){
    console.log("U krijgt een gratis fles champagne omdat u meer spendeerde dan 100 euro")
} else if (totalAmount >80){
    console.log("U krijgt een gratis portie nacho's omdat u meer spendeerde dan 80 euro")
} else if (totalAmount >50){
    console.log("U krijgt een gratis portie veggie bitterballen omdat u meer spendeerde dan 50 euro")
} 