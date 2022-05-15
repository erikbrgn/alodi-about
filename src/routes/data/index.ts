import type { RequestHandlerOutput } from '@sveltejs/kit';

export async function get(): Promise<RequestHandlerOutput> {
	const headers = {
		Accept: 'application/vnd.github.v3+json',
		Authorization: `token ${import.meta.env.VITE_GITHUB_AUTH}`
	};

	const releases = await fetch('https://api.github.com/repos/erikbrgn/elements/releases', {
		method: 'GET',
		headers: headers
	}).then((r) => r.json());

	if (releases) {
		return {
			status: 200,
			body: {
				releases
			}
		};
	}

	return {
		status: 403
	};
}
