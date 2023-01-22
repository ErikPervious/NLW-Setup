import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://275f-2804-1b3-a901-5023-6c5f-421a-3a3b-e27.sa.ngrok.io'
});