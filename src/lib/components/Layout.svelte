<script lang="ts">
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
</script>

<Header />
<main><slot /></main>
<Footer />

<style>
	main {
		margin: 0 auto;
		width: min(65ch, 100%);
		padding-top: 1rem;
	}

	@media (min-width: 135ch) {
		main {
			width: min(100ch, 100%);
		}
	}
</style>
