<script>
	import '../app.pcss';
	import Searchbar from '../lib/components/ui/searchbar/Searchbar.svelte';
	import Navbar from '../lib/components/ui/Navbar/Navbar.svelte';
</script>

<header class="bg-[var(--navBg)]">
	<Navbar />
	<Searchbar />
</header>
<main class="mt-20">
	<slot />
</main>
<footer></footer>
