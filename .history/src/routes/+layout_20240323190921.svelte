<script>
	import '../app.pcss';
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
</script>

<header class="mt-8">
	<Navbar />
</header>
<main>
	<slot />
</main>
<footer></footer>
