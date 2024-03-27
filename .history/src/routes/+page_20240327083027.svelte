<script>
	import { onMount } from 'svelte';

	onMount(() => {
		if (typeof document === 'undefined') return; // Check if running in SSR

		const fixed = document.querySelector('.fixed');
		const hideOnScroll = () => {
			if (window.scrollY < 200 && fixed != null) {
				fixed.style.display = 'block';
				fixed.classList.remove('fade-out'); // Remove fade-out class if present
				fixed.classList.add('fade-in'); // Add fade-in class to fade in
			} else {
				if (fixed == null) return;
				fixed.style.display = 'none';
				fixed.classList.remove('fade-in'); // Remove fade-in class if present
				fixed.classList.add('fade-out'); // Add fade-out class to fade out
			}
		};
		window.addEventListener('scroll', hideOnScroll);
	});
</script>

<div
	class="duration-900 duration-00 fixed bottom-24 left-0 right-0 mx-auto grid min-w-[80vw] max-w-[100vw] place-items-center items-center justify-center rounded-md bg-[#efc7c7a2] py-2 pl-4 pr-4 text-center"
>
	<h1 class="text-md mb-2 text-pretty font-semibold leading-4">Randy de Vries | 2024</h1>
	<p class="min-w-[40vw] text-pretty rounded-md bg-[#f1f1f1] px-6 py-4 text-center text-sm">
		Visit <a
			class="text-blue-500 underline"
			target="_blank"
			href="https://github.com/Freezler/bed-breakfast-sveltekit">bed-breakfast-sveltekit</a
		> to read the documentation
	</p>
</div>

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
			transform: translateY(200px);
		}
		to {
			opacity: 1;
		}
	}

	@keyframes fade-out {
		from {
			opacity: 1;
			transform: translateY(-2);
		}
		to {
			opacity: 0;
		}
	}

	.fixed {
		animation: fade-in 1.5s; /* Adjust the duration as needed */
		animation: fade-out 1.5s timing-function delay iteration-count direction fill-mode;
	}
</style>
