<script>
  import { onMount } from "svelte"

  let items = []

  onMount(async () => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results)
        items = data.results.slice(0, 12)
      })
      .catch((err) => {
        console.error(err)
        return []
      })
  })
  console.log(items[0])
  // const items = [...Array(24).keys()]
</script>

<div class="wrapper full-bleed">
  {#each items as item}
    <div class="item">
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
    background-color: hsl(var(--main-color-deg) 50% 30%);
    border-radius: 8px;
    padding: 8px;
    box-shadow: 4px 4px 4px hsl(var(--main-color-deg) 70% 20%);
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
</style>
