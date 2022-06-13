const config = require('../config/config')
const enetities = require('../models/entities');
const swapi = require('../providers/swapi');

/**
 * Gathers required data from data provider and prepares the desired output
 * @param {Response} response which the data should be sent on
 */
async function responseInformation(response) {
  // Instanciating the data provider
  const provider = new swapi.DataProvider();

  // Instanciating the data models
  const personModel = new enetities.Person(provider);
  const starshipModel = new enetities.Starship(provider);
  const planetModel = new enetities.Planet(provider);

  // Getting related entities to the problem
  const darthVader = await personModel.getData(config.entityIds.darthVaderId);
  const princessLeia = await personModel.getData(config.entityIds.princessLeiaId);
  const deathStar = await starshipModel.getData(config.entityIds.deathStarId);
  const darthVaderStarship = await starshipModel.getData(darthVader.starships[0]);
  const alderaan = await planetModel.getData(config.entityIds.alderaanId);

  // Declaring the output base schema
  let information = {
    starship: {},
    crew: 0,
    isLeiaOnPlanet: false,
  };

  // Filling the output schema with desired data
  information.starship.name = darthVaderStarship.name;
  information.starship.class = darthVaderStarship.starship_class;
  information.starship.model = darthVaderStarship.model;
  information.crew = deathStar.crew;

  if (princessLeia.homeworld === alderaan.id) {
    information.isLeiaOnPlanet = true;
  } else {
    information.isLeiaOnPlanet = false;
  }

  // sending the response
  response.send(information);
}

module.exports = { responseInformation };
