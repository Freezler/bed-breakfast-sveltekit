<script>
	import '../app.pcss';
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
</script>

<header class="bg-[var(--navBg)]">
	<Navbar />
</header>
<main class="mt-20">
	<slot />
</main>
<footer>
	<p><span class="text-[32px]">&ddagger;</span> 2024</p>
</footer>
