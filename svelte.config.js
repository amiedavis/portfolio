import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// TODO: set up a 404 page
// TODO: move app template back to app.html default

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined, 
			precompress: false,
			strict: true
		}),
		files: {
			appTemplate: "index.html",
		},
		paths: {
            base: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
        },
	},
	preprocess: vitePreprocess(),
  };

export default config;
