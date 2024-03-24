<script>
</script>

<button
	class="ham-menu @click:toggleMenu relative ml-auto mr-4 h-[50px] w-[50px] pl-[2px] md:hidden"
	type="button"
>
	<span
		class="absolute top-[35%] h-[2px] w-[24px] -translate-y-[50%] translate-x-[50%] rounded-xl bg-[var(--burger-bar)]"
	></span>
	<span
		class="absolute top-[50%] h-[2px] w-[24px] -translate-y-[50%] translate-x-[50%] rounded-xl bg-[var(--burger-bar)]"
	></span>
	<span
		class="absolute top-[65%] h-[2px] w-[24px] -translate-y-[50%] translate-x-[50%] rounded-xl bg-[var(--burger-bar)]"
	></span>
</button>

<style>
	:root {
		--navText: hsla(220, 86%, 3%, 0.859);
		--navBg: #transparent;
		--logoText: #ff385c;
	}

	div .ham-menu {
		span:nth-of-type(1) {
			transform: rotate(45deg) translate(50%, -60%);
			transition: all 0.4s ease-in-out;
		}

		span:nth-of-type(2) {
			opacity: 0;
			transition: all 0.2s ease-in-out;
		}
		span:nth-of-type(3) {
			transform: rotate(-45deg) translate(50%, 60%);
			transition: all 0.4s ease-in-out;
		}
	}
	
</style>
