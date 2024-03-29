<script>
  import Avatar from '../avatar/avatar.svelte'
  import NavItems from './NavItems.svelte'
  import Hamburger from './Hamburger.svelte'

  import Logo from './Logo.svelte'
</script>

<nav class='z-10 w-screen h-20 px-4 bg-transparent md:px-6'>
  <div class='flex items-center justify-between h-full max-w-full'>
    <Logo class=""/>
    <NavItems />
    <div>
      <Avatar class='hidden md:flex' />
      <Hamburger class='flex md:hidden' />
    </div>
  </div>
</nav>
<hr />

<style>
</style>
