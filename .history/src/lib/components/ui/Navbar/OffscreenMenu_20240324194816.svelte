<script>
	 import { slide } from 'svelte/transition';
</script>

<div
	class="" transition:slide
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
