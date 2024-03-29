<script lang='ts'>
  interface Item {
    label: string
    href: string
  }

  const items: Item[] = [
    { label: 'Stays', href: '/stays' },
    { label: 'Experiences', href: '/experiences' },
    { label: 'Online Experiences', href: '/online-experiences' },
  ]
</script>

<ul
  class='items-center justify-between hidden gap-12 pl-2 text-base subpixel-antialiased font-thin transition duration-300 lg:flex'
  role='navigation'
>
  {#each items as item}
    <li>
      <a href={item.href} class='pb-6 font-semibold hover:border-b-2 hover:border-[--logoText]'>
        {item.label}
      </a>
    </li>
  {/each}
</ul>

<style>
  :root {
    --navText: hsla(220, 86%, 3%, 0.859);
    --navBg: #transparent;
    --logoText: #ff385c;
  }
</style>
