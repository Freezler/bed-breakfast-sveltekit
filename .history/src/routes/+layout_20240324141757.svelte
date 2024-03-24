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
	<p><span>ul>li.item$</span>&ddagger; 2024</p>
</footer>
