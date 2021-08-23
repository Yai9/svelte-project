<script>
  import { createEventDispatcher } from "svelte";

  let selectedButton = 0;

  export let filterFavorites = false;

  const dispatch = createEventDispatcher();

  const showAll = () => {
    dispatch("filter-events", 0);
    selectedButton = 0;
  };
  const showFavorites = () => {
    dispatch("filter-events", 1);
    selectedButton = 1;
  };
</script>

<div>
  <button class:active={selectedButton === 0} on:click={showAll}>All</button>
  <button class:active={selectedButton === 1} on:click={showFavorites}
    >Favorites</button
  >
</div>

<style>
  div {
    font-size: 0px;
  }

  button {
    background: #aaaaaa;
    font: inherit;
    font-size: 1rem;
    cursor: pointer;
    border: 1px solid #aaaaaa;
    padding: 0.5rem 1rem;
  }

  button:focus {
    outline: none;
  }

  button:first-of-type {
    border-radius: 5px 0 0 5px;
  }

  button:last-of-type {
    border-radius: 0 5px 5px 0;
  }

  button:hover,
  button:active,
  .active {
    background: #8400ff;
    border-color: #8400ff;
    color: white;
  }
</style>
