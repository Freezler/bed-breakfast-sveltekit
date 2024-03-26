<!-- YourGridComponent.svelte -->
<script>
	import rentalObjects from '../../assets/rentalObjects.json';
	import RentalCard from '../Rental-card/RentalCard.svelte';
</script>

<div
	class="w-[100vw] flex flex-col items-center justify-center md:grid md:place-items-center md:items-center md:justify-center"
>
	<div
		class="mt-4 grid w-[90vw] grid-cols-1 items-center justify-center gap-2 md:grid-cols-2 lg:grid-cols-2"
	>
		{#each rentalObjects as rentalObject}
			<RentalCard {rentalObject} />
		{/each}
	</div>
</div>
