<script lang="ts">
	export let left: boolean = false;
	export let right: boolean = false;
</script>

<p class:left class:right>
	<slot />
</p>

<style>
	p {
		font-size: 1.125rem;
		line-height: 2.5rem;
		padding: 0 1rem;
		text-align: center;
		color: #f6f6f6e7;
	}

	p.left {
		text-align: left;
	}

	p.right {
		text-align: right;
	}
</style>
