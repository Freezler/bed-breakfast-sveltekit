<script>
	let open = false;
</script>

<button
	class="group relative left-0 right-0 flex h-[48px] w-[48px] rounded-lg text-[var(--navText)] md:hidden"
>
	<div id="">
		<span
			class="absolute left-1/2 top-[38%] h-[3px] w-[24px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-500 group-active:w-[26px] group-active:translate-y-[6px] group-active:rotate-45 transition-all duration-300">
			class="absolute left-1/2 top-[50%] h-[3px] w-[24px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-500 group-active:opacity-0 transition-all"
		></>
		<span
			class="absolute left-1/2 top-[62%] h-[3px] w-[24px] -translate-x-1/2 -translate-y-[50%] rounded-full bg-gray-500 group-active:w-[26px] group-active:-translate-y-[6px] group-active:-rotate-45 transition-all"
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
