<script>
</script>

<ul
			class="hidden items-center justify-between gap-[45px] pl-[8px] text-[16px] font-thin subpixel-antialiased transition-[300ms] lg:flex"
			role="navigation"
		>
			<li>
				<a
					href="/#"
					class="pb-[27px] font-semibold text-[--navText] hover:border-b-[3px] hover:border-[var(--logoText)]"
					>Stays</a
				>
			</li>
			<li>
				<a
					href="/#"
					class="pb-[27px] font-[300] text-[#7f7a85] hover:border-b-[3px] hover:border-[var(--logoText)]"
					>Experiences</a
				>
			</li>
			<li>
				<a
					href="/#"
					class="pb-[27px] font-[300] text-[#7f7a85] hover:border-b-[3px] hover:border-[var(--logoText)]"
					>Online Experiences</a
				>
			</li>
		</ul>

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

