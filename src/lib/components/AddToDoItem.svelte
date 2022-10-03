<script>
  import { toDoListStore } from '../store/toDoList.js';

  let toDoText = '';
  const { addToDoItem } = toDoListStore;

  function handleSubmit() {
    toDoText && addToDoItem(toDoText);
    toDoText = '';
  }
</script>

<form autocomplete="off" on:submit|preventDefault={handleSubmit}>
  <input type="text" bind:value={toDoText} />
  <button>Add Item</button>
</form>

<style>
  form {
    display: flex;
    gap: 0.5rem;
  }
  input[type='text'] {
    padding: 0.25rem 0.5rem;
    border-radius: 5px;
    border: 1px solid #eee;
    transition: 0.3s border-color;
  }
  input[type='text']:hover {
    border: 1px solid #aaa;
  }
</style>
