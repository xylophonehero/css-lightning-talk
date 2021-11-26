<script lang="ts">
  import Slider from "@bulatdashiev/svelte-slider"

  const storedValue = window.localStorage.getItem("bg") || 280
  let value = [storedValue, 360]

  $: {
    document.documentElement.style.setProperty(
      "--main-color-deg",
      `${value[0].toString()}deg`
    )
    window.localStorage.setItem("bg", value[0].toString())
  }
</script>

<div>
  <p class="text">
    Comibing CSS variables and HSL color you can even change the whole color
    scheme of this webite!
  </p>
  <p>Hue: {value[0]}</p>
  <Slider min={0} max={360} bind:value />

  <button on:click={() => (value = [280, 360])}>Reset</button>
</div>

<style lang="scss">
  .text {
    text-align: center;
    font-weight: bold;
    font-size: 1.25rem;
    color: var(--main-200);
  }
</style>
