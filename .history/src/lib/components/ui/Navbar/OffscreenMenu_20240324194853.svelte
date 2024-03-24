<script>
	 import { slide } from 'svelte/transition';
</script>

<div
	class="fixed right-[-450px] top-0 flex h-[100vh] w-full max-w-[450px] flex-col items-center justify-center text-center text-4xl" transition:slide
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
