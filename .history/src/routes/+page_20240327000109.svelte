<script>
	const hideOnScroll = () => {
		if (w.scrollY > 100) {
			// @ts-ignore
			document.querySelector('.fixed').classList.add('hidden');
		} else {
			// @ts-ignore
			document.querySelector('.fixed').classList.remove('hidden');
		}
	};
	window.addEventListener('scroll', hideOnScroll);
</script>

<div
	class=" fixed top-[50%] mx-auto grid min-w-[80vw] max-w-[100vw] place-items-center rounded-md bg-[#ccc7efd9] py-2 pl-4 pr-4 text-center"
>
	<h1 class="mb-2 text-pretty text-xl font-semibold leading-6">
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
