<div>
  <slot />
</div>

<style>
  div {
    width: 100%;
    margin: 0 auto;
    padding: 2rem;
  }

  @media screen and (min-width: 900px) {
    div {
      width: 800px;
    }
  }
</style>
