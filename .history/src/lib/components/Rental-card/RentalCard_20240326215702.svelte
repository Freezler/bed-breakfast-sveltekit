<!-- RentalCard.svelte -->
<script>
	export let rentalObject;
</script>

<div
	class="   md:grid-rows-[1fr_1fr_1fr] min-w-[250px] w-full max-w-[800px] border-[1px] border-gray-400 rounded-t-2xl rounded-b-2xl h-[372px] place-self-center grid  shadow-lg"
>

	<img
		class=" object-cover h-40 w-full object-center rounded-t-2xl"
		src={rentalObject.images[0]}
		alt={rentalObject.name}
	/>
	<div class="p-6 grid grid-rows-sub grid-cols-1 grid-rows-2 grid-flow-row">
		<h3 class="text-md font-semibold font-sm row-span-1">{rentalObject.name}</h3>
		<p class="text-sm w-[45ch] text-pretty auto-rows-max text-[gray]">
			{rentalObject.address}
		</p>
		<p class="text-xs font-normal row-span-1 text-center my-4">
			<span class="text-xl text-pretty text-red-400 ">${rentalObject.price_per_night}</span> / night
		</p>
		<button
			class="border-red-500 border-2 place-self-center text-red font-semibold text-xl uppercase px-4 rounded-2xl w-[220px] h-[48px]"
			>Book now</button
		>
	</div>
</div>
