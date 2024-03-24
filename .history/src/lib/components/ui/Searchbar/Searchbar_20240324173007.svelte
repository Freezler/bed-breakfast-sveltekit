<script>
	import Avatar from '../Avatar/avatar.svelte';
</script>

<nav
	class="top-0 z-10 mt-0 flex h-[60px] w-[100vw] flex-row items-center justify-between bg-transparent px-4 md:px-4"
>
	<div class=" flex h-full max-w-full flex-row items-center justify-start">
		<div class="justify-end rounded-md bg-gray-950 p-2 md:flex z-10">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1.2em"
				height="1.2em"
				viewBox="0 0 512 512"
				{...$$props}
			>
				<rect
					width="176"
					height="176"
					x="48"
					y="48"
					fill="none"
					stroke="white"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="32"
					rx="20"
					ry="20"
				/>
				<rect
					width="176"
					height="176"
					x="288"
					y="48"
					fill="none"
					stroke="white"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="32"
					rx="20"
					ry="20"
				/>
				<rect
					width="176"
					height="176"
					x="48"
					y="288"
					fill="none"
					stroke="white"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="32"
					rx="20"
					ry="20"
				/>
				<rect
					width="176"
					height="176"
					x="288"
					y="288"
					fill="none"
					stroke="white"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="32"
					rx="20"
					ry="20"
				/>
			</svg>
		</div>
		<div class="justify-end rounded-e-md bg-gray-100 p-[13px] md:flex -translate-x-2 " >
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				viewBox="0 0 16 16"
                class="ml-2 h-2"
				{...$$props}
			>
				<path
					fill="gray"
					d="M2.5 5.777v6.32l3-1.874V3.902zm4-1.875v6.32l3 1.876V5.777zM6 11.09l-3.735 2.334L1.5 13V5.5l.235-.424l4-2.5h.53L10 4.91l3.735-2.334L14.5 3v7.5l-.235.424l-4 2.5h-.53zm4.5-5.313v6.32l3-1.874V3.902z"
				/>
			</svg>
		</div>
	</div>
	<div class="justify-end rounded-md bg-gray-100 p-2 md:flex">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1.2em"
			height="1.2em"
			viewBox="0 0 24 24"
			{...$$props}
		>
			<g fill="none" fill-rule="evenodd">
				<path
					d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
				/>
				<path
					fill="gray"
					d="M3 4.5A1.5 1.5 0 0 1 4.5 3h15A1.5 1.5 0 0 1 21 4.5v2.086A2 2 0 0 1 20.414 8L15 13.414v7.424a1.1 1.1 0 0 1-1.592.984l-3.717-1.858A1.25 1.25 0 0 1 9 18.846v-5.432L3.586 8A2 2 0 0 1 3 6.586zM5 5v1.586l5.56 5.56a1.5 1.5 0 0 1 .44 1.061v5.175l2 1v-6.175c0-.398.158-.78.44-1.06L19 6.585V5z"
				/>
			</g>
		</svg>
	</div>
</nav>
<hr />

<style>
</style>
