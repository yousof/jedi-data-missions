const axios = require('axios'); // a module to work with web API
const config = require('../config/config');

/**
 * @class
 * The base class for getting data from https://swapi.dev
 */
class DataProvider {
  /**
   * @constructor
   * Sets the url object to the defined object inside config.js to prevent
   * using hard-coded strings.
   */
  constructor() {
    this.url = config.swapi.url;
  }

  /**
   * Makes the URL for specified resource by using the components defined in
   * this.url object.
   * @param {string} resource The desired resource
   * @returns {string} The url for the specified resource or the specified id in the resource
   */
  makeUrl(resource, id = null) {
    if (id) {
      return [this.url.base, resource, id].join('/');
    } else {
      return [this.url.base, resource].join('/');
    }
  }

  /**
   * Parses the URL(s) and returns the ID(s) of the entit(y/ies)
   * It helps to extracting IDs to get data to join e.g. a person's starship ID
   * to get their starship ID information
   * @param {(string|Array)} urls the URL(s) to the desired entit(y/ies)
   * @returns {(number|Array)} id(s) of the desired entit(y/ies)
   */
  parseEntityIds(urls) {
    if (typeof urls === 'string') {
      // The case that there is a single URL
      let components = urls.split('/');
      components.pop(); // removes the empty string at the end of the array
      let id = parseInt(components.pop());
      return id;
    } else {
      // The case that there is an array of URLs
      let ids = [];
      if (urls.length === 0) {
        // The case that the array of URLs is empty
        return ids;
      }
      for (let url of urls) {
        let components = url.split('/');
        components.pop();
        ids.push(parseInt(components.pop()));
      }
      return ids;
    }
  }

  /**
   * Parses a string containing integer separated with radix character
   * E.g. there are attributes containing numbers each three digits separated
   * by a comma. Here we remove commas and parse the string to an integer
   * @param {string} number a number string
   * @returns {number} clean and parsed number
   */
  parseIntegerWithRadixCharacter(number) {
    while (number.includes(',')) {
      number = number.replace(',', '');
    }
    return parseInt(number);
  }

  /**
   * Provides a film's data
   * @param {number} filmId The ID of the film in the database
   * @returns {(object|Promise.error)} film's data / error
   */
  getFilmData(filmId) {
    let url = this.makeUrl(this.url.films, filmId);

    return axios
      .get(url)
      .then((response) => {
        // Adding the ID attribute to the entity by parsing it's URL
        response.data.id = this.parseEntityIds(response.data.url);
        // Replacing the URLs with IDs
        response.data.characters = this.parseEntityIds(
          response.data.characters
        );
        response.data.planets = this.parseEntityIds(response.data.planets);
        response.data.species = this.parseEntityIds(response.data.species);
        response.data.starships = this.parseEntityIds(response.data.starships);
        response.data.vehicles = this.parseEntityIds(response.data.vehicles);

        return response.data;
      })
      .catch((error) => {
        console.log(error);
        return Promise.reject(error);
      });
  }

  /**
   * Provides a person's data
   * @param {number} personId The ID of the person in the database
   * @returns {(object|Promise.error)} person's data / error
   */
  getPersonData(personId) {
    let url = this.makeUrl(this.url.people, personId);

    return axios
      .get(url)
      .then((response) => {
        // Adding the ID attribute to the entity by parsing it's URL
        response.data.id = this.parseEntityIds(response.data.url);
        // Replacing the URLs with IDs
        response.data.homeworld = this.parseEntityIds(response.data.homeworld);
        response.data.films = this.parseEntityIds(response.data.films);
        response.data.species = this.parseEntityIds(response.data.species);
        response.data.vehicles = this.parseEntityIds(response.data.vehicles);
        response.data.starships = this.parseEntityIds(response.data.starships);

        return response.data;
      })
      .catch((error) => {
        console.log(error);
        return Promise.reject(error);
      });
  }

  /**
   * Provides a planet's data
   * @param {number} planetId The ID of the planet in the database
   * @returns {(object|Promise.error)} planet's data / error
   */
  getPlanetData(planetId) {
    let url = this.makeUrl(this.url.planets, planetId);

    return axios
      .get(url)
      .then((response) => {
        // Adding the ID attribute to the entity by parsing it's URL
        response.data.id = this.parseEntityIds(response.data.url);
        // Replacing the URLs with IDs
        response.data.residents = this.parseEntityIds(response.data.residents);
        response.data.films = this.parseEntityIds(response.data.films);

        return response.data;
      })
      .catch((error) => {
        console.log(error);
        return Promise.reject(error);
      });
  }

  /**
   * Provides a species's data
   * @param {number} speciesId The ID of the species in the database
   * @returns {(object|Promise.error)} species's data / error
   */
  getSpeciesData(speciesId) {
    let url = this.makeUrl(this.url.species, speciesId);

    return axios
      .get(url)
      .then((response) => {
        // Adding the ID attribute to the entity by parsing it's URL
        response.data.id = this.parseEntityIds(response.data.url);
        // Replacing the URLs with IDs
        response.data.homeworld = this.parseEntityIds(response.data.homeworld);
        response.data.people = this.parseEntityIds(response.data.people);
        response.data.films = this.parseEntityIds(response.data.films);

        return response.data;
      })
      .catch((error) => {
        console.log(error);
        return Promise.reject(error);
      });
  }

  /**
   * Provides a starship's data
   * @param {number} starshipId The ID of the starship in the database
   * @returns {(object|Promise.error)} starship's data / error
   */
  getStarshipData(starshipId) {
    let url = this.makeUrl(this.url.starships, starshipId);

    return axios
      .get(url)
      .then((response) => {
        // Adding the ID attribute to the entity by parsing it's URL
        response.data.id = this.parseEntityIds(response.data.url);
        // Replacing the URLs with IDs
        response.data.pilots = this.parseEntityIds(response.data.pilots);
        response.data.films = this.parseEntityIds(response.data.films);
        // Parsing the string of crew count to number
        response.data.crew = this.parseIntegerWithRadixCharacter(
          response.data.crew
        );

        return response.data;
      })
      .catch((error) => {
        console.log(error);
        return Promise.reject(error);
      });
  }

  /**
   * Provides a vehicle's data
   * @param {number} vehicleId The ID of the vehicle in the database
   * @returns {(object|Promise.error)} vehicle's data / error
   */
  getVehicleData(vehicleId) {
    let url = this.makeUrl(this.url.vehicles, vehicleId);

    return axios
      .get(url)
      .then((response) => {
        // Adding the ID attribute to the entity by parsing it's URL
        response.data.id = this.parseEntityIds(response.data.url);
        // Replacing the URLs with IDs
        response.data.pilots = this.parseEntityIds(response.data.pilots);
        response.data.films = this.parseEntityIds(response.data.films);

        return response.data;
      })
      .catch((error) => {
        console.log(error);
        return Promise.reject(error);
      });
  }
}

module.exports = {DataProvider};