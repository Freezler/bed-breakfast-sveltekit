<script>
	 import { slide } from 'svelte/transition';
</script>

<div
	class="fixed  top-0 flex h-[100vh] w-full max-w-[250px] flex-col items-center justify-center text-center text-4xl bg-slate-800 p-5 text-[--navText]" transition:slide
>
	<ul >
		<li>a</li>
		<li>b</li>
		<li>c</li>
		<li>d</li>
	</ul>
</div>

<style>
	:root {
		--navText: hsla(220, 86%, 3%, 0.859);
		--navBg: #transparent;
		--logoText: #ff385c;
	}
</style>
