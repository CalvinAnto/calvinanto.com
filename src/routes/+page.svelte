<svelte:head>
    <title>Home - Calvin Anto</title>
</svelte:head>

<script>
     /**
   * @type {{ age: any; }}
   */
      export let data;
</script>

<main>
    <h1>Calvin - {data.age} years old </h1>
    <p>I'm a full stack developer that is experienced in javascript and C.</p>
    <p>I like to learn new technologies and is currently learning new stuff each day.</p>
    <p>I also like <b>music</b> and <b>gaming</b> and do them in my free time.</p>

    <p>
        I have experience in
        <!-- <span style="font-size: 0.5em;">with varying degree of success</span> -->
        <div style="margin-left: 25px;">
            - Java SE <br>
            - JavaScript <br>
            - Amazon S3 <br>
            - SvelteKit <br>
            - C / C++ <br>
            - SQL <br>
            - MongoDB <br>
            - Firebase <br>
            - and more, check out my <a href="/resume">resume</a>
        </div>
    <p>

    <p>Please look at the <a href="/projects">projects</a> that I've created, some might be kind of useful for you :D</p>


</main>


<style>
    main {
        font-size: 1.2em;
    }

    p {
        margin-top: 25px;
    }

    a {
        color: black;
    }
</style>
