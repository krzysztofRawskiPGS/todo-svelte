<script>
  import ToDoItem from './ToDoItem.svelte';
  import { toDoListStore } from '../store/toDoList.js';
  import { flip } from 'svelte/animate';
</script>

<div class="list">
  {#each $toDoListStore as toDoItem (toDoItem.id)}
    <div animate:flip={{ duration: 500 }}><ToDoItem {toDoItem} /></div>
  {/each}
</div>

<style>
  .list {
    display: flex;
    flex-direction: column-reverse;
    gap: 1rem;
    padding: 2rem 0;
  }
</style>
