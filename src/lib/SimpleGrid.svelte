<script lang="ts">
  const items = [...Array(12).keys()]

  export let fractional: boolean
  export let itemSpan: boolean

  const columnString = fractional ? "1fr 100px 2fr" : "200px 100px 300px"
</script>

<div class="wrapper" style="--column-string:{columnString}">
  {#each items as item}
    <div
      class="item"
      class:special={item % 6 === 5 && itemSpan}
      style="--item-color-deg:{item * 30}deg;"
    />
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

  .item {
    background-color: hsl(var(--item-color-deg) 100% 50%);
  }

  .special:nth-child(6n) {
    grid-column-start: 2;
    grid-column-end: 4;
  }
</style>
