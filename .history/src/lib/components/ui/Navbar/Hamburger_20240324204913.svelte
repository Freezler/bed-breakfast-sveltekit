<script>
	let open = false;
</script>

<nav class="md:hidden">
	<button
		class="relative h-10 w-10 bg-white text-gray-500 focus:outline-none"
		on:click={() => (open = !open)}
	>
		<span class="sr-only">Open main menu</span>
		<div class="absolute left-1/2 top-[0] h-full block w-5 -translate-x-1/2  translate-y-1/2 transform">
			<span
				aria-hidden="true"
				class="absolute   block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out {open
					? 'rotate-45'
					: 'translate-y-[50%]'}"
			></span>
			<span
				aria-hidden="true"
				class="absolute  block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out {open
					? 'opacity-0'
					: ''}"
			></span>
			<span
				aria-hidden="true"
				class="absolute top-[60%]  block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out {open
					? '-rotate-45'
					: '-translate-y-[50%]'}"
			></span>
		</div>
	</button>
</nav>

<style>
	:root {
		--navText: hsla(220, 86%, 3%, 0.859);
		--navBg: transparent;
		--logoText: #ff385c;
	}

	
</style>
