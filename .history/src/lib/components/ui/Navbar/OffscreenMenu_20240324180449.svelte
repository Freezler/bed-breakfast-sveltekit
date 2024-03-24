<script>
	import NavItems from './NavItems.svelte';
</script>

<div
	class=" fixed right-[-450px] top-0 flex h-[100vh] w-full max-w-[450px] flex-col items-center justify-center text-center text-4xl active:right-0 z-1000"
	id="offScreenMenu"
>
	<ul></ul>
</div>

<style>
	:root {
		--navText: hsla(220, 86%, 3%, 0.859);
		--navBg: #transparent;
		--logoText: #ff385c;
	}
</style>
