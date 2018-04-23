<template>
  <div id="app">
    <Header></Header>
    <div class="container content">
      <Title v-bind:title="title"></Title>
      <FormAdmin></FormAdmin>
    </div>
  </div>
</template>

<script>
import Header from './Header';
import Title from './Title';
import FormAdmin from './FormAdmin';
export default {
  name: 'PageAdmin',
  components: {
    Header,
    Title,
    FormAdmin
  },
  data() {
    return {
      title: 'Đăng nhập admin'
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