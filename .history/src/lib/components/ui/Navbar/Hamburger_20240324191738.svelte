<script>
</script>

<button
	id="ham-menu"
	class="relative ml-auto mr-4 h-[100%] w-[28px] pl-[0px] md:hidden z-100 "
	type="button"
>
	<span
		class="absolute  top-[40%] h-[2px] w-[20px] translate-y-[50%] translate-x-[50%] rounded-xl bg-[var(--burger-bar)]"
	></span>
	<span
		class="absolute top-[50%] h-[2px] w-[24px] translate-y-[50%] translate-x-[50%] rounded-xl bg-[var(--burger-bar)]"
	></span>
	<span
		class="absolute top-[60%] h-[2px] w-[24px] translate-y-[50%] translate-x-[50%]  rounded-xl bg-[var(--burger-bar)]"
	></span>
</button>

<style>
	:root {
		--navText: hsla(220, 86%, 3%, 0.859);
		--navBg: #transparent;
		--logoText: #ff385c;
	}

	#ham-menu:active span:nth-of-type(1) {
		transform: rotate(45deg) translate(45%, 50%);
		transition: all 0.4s ease-in-out;
	}

	#ham-menu:active span:nth-of-type(2) {
		opacity: 0;
		transition: all 0.2s ease-in-out;
	}

	#ham-menu:active span:nth-of-type(3) {
		transform: rotate(-45deg) translate(52%, -50%);
		transition: all 0.4s ease-in-out;
	}
</style>
