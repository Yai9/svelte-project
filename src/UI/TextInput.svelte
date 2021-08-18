<script>
  import validator from "../Helpers/validator.js";

  export let label;
  export let row = "";

  export let type = "text";
  export let id;
  export let value;

  let valid = true;
  let validityMessage = "";
  let typed = false;
</script>

<div class="form-control">
  <label for={id}>{label}</label>
  {#if type === "textarea"}
    <textarea
      {type}
      {value}
      {row}
      {id}
      class={validator(value) ? "" : "invalid"}
      on:input
    />
  {:else}
    <input
      {type}
      {value}
      {id}
      class={validator(value) ? "" : "invalid"}
      on:input
    />
  {/if}
</div>

<style>
  input,
  textarea {
    display: block;
    width: 100%;
    font: inherit;
    border: none;
    border-bottom: 2px solid #ccc;
    border-radius: 3px 3px 0 0;
    background: white;
    padding: 0.15rem 0.25rem;
    transition: border-color 0.1s ease-out;
  }

  input:focus,
  textarea:focus {
    border-color: #e40763;
    outline: none;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    width: 100%;
  }

  .form-control {
    padding: 0.5rem 0;
    margin: 0.25rem 0;
  }
  .invalid {
    border-color: red;
    background: #fde3e3;
  }

  .error-message {
    color: red;
    margin: 0.25rem 0;
  }
</style>
