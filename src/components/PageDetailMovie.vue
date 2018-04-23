<template>
    <div>
        <Header></Header>
        <div class="container content">
        <Title v-bind:title="title"></Title>
        <DetailMovie v-bind:movie="movie"></DetailMovie>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Header from './Header';
import Title from './Title';
import DetailMovie from './DetailMovie';
export default {
  name: 'PageDetailMovie',
  components: {
    Header,
    Title,
    DetailMovie
  },
  data() {
        return {
            movie: {},
            title: "Nội dung phim",
            id: this.$route.params.id
        }
  },
  created() {
    axios.get('https://shielded-lowlands-59603.herokuapp.com/movies/' + this.id)
    .then(response => {
        this.movie = response.data;
        console.log(this.movie);
    }).catch((err) => 
      console.log(err)
    )
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
