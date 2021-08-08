<script lang="ts">
  export let options: object;
</script>

<span>
  <slot />
</span>

<style>
  span {
    position: absolute;
    top: calc(100% + 1rem);
    left: 0;
    display: block;
    padding: 0.825rem 1.125rem;
    /* visibility: hidden;
    opacity: 0; */
    background-color: #222;
    border: 1px solid #707070;
    border-radius: 8px;

    color: #ccc;
    text-align: center;
    text-transform: lowercase;
    line-height: 1.25rem;
    letter-spacing: 1px;

    transition: visibility 0.2s linear, opacity 0.2s linear;
  }

  span:before {
    display: block;
    content: "";
    position: absolute;
    bottom: calc(100% - 0.5rem);
    left: calc(50% - 0.5rem);
    height: 1rem;
    width: 1rem;
    background-color: inherit;
    border: 1px solid #707070;
    border-right: none;
    border-bottom: none;
    transform: rotate(45deg);
  }

  span:hover {
    visibility: visible;
    opacity: 1;
  }
</style>
