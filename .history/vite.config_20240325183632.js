import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// export default defineConfig({
// 	plugins: [sveltekit()]
// });


export default  defineConfig({
	plugins: [sveltekit()],
	kit: {
		adapter: '@sveltejs/adapter-auto',
	}
}