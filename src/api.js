import axios from 'axios';

const BASE_URL = "http://localhost:3001";

class RickllowApi {
  static async getAllLocations(searchTerm = '') {
    try {
      const result = await axios.get(`${BASE_URL}/locations${searchTerm ? `/?search_term=${searchTerm}` : ''}`);
      return result.data.locations;
    } catch(e) {
      return "error";
    }
  }

  static async getLocationsByCategory(category) {
    try {
      const result = await axios.get(`${BASE_URL}/locations/categories/${category}`);
      return result.data.locations;
    } catch(e) {
      return "error";
    }
  }
}

export default RickllowApi;