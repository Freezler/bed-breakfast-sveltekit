<script>
  import Hamburger from './Hamburger.svelte';

	import NavItems from './NavItems.svelte';
	import Logo from './Logo.svelte';
	import Avatar from '../Avatar/avatar.svelte';
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
		<div
			class=" fixed right-[-450px] top-0 flex h-[100vh] w-full max-w-[450px] flex-col items-center justify-center text-center text-4xl active:right-0"
			id="offScreenMenu"
		></div>
		<Hamburger Hamburger/>
	</div>
</nav>
<hr />

<style>
	:root {
		--navText: hsla(220, 86%, 3%, 0.859);
		--navBg: #transparent;
		--logoText: #ff385c;
	}

	.ham-menu:active span:nth-of-type(1) {
		transform: rotate(45deg) translate(50%, -60%);
		transition: all 0.4s ease-in-out;
	}
	.ham-menu:active span:nth-of-type(2) {
		opacity: 0;
		transition: all 0.2s ease-in-out;
	}
	.ham-menu:active span:nth-of-type(3) {
		transform: rotate(-45deg) translate(50%, 60%);
		transition: all 0.4s ease-in-out;
	}
</style>
