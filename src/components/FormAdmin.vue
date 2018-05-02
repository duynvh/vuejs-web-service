<template>
    <div class="card">
        <div class="card-header text-center bg-success">
        </div>
        <div class="card-body">
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Địa chỉ email</label>
                    <input type="email" v-model="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Mật khẩu</label>
                    <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>
                <button type="button" v-on:click="handleClick()" class="btn btn-primary">Đăng nhập</button>
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
          username: '',
          password: ''
      }
  },
  methods: {
      handleClick() {
        var userItem = {
            email: this.username,
            password: this.password 
        };
        axios.post('https://shielded-lowlands-59603.herokuapp.com/users/login', JSON.stringify(userItem),{
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
                alert('Success');
                localStorage.setItem("user", "admin");
                this.$router.push('manager')        
            }).catch(err => {
                alert(err.response.data.message);
            });
      }
  }
}      
</script>