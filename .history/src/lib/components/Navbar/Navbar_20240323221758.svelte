<script>
	import Avatar from '../ui/avatar/avatar.svelte';
</script>

<nav class="top-0 z-10 mt-0 w-full bg-transparent p-2">
	<div class="container mx-auto flex flex-row items-center justify-between">
		<div class="flex w-[160px] items-center justify-start">
			<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
				
			</svg>
			<div class="flex w-[60px] justify-start py-2 font-extrabold text-white">
				<a href="/#" class="text-[var(--logoText)]">airbnb </a>
			</div>
		</div>
		<ul class="topNav hidden items-center gap-2 md:flex">
			<li><a href="/#">Stays</a></li>
			<li class="text-[var(--navText)]"><a href="/#">Expierences</a></li>
			<li class="text-[var(--navText)]"><a href="/#">Online Experiences</a></li>
		</ul>
		<div>
			<Avatar />
		</div>
	</div>
</nav>

<style>
	:root {
		--navText: hsla(226, 8%, 58%, 0.6);
		--navBg: #transparent;
		--logoText: #ff385c;
	}
</style>
