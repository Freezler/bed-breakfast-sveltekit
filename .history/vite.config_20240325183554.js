import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	kit: {
		adapter: '@sveltejs/adapter-auto',
	}
});


export default {
	plugins: [sveltekit()],
	kit: {
		adapter: '@sveltejs/adapter-auto',
	}
}