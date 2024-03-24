import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// export default defineConfig({
// 	plugins: [sveltekit()]
// });


export default {
	plugins: [sveltekit()],
	kit: {
		
	},
	resolve: {
		alias: {
			$components: 'path.resolve(__dirname, "./src/lib/components")'
		},
		
	},
}