<script>
	import Hamburger from './Hamburger.svelte';
	import NavItems from '../navbarr';'
	import Logo from './Logo.svelte';
	import Avatar from '../avatar/avatar.svelte';

</script>

<nav class="top-0 z-10 mt-0 h-[78px] w-[100vw] bg-transparent px-[18px] md:px-[22px]">
	<div class=" flex h-full max-w-full flex-row items-center justify-between">
		<div class="flex items-center justify-center">
			<Logo />
		</div>
		<NavItems />
		<div class="hidden md:mr-[8px] md:flex">
			<Avatar />
		</div>
		<div class="flex md:mr-[8px] md:hidden">
			<Hamburger />
		</div>
	</div>
</nav>
<hr />

<style>
</style>
