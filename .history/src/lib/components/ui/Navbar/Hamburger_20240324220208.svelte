<script>
	let open = false;
</script>

<button class="relative flex md:hidden right-0 h-[48px] left-0 w-[48px] rounded-lg text-[var(--navText)]">
	<div class="">
		<span
			class="absolute left-1/2 top-[33%] h-[3px] w-[24px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black group-active:mt-[6.5px] active:rotate-45"
		></span>
		<span
			class="absolute left-1/2 top-[50%] h-[3px] w-[24px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black active:opacity-0"
		></span>
		<span
			class="absolute left-1/2 top-[66%] h-[3px] w-[24px] -translate-x-1/2 -translate-y-[1/2] rounded-full bg-black group-active:mt-[-8px] active:-rotate-45"
		></span>
	</div>
</button>

<style>
	:root {
		--navText: hsla(220, 86%, 3%, 0.859);
		--navBg: transparent;
		--logoText: #ff385c;
	}
</style>
