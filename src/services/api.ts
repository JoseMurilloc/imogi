import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://emoji-api.com',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  params: {
    access_key: 'b20eecade4d3d144a259a0aa80a32e9ea48d66e4',
  },
});
