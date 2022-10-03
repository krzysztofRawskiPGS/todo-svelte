<script>
  import { toDoListStore } from '../store/toDoList.js';
  import { fly, fade } from 'svelte/transition';
  export let toDoItem;

  const { deleteToDoItem } = toDoListStore;
</script>

<div
  class="item"
  in:fly={{ y: -100, duration: 500 }}
  out:fade={{ duration: 100 }}
>
  <p>{toDoItem.text}</p>
  <button class="btn" on:click={() => deleteToDoItem(toDoItem.id)}
    >Delete</button
  >
</div>

<style>
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 1rem;
    background-color: white;
  }
  button {
    background-color: var(--color-error);
  }
</style>
