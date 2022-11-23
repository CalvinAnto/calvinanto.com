<svelte:head>
    <title>Contact</title>
</svelte:head>

<main>
    <p>You can contact me by sending me an email to:</p>
    <a href="mailto:contact@calvinanto.com" style="text-decoration: none;"><p class="mailto"><b>contact@calvinanto.com</b></p></a>
    <p>I will get back to you, within 3 days</p>
</main>

<style>

    main {
        font-size: 1.2em;
    }

    .mailto {
        color: black;
        margin: 25px 2em;
        font-size: 1.5em;
        overflow-wrap: break-word;
    }

    @media only screen and (max-width: 768px) {
        .mailto {
            margin: 25px 0;
        }
    }

    .mailto:hover {
        color: #0066af;
    }
</style>