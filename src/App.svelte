<script>
  import Container from './lib/components/Container.svelte';
  import ToDoList from './lib/components/ToDoList.svelte';
  import AddToDoItem from './lib/components/AddToDoItem.svelte';
</script>

<header>
  <Container>
    <h1>To Do App</h1>
  </Container>
</header>
<main>
  <Container>
    <AddToDoItem />
    <ToDoList />
  </Container>
</main>

<style>
  header {
    height: 100px;
    display: flex;
    align-items: center;
  }
  h1 {
    font-weight: 900;
    font-size: 3rem;
    background-image: linear-gradient(
      45deg,
      var(--color-secondary),
      var(--color-primary)
    );
    /*background: -webkit-linear-gradient(to right, #da4453, #89216b);*/
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  main {
    background-color: var(--color-bg);
    min-height: calc(100vh - 100px);
  }
</style>
