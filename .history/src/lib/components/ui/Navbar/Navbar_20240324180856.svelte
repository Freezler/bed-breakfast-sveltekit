<script>
	import OffscreenMenu from './OffscreenMenu.svelte';
	import Hamburger from './Hamburger.svelte';
	import NavItems from './NavItems.svelte';
	import Logo from './Logo.svelte';
	import Avatar from '../avatar/avatar.svelte';
	import
	function toggleMenu() {
		document.querySelector('OffScreenMenu').classList.replace('right-[-450px]', 'right-[450px]');
	}
</script>

<nav class="top-0 z-10 mt-0 h-[78px] w-[100vw] bg-transparent px-2 md:px-5">
	<div class=" flex h-full max-w-full flex-row items-center justify-between">
		<div class="flex items-center justify-center">
			<Logo />
		</div>
		<NavItems />
		<div class="hidden md:flex md:pr-[6px]">
			<Avatar />
		</div>
		<OffscreenMenu />
		<Hamburger on:click={toggleMenu} />
	</div>
</nav>
<hr />

<style>
</style>
