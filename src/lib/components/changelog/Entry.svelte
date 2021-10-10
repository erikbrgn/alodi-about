<script lang="ts">
	import { format } from 'date-fns';
	import type { Release } from '$lib/types';

	export let release: Release;

	let title: string = release.name;
	let details: string = release.body;
	let version: string = release.tag_name;
	let date: number = Date.parse(release.published_at);

	let dateUTCString = format(date, 'LLL do');
</script>

<div class="cl-entry">
	<div class="cl-entry-left">
		<span class:version
			><svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"
				><g
					fill="none"
					fill-rule="evenodd"
					stroke="#707070"
					stroke-linecap="round"
					stroke-linejoin="round"
					transform="translate(2 4)"
					><path d="m.5 8.5 8 4 8.017-4" /><path
						d="m.5 4.657 8.008 3.843 8.009-3.843-8.009-4.157z"
					/></g
				></svg
			>{version}</span
		>
		<span class:date>{dateUTCString}</span>
	</div>
	<span class="line" />
	<details>
		<summary
			>{title}
			<svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"
				><g fill="none" fill-rule="evenodd" transform="translate(2 2)"
					><circle
						cx="8.5"
						cy="8.5"
						r="8"
						stroke="#ffffff"
						stroke-linecap="round"
						stroke-linejoin="round"
					/><path
						d="m8.5 9.5c.5 0 1-.5 1-1s-.5-1-1-1-.99884033.5-.99884033 1 .49884033 1 .99884033 1zm-4 0c.5 0 1-.5 1-1s-.5-1-1-1-.99884033.5-.99884033 1 .49884033 1 .99884033 1zm8 0c.5 0 1-.5 1-1s-.5-1-1-1-.9988403.5-.9988403 1 .4988403 1 .9988403 1z"
						fill="#ffffff"
					/></g
				></svg
			></summary
		>
		{details}
	</details>
</div>

<style>
	div.cl-entry {
		display: flex;
		padding: 1rem;
		position: relative;
	}

	svg {
		padding-right: 0.5rem;
	}

	div.cl-entry-left {
		display: flex;
		flex-direction: column;
	}

	span.version,
	span.date {
		line-height: 1.25rem;
	}

	span.version {
		display: flex;
		padding-bottom: 0.525rem;
	}

	span.date {
		letter-spacing: 1px;
		color: #999;
		font-size: 0.925rem;
	}

	span.line {
		display: block;
		align-self: stretch;
		width: 1px;
		margin: 0 2rem;
		background-color: #707070;
	}

	details {
		flex: 1;
		line-height: 1.625rem;
		color: #f6f6f6;
	}

	details[open] {
		padding-bottom: 0.325rem;
	}

	details[open] summary {
		color: #999;
	}

	details summary path,
	details summary circle {
		transition: stroke 0.25s linear;
	}

	details[open] summary path,
	details[open] summary circle {
		stroke: #707070;
	}

	summary {
		display: flex;
		transition: color 0.25s linear;
		padding-bottom: 0.525rem;
		line-height: normal;
	}

	summary:hover {
		cursor: pointer;
	}

	summary svg {
		margin-left: auto;
		padding-right: unset;
	}

	summary::marker {
		/* Unset */
		content: '';
	}

	@media only screen and (max-width: 100ch) {
		div.cl-entry {
			flex-direction: column;
		}

		div.cl-entry-left {
			flex-direction: row-reverse;
			justify-content: space-between;
		}

		details {
			align-self: stretch;
			padding-top: 0.525rem;
		}
	}
</style>
