<div>
    <img src="movie-db-1.jpg" alt="">
    <img src="movie-db-2.jpg" alt="">
    <img src="movie-db-3.jpg" alt="">
    <img src="movie-db-4.jpg" alt="">
    <img src="movie-db-5.jpg" alt="">
</div>

<style>
    img {
        max-height: 500px;
    }

    div {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 50px;
    }
</style>