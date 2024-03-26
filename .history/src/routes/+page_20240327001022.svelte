<script>
// @ts-nocheck

	function hideOnScroll() {
		if (window.scrollY > 400) {
			document.querySelector(".fixed").classList.remove("hidden");
		} else {
			document.querySelector(".fixed").classList.add("hidden");
		}
	}

	window.addEventListener("scroll", hideOnScroll);
	
</script>

<div class="fixed top-24  grid  place-items-center text-center max-w-[100vw] min-w-[80vw] mx-auto  pl-4 pr-4 py-2 bg-[#efc7c7a2] rounded-md ">
	<h1 class="text-xl font-semibold  text-pretty leading-4 mb-2">Welcome to my sveltekit airbnb clone</h1>
	<p class="text-center text-sm min-w-[40vw] text-pretty bg-[#f1f1f1] rounded-md px-6 py-4 ">
		Visit <a
			class="text-blue-500 underline"
			target="_blank"
			href="https://github.com/Freezler/bed-breakfast-sveltekit">bed-breakfast-sveltekit</a
		> to read the documentation
	</p>
	
</div>

