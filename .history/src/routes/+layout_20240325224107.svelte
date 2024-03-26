<script>
	import '../app.pcss';
	import Searchbar
	import Navbar from '../lib/components/ui/Navbar/Navbar.svelte';
	import IconBar from '../lib/components/ui/Iconbar/Iconbar.svelte';
</script>

<header class="bg-[var(--navBg)]">
	<Navbar />
	<Searchbar />
	<IconBar />
</header>
<main class="mt-20">
	<slot />
</main>
<footer></footer>
