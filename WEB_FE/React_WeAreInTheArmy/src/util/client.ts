import axios from 'axios';

export const client = axios.create({
  baseURL:
    'https://web-weareinthearmy-armyworknavy-rxx6rxg66xw2pxw9-3000.preview.app.github.dev',
  withCredentials: true,
});
