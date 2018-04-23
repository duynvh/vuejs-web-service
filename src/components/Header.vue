<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <router-link class="navbar-brand" :to="{ path: '/' }">Trang chủ</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div style="margin-left: 30px" class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li v-if="!checkLogin" class="nav-item active">
                        <router-link class="nav-link" :to="{ path: '/admin' }">Đăng nhập <span class="sr-only">(current)</span></router-link>
                    </li>
                    <template v-if="checkLogin">
                        <li class="nav-item active">
                            <router-link class="nav-link" :to="{ path: '/logout' }">Đăng xuất <span class="sr-only">(current)</span></router-link>
                        </li>
                        <li class="nav-item active">
                            <router-link class="nav-link" :to="{ path: '/manager' }">Quản trị <span class="sr-only">(current)</span></router-link>
                        </li>
                    </template>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Header',
  data() {
      return {
          checkLogin: false
      }
  },
  created() {
      let admin = localStorage.getItem("user");
      if(admin == "admin") {
          this.checkLogin = true;
      }
  }
}
</script>