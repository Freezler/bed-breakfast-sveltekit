import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// export default defineConfig({
// 	plugins: [sveltekit()]
// });


export default {
	plugins: [sveltekit()],
	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'auto',
			assets: 'auto',
			fallback: 'index.html',
		})
	},
	resolve: {
		alias: {
			$components: 'path.resolve(__dirname, "./src/lib/components")'
		},
		
	},
}