<script>
  import '../app.pcss'
  import Searchbar from '../lib/components/ui/Searchbar/Searchbar.svelte'
  import Navbar from '../lib/components/ui/Navbar/Navbar.svelte'
  import IconBar from '../lib/components/ui/Iconbar/Iconbar.svelte'
</script>

<header class='bg-[--navBg]'>
  <Navbar />
  <Searchbar />
</header>

<main
  class='grid h-dvh w-[calc(100vw-80px)] grid-cols-[1fr] grid-rows-[1fr] md:grid-cols-[4rem_1fr] md:grid-rows-[1fr]'
>
  <div class='border-r'>
    <IconBar />
  </div>
  <div class='flex flex-1 p-4 '>
    <slot />
  </div>
</main>
<footer></footer>
