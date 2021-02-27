import axios from 'axios';

const token = localStorage.getItem("token");
const api = axios.create({
   baseURL: 'http://localhost:8081',
   headers: {
      "Content-type": "application/json",
      'x-access-token': `${token}`
    }
});

export default api;