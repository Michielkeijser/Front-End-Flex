let person = {
  name: 'michiel',
  age: 32,
  evaluations: [7, 10, 9]
};

console.log(person);

console.log(person.name);

console.log(person['age']);

console.log(person['evaluations']);

// Deel 2
let arrayColors = ['red', 'blue', 'green', 'purple']
console.log(arrayColors);
console.log(arrayColors.slice(-1)[0]);
arrayColors.push('yellow')
arrayColors.push(6)
arrayColors.push('Hi ik ben een object')
console.log(arrayColors);
console.log(arrayColors.slice(-1)[0]);

// Deel 3

const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
    food: {
      favourite_food: "fish",
      medium_liked_food: "dried fruits",
      disliked_food: "walnuts"
    }
  },
  {
    name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: ["Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
      favourite_food: "tuna",
      medium_liked_food: "canned food",
      disliked_food: "all fruits"
    }
  },
  {
    name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: ["Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
      favourite_food: "meaty things",
      medium_liked_food: "tuna",
      disliked_food: "canned food"
    }
  }
]

console.log('kat name laatste kat:', catBreeds.slice(-1)[0].name);

console.log('energy level eerste kat:', catBreeds[0].energy_level);

console.log('Temperament tweede kat:', catBreeds.slice(1)[0].temperament.slice(0)[0]);

console.log('Temperament laatste kat:', catBreeds.slice(-1)[0].temperament.slice(4)[0]);

console.log('Voedsel derde kat:', catBreeds.slice(2)[0].food.favourite_food);
