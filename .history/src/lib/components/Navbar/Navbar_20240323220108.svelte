<script>
	import Avatar from '../ui/avatar/avatar.svelte';
</script>

<nav class="top-0 z-10 mt-0 w-full bg-transparent p-2">
	<div class="container mx-auto flex flex-row items-center justify-between">
		<div class="flex w-[60px] justify-start py-2 font-extrabold text-white">
			<a href="/#" class="bg-red-500"> yoyo </a>
		</div>
		<ul class="topNav hidden md:flex items-center gap-2">
			<li ><a href="/#">Stays</a></li>
			<li class="text-[var(--navText)]"><a href="/#">Expierences</a></li>
			<li><a href="/#">Online Experiences</a></li>
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
		--lightest-navy: #233554;
	}
</style>
