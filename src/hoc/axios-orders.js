import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-project-with-server.firebaseio.com/'
});

export default instance;