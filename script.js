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

const lightHeroes = (array) =>
  array.filter((hero) => {
    return hero.weight < 190;
  });
//console.log(lightHeroes(superheroes))

const heavyHeroes = (array) =>
  array.filter((hero) => {
    return hero.weight == 200;
  });
//console.log(heavyHeroes(superheroes))

const heavyHeroesNames = superheroes
  .filter((hero) => {
    return hero.weight == 200;
  })
  .map((hero) => {
    return hero.name;
  });
//console.log(heavyHeroesNames)

const firstAppearance = (array) =>
  array.map((hero) => {
    return hero.first_appearance;
  });
//console.log(firstAppearance(superheroes))

const dcHeroes = superheroes
  .filter((hero) => {
    return hero.publisher === "DC Comics";
  })
  .map((hero) => {
    return hero.name;
  });
const marvelHeroes = superheroes
  .filter((hero) => {
    return hero.publisher === "Marvel Comics";
  })
  .map((hero) => {
    return hero.name;
  });
//console.log(dcHeroes)
//console.log(marvelHeroes)

const dcHeroesArray = superheroes.filter((hero) => {
  return hero.publisher === "DC Comics";
}); // get all DC Heroes
const heroWeightDC = dcHeroesArray.map((hero) => {
  return Number(hero.weight);
}); // Get all weight values & Make integer
const heroWeightTotalDC = heroWeightDC.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // adds all weights
//console.log(heroWeightTotalDC)

const marvelHeroesArray = superheroes.filter((hero) => {
  return hero.publisher === "Marvel Comics";
}); // get all MARVEL Heroes
const marvelWeightCheck = marvelHeroesArray.filter((hero) => {
  return hero.weight !== "unknown";
}); // Filter out if weight not given
const heroWeightMarvel = marvelWeightCheck.map((hero) => {
  return Number(hero.weight);
}); // Get all weight values & Make integer
const heroWeightTotalMarvel = heroWeightMarvel.reduce(
  (accumulator, currentValue) => {
    return accumulator + currentValue;
  },
  0
); // adds all weights
//console.log(heroWeightTotalMarvel)

const heroWeightCheck = superheroes.filter((hero) => {
  return hero.weight !== "unknown";
}); //Filter out if weight not given

/* const heaviestWeight = (accumulator, currentValue) => {
	if(Number(currentValue.weight) > Number(accumulator.weight)) {
      return currentValue;
    } else {
      return accumulator;
    }
} */

//const heaviestHero = heroWeightCheck.reduce(heaviestWeight);

//inline code
const heaviestHero = heroWeightCheck.reduce((accumulator, currentValue) => {
  if (Number(currentValue.weight) > Number(accumulator.weight)) {
    return currentValue;
  } else {
    return accumulator;
  }
});

console.log(
  heaviestHero.name,
  "is the heaviest hero and is",
  heaviestHero.weight,
  "kg"
);
