<template>
    <div>
        <div class="row"> 
            <div class="col-md-3">
                <img  :src="movie.image" alt="Card image cap">
            </div>
            <div class="col-md-9">
                <h3>Tên phim : <span class="name-movie">{{ movie.name }}</span></h3>
                <hr>
                <ul class="list-group">
                    <li class="list-group-item">Đạo diễn : {{ movie.director }}</li>
                    <li class="list-group-item">Thể loại : {{ movie.type }}</li>
                    <li class="list-group-item">Thời gian : {{ movie.running_time }}</li>
                    <li class="list-group-item">Khởi chiếu : {{ movie.release_date }}</li>
                    <li class="list-group-item">Diễn viên : {{ movie.cast }}</li>
                </ul>
            </div>
        </div>
        <div style="margin-top: 30px">
            <ul class="nav nav-tabs center" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" href="#content" role="tab" data-toggle="tab">Nội dung chi tiết phim</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#trailer" role="tab" data-toggle="tab">Trailer</a>
                </li>
            </ul>
            <div class="tab-content">
                <div role="tabpanel" class="tab-pane active" id="content">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Chi tiết</h4>
                            <p class="card-text">{{ movie.content }}</p>
                        </div>
                    </div>
                </div>
                <div role="tabpanel" class="tab-pane fade" id="trailer">
                    <div class="card">
                        <div class="card-body">
                            <iframe width="854" height="480" :src="url_youtube" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailMovie',
    props: ['movie'],
    data() {
        return {
            url_youtube: "https://www.youtube.com/embed/" + this.movie.youtube
        }
    }
}
</script>

<style>
    .movie {
        margin-bottom: 20px;
    }

    .name-movie {
        color: red;
    }
</style>