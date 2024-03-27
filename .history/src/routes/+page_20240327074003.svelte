<script>
	import { onMount } from 'svelte';

onMount(() => {
    const fixed = document.querySelector('.fixed');
    const hideOnScroll = () => {
        if (window.scrollY < 200) {
            fixed.classList.remove('hidden');
        } else {
            fixed.classList.add('hidden');
        }
    };
    window.addEventListener('scroll', hideOnScroll);
});
</script>

<div
	class="duration-900 fixed bottom-24 right-0  left-0 mx-auto grid min-w-[80vw] max-w-[100vw] place-items-center items-center justify-center rounded-md bg-[#efc7c7a2] py-2 pl-4 pr-4 text-center"
>
	<h1 class="mb-2 text-pretty text-xl font-semibold leading-4">
		
	</h1>
	<p class="min-w-[40vw] text-pretty rounded-md bg-[#f1f1f1] px-6 py-4 text-center text-sm">
		Visit <a
			class="text-blue-500 underline"
			target="_blank"
			href="https://github.com/Freezler/bed-breakfast-sveltekit">bed-breakfast-sveltekit</a
		> to read the documentation
	</p>
</div>
