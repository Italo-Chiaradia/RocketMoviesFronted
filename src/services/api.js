import axios from 'axios';

export const api = axios.create({
  baseURL:"https://aplica-o-em-node.onrender.com"
});