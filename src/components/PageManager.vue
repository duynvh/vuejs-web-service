<template>
  <div id="app">
    <Header></Header>
    <div class="container content">
      <Title v-bind:title="title"></Title>
      <div class="row">
        <router-link :to="{ path: '/manager/add' }" style="margin-bottom: 20px" class="btn btn-success">Thêm mới</router-link>
        <table class="table table-striped table-bordered table-hover">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Tên phim</th>
                    <th scope="col">Thể loại</th>
                    <th scope="col">Hình ảnh</th>
                    <th scope="col">Khởi chiếu</th>
                    <th scope="col">Hành động</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="movie in movies">
                    <td>{{ movie.name }}</td>
                    <td>{{ movie.type }}</td>
                    <td><img height="100px" :src="movie.image"></td>
                    <td>{{ movie.release_date }}</td>
                    <td>
                        <router-link :to="{ path: '/manager/edit/' + movie._id }" class="btn btn-primary">Sửa</router-link>
                        <button v-on:click="handleDelete(movie._id)" class="btn btn-danger">Xóa</button>
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
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
      title: 'Quản trị admin',
      movies: []
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
	handleDelete(id) {
		axios.delete('https://shielded-lowlands-59603.herokuapp.com/movies/' + id)
		.then(response => {
			alert(response.data.message)
			this.movies = response.data.movies;
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