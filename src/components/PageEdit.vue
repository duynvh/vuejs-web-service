<template>
  <div id="app">
    <Header></Header>
    <div class="container content">
      <Title v-bind:title="title"></Title>
      <FormEdit v-bind:movie="movie"></FormEdit>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Header from './Header';
import Title from './Title';
import FormEdit from './FormEdit';
export default {
  name: 'PageEdit',
  components: {
    Header,
    Title,
    FormEdit
  },
  data() {
    return {
        movie: {},
        title: 'Chỉnh sửa phim',
        id: this.$route.params.id
    } 
  },
  created() {
    axios.get('https://shielded-lowlands-59603.herokuapp.com/movies/' + this.id)
    .then(response => {
        this.movie = response.data;
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