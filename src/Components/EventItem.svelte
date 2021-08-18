<script>
  import { createEventDispatcher } from "svelte";
  import Badge from "../UI/Badge.svelte";

  import Button from "../UI/Button.svelte";

  export let id;
  export let title;
  export let subtitle;
  export let address;
  export let image;
  export let email;
  export let description;
  export let isFavorite;

  const dispatch = createEventDispatcher();
</script>

<article>
  <header>
    <h1>
      {title}
      {#if isFavorite}
        <Badge>Favorite</Badge>
      {/if}
    </h1>
    <h2>{subtitle}</h2>
  </header>
  <div class="image">
    <img src={image} alt={title} />
  </div>
  <div class="content">
    <p>{description}</p>
  </div>
  <footer>
    <div class="address">
      <p>{address}</p>
    </div>
    <div class="email">
      <p>{email}</p>
    </div>
    <Button href="">Contact</Button>
    <Button>Show Details</Button>
    <Button mode="outline" on:click={() => dispatch("toggle-favorite", id)}
      >{isFavorite ? "Unfavorite" : "Favorite"}
    </Button>
  </footer>
</article>

<style>
  article {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 5px;
    background: white;
    margin: 1rem;
  }

  header,
  .content,
  footer {
    padding: 1rem;
  }

  .image {
    width: 100%;
    height: 14rem;
  }

  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h1 {
    font-size: 1.25rem;
    margin: 0.5rem 0;
    font-family: "Roboto Slab", sans-serif;
  }

  h1.is-favorite {
    background: #01a129;
    color: white;
    padding: 0 0.5rem;
    border-radius: 5px;
  }

  h2 {
    font-size: 1rem;
    color: #808080;
    margin: 0.5rem 0;
  }

  p {
    font-size: 1.25rem;
    margin: 0;
  }

  div {
    text-align: right;
  }

  .content {
    height: 4rem;
  }
</style>
