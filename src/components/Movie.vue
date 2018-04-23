<template>
    <div class="col-md-4 movie">
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" :src="movie.image" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{ movie.name }}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Thể loại: {{ movie.type }}</li>
                <li class="list-group-item">Đạo diễn: {{ movie.director }}</li>
            </ul>
            <div class="card-body">
                <router-link class="btn btn-primary" :to="{ name: 'PageDetailMovie', params: { id: movie._id }}">View Detail</router-link>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'Movie',
    props: ['movie', 'index'],
}
</script>

<style>
    .movie {
        margin-bottom: 20px;
    }
</style>