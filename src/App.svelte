<script lang="ts">
  import { Router, Link, Route } from "svelte-routing"
  import Home from "./pages/Home.svx"
  import Colors from "./pages/Colors.svx"
  import Variables from "./pages/Variables.svx"
  import Grid1 from "./pages/GridIntro.svx"
  import Grid2 from "./pages/Grid.svx"

  export let url = ""
</script>

<Router {url}>
  <nav>
    <Link to="/">Start</Link>
    <Link to="/variables">Variables</Link>
    <Link to="/colors">Colors</Link>
    <Link to="/grid">Grid</Link>
    <Link to="/grid2">2</Link>
  </nav>
  <main>
    <Route path="grid2" component={Grid2} />
    <Route path="grid" component={Grid1} />
    <Route path="colors" component={Colors} />
    <Route path="variables" component={Variables} />
    <Route path="/" component={Home} />
  </main>
  <footer>by Nick</footer>
</Router>

<style lang="scss">
  :global(#app) {
    font-family: Arial, Helvetica, sans-serif;
    min-height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
    color: hsl(var(--main-color-deg) 100% 95%);
  }

  nav {
    background-color: hsl(var(--main-color-deg) 70% 50%);
    padding: 16px var(--gutter-width);
    display: flex;
    gap: 16px;

    & :global(a) {
      color: inherit;
      font-size: 1.5rem;
      text-decoration: none;
    }
  }

  main {
    background-color: hsl(var(--main-color-deg) 100% 5%);
  }

  footer {
    text-align: center;
    background-color: hsl(var(--main-color-deg) 70% 90%);
    color: hsl(var(--main-color-deg) 100% 10%);
    padding: 8px var(--gutter-width);
  }
</style>
