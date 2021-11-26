<script lang="ts">
  const items = [
    "tomato",
    "orchid",
    "crimson",
    "deeppink",
    "slateblue",
    "goldenrod",
    "aquamarine",
    "chartreuse",
    "blanchedalmond",
  ]
</script>

<div class="wrapper">
  {#each items as item}
    <div class="item" style="--text-color:{item}">
      {item[0].toUpperCase() + item.slice(1)}
    </div>
  {/each}
</div>

<style lang="scss">
  .wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    place-items: center;
  }

  .item {
    color: var(--text-color, white);
    font-size: 30px;
    font-weight: bold;
  }
</style>
