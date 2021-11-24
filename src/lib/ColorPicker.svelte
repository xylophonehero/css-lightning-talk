<script lang="ts">
  import Slider from "@bulatdashiev/svelte-slider"

  let value = [280, 360]

  $: document.documentElement.style.setProperty(
    "--main-color-deg",
    `${value[0].toString()}deg`
  )
</script>

<div>
  <p class="text">
    Comibing CSS variables and HSL color you can even change the whole color
    scheme of this webite!
  </p>
  <p>Hue: {value[0]}</p>
  <Slider min={0} max={360} bind:value />
</div>

<style lang="scss">
  .text {
    text-align: center;
    font-weight: bold;
    font-size: 1.25rem;
    color: var(--main-200);
  }

  :root {
    --track-bg: var(--main-700);
    --progress-bg: var(--main-500);
    --thumb-bg: var(--main-200);
  }
</style>
