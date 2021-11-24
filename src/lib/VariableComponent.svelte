<script>
  const items = [...Array(20).keys()]
</script>

<div>
  {#each items as item}
    <div
      class="item"
      style="--color-deg: {(item * 360) / 20};--item-width: {item * 20 + 20}px"
    />
  {/each}
</div>

<style lang="scss">
  .item {
    background-color: hsl(var(--color-deg) 100% 50%);
    width: var(--item-width, 20px);
    height: 20px;
    margin-bottom: 4px;
  }
</style>
