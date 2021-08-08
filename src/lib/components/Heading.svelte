<h2>
  <slot />
</h2>

<style>
  h2 {
    display: flex;
    align-items: center;
    font-family: "Inconsalata";
    text-align: center;
    font-weight: 400;
    font-size: 1.25rem;
    letter-spacing: 2px;
    margin: 0;
    text-transform: lowercase;
    padding-top: 2rem;
  }

  h2:before,
  h2:after {
    content: "";
    flex: 1;
    height: 1px;
    background-color: #707070;
    margin: 0 1.5rem;
  }
</style>
