<script>
	import Avatar from '../ui/avatar/avatar.svelte';
</script>

<nav class="top-0 z-10 mt-0 h-[78px] w-[100vw] bg-transparent px-2 md:px-5">
	<div class=" flex h-full max-w-full flex-row items-center justify-between">
		<div class="flex items-center justify-center">
			<svg xmlns="http://www.w3.org/2000/svg" width="47px" viewBox="0 0 24 24">
				<img width="32" height="32" alt="logo" />
				<path
					fill="#ff385c"
					d="M12.001 16.709c-1.013-1.271-1.609-2.386-1.808-3.34c-.197-.769-.12-1.385.218-1.848c.357-.532.89-.791 1.589-.791s1.231.259 1.589.796c.335.458.419 1.075.215 1.848c-.218.974-.813 2.087-1.808 3.341zm7.196.855c-.14.934-.775 1.708-1.65 2.085c-1.687.734-3.359-.437-4.789-2.026c2.365-2.961 2.803-5.268 1.787-6.758c-.596-.855-1.449-1.271-2.544-1.271c-2.206 0-3.419 1.867-2.942 4.034c.276 1.173 1.013 2.506 2.186 3.996c-.735.813-1.432 1.391-2.047 1.748c-.478.258-.934.418-1.37.456c-2.008.299-3.582-1.647-2.867-3.656c.1-.259.297-.734.634-1.471l.019-.039c1.097-2.382 2.43-5.088 3.961-8.09l.039-.1l.435-.836c.338-.616.477-.892 1.014-1.231c.258-.157.576-.235.934-.235c.715 0 1.271.418 1.511.753c.118.18.259.419.436.716l.419.815l.06.119c1.53 3.001 2.863 5.702 3.955 8.089l.02.019l.401.915l.237.573c.183.459.221.915.16 1.393zm.913-1.791c-.139-.438-.378-.953-.675-1.569v-.022a262.99 262.99 0 0 0-3.976-8.128l-.084-.121C14.486 4.109 13.849 3.014 12 3.014c-1.827 0-2.604 1.27-3.397 2.922l-.061.119c-1.251 2.426-2.564 5.128-3.975 8.13v.039l-.418.914c-.158.378-.237.575-.259.636C2.878 18.556 4.964 21 7.489 21c.021 0 .099 0 .198-.021h.278c1.313-.159 2.664-.993 4.035-2.485c1.371 1.49 2.725 2.326 4.033 2.485h.279c.1.021.18.021.2.021c2.525.002 4.61-2.444 3.598-5.227"
				/>
			</svg>
			<div class="flex w-[60px] justify-start font-semibold text-white">
				<a href="/#" class="leading-1 text-lg text-[var(--logoText)]">airbnb</a>
			</div>
		</div>
		<ul
			class="hidden items-center justify-between gap-[44px] pl-[8px] text-[16px] font-thin tracking-[1px] subpixel-antialiased lg:flex"
			role="navigation"
		>
			<li>
				<a
					href="/#"
					class="pb-full] h-full font-semibold text-[--navText] hover:border-b-[3px] hover:border-[#ff385c]"
					>Stays</a
				>
			</li>
			<li>
				<a href="/#" class=" font-[300] text-[#7f7a85] hover:border-b-[3px] hover:border-[#ff385c]"
					>Experiences</a
				>
			</li>
			<li>
				<a href="/#" class="font-[300] text-[#7f7a85] hover:border-b-[3px] hover:border-[#ff385c]"
					>Online Experiences</a
				>
			</li>
		</ul>
		<div class="md: hidden md:flex md:pr-[6px]">
			<Avatar />
		</div>
		<div
			class=" fixed right-[-450px] top-0 flex h-[100vh] w-full max-w-[450px] flex-col items-center justify-center text-center text-4xl active:right-0"
			id="offScreenMenu"
		></div>
		<div class="ham-menu @click:toggleMenu relative ml-auto h-[50px] w-[50px] md:hidden">
			<span
				class="absolute top-[35%] h-[2px] w-[24px] -translate-y-[50%] translate-x-[50%] rounded-md bg-[var(--burger-bar)]"
			></span>
			<span
				class="absolute top-[50%] h-[2px] w-[24px] -translate-y-[50%] translate-x-[50%] rounded-md bg-[var(--burger-bar)]"
			></span>
			<span
				class="absolute top-[65%] h-[2px] w-[24px] -translate-y-[50%] translate-x-[50%] rounded-md bg-[var(--burger-bar)]"
			></span>
		</div>
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
		transition: all 0.3s ease-in-out;
	}
	.ham-menu:active span:nth-of-type(2) {
		opacity: 0;
		transition: all 0.3s ease-in-out;
	}
	.ham-menu:active span:nth-of-type(3) {
		transform: rotate(-45deg) translate(50%, 60%);
		transition: all 0.3s ease-in-out;
	}

	.ham-menu:active {
		padding-left: 0px;
	}
</style>
