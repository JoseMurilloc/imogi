import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://emoji-api.com',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  params: {
    // access_key: 'b20eecade4d3d144a259a0aa80a32e9ea48d66e4',
    // access_key: '8a05feb94dde22f26568564e9de3e2451789cee9',
    // access_key: '653e4c6999d680f79001622accb03e805fed9076',
  },
});
