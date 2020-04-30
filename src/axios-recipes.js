import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://react-my-recipe-page.firebaseio.com/'
});

export default instance;