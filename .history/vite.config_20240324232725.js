import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	 resolve: {
    alias: {
      $omponents: path.resolve(__dirname, 'src/lib/components'),
    },
});
