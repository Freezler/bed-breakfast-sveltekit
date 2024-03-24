<script>
  import Hamburger from './Hamburger.svelte';

	import NavItems from './NavItems.svelte';
	import Logo from './Logo.svelte';
	import Avatar from '../avatar/avatar.svelte';
</script>

<div
			class=" fixed right-[-450px] top-0 flex h-[100vh] w-full max-w-[450px] flex-col items-center justify-center text-center text-4xl active:right-0"
			id="offScreenMenu"
		></div>

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

