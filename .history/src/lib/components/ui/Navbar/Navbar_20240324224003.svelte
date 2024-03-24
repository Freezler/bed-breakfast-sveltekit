<script>
	import OffscreenMenu from './OffscreenMenu.svelte';
	import Hamburger from './Hamburger.svelte';
	import NavItems from './NavItems.svelte';
	import Logo from './Logo.svelte';
	import Avatar from '../avatar/avatar.svelte';
</script>

<nav class="top-0 z-10 mt-0 h-[78px] w-[100vw] bg-transparent px-[20px] md:px-[22px]">
	<div class=" flex h-full max-w-full flex-row items-center justify-between">
		<div class="flex items-center justify-center">
			<Logo />
		</div>
		<NavItems />
		<div class="hidden md:flex md:border-2 md:mr-[8px]">
			<Avatar />
		</div>
		<Hamburger />
	</div>
</nav>
<hr />

<style>
</style>
