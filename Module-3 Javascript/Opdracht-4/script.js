const age = 32;
const isFemale = true;
const driverStatus = "bob";
const name = "bram";
const totalAmount = 21;

if (age >= 18 && age <= 25) {
  console.log("Je krijgt 50% korting!");
} else {
  console.log("Geen korting");
}

if (name === "sarah" || name === "bram") {
  console.log("Ha BIER!");
} else {
  console.log("Ah Bummer, geen bier!");
}

if (totalAmount >= 100) {
  console.log("Gratis fles champagne");
} else if (totalAmount >= 50) {
  console.log("Gratis portie nachos");
} else if (totalAmount >= 25) {
  console.log("Gratis bitterballen");
} else {
  console.log("Geen gratis product");
}
