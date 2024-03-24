<script>
  // Je kunt hier JavaScript logica toevoegen indien nodig
</script>

<nav class="bg-gray-800 p-2 mt-0 fixed w-full h-20 z-10 top-0">
  <div class="container mx-auto flex flex-row justify-start items-center">
    <div class="flex w-[200px] justify-start text-white font-extrabold">
      <a href="#_blank" class="text-white no-underline hover:text-white hover:no-underline">
        <span class="text-2xl pl-2">Mijn App</span>
      </a>
    </div>
    <div class="w-full justify-end content-center hidden md:flex"> 
      <a class="inline-block text-[var(--navText)] no-underline hover:text-blue-800 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4" href="/about">
        Over Ons
      </a>
      <a class="inline-block text-blue-500 no-underline hover:text-blue-800 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4" href="/services">
        Diensten
      </a>
      <a class="inline-block text-blue-500 no-underline hover:text-blue-800 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4" href="/contact">
        Contact
      </a>
    </div>
  </div>
</nav>

<style>
 :root {
   --navText:  blue-600'
   --light-navy: #112240;
   --lightest-navy: #233554;
 }
</style>