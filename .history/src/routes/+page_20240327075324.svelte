<script>
	import { onMount } from 'svelte';

	onMount(() => {
		if (typeof document === 'undefined') return; // Check if running in SSR

		const fixed = document.querySelector('.fixed');
		const hideOnScroll = () => {
			if (window.scrollY < 200 && fixed != null) {
				fixed.classList.remove('hidden');
			} else {
				if(fixed == null) return;
				fixed.classList.add('hidden');
			}
		};
		window.addEventListener('scroll', hideOnScroll);
	});
</script>

<div
	class="duration-900 fixed bottom-24 left-0 right-0 mx-auto grid min-w-[80vw] max-w-[100vw] place-items-center items-center justify-center rounded-md bg-[#efc7c7a2] py-2 pl-4 pr-4 text-center animate-"
>
	<h1 class="mb-2 text-pretty text-md font-semibold leading-4">Randy de Vries | 2024</h1>
	<p class="min-w-[40vw] text-pretty rounded-md bg-[#f1f1f1] px-6 py-4 text-center text-sm">
		Visit <a
			class="text-blue-500 underline"
			target="_blank"
			href="https://github.com/Freezler/bed-breakfast-sveltekit">bed-breakfast-sveltekit</a
		> to read the documentation
	</p>
</div>
