<script>
  import { onMount } from "svelte"

  let items = []

  onMount(async () => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        items = data.results.slice(0, 12)
      })
      .catch((err) => {
        console.error(err)
        return []
      })
  })

  export let crazy
</script>

<div class="wrapper full-bleed" class:wft={crazy}>
  {#each items as item}
    <div class="item" class:crazy-item={crazy}>
      <div class="name">{item.name}</div>
      <img class="image" src={item.image} alt={item.name} />
    </div>
  {/each}
</div>

<style lang="scss">
  .wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
    gap: 16px;
  }

  .item {
    background-color: var(--main-600);
    border-radius: 8px;
    padding: 8px;
    box-shadow: 4px 4px 4px var(--main-700);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(170px, 100%), 1fr));
    place-items: center;
    gap: 8px;
  }

  .image {
    border-radius: 8px;
  }

  .name {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
  }

  .wft {
    /* first breakpoint*/
    --w1: 800px;
    --n: 4;
    /* second breakpoint*/
    --w2: 500px;
    --m: 2;
    grid-template-columns: repeat(
      auto-fill,
      minmax(
        clamp(
          clamp(
            100%/ (var(--n) + 1) + 0.1%,
            (var(--w1) - 100vw) * 1000,
            100%/ (var(--m) + 1) + 0.1%
          ),
          (var(--w2) - 100vw) * 1000,
          100%
        ),
        1fr
      )
    );
  }

  .crazy-item {
    background: linear-gradient(var(--main-600) 0 0) 0 / max(0px, 300px - 100%)
        1px,
      hsl(180deg 100% 20%);
  }
</style>
