const axios = require("axios");
const config = require("../config/config");

/**
 * @class
 * The base class for getting data from https://swapi.dev
 */

class DataProvider {
  /**
   * @constructor
   * 
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
      return [this.url.base, resource, id].join("/");
    } else {
      return [this.url.base, resource].join("/");
    }
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
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        return Promise.reject(error);
      });
  }
}