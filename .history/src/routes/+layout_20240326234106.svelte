<script>
	import '../app.pcss';
	import Searchbar from '../lib/components/ui/Searchbar/Searchbar.svelte';
	import Navbar from '../lib/components/ui/Navbar/Navbar.svelte';
	import IconBar from '../lib/components/ui/Iconbar/Iconbar.svelte';
	import HomeOverview from '$lib/components/Home-overview/HomeOverview.svelte';
	
</script>

<header class="bg-[var(--navBg)]">
	<Navbar />
	<Searchbar />
</header>

<main class="w-[calc(100vw-10px)] h-[100vw] grid grid-rows-[1fr] grid-cols-[1fr] md:grid-rows-[1fr] md:grid-cols-[1fr_1fr]">
	<div>
	<IconBar />
	</div>
	<HomeOverview />
</main>
<slot />
<footer></footer>
