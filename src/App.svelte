<script>
  import events from "./Stores/Events/events-store";
  import Header from "./UI/Header.svelte";
  import EventGrid from "./Components/EventGrid.svelte";
  import EventForm from "./Components/EventForm.svelte";
  import Button from "./UI/Button.svelte";

  import EventDetail from "./Components/EventDetail.svelte";

  let opened = false;
  let eventId = {};

  export let UIMode = "overview";

  const submitEventsHandler = () => {
    opened = false;
    eventId.id = null;
  };

  const toggleFavorite = (event) => {
    const id = event.detail;
    events.toggleFavorite(id);
  };

  const cancelEvent = () => {
    opened = false;
    eventId.id = null;
  };

  const showDetails = (event) => {
    eventId.id = event.detail;
    UIMode = "detail";
  };

  const editEvent = (event) => {
    opened = true;
    eventId.id = event.detail;
  };

  $: console.log(eventId, "id");
</script>

<Header />
<main>
  <div class="event-controls">
    {#if UIMode === "overview"}
      <Button on:click={() => (opened = true)}>New Event</Button>
      {#if opened}
        <EventForm
          on:save-form-data={submitEventsHandler}
          on:cancel={cancelEvent}
          id={eventId.id}
        />
      {/if}
      <EventGrid
        events={$events}
        on:toggle-favorite={toggleFavorite}
        on:show-details={showDetails}
        on:edit-event={editEvent}
      />
    {:else if UIMode === "detail"}
      <EventDetail eventId={eventId.id} />
    {/if}
  </div>
</main>

<style>
  main {
    margin-top: 5rem;
  }
  .event-controls {
    margin: 1rem;
  }
</style>
