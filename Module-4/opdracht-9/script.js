const superheroes = [
  {
    name: "Batman",
    publisher: "DC Comics",
    alter_ego: "Bruce Wayne",
    first_appearance: "Detective Comics #27",
    weight: "210",
  },
  {
    name: "Superman",
    publisher: "DC Comics",
    alter_ego: "Kal-El",
    first_appearance: "Action Comics #1",
    weight: "220",
  },
  {
    name: "Flash",
    publisher: "DC Comics",
    alter_ego: "Jay Garrick",
    first_appearance: "Flash Comics #1",
    weight: "195",
  },
  {
    name: "Green Lantern",
    publisher: "DC Comics",
    alter_ego: "Alan Scott",
    first_appearance: "All-American Comics #16",
    weight: "186",
  },
  {
    name: "Green Arrow",
    publisher: "DC Comics",
    alter_ego: "Oliver Queen",
    first_appearance: "All-American Comics #16",
    weight: "195",
  },
  {
    name: "Wonder Woman",
    publisher: "DC Comics",
    alter_ego: "Princess Diana",
    first_appearance: "The Incredible Hulk #180",
    weight: "165",
  },
  {
    name: "Blue Beetle",
    publisher: "DC Comics",
    alter_ego: "Dan Garret",
    first_appearance: "Mystery Men Comics #1",
    weight: "145",
  },
  {
    name: "Spider Man",
    publisher: "Marvel Comics",
    alter_ego: "Peter Parker",
    first_appearance: "Amazing Fantasy #15",
    weight: "167",
  },
  {
    name: "Captain America",
    publisher: "Marvel Comics",
    alter_ego: "Steve Rogers",
    first_appearance: "Captain America Comics #1",
    weight: "220",
  },
  {
    name: "Iron Man",
    publisher: "Marvel Comics",
    alter_ego: "Tony Stark",
    first_appearance: "Tales of Suspense #39",
    weight: "250",
  },
  {
    name: "Thor",
    publisher: "Marvel Comics",
    alter_ego: "Thor Odinson",
    first_appearance: "Journey into Myster #83",
    weight: "200",
  },
  {
    name: "Hulk",
    publisher: "Marvel Comics",
    alter_ego: "Bruce Banner",
    first_appearance: "The Incredible Hulk #1",
    weight: "1400",
  },
  {
    name: "Wolverine",
    publisher: "Marvel Comics",
    alter_ego: "James Howlett",
    first_appearance: "The Incredible Hulk #180",
    weight: "200",
  },
  {
    name: "Daredevil",
    publisher: "Marvel Comics",
    alter_ego: "Matthew Michael Murdock",
    first_appearance: "Daredevil #1",
    weight: "200",
  },
  {
    name: "Silver Surfer",
    publisher: "Marvel Comics",
    alter_ego: "Norrin Radd",
    first_appearance: "The Fantastic Four #48",
    weight: "unknown",
  },
];
// Opdracht 1
const superheroesNames = superheroes.map((item) => {
  return item.name;
});
console.log(superheroesNames);

// Opdracht 2
const superheroesLight = superheroes.filter((item) => {
  return item.weight < 190;
});
console.log(superheroesLight);

// Opdracht 3
const superheroesWeight = superheroes
  .filter((item) => {
    return item.weight === "200";
  })
  .map((item) => {
    return item.name;
  });
console.log(superheroesWeight);

// Opdracht 4
const firstAppearance = superheroes.map((item) => {
  return item.first_appearance;
});
console.log(firstAppearance);

// Opdracht 5
const comics = superheroes.filter((item) => {
  return item.publisher === "DC Comics";
});
console.log(comics);

const marvel = superheroes.filter((item) => {
  return item.publisher === "Marvel Comics";
});
console.log(marvel);

// Opdracht 6
const comicsTotalWeight = superheroes
  .filter((item) => {
    return item.publisher === "DC Comics";
  })
  .map((item) => {
    return item.weight;
  })
  .map(function (i) {
    return parseInt(i, 10);
  })
  .reduce((currentTotal, item) => {
    return item + currentTotal;
  }, 0);

console.log(comicsTotalWeight);

const marvelTotalWeight = superheroes
  .filter((item) => {
    return item.publisher === "Marvel Comics";
  })
  .map((item) => {
    return item.weight;
  })
  .map(function (i) {
    return parseInt(i, 10);
  })
  .filter((item) => {
    return item >= 0;
  })
  .reduce((currentTotal, item) => {
    return item + currentTotal;
  }, 0);

console.log(marvelTotalWeight);
