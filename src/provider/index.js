import axios from 'axios';
import config from './config';

class HTTP {
  constructor() {
    this.axios = null;
    this.config = config;
    this.setAxiosConfig();
  }

  setAxiosConfig() {
    this.axios = axios.create({
      ...this.config,
    });
  }

  async get(url, params) {
    const response = await this.axios.get(url);
    return response;
  }
}

export default new HTTP();
