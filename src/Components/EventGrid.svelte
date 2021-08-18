<script>
  import EventItem from "./EventItem.svelte";

  export let events;
</script>

<section id="events">
  {#each events as event}
    <EventItem
      id={event.id}
      title={event.title}
      subtitle={event.subtitle}
      address={event.address}
      image={event.image}
      email={event.email}
      description={event.description}
      isFavorite={event.isFavorite}
      on:toggle-favorite
    />
  {/each}
</section>

<style>
  section {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }

  @media (min-width: 768px) {
    section {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
