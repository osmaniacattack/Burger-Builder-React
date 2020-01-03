import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-react-2aa93.firebaseio.com/'
})

export default instance;