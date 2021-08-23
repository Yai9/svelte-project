import { writable } from "svelte/store";

const events = writable([]);

const customEventsStore = {
  subscribe: events.subscribe,
  addEvent: (eventData) => {
    const newEvent = {
      ...eventData,
      id: Math.random(),
      isFavorite: false,
    };
    events.update((items) => {
      return [newEvent, ...items];
    });
  },
  toggleFavorite: (id) => {
    events.update((items) => {
      const updatedEvent = { ...items.find((e) => e.id === id) };
      const eventIndex = items.findIndex((e) => e.id === id);
      updatedEvent.isFavorite = !updatedEvent.isFavorite;
      const updatedEvents = [...items];
      updatedEvents[eventIndex] = updatedEvent;
      return updatedEvents;
    });
  },
  updateEvent: (id, eventData) => {
    events.update((items) => {
      const updatedEvent = { ...items.find((e) => e.id === id), ...eventData };
      const eventIndex = items.findIndex((e) => e.id === id);
      const updatedEvents = [...items];
      updatedEvents[eventIndex] = updatedEvent;
      return updatedEvents;
    });
  },
  removeEvent: (id) => {
    events.update((items) => {
      return items.filter((i) => i.id !== id);
    });
  },
};
export default customEventsStore;
