<script>
  export let type = "button";
  export let mode = "";
  export let href = "";
  export let availability = null;
</script>

<div>
  {#if href}
    <a {href}><slot /></a>
  {/if}
  <button {type} disabled={availability} class={mode} on:click><slot /></button>
</div>

<style>
  button,
  a {
    font: inherit;
    border: 1px solid #ae53db;
    background: #ae53db;
    padding: 0.5rem 1rem;
    color: white;
    border-radius: 5px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.26);
    cursor: pointer;
    text-decoration: none;
  }

  button:focus {
    outline: none;
  }
  button:active {
    background: #8400ff;
    border-color: #8400ff;
    box-shadow: 1px 1px 8px rgba(77, 51, 51, 0.26);
  }

  button:hover,
  a:hover,
  a:active {
    background: #c44dff;
    border-color: #c44dff;
    box-shadow: 1px 1px 8px rgba(77, 51, 51, 0.26);
  }

  button:disabled,
  button:disabled:hover,
  button:disabled:active {
    background: #ccc;
    border-color: #ccc;
    color: #959595;
    box-shadow: none;
    cursor: not-allowed;
  }

  .success {
    background: #01a129;
    border-color: #01a129;
  }

  .success:hover,
  .success:active {
    background: #1ac745;
    border-color: #1ac745;
  }

  .outline,
  .outline:active,
  .outline:focus,
  .outline:hover {
    background: #8400ff;
    color: white;
    box-shadow: none;
  }

  .outline-active,
  .outline-active:hover,
  .outline-active:active {
    background: transparent;
    color: #8400ff;
    box-shadow: none;
  }

  .outline:disabled,
  .outline:disabled:hover,
  .outline:disabled:active {
    background: transparent;
    color: #ccc;
  }

  .outline.success {
    border-color: #01a129;
    color: #01a129;
  }

  .outline.success:hover,
  .outline.success:active {
    background: #c2ffd1;
  }
</style>
