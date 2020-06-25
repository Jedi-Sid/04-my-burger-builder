import axios from 'axios'


const instance = axios.create({
 baseURL: 'https://my-burger-builder-70fab.firebaseio.com/'


})

export default instance;
