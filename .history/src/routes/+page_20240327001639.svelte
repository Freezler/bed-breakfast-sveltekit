<script>
	import { onMount } from 'svelte';

	onMount(() => {
		const hideOnScroll = () => {
			if (window.scrollY > 200) {
				document.querySelector('.fixed').classList.remove('hidden');
			} else {
				document.querySelector('.fixed').classList.add('hidden');
			}
		};
		
	});

	window.addEventListener('scroll', hideOnScroll);
</script>

<div
	class="fixed top-24 mx-auto grid min-w-[80vw] max-w-[100vw] place-items-center rounded-md bg-[#efc7c7a2] py-2 pl-4 pr-4 text-center"
>
	<h1 class="mb-2 text-pretty text-xl font-semibold leading-4">
		Welcome to my sveltekit airbnb clone
	</h1>
	<p class="min-w-[40vw] text-pretty rounded-md bg-[#f1f1f1] px-6 py-4 text-center text-sm">
		Visit <a
			class="text-blue-500 underline"
			target="_blank"
			href="https://github.com/Freezler/bed-breakfast-sveltekit">bed-breakfast-sveltekit</a
		> to read the documentation
	</p>
</div>
