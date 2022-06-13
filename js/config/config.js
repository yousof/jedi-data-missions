/**
 * @constant
 * Contains necessary strings and information to work with https://swapi.dev.
 */
const swapi = {
  url: {
    base: "https://swapi.dev/api",
    films: "films",
    people: "people",
    planets: "planets",
    species: "species",
    starships: "starships",
    vehicles: "vehicles",
  },
};

/**
 * @constant
 * Contains entity IDs of our interest
 */
const entityIds = {
  darthVaderId: 4,
  princessLeiaId: 5,
  deathStarId: 9,
  alderaanId: 2,
};

module.exports = { swapi, entityIds };
