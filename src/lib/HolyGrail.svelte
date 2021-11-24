<div class="wrapper">
  <div class="header" style="--color-deg: 0deg">Header</div>
  <div class="sidebar" style="--color-deg: 60deg">Sidebar</div>
  <div class="main" style="--color-deg: 120deg">Main</div>
  <div class="aside" style="--color-deg: 180deg">Aside</div>
  <div class="footer" style="--color-deg: 240deg">Footer</div>
</div>

<style>
  .wrapper {
    display: grid;
    grid-template-columns: 200px 1fr 150px;
    grid-template-rows: 4rem 1fr 5rem;
    min-height: 600px;
  }
  .wrapper > * {
    border: solid currentColor 4px;
    padding: 4px;
    background-color: hsla(var(--color-deg), 100%, 40%, 0.3);
    color: hsl(var(--color-deg) 100% 60%);
  }

  .header {
    grid-column: 1 / -1;
  }

  .footer {
    grid-column: 1/ -1;
  }
</style>
