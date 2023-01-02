<script>
  import { page } from "$app/stores";
</script>

<nav>
  <div class="nav-center">
    <a href="/" class:active={$page.url.pathname == "/"}>Home</a>
    <a href="/projects" class:active={$page.url.pathname == "/projects"}
      >Projects</a
    >
    <a href="/resume" class:active={$page.url.pathname == "/resume"}>Resume</a>
    <a href="/contact" class:active={$page.url.pathname == "/contact"}>Contact</a>
  </div>
</nav>

<main>
  <slot />
</main>

<footer>
  <div class="footer-container">
    <div>
      <p>CalvinAnto</p>
      <p style="font-size: 0.75em;">©2023 CalvinAnto</p>
    </div>
    <div>
      <a href="https://github.com/CalvinAnto" target="_blank" rel="noopener noreferrer"><img src="GitHub-Mark-64px.png" alt="github"></a>
    </div>
  </div>
</footer>

<style>
  :global(*) {
    margin: 0;
    padding: 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  :global(body) {
    background: #f5faff;
  }
  
  
  main {
    min-height: calc(100vh - 200px);
    width: 60%;
    margin: 0 auto;
  }

  footer {
    width: 60%;
    margin: 0 auto;
  }

  @media only screen and (max-width: 768px) {
    main {
      width: 80%;
    }

    footer {
      width: 80%;
    }
  }

  .footer-container {
    display: flex;
    flex-direction: row;
    height: 100px;
    align-items: center;
    justify-content: space-between;
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
  }

  nav a {
    padding: 10px;
    text-align: center;
    margin: 10px 10px;
    text-decoration: none;
    /* background: #97e2f2; */
    border-radius: 8px;
    color: black;
    /* border: #0066af 1px solid; */
  }

  nav a:hover, .active {
    background: black;
    color: white;
  }

  .nav-center {
    display: flex;
    flex-direction: row;
    list-style-type: none;
  }

  img {
    height: 32px;
  }
</style>
