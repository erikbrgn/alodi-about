<script lang="ts">
	export let leftText: string;
	export let rightText: string;
	export let lastElement: boolean = false;
</script>

<span class="rm-line" />
<div class="rm-container">
	<span class="rm-left">{leftText}</span>
	<span class="rm-circle">
		<span class="rm-circle-inner" />
	</span>
	<span class="rm-right">{rightText}</span>
</div>
{#if lastElement}
	<span class="rm-line" />
{/if}

<style>
	div.rm-container {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		padding: 0 1rem;
		align-items: center;
	}

	span.rm-line {
		content: '';
		display: block;
		background-color: #fff;
		width: 1px;
		height: 3.125rem;
		margin: 1rem auto;
	}

	span.rm-circle {
		display: flex;
		margin: 0 1.5rem;
		border: 1px solid #fff;
		border-radius: 50%;
		width: 1rem;
		height: 1rem;
	}
	span.rm-circle-inner {
		display: block;
		margin: auto;
		background-color: #fff;
		border-radius: 50%;
		width: 0.5rem;
		height: 0.5rem;
	}

	span.rm-left,
	span.rm-right {
		font-family: 'Inconsalata';
		font-size: 1rem;
		display: inline-block;
		letter-spacing: 2px;
		line-height: 1.25rem;
		text-transform: uppercase;
	}

	span.rm-right {
		text-align: right;
	}
</style>
