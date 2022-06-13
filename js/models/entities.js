/**
 * This file contains model classes for the Star Wars's entities.
 * These entities are:
 * Film,
 * Person,
 * Planet,
 * Species,
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
  constructor(provider) {
    this.provider = provider
  }

  /**
   * Gets film's data from specified data provider and returns it
   * @param {number} id 
   * @returns film's data
   */
  getData(id) {
    return this.provider.getFilmData(id);
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
  constructor(provider) {
    this.provider = provider
  }

  /**
   * Gets person's data from specified data provider and returns it
   * @param {number} id 
   * @returns {object} person's data
   */
  getData(id) {
    return this.provider.getPersonData(id);
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
  constructor(provider) {
    this.provider = provider
  }

  /**
   * Gets planet's data from specified data provider and returns it
   * @param {number} id 
   * @returns {object} planet's data
   */
  getData(id) {
    return this.provider.getPlanetData(id);
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
  constructor(provider) {
    this.provider = provider
  }

  /**
   * Gets species's data from specified data provider and returns it
   * @param {number} id 
   * @returns {object} species's data
   */
  getData(id) {
    return this.provider.getSpeciesData(id);
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
  constructor(provider) {
    this.provider = provider
  }

  /**
   * Gets starship's data from specified data provider and returns it
   * @param {number} id 
   * @returns {object} starship's data
   */
  getData(id) {
    return this.provider.getStarshipData(id);
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
  constructor(provider) {
    this.provider = provider
  }

  /**
   * Gets vehicle's data from specified data provider and returns it
   * @param {number} id 
   * @returns {object} vehicle's data
   */
  getData(id) {
    return this.provider.getVehicleData(id);
  }
}

module.exports = { Film, Person, Planet, Species, Starship, Vehicle };
