<script>

	function toggleMenu() {
		const menu = document.querySelector('#ham-menu');
		if (menu.classList.contains('open')) {
			menu.classList.remove('open');
		} else {
			menu.classList.add('open');
		}
	}

<button on:click={toggleMenu}
	id="ham-menu"
	class="relative ml-auto mr-4 h-[100%] w-[28px] pl-[0px] md:hidden z-100 "
	type="submit"
	
>
	<span
		class="absolute  top-[42%] h-[2px] w-[70%] translate-y-[50%] translate-x-[50%] rounded-xl bg-[var(--burger-bar)]"
	></span>
	<span
		class="absolute top-[50%] h-[2px] w-[70%] translate-y-[50%] translate-x-[50%] rounded-xl bg-[var(--burger-bar)]"
	></span>
	<span
		class="absolute top-[58%] h-[2px] w-[70%] translate-y-[50%] translate-x-[50%]  rounded-xl bg-[var(--burger-bar)]"
	></span>
</button>

<style>
	:root {
		--navText: hsla(220, 86%, 3%, 0.859);
		--navBg: #transparent;
		--logoText: #ff385c;
	}

	#ham-menu:active span:nth-of-type(1) {
		transform: rotate(45deg) translate(50%, -50%);
		transition: all 0.4s ease-in-out;
	}

	#ham-menu:active span:nth-of-type(2) {
		opacity: 0;
		transition: all 0.3s ease-in-out;
	}

	#ham-menu:active span:nth-of-type(3) {
		transform: rotate(-45deg) translate(50%, 50%);
		transition: all 0.4s ease-in-out;
	}
</style>
