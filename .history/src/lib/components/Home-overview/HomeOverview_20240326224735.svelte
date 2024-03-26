<!-- YourGridComponent.svelte -->
<script>
	import rentalObjects from '../../assets/rentalObjects.json';
	import RentalCard from '../Rental-card/RentalCard.svelte';
</script>

<div
	class=" w-[100vw] mt-4 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr] grid-rows-[repeat(4,1fr)] mx-0"
>
	{#each rentalObjects as rentalObject}
		<RentalCard {rentalObject} />
	{/each}
</div>
