<script>
  const items = [...Array(10).keys()]
</script>

<div class="wrapper full-bleed">
  {#each items as item}
    <div />
  {/each}
</div>

<style>
  .wrapper {
    --min-child-width: 300px;
    display: grid;
    grid-template-columns: repeat(auto-fit, var(--min-child-width));
  }
</style>
