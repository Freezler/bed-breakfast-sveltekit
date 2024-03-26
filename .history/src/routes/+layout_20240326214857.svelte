<script>
	import '../app.pcss';
	import Searchbar from '../lib/components/ui/Searchbar/Searchbar.svelte';
	import Navbar from '../lib/components/ui/Navbar/Navbar.svelte';
	import IconBar from '../lib/components/ui/Iconbar/Iconbar.svelte';
	
</script>

<header class="bg-[var(--navBg)]">
	<Navbar />
	<Searchbar />
	
</header>

<main class="grid h-[auto] grid-cols-1 grid-rows-1 md:grid-cols-[auto_1fr] md:grid-rows-[">
	<IconBar />
	<slot />
</main>
<footer></footer>
