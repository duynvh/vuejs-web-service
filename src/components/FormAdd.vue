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
                            <input type="text" v-model="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nhập tên phim">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Thể loại</label>
                            <input type="text" v-model="type" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nhập thể loại">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Thời gian</label>
                            <input type="number" v-model="running_time" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nhập thời gian">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="exampleInputPassword1">Diễn viên</label>
                            <input type="text" v-model="cast" class="form-control" id="exampleInputPassword1" placeholder="Nhập diễn viên">
                        </div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="exampleInputPassword1">Ngày khời chiếu</label>
                            <input type="text" v-model="release_date" class="form-control" id="exampleInputPassword1" placeholder="Nhập ngày khởi chiếu">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="exampleInputPassword1">Hình ảnh</label>
                            <input type="text" v-model="image" class="form-control" id="exampleInputPassword1" placeholder="Nhập hình ảnh">
                        </div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="exampleInputPassword1">Link trailer</label>
                            <input type="text" v-model="youtube" class="form-control" id="exampleInputPassword1" placeholder="Nhập vào link trailer">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="exampleInputPassword1">Đạo diễn</label>
                            <input type="text" v-model="director" class="form-control" id="exampleInputPassword1" placeholder="Nhập vào đạo diễn">
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Nội dung</label>
                    <textarea v-model="content" placeholder="Nhập vào nội dung" class="form-control"></textarea>
                </div>
                <button type="button" v-on:click="handleClick()" class="btn btn-primary">Thêm</button>
                <router-link :to="{ path: '/manager' }"  class="btn btn-info">Quay về</router-link>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'FormAdmin',
  data() {
      return {
          name: '',
          type: '',
          running_time: 1,
          content: '',
          release_date: '',
          image: '',
          youtube: '',
          director: '',
          cast: '',
      }
  },
  methods: {
      handleClick() {
            var movieItem = {
                name: this.name,
                type: this.type,
                running_time: this.running_time,
                release_date: this.release_date,
                image: this.image,
                youtube: this.youtube,
                director: this.director,
                cast: this.cast,
                content: this.content 
            };
			
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
				console.log(err.response)
            );
      }
  }
}      
</script>