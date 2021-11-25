<div class="wrapper">
  <div class="grid-child 🍌" style="--color-deg:60deg">🍌</div>
  <div class="grid-child 🥥" style="--color-deg:180deg">🥥</div>
  <div class="grid-child 🍆" style="--color-deg:300deg">🍆</div>
</div>

<style lang="scss">
  .wrapper {
    display: grid;
    grid-template-areas:
      "a b b"
      "a b b"
      "a . ."
      "a c c";
    grid-auto-rows: 5rem;
  }

  .🍌 {
    grid-area: a;
  }

  .🥥 {
    grid-area: b;
  }

  .🍆 {
    grid-area: c;
  }
</style>
