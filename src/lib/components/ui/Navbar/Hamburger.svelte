<script>
  import autoAnimate from '@formkit/auto-animate'
  import { cn } from '$lib/utils'

  let open = false

  let className = ''

  export { className as class }
</script>

<button
  use:autoAnimate={{ duration: 100 }}
  class={cn('inline-flex items-center justify-center p-4', className ?? '')}
  on:click={() => (open = !open)}
>
  {#if !open}
    <span class='icon-[ph--list]' />
  {:else}
    <span class='icon-[ph--x]' />
  {/if}
</button>

<style>
  :root {
    --navText: hsla(220, 86%, 3%, 0.859);
    --navBg: transparent;
    --logoText: #ff385c;
  }
</style>
