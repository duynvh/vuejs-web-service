import axios from 'axios';
let movies = null;
axios.get('http://x2bdev.com/api/article')
    .then(response => {
        movies = response.data;
    });
    console.log(movies);
export default movies;