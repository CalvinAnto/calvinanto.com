<svelte:head>
    <title>Projects - CalvinAnto</title>
</svelte:head>

<main>
    <p>Here are a list of things I've made previously for <b>school</b>, <b>work</b> and <b>personal projects</b>. Some are open source and are avaiblable on <a href="https://github.com/CalvinAnto" target="_blank" rel="noopener noreferrer">github</a>, but some are closed source.</p>
    <div class="card-grid">
        <div class="card">
            <img src="filebox.webp" alt="filebox.jpg">
            <div class="card-content">
                <h2>Filebox</h2> <a href="https://filebox.my.id" target="_blank" rel="noopener noreferrer" style="font-size: 0.8em;">filebox.my.id</a>
                <p>Filebox is a site where you can easily upload and share files without an account.</p>
                <p>It uses <b>sveltekit</b> as the front end, and <b>express</b> as the backend.</p>
                <p>It is currently not open sourced since the code is spaghet.</p>
            </div>
        </div>
        <div class="card">
            <img src="moviedb.png" alt="">
            <div class="card-content">
                <h2>MovieDB</h2> <a href="/projects/moviedb" style="font-size: 0.8em;">screenshots</a>
                <p>An android application which uses <a href="https://www.omdbapi.com/">OMDb API</a> to search movies. I made it as an android lesson final assigment.</p>
                <p>The language used is <b>java</b>.</p>
            </div>
        </div>
        <div class="card">
            <div class="card-content">
                <h2>Patchy v2</h2>
                <p>Since this is an internal company application, I can only show a screenshot of it.</p>
                <p>This site is created using <b>laravel</b> for both front end and back end.</p>
                <p>It is used to manage software patches for computers.</p>
            </div>
        </div>
    </div>
</main>

<style>
    main {
        font-size: 1.2em;
    }

    .card-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        margin-top: 25px;
        gap: 10px;
        /* justify-content: center; */
    }

    @media only screen and (max-width: 768px) {
        .card-grid {
            grid-template-columns: repeat(auto-fill, minmax(80%, 1fr));
        }
    }

    .card {
        display: inline-block;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        border-radius: 8px;
        justify-content: center;
        background: white;
        overflow: hidden;
    }

    .card img {
        max-height: 270px;
        width: 100%;
        object-fit: cover;
    }

    .card-content {
        padding: 10px;
    }

    .card p {
        margin-top: 10px;
    }

    a {
        color: black;
    }

</style>