<template>
  <div id="app">
    <Header></Header>
    <div class="container content">
      <Title v-bind:title="title"></Title>
      <FormAdd></FormAdd>
    </div>
  </div>
</template>

<script>
import Header from './Header';
import Title from './Title';
import FormAdd from './FormAdd';
export default {
  name: 'PageAdd',
  components: {
    Header,
    Title,
    FormAdd
  },
  data() {
    return {
      title: 'Thêm mới phim'
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