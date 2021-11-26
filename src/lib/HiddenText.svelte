<script lang="ts">
  import { cubicIn } from "svelte/easing"
  import { fly } from "svelte/transition"

  export let question: string
  export let answer: string

  let isRevealed = false
</script>

<div class="wrapper">
  <span class="question-mark" aria-hidden="true">?</span>

  <div class="question">{question}</div>

  <div class="answer-wrapper">
    <div class="text">
      {answer}
    </div>
    {#if !isRevealed}
      <button
        out:fly={{ x: 100, duration: 700, easing: cubicIn }}
        on:click={() => (isRevealed = true)}
      >
        Click to reveal
      </button>
    {/if}
  </div>
</div>

<style lang="scss">
  .wrapper {
    display: grid;
    background-color: var(--main-700);
    padding: 16px;
    border-radius: 8px;
    grid-template-columns: auto 1fr 150px;
    align-items: center;
    gap: 16px;
    text-align: center;
  }

  @media (max-width: 500px) {
    .wrapper {
      grid-template-columns: 1fr;
      justify-items: center;
    }
  }

  .question-mark {
    font-size: 64px;
    font-weight: bold;
    transform: rotate(10deg);
    color: var(--main-500);
    z-index: 2;
    line-height: 1;
  }

  .answer-wrapper {
    display: grid;
    grid-template-areas: "area";
    height: 60px;
    place-items: center;
  }

  .text {
    color: hsl(180deg 50% 70%);
    grid-area: area;
    font-size: 24px;
    font-weight: bold;
  }

  button {
    height: 100%;
    grid-area: area;
  }
</style>
