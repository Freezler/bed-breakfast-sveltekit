<script>
    let open = false;
</script>

<nav class="md:hidden">
    <button 
        class="text-gray-500 w-10 h-10 relative focus:outline-none bg-white" 
        on:click={() => open = !open}>
        <span class="sr-only">Open main menu</span>
        <div class="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span 
                aria-hidden="true" 
                class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out" 
                :class={open ? 'rotate-45' : '-translate-y-[50%]'}
            ></span>
            <span 
                aria-hidden="true" 
                class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out" 
                :class={open ? 'opacity-0' : ''}
            ></span>
            <span 
                aria-hidden="true" 
                class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out" 
                class={open ? '-rotate-45' : '-translate-y-[50%]'}
            ></span>
        </div>
    </button>
</nav>

<style>
    :root {
        --navText: hsla(220, 86%, 3%, 0.859);
        --navBg: transparent;
        --logoText: #ff385c;
    }

    button:active span:nth-of-type(1) {
        transform: rotate(45deg) translate(50%, 50%);
        transition: all 0.4s ease-in-out;
    }

    button:active span:nth-of-type(2) {
        opacity: 0;
        transition: all 0.3s ease-in-out;
    }

    button:active span:nth-of-type(3) {
        transform: rotate(-45deg) translate(50%, -62%);
        transition: all 0.4s ease-in-out;
    }
</style>


