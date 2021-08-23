<script>
  import EventItem from "./EventItem.svelte";
  import EventFilter from "./EventFilter.svelte";

  export let events;
  export let filterFavorites = false;

  const setFilter = (event) => {
    filterFavorites = event.detail === 1;
  };

  $: filterFavs = filterFavorites ? events.filter((e) => e.isFavorite) : events;
  $: console.log(filterFavs, "favs");
</script>

<section class="event-controls">
  <EventFilter on:filter-events={setFilter} />
</section>

<section id="events">
  {#each filterFavs as event}
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
      on:show-details
      on:edit-event
    />
  {/each}
</section>

<style>
  #events {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }

  #event-controls {
    margin: 1rem;
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: 768px) {
    #events {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
