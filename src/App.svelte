<script>
  import Header from "./UI/Header.svelte";
  import EventGrid from "./Components/EventGrid.svelte";
  import EventForm from "./Components/EventForm.svelte";
  import Modal from "./UI/Modal.svelte";
  import Button from "./UI/Button.svelte";

  let events = [];
  let opened = false;

  const submitEventsHandler = (event) => {
    events = [
      ...events,
      {
        id: Math.random().toString(),
        title: event.detail.title,
        subtitle: event.detail.subtitle,
        address: event.detail.address,
        image: event.detail.image,
        email: event.detail.email,
        description: event.detail.description,
        isFavorite: event.detail.isFavorite,
      },
    ];
    opened = false;
  };

  const toggleFavorite = (event) => {
    const id = event.detail;

    const updatedEvent = { ...events.find((e) => e.id === id) };
    const eventIndex = events.findIndex((e) => e.id === id);
    updatedEvent.isFavorite = !updatedEvent.isFavorite;
    const updatedEvents = [...events];
    updatedEvents[eventIndex] = updatedEvent;
    events = updatedEvents;
  };

  const cancelEvent = () => {
    opened = false;
  };
</script>

<Header />
<main>
  <div class="event-controls">
    <Button on:click={() => (opened = true)}>New Event</Button>
    {#if opened}
      <EventForm
        on:save-form-data={submitEventsHandler}
        on:cancel={cancelEvent}
      />
    {/if}
    <EventGrid {events} on:toggle-favorite={toggleFavorite} />
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
