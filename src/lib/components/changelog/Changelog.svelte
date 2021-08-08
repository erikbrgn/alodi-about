<script lang="ts">
  import Entry from "./Entry.svelte";

  type Entry = {
    title: string;
    details?: string;
    version: string;
    date: Date;
  };

  let items: Entry[] = [
    {
      title: "Second release",
      details:
        "Enim eiusmod labore deserunt sit anim cillum. Velit fugiat Lorem aliqua ea. Commodo et culpa est incididunt aliqua voluptate proident exercitation ea ipsum amet ullamco. Aliqua nostrud occaecat nisi duis. Reprehenderit nostrud exercitation et eu minim enim culpa nulla cillum et ullamco non quis pariatur.",
      version: "0.0.2",
      date: new Date(),
    },
    {
      title: "First release",
      details: "This is the first release of Alodi.",
      version: "0.0.1",
      date: new Date(),
    },
  ];
</script>

{#each items as item}
  <Entry {...item} />
{/each}
