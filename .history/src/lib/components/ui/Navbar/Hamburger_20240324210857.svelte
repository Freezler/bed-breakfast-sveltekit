<script>
	let open = false;
</script>

<nav class="md:hidden">
	<button
		class="relative h-10 w-10 bg-white text-gray-500 focus:outline-none"
		on:click={() => (open = !open)}
	>
		<span class="sr-only">Open main menu</span>
		<div
			class="relative left-1/2 grid h-10 w-5 transform place-items-center border-2 border-red-500"
		>
			<span
				aria-hidden="true"
				class="absolute top-[30%] block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out {open
					? 'rotate-45'
					: 'translate-y-[30%]'}"
			></span>
			<span
				aria-hidden="true"
				class="absolute top-[50%] block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out {open
					? 'opacity-0'
					: ''}"
			></span>
			<span
				aria-hidden="true"
				class="absolute top-[70%] block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out {if(open) {-rotate-45} else 'translate-y-[70%]'
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
