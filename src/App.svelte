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
  export let editMode = false;

  const submitEventsHandler = () => {
    UIMode = "overview";
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

  const closeDetailCard = () => {
    UIMode = "overview";
    eventId.id = null;
  };

  const editEvent = (event) => {
    opened = true;
    eventId.id = event.detail;
    editMode = true;
  };

  const removeEvent = () => {
    const id = eventId.id;
    events.removeEvent(id);
    opened = false;
    eventId.id = null;
    editMode = false;
  };
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
          on:remove-event={removeEvent}
          id={eventId.id}
          {editMode}
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
      <Button on:click={closeDetailCard}>Back</Button>
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
