<script>
	import '../app.pcss';
	import { onMount } from 'svelte';
	in
	import Navbar from '$lib/components/ui/navbar/Navbar.svelte';
	import Searchbar from '$lib/components/ui/searchbar/Searchbar.svelte';
	
	onMount(() => {
		themeChange(false);
	});
	
</script>

<header class="bg-[var(--navBg)]">
	<Navbar />
	<Searchbar />
</header>
<main class="mt-20">
	<slot />
</main>
<footer>
	
</footer>
