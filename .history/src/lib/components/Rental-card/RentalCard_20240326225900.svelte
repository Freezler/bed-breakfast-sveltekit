<!-- RentalCard.svelte -->
<script>
	/**
	 * @type {{ images: any[]; name: any; address: any; price_per_night: any; }}
	 */
	export let rentalObject;
</script>

<div
	class="mt-[12px] grid h-[418px] place-self-center rounded-b-2xl rounded-t-2xl border-[1px] border-gray-400 shadow-lg md:grid-rows-[1fr_1fr_1fr] max-w-[400px] w-[95vw] md:w-[400px] md:max-w-full"
>
	<img
		class=" h-40 w-full rounded-t-2xl object-cover object-center aspect-video"
		src={rentalObject.images[0]}
		alt={rentalObject.name}
	/>
	<div class="grid-rows-sub grid  grid-cols-1 grid-rows-1 pl-4 w-full h-9 ">
		<h3 class=" text-sm font-semibold">{rentalObject.name}</h3>
		<p class="w-[25ch] p-0 text-[--navText] h-[2ch] text-balance text-xs text-[gray]">
			{rentalObject.address}
		</p>
	</div>
	<div class="grid grid-flow-row grid-cols-2  justify-self-between justify-center items-center ">
		<p class="col-span-1 row-span-1 p-0 text-center text-xs font-normal">
			<span class="text-pretty text-xl text-[--logoText]">${rentalObject.price_per_night}</span> / night
		</p>
		<button
			class="text-red h-[40px] w-[140px] place-self-center rounded-2xl border-2 border-[var(--logoText)] px-2 text-sm font-semibold uppercase"
			>Book now</button
		>
	</div>
</div>
