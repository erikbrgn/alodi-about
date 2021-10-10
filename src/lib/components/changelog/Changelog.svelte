<script lang="ts">
	import type { Release } from '$lib/types';

	import Entry from './Entry.svelte';

	export let items: Release[];
</script>

{#each items as item}
	<Entry release={item} />
{/each}
