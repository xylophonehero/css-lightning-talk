<div class="wrapper">
  <div class="grid-child header" style="--color-deg: 0deg">
    <span class="label">Header</span>
    <span class="emoji">😃</span>
  </div>
  <div class="grid-child main" style="--color-deg: 120deg">
    <span class="label">Main</span>
    <span class="emoji">🍔</span>
  </div>
  <div class="grid-child sidebar" style="--color-deg: 60deg">
    <span class="label">Sidebar</span>
    <span class="emoji">👈</span>
  </div>
  <div class="grid-child aside" style="--color-deg: 180deg">
    <span class="label">Aside</span>
    <span class="emoji">👉</span>
  </div>
  <div class="grid-child footer" style="--color-deg: 240deg">
    <span class="label">Footer</span>
    <span class="emoji">🦶</span>
    <span class="emoji swapped">🦶</span>
  </div>
</div>

<style>
  .wrapper {
    display: grid;
    grid-template-columns: 200px 1fr 150px;
    grid-template-rows: 5rem 1fr 6rem;
    min-height: 600px;

    grid-template-areas:
      "header header header"
      "sidebar main aside"
      "footer footer footer";
  }

  @media (max-width: 600px) {
    .wrapper {
      grid-template-areas:
        "header"
        "main"
        "aside"
        "sidebar"
        "footer";
      grid-template-columns: 1fr;
    }
  }

  .swapped {
    transform: rotateY(180deg) translateX(-4rem);
  }

  .emoji {
    grid-area: single;
  }

  .label {
    grid-area: single;
    place-self: start;
    font-size: 1.2rem;
  }

  .header {
    grid-area: header;
  }

  .sidebar {
    grid-area: sidebar;
  }

  .main {
    grid-area: main;
  }

  .aside {
    grid-area: aside;
  }

  .footer {
    grid-area: footer;
  }
</style>
