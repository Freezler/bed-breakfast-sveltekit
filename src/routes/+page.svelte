<script>
  import { onMount } from 'svelte'
  import HomeOverview from '$lib/components/Home-overview/HomeOverview.svelte'

  onMount(() => {
    if (typeof document === 'undefined')
      return // Check if running in SSR

    const fixed = document.querySelector('.fixed')
    const hideOnScroll = () => {
      if (window.scrollY < 200 && fixed != null)
        fixed.toggleAttribute('.fade-out', true)
    }
    window.addEventListener('scroll', hideOnScroll)
  })
</script>

<HomeOverview />

<div
  class='fixed bottom-0 z-10 flex h-[60.5px] w-full flex-row items-center justify-around bg-transparent px-0 md:h-[78px] md:px-6'>
  <h1 class='mb-2 font-semibold leading-4 text-md text-pretty'>Randy de Vries | 2024</h1>
  <p class='min-w-[40vw] text-pretty rounded-md bg-[--T] px-0 py-4 text-center text-sm'>
    Visit <a
      class='text-blue-500 underline'
      target='_blank'
      href='https://github.com/Freezler/bed-breakfast-sveltekit'>bed-breakfast-sveltekit</a
    > to read the documentation
  </p>
</div>

<style>
    @keyframes fade-in {
        from {
            transform: translateY(-200px);
            opacity: 0;
        }
        to {
            transform: translateY(200px);
            opacity: 1;
        }
    }

    @keyframes fade-out {
        0% {
            transform: translateY(200px);
            opacity: 1;
        }

        100% {
            transform: translateY(200px);
            opacity: 0;
        }
    }

    .fixed {
        animation: fade-in 1.5s; /* Adjust the duration as needed */
        animation: fade-out 1.5s;
    }
</style>
