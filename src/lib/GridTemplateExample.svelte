<script>
  import Slider from "@bulatdashiev/svelte-slider"

  const items = ["🍣", "🍙", "🍱", "🍜", "🍚"]

  let pressed = ""

  let circleSize = [100, 200]
  let wrapperSize = [400, 800]

  export let showControls
  export let alt
</script>

<div
  class="wrapper"
  class:wrapper-alt={alt}
  class:wrapper-correct={!alt}
  style="--circle-size:{circleSize[0]}px;--wrapper-size:{wrapperSize[0]}px"
>
  {#each items as item, index}
    <button
      class="circle"
      class:circle-alt={alt}
      class:circle-correct={!alt}
      on:click={() => (pressed = item)}
      aria-label={`button number ${index}`}
    >
      {item}
    </button>
  {/each}
</div>

<div class="info">
  Last pressed: {pressed}
</div>

{#if showControls}
  <div>
    <p>Big circle size: {wrapperSize[0]}</p>
    <Slider min={250} max={800} bind:value={wrapperSize} />

    <p>Circle size: {circleSize[0]}</p>
    <Slider min={50} max={200} bind:value={circleSize} />
  </div>
{/if}

<style lang="scss">
  .wrapper {
    display: grid;
    width: min(var(--wrapper-size), 100%);
    aspect-ratio: 1;
    background-color: var(--main-700);
    border-radius: 50%;
    justify-self: center;
    padding: 16px;
  }

  .wrapper-correct {
    grid-template-areas: "circle";
  }

  .circle {
    display: grid;
    width: var(--circle-size);
    aspect-ratio: 1;
    border-radius: 50%;
    place-items: center;
    font-size: calc(var(--circle-size) / 2);
  }

  .circle-correct {
    grid-area: circle;
  }

  .circle:nth-child(1) {
    place-self: start center;
  }

  .circle:nth-child(2) {
    place-self: center start;
  }

  .circle:nth-child(3) {
    place-self: center;
  }

  .circle:nth-child(4) {
    place-self: center end;
  }

  .circle:nth-child(5) {
    place-self: end center;
  }

  .info {
    border-radius: 8px;
    background-color: var(--main-700);
    padding: 16px;
    width: fit-content;
    font-size: 1.5rem;
  }

  .wrapper-alt {
    grid-template-columns: var(--circle-size) 1fr var(--circle-size) 1fr var(
        --circle-size
      );
    grid-template-rows: var(--circle-size) 1fr var(--circle-size) 1fr var(
        --circle-size
      );
    grid-template-areas:
      ". . t . ."
      ". . . . ."
      "l . c . r"
      ". . . . ."
      ". . b . .";
  }

  .circle-alt:nth-child(1) {
    grid-area: t;
  }

  .circle-alt:nth-child(2) {
    grid-area: l;
  }

  .circle-alt:nth-child(3) {
    grid-area: c;
  }

  .circle-alt:nth-child(4) {
    grid-area: r;
  }

  .circle-alt:nth-child(5) {
    grid-area: b;
  }
</style>
