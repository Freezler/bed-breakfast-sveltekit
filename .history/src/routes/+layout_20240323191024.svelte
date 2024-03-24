<script>
	import '../app.pcss';
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
</script>

<header>
	<Navbar />
</header>
<main class="mt-20">
	<slot />
</main>
<footer></footer>
