<script>
	let open = false;
</script>

<button class="group relative flex md:hidden right-0 h-[48px] left-0 w-[48px] rounded-lg text-[var(--navText)] ">
	<div class="ham-menu">
		<span
			class="absolute left-1/2 top-[33%] h-[3px] w-[24px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black  group-active:rotate-45 group-active:translate-y-[8px]"
		></span>
		<span
			class="absolute left-1/2 top-[50%] h-[3px] w-[24px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black group-active:opacity-0"
		></span>
		<span
			class="absolute left-1/2 top-[66%] h-[3px] w-[24px] -translate-x-1/2 -translate-y-[50%] rounded-full bg-black  group-active:-rotate-45 group-active:-translate-y-[8px]"
		></span>
	</div>
</button>

<style>
	:root {
		--navText: hsla(220, 86%, 3%, 0.859);
		--navBg: transparent;
		--logoText: #ff385c;
	}

	#ham-menu:active span:nth-child() {
		opacity: 0;
	}
		
</style>
