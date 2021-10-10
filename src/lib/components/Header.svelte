<script lang="ts">
	import { onMount } from 'svelte';

	// Components.
	import Logo from './Logo.svelte';
	import Link from './Link.svelte';

	let headerElement: HTMLElement;
	let sticky: boolean;

	onMount(() => {
		const observer = new IntersectionObserver(([e]) => (sticky = e.intersectionRatio < 1), {
			threshold: [1]
		});
		observer.observe(headerElement);
	});
</script>

<header bind:this={headerElement} class:sticky>
	<Logo {sticky} />
	<Link url="https://alodi.app" arrow={true} className="link-continue" {sticky}>Continue</Link>
</header>

<style>
	header {
		margin: 0 auto;
		padding: 4rem 1.5rem 2rem 1.5rem;
		position: sticky;
		top: -1px;
	}

	header.sticky {
		pointer-events: none;
	}
</style>
