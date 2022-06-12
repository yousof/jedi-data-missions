const axios = require('axios');
const config = require('../config/config');

/**
 * @class
 * The base class for getting data from https://swapi.dev
 */
class DataProvider {
  /**
   * @constructor
   */
  constructor() {
    this.url = config.swapi.url;
  }

  /**
   * Makes the URL for specified resource
   * @param resource The desired resource
   * @returns The url for the specified resource or the specified id in the resource
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
   * @param urls the URL(s) to the desired entit(y/ies)
   * @returns id(s) of the desired entit(y/ies)
   */
  parseEntityIds(urls) {
    if (typeof urls === 'string') {
      let components = urls.split('/');
      components.pop();
      let id = parseInt(components.pop());
      return id;
    } else {
      let ids = [];
      if (urls.length === 0) {
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
   * Parses a string containing integerseparated with radix character
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
   * @param filmId The ID of the film in the database
   * @returns film's data / error
   */
  getFilmData(filmId) {
    let url = this.makeUrl(this.url.films, filmId);

    return axios
      .get(url)
      .then((response) => {
        response.data.id = this.parseEntityIds(response.data.url);
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
   * @param personId The ID of the person in the database
   * @returns person's data / error
   */
  getPersonData(personId) {
    let url = this.makeUrl(this.url.people, personId);

    return axios
      .get(url)
      .then((response) => {
        response.data.id = this.parseEntityIds(response.data.url);
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
   * @param planetId The ID of the planet in the database
   * @returns planet's data / error
   */
  getPlanetData(planetId) {
    let url = this.makeUrl(this.url.planets, planetId);

    return axios
      .get(url)
      .then((response) => {
        response.data.id = this.parseEntityIds(response.data.url);
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
   * Provides a starship's data
   * @param starshipId The ID of the starship in the database
   * @returns starship's data / error
   */
  getStarshipData(starshipId) {
    let url = this.makeUrl(this.url.starships, starshipId);

    return axios
      .get(url)
      .then((response) => {
        response.data.id = this.parseEntityIds(response.data.url);
        response.data.pilots = this.parseEntityIds(response.data.pilots);
        response.data.films = this.parseEntityIds(response.data.films);
        /**
         * @todo parse the count of crew
         */

        return response.data;
      })
      .catch((error) => {
        console.log(error);
        return Promise.reject(error);
      });
  }

  /**
   * Provides a vehicle's data
   * @param vehicleId The ID of the vehicle in the database
   * @returns vehicle's data / error
   */
  getVehicleData(vehicleId) {
    let url = this.makeUrl(this.url.vehicles, vehicleId);

    return axios
      .get(url)
      .then((response) => {
        response.data.id = this.parseEntityIds(response.data.url);
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
