<!-- YourGridComponent.svelte -->
<script>
	import rentalObjects from '../../assets/rentalObjects.json';
	import RentalCard from '../Rental-card/RentalCard.svelte';
</script>
<div>
<div
	class="items-center justify-center mt-4 grid w-[95vw] grid-cols-1  gap-4 md:grid-cols-2 lg:grid-cols-2 "
>
	{#each rentalObjects as rentalObject}
		<RentalCard {rentalObject} />
	{/each}
</div>
</div>
