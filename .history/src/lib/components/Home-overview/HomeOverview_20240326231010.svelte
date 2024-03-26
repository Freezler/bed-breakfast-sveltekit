<!-- YourGridComponent.svelte -->
<script>
	import rentalObjects from '../../assets/rentalObjects.json';
	import RentalCard from '../Rental-card/RentalCard.svelte';
</script>

<div
	class=" md:ml-6 mt-4 grid w-[95vw] grid-cols-1 grid-rows-[repeat(4,1fr)] gap-2 md:grid-cols-2 lg:grid-cols-[1fr_1fr]"
>
	{#each rentalObjects as rentalObject}
		<RentalCard {rentalObject} />
	{/each}
</div>
