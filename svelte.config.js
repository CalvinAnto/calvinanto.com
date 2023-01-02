import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({ out: '.svelte-kit/cloudflare'})
	}
};

export default config;
