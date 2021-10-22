<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	// see https://kit.svelte.dev/docs#loading
	export const load: Load = async ({ page, fetch, session, context }) => {
		const releases = await fetch('/index.json').then((res) => res.json());
		return {
			props: { ...releases }
		};
	};
</script>

<script lang="ts">
	// Types.
	import type { Release } from '$lib/types';

	// Components.
	import Layout from '$lib/components/Layout.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import RoadmapItem from '$lib/components/RoadmapItem.svelte';
	import Changelog from '$lib/components/changelog/Changelog.svelte';

	export let releases: Release[];
</script>

<Layout>
	<Heading>About</Heading>
	<Paragraph left>
		Alodi is a data aggregation service aimed at providing structured summaries of users' Battle.net
		profiles and WoW characters. Mainly, the idea is to accommodate various in-game services, be it
		by Blizzard or third party, and to process and neatly present them in an accessible manner.
	</Paragraph>
	<Paragraph left>
		Currently, the plan is to fetch data by using the <a href="https://dev.battle.net"
			>Blizzard API</a
		>
		as well as from third parties such as
		<a href="https://raider.io">Raider.io</a>
		and <a href="https://warcraftlogs.com">Warcraftlogs.com</a>. In terms of third party data, Alodi
		will aggregate information based on each API's allowed rate limit and data granularity.
	</Paragraph>
	<Paragraph left>
		Alodi is meant to give the player a detailed overview of their performance in PvE and/or PvP
		content. Also, Alodi will act as a portal to every aggregated service, meaning it's easy to get
		in-depth details right at the source.
	</Paragraph>
	<Paragraph left>
		In the future, new features will be added to Alodi, such as a newsfeed for all things related to
		WoW.
	</Paragraph>
	<Heading>Roadmap</Heading>
	<RoadmapItem leftText="Base functionality" rightText="Blizzard API" />
	<RoadmapItem leftText="Third party integration" rightText="Raider.io, Warcraftlogs..." />
	<RoadmapItem
		leftText="Extended functionality"
		rightText="Blizzard newsfeed, calendar..."
		lastElement={true}
	/>
	<Heading>Changelog</Heading>
	<Paragraph left>
		Take a look at recent changes to Alodi or visit our <a href="/blog">blog</a>
		to read more about them in detail.
	</Paragraph>
	<Changelog items={releases} />
</Layout>
