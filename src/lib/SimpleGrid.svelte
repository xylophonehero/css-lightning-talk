<script lang="ts">
  const items = [...Array(12).keys()]

  export let fractional: boolean
  export let itemSpan: boolean

  const columnString = fractional ? "1fr 100px 2fr" : "200px 100px 300px"
</script>

<div
  class="wrapper"
  class:hidden={!fractional}
  style="--column-string:{columnString}"
>
  {#each items as item}
    <div
      class="item"
      class:special={item % 6 === 5 && itemSpan}
      style="--item-color-deg:{item * 30}deg;"
    >
      {item}
    </div>
  {/each}
</div>

<style lang="scss">
  .wrapper {
    display: grid;
    grid-template-columns: var(--column-string);
    grid-auto-rows: 200px;
    gap: 8px;
    justify-content: center;
  }

  @media (max-width: 700px) {
    .hidden {
      display: none;
    }
  }

  .item {
    background-color: hsl(var(--item-color-deg) 100% 60%);
    color: var(--main-900);
    display: grid;
    place-items: center;
    font-size: 2rem;
    font-weight: bold;
  }

  .special:nth-child(6n) {
    grid-column: 2 / span 2;
  }
</style>
