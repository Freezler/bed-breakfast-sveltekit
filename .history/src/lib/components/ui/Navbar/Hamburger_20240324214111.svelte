<script>
	let open = false;
</script>

<button class="relative group h-[48px] w-[48px] rounded-lg border-2 border-black">
	<div class="grid  gap-1.5">
    <span class="absolute h-[3px] w-[25%] rounded-full bg-black group-active:rotate-45">/<span>
    <span class="absolute h-[3px] w-8 rounded-full bg-black group-hover:opacity-0">/<span>
    <span class="absolute h-[3px] w-8 rounded-full bg-black group-hover:-rotate-45">/<span>
  </div>
</button>

<style>
	:root {
		--navText: hsla(220, 86%, 3%, 0.859);
		--navBg: transparent;
		--logoText: #ff385c;
	}
</style>
