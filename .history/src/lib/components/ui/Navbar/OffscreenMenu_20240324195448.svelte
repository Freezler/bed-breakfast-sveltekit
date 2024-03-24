<script>
	 import { slide } from 'svelte/transition';
</script>

<div
	class="flex h-[100vh] w-full max-w-[100vw] md:flex-col md:w-full items-center justify-center text-center text-4xl bg-[var(--navBg)] p-5 text-[--navText]" transition:slide
>
	## viewport wide iconbar
	


</div>

<style>
	:root {
		--navText: hsla(220, 86%, 3%, 0.859);
		--navBg: #transparent;
		--logoText: #ff385c;
	}
</style>
