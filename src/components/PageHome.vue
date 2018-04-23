<template>
    <div>
        <Header></Header>
        <div class="container content">
        <button v-on:click="addMovie()"> Click </button>
        <Title v-bind:title="title"></Title>
        <div id="list-movie">
            <div class="row">
              <Movie v-for="(movie, index) in movies" v-bind:movie="movie" v-bind:index="index"></Movie>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Header from './Header';
import Title from './Title';
import Movie from './Movie';
export default {
  name: 'PageHome',
  components: {
    Header,
    Title,
    Movie
  },
  data() {
        return {
            movies: [],
            title: "Danh sách phim hiện đang chiếu"
        }
  },
  created() {
    axios.get('https://shielded-lowlands-59603.herokuapp.com/movies')
    .then(response => {
        this.movies = response.data;
    }).catch((err) => 
      console.log(err)
    );
  },
  methods: {
    addMovie() {
      var movieItem = {
          name: "Pacific Rim: Khoa Nhay",
          type: "Hành Ð?ng, Phiêu Luu",
          running_time: 111,
          release_date: "2018-03-23 00:00:00",
          image: "https://i.imgur.com/2E63FPF.jpg",
          youtube: "8BAhwgjMvnM",
          status: 1,
          director: "Steven S. DeKnight",
          cast: "John Boyega, Scott Eastwood, Jing Tian, Cailee Spaeny, Rinko Kikuchi, Burn Gorman, Adria Arjona, Charlie Day",
          content: "L?y b?i c?nh 10 nam sau nh?ng s? ki?n dã di?n ra ? ph?n 1, Jake Pentecost – truy?n nhân duy nh?t c?a huy?n tho?i Stacker Pentecost dã th?c hi?n l?i h?a v?i cha mình, gia nh?p nhóm ngu?i di?u khi?n Jaeger g?m có Lambert (Scott Eastwood) và Amara ch? m?i 15 tu?i (Cailee Spaeny), cùng nhau xây d?ng nên m?t chi?n tuy?n ch?ng l?i Kaiju. Cu?c xung d?t toàn c?u kéo dài gi?a nh?ng quái v?t âm muu phá h?y th? gi?i và nh?ng robot kh?ng l? do con ngu?i ch? t?o ra nh?m dánh b?i lu quái v?t h?a h?n s? là m?t cu?c chi?n cam go và k?ch tính khi lu quái v?t gi? dây dã ti?n hóa vu?t b?c c? v? th? l?c và trí l?c."  
      };
      // fetch('http://x2bdev.com/api/article', {
      //   method: 'POST',
      //   body: JSON.stringify(movieItem),
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   mode: 'no-cors'
      // })
      // .then(res => console.log(res))
      // .catch(error => console.error(error))

      axios.post('https://shielded-lowlands-59603.herokuapp.com/movies', JSON.stringify(movieItem),{
          headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
              'Access-Control-Allow-Headers': 'Authorization'
          },
          crossOrigin: false,
          mode: 'no-cors'
        })
        .then(response => {
            console.log(response)
        }).catch((err) => 
          console.log(err)
        );
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  margin-top: 50px;
}
</style>
