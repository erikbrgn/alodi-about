import type { EndpointOutput } from '@sveltejs/kit';

export async function get(): Promise<EndpointOutput> {
	const headers = {
		Accept: 'application/vnd.github.v3+json',
		Authorization: `token ${import.meta.env.VITE_GITHUB_AUTH}`
	};

	const releases = await fetch('https://api.github.com/repos/erikbrgn/elements/releases', {
		method: 'GET',
		headers: headers
	}).then((r) => r.json());

	return {
		status: 200,
		body: {
			releases
		}
	};
}
