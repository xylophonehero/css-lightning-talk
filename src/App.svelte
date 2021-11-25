<script lang="ts">
  import { Router, Link, Route } from "svelte-routing"
  import Home from "./pages/Home.svx"
  import Colors from "./pages/Colors.svx"
  import Variables from "./pages/Variables.svx"
  import Grid1 from "./pages/GridIntro.svx"
  import Grid2 from "./pages/Grid2.svx"
  import Grid3 from "./pages/Grid3.svx"
  import Grid4 from "./pages/Grid4.svx"
  import Fin from "./pages/Fin.svx"

  export let url = ""
</script>

<svelte:head>
  <title>CSS Lightning Talk</title>
  <meta name="robots" content="noindex nofollow" />
  <html lang="en" />
</svelte:head>

<Router {url}>
  <nav>
    <Link to="/">🧙‍♂️CSS⚗️</Link>
    <Link to="/variables">Variables</Link>
    <Link to="/colors">Colors</Link>
    <Link to="/grid">Grid</Link>
    <Link to="/grid2">2</Link>
    <Link to="/grid3">3</Link>
    <Link to="/grid4">4</Link>
    <Link to="/fin">Fin</Link>
  </nav>
  <main>
    <Route path="fin" component={Fin} />
    <Route path="grid4" component={Grid4} />
    <Route path="grid3" component={Grid3} />
    <Route path="grid2" component={Grid2} />
    <Route path="grid" component={Grid1} />
    <Route path="colors" component={Colors} />
    <Route path="variables" component={Variables} />
    <Route path="/" component={Home} />
  </main>
  <footer>
    <a href="https://nickworrall.co.uk" target="_blank">Nick👨</a>
    <a
      href="https://github.com/xylophonehero/css-lightning-talk"
      target="_blank">Github👽</a
    >
  </footer>
</Router>

<style lang="scss">
  :global(#app) {
    font-family: Arial, Helvetica, sans-serif;
    min-height: 100%;
    display: grid;
    grid-template-rows: 4.5rem 1fr 3.5rem;
    color: var(--main-50);
  }

  nav {
    z-index: 1;
    position: sticky;
    top: 0;
    background: linear-gradient(to top, var(--main-black), var(--main-500) 20%);
    /* background-color: hsl(var(--main-color-deg) 70% 50%); */
    padding: 16px var(--gutter-width) 32px;
    display: flex;
    gap: 16px;

    & :global(a) {
      color: inherit;
      font-size: 1.5rem;
      text-decoration: none;
    }
  }

  @media (max-width: 800px) {
    nav > :global(a):not(:first-child) {
      display: none;
    }
  }

  main {
    isolation: isolate;
    background-color: var(--main-black);
  }

  footer {
    display: flex;
    align-items: end;
    text-align: center;
    justify-content: center;
    padding: 16px var(--gutter-width);
    gap: 1rem;
    background: linear-gradient(
      to bottom,
      var(--main-black),
      var(--main-500) 20%
    );

    & a {
      color: inherit;
      text-decoration: none;
    }
  }
</style>
