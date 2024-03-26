<!-- YourGridComponent.svelte -->
<script>
	import rentalObjects from '../../assets/rentalObjects.json';
	import RentalCard from '../Rental-card/RentalCard.svelte';
</script>
<div class="flex flex-col items-center justify-center md:grid md:place-items-center md">
<div
	class="items-center justify-center mt-4 grid w-[90vw] grid-cols-1  gap-4 md:grid-cols-2 lg:grid-cols-2 "
>
	{#each rentalObjects as rentalObject}
		<RentalCard {rentalObject} />
	{/each}
</div>
</div>
