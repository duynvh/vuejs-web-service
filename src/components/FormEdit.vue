<template>
    <div class="card">
        <div class="card-header text-center bg-success">
        </div>
        <div class="card-body">
            <form>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Tên phim</label>
                            <input type="text" v-model="movie.name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nhập tên phim">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Thể loại</label>
                            <input type="text" v-model="movie.type" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nhập thể loại">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Thời gian</label>
                            <input type="number" v-model="movie.running_time" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nhập thời gian">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="exampleInputPassword1">Diễn viên</label>
                            <input type="text" v-model="movie.cast" class="form-control" id="exampleInputPassword1" placeholder="Nhập diễn viên">
                        </div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="exampleInputPassword1">Ngày khời chiếu</label>
                            <input type="text" v-model="movie.release_date" class="form-control" id="exampleInputPassword1" placeholder="Nhập ngày khởi chiếu">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="exampleInputPassword1">Hình ảnh</label>
                            <input type="text" v-model="movie.image" class="form-control" id="exampleInputPassword1" placeholder="Nhập hình ảnh">
                        </div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="exampleInputPassword1">Link trailer</label>
                            <input type="text" v-model="movie.youtube" class="form-control" id="exampleInputPassword1" placeholder="Nhập vào link trailer">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="exampleInputPassword1">Đạo diễn</label>
                            <input type="text" v-model="movie.director" class="form-control" id="exampleInputPassword1" placeholder="Nhập vào đạo diễn">
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Nội dung</label>
                    <textarea v-model="movie.content" placeholder="Nhập vào nội dung" class="form-control"></textarea>
                </div>
                <button type="button" v-on:click="handleClick()" class="btn btn-primary">Chỉnh sửa</button>
                <router-link :to="{ path: '/manager' }"  class="btn btn-info">Quay về</router-link>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'FormEdit',
  props: ['movie'],
  methods: {
      handleClick() {
		var movieItem = {
                name: this.movie.name,
                type: this.movie.type,
                running_time: this.movie.running_time,
                release_date: this.movie.release_date,
                image: this.movie.image,
                youtube: this.movie.youtube,
                director: this.movie.director,
                cast: this.movie.cast,
                content: this.movie.content 
            };
        axios.put('https://shielded-lowlands-59603.herokuapp.com/movies/' + this.movie._id, JSON.stringify(movieItem),{
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
				alert(response.data.message);
            }).catch((err) => 
				console.log(err)
        );
      }
  }
}      
</script>