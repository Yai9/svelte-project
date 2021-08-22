<script>
  import { onDestroy } from "svelte";
  import events from "../Stores/Events/events-store";

  export let eventDetail;
  export let eventId;

  const unsubscribe = events.subscribe((items) => {
    const item = { ...items.find((i) => i.id === eventId) };
    eventDetail = {
      title: item.title,
      subtitle: item.subtitle,
      address: item.address,
      image: item.image,
      email: item.email,
      description: item.description,
      isFavorite: item.isFavorite,
    };
  });
  onDestroy(() => {
    unsubscribe();
  });
</script>

<section>
  <div class="image">
    <img src={eventDetail.image} alt={eventDetail.title} />
  </div>
  <div>
    <h1>{eventDetail.title}</h1>
  </div>
  <div>
    <h2>{eventDetail.subtitle}</h2>
    <div />
    <div>
      <p>{eventDetail.address}</p>
    </div>
    <div>
      <p>{eventDetail.email}</p>
    </div>
    <div class="content">
      <p>{eventDetail.description}</p>
    </div>
  </div>
</section>

<style>
  section {
    margin-top: 4rem;
  }

  .image {
    width: 100%;
    height: 25rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .image {
    background: #e7e7e7;
  }

  .content {
    text-align: center;
    width: 80%;
    margin: auto;
  }

  h1 {
    font-size: 2rem;
    font-family: "Roboto Slab", sans-serif;
    margin: 0.5rem 0;
  }

  h2 {
    font-size: 1.25rem;
    color: #6b6b6b;
  }

  p {
    font-size: 1.5rem;
  }
</style>
