<script>
	export { default as OffScreenMenu } from './OffscreenMenu.svelte'; // OffScreenMenu;
	let menuOpen = false; // Reactive variable to track the menu state

	function toggleMenu() {
		const menu = document.querySelector('#OffScreenMenu');
		if (menu.classList.contains('open')) {
			menu.classList.remove('open');
		} else {
			
		}
		}
		menuOpen = !menuOpen; // Toggle the menu state
	}
</script>

<div
	class=" z-1000 fixed right-[450px] top-0 flex h-[100vh] w-full max-w-[450px] flex-col items-center justify-center text-center text-4xl active:right-0"
	id="OffScreenMenu"
>
	<ul>
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
	#OffScreenMenu {
		/* Initial styles for your menu */
		transition: right 0.3s ease; /* Smooth transition for the slide effect */
	}
	#OffScreenMenu.open {
		right: 450px; /* Position when the menu is open */
	}
	#OffScreenMenu:not(.open) {
		right: -450px; /* Position when the menu is closed */
	}
</style>
