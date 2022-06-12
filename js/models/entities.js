/**
 * This file contains model classes for the Star Wars's entities.
 * These entities are:
 * Film,
 * Person,
 * Planet,
 * Starship,
 * Vehicle
 */

/**
 * @class
 * The container class for films
 */
class Film {
  /**
   * @constructor
   */
  constructor(provider, filmId) {
    this.data = provider.getFilmData(filmId);
  }
}

/**
 * @class
 * The container class for people
 */
class Person {
  /**
   * @constructor
   */
  constructor(provider, personId) {
    this.data = provider.getPersonData(personId);
  }
}

/**
 * @class
 * The container class for planets
 */
class Planet {
  /**
   * @constructor
   */
  constructor(provider, planetId) {
    this.data = provider.getPlanetData(planetId);
  }
}

/**
 * @class
 * The container class for species
 */
class Species {
  /**
   * @constructor
   */
  constructor(provider, speciesId) {
    this.data = provider.getSpeciesData(speciesId);
  }
}

/**
 * @class
 * The container class for starships
 */
class Starship {
  /**
   * @constructor
   */
  constructor(provider, starshipId) {
    this.data = provider.getStarshipData(starshipId);
  }
}

/**
 * @class
 * The container class for vehicles
 */
class Vehicle {
  /**
   * @constructor
   */
  constructor(provider, vehicleId) {
    this.data = provider.getVehicleData(vehicleId);
  }
}
