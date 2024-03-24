<script>
	import '../app.pcss';
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
</script>

<header class="bg-[var(--navBg)] w">
	<Navbar />
</header>
<main class="mt-20">
	<slot />
</main>
<footer></footer>
