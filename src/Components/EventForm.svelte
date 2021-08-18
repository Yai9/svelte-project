<script>
  import { createEventDispatcher } from "svelte";
  import TextInput from "../UI/TextInput.svelte";
  import Button from "../UI/Button.svelte";
  import Modal from "../UI/Modal.svelte";

  let title = "";
  let subtitle = "";
  let address = "";
  let image = "";
  let email = "";
  let description = "";
  let isFavorite = false;

  const dispatch = createEventDispatcher();

  const submitForm = () => {
    dispatch("save-form-data", {
      title: title,
      subtitle: subtitle,
      address: address,
      image: image,
      email: email,
      description: description,
      isFavorite: isFavorite,
    });
  };

  const cancelForm = () => {
    dispatch("cancel");
  };
</script>

<Modal title="Create New Event" on:cancel={cancelForm}>
  <div class="form-section">
    <form on:submit|preventDefault={submitForm}>
      <div class="form-control">
        <TextInput
          id="title"
          value={title}
          label="Title"
          on:input={(event) => (title = event.target.value)}
        />
      </div>
      <div class="form-control">
        <TextInput
          id="subtitle"
          value={subtitle}
          label="Subtitle"
          on:input={(event) => (subtitle = event.target.value)}
        />
      </div>
      <div class="form-control">
        <TextInput
          id="address"
          value={address}
          label="Address"
          on:input={(event) => (address = event.target.value)}
        />
      </div>
      <div class="form-control">
        <TextInput
          type="url"
          id="image"
          value={image}
          label="Image"
          on:input={(event) => (image = event.target.value)}
        />
      </div>

      <div class="form-control">
        <TextInput
          type="email"
          id="email"
          value={email}
          label="Email"
          on:input={(event) => (email = event.target.value)}
        />
      </div>
      <div class="form-control">
        <TextInput
          row="3"
          id="description"
          value={description}
          label="Description"
          on:input={(event) => (description = event.target.value)}
        />
      </div>
    </form>
  </div>
  <div slot="footer">
    <Button type="button" on:click={submitForm}>Submit</Button>
    <Button type="button" on:click={cancelForm}>Cancel</Button>
  </div>
</Modal>

<style>
  form {
    width: 100%;
  }

  .form-section {
    padding: 10px;
  }
</style>
