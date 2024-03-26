<!-- RentalCard.svelte -->
<script>
	/**
	 * @type {{ images: any[]; name: any; address: any; price_per_night: any; }}
	 */
	export let rentalObject;
</script>

<div
	class="mt-[12px] grid h-[418px] place-self-center rounded-b-2xl rounded-t-2xl border-[1px] border-gray-400 shadow-lg md:grid-rows-[1fr_1fr_1fr]"
>
	<img
		class=" h-40 w-full rounded-t-2xl object-cover object-center aspect-video"
		src={rentalObject.images[0]}
		alt={rentalObject.name}
	/>
	<div class="grid-rows-sub grid  grid-cols-1 grid-rows-1 px-2 w-full h-9">
		<h3 class="font-sm row-span-1 text-sm font-semibold">{rentalObject.name}</h3>
		<p class="w-[45ch] text-pretty text-xs text-[gray]">
			{rentalObject.address}
		</p>
	</div>
	<div class="grid grid-flow-row grid-cols-2  justify-items-between ju ">
		<p class="col-span-1 row-span-1 text-center text-xs font-normal">
			<span class="text-pretty text-xl text-red-400">${rentalObject.price_per_night}</span> / night
		</p>
		<button
			class="text-red h-[40px] w-[220px] place-self-center rounded-2xl border-2 border-fuchsia-500/50 px-4 text-sm font-semibold uppercase"
			>Book now</button
		>
	</div>
</div>
