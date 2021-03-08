import axios from 'axios';

const token = localStorage.getItem("token");
const api = axios.create({
   baseURL: 'https://6cb9eb57fa72.ngrok.io',
   headers: {
      "Content-type": "application/json",
      'x-access-token': `${token}`
    }
});

export default api;