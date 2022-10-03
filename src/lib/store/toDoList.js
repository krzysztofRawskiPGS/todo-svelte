import { writable } from 'svelte/store';

function createStore() {
  const { subscribe, update } = writable([
    { id: 1, text: 'Buy cat food' },
    { id: 2, text: 'Feed the cat' },
  ]);

  return {
    subscribe,
    addToDoItem: (toDoText) => {
      update((toDoList) => {
        const toDoItem = {
          id: toDoList.length + 1,
          text: toDoText,
        };
        return [...toDoList, toDoItem];
      });
    },
    deleteToDoItem: (id) => {
      console.log(id);
      update((toDoList) => toDoList.filter((toDoItem) => toDoItem.id !== id));
    },
  };
}

export const toDoListStore = createStore();
