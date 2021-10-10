<script lang="ts">
	export let url: string;
	export let arrow: boolean;
	export let className: string;
	export let sticky: boolean;
</script>

<a href={url} class={className} class:sticky
	><slot />
	{#if arrow}
		<span />
	{/if}
</a>

<style>
	a {
		position: relative;
		font-family: 'Inconsalata';
		font-size: 1rem;
		text-transform: lowercase;
		text-decoration: none;
		border-bottom: none;
		transition: color 0.5s linear;
		pointer-events: initial;
	}

	a.sticky {
		color: transparent;
	}

	a:before,
	a:after,
	span:before,
	span:after {
		position: absolute;
		content: '';
		display: block;
		background-color: #707070;
	}

	a:before {
		transform: rotate(-45deg);
		bottom: -2px;
		left: -6px;
		height: 1rem;
		width: 1px;
		transition: height 0.1s linear 0.25s, left 0.1s linear 0.25s, background-color 0.1s linear 0s;
	}

	a.sticky:before {
		height: 0;
		left: 0;
		transition-delay: 0s;
	}

	a:after {
		width: 100%;
		height: 1px;
		bottom: 0;
		right: 0;
		transition-delay: 0.2s;
		transition: width 0.2s linear, background-color 0.1s linear 0s;
	}

	a.sticky:after {
		width: 0;
		transition-delay: 0.1s;
	}

	span {
		content: '';
		display: block;
		position: absolute;
		height: 1px;
		width: 1rem;
		bottom: 0;
		right: -1rem;
		background-color: #707070;
		transition: background-color 0.1s linear;
		transition-delay: 0s;
	}

	span:before,
	span:after {
		height: 1rem;
		width: 1px;
		transition: background-color 0.2s linear;
		transition-delay: 0s;
	}

	a.sticky span:before,
	a.sticky span:after {
		background-color: #ccc;
		transition-delay: 0.5s;
	}

	span:before {
		transform: rotate(-45deg);
		bottom: -2px;
		left: 10px;
	}

	span:after {
		transform: rotate(45deg);
		top: calc(-100% - 1px);
		left: 10px;
	}

	.link-continue {
		position: absolute;
		top: 1rem;
		right: 2rem;
	}

	a:hover:before,
	a:hover:after,
	a:hover span,
	a:hover span:before,
	a:hover span:after {
		background-color: #fff;
	}

	a.sticky span {
		background-color: transparent;
		transition-delay: 0.2s;
	}

	@media only screen and (max-width: 100ch) {
		a {
			color: transparent;
		}

		a:before {
			height: 0;
			left: 0;
			transition-delay: 0s;
		}

		a:after {
			width: 0;
		}

		a span,
		a:hover span {
			background-color: transparent;
			transition-delay: 0.3s;
		}

		a.sticky span:before,
		a.sticky span:after {
			transition-delay: 0s;
		}
	}
</style>
