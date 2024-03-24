<script>
	import '../app.pcss';
	import Navbar from '../li'
	import Searchbar from '../lib/components/ui/searchbar/Searchbar.svelte';
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
