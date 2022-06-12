const enetities = require("../models/entities");
const swapi = require("../providers/swapi");

/**
 * Gathers required data from data provider and prepares the desired output
 * @param {Response} response which the data should be sent on
 */
async function responseInformation(response) {
  let provider = new swapi.DataProvider();

  const personModel = new enetities.Person(provider);
  const starshipModel = new enetities.Starship(provider);
  const planetModel = new enetities.Planet(provider);

  let darthVader = await personModel.getData(4);
  let princessLeia = await personModel.getData(5);
  let deathStar = await starshipModel.getData(9);
  let darthVaderStarship = await starshipModel.getData(darthVader.starships[0]);
  let alderaan = await planetModel.getData(2);

  let information = {
    starship: {},
    crew: 0,
    isLeiaOnPlanet: false,
  };

  information.starship.name = darthVaderStarship.name;
  information.starship.class = darthVaderStarship.starship_class;
  information.starship.model = darthVaderStarship.model;
  information.crew = deathStar.crew;

  if (princessLeia.homeworld === alderaan.id) {
    information.isLeiaOnPlanet = true;
  } else {
    information.isLeiaOnPlanet = false;
  }

  response.send(information);
}

module.exports = { responseInformation };
