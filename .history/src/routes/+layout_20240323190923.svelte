<script>
	import '../app.pcss';
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
</script>

<header class="mt-">
	<Navbar />
</header>
<main>
	<slot />
</main>
<footer></footer>
