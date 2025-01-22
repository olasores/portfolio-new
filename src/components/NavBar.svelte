<script>
    import { f } from "feather-icons";
    // using https://feathericons.com/
    // https://github.com/dylanblokhuis/svelte-feather-icons

    // icons 
    import { MoonIcon} from 'svelte-feather-icons'
    import { SunIcon } from 'svelte-feather-icons'

    import { darkMode } from "../stores.js";

    // import {theme} from '../stores'
   
   


    let navBar = [
        {name: "Home", link: "/"}, 
        {name: "About", link: "/about"},
        {name: "Projects", link: "/project"},
        {name: "Contact", link: "/contact"},
        // {name: "Blog", link: "/blog"}

    ]; 

    
    function toggle() {
    $darkMode = !$darkMode;
  }
    

</script>

<main class="mx-auto max-w-[700px] p-40 px-10 pb-4 pt-16 {$darkMode
? 'text-white'
: 'text-white-mode-900 bg-white-mode-50'}">

    <nav class="flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <!-- Logo (Hidden on Mobile) -->
        <div class="hidden sm:block">
          <a href="/">
            <img src="/assets/logo.png" alt="o-logo" class="h-8 w-auto">
          </a>

        </div>
      
        <!-- Navigation Links -->
        <ul class="flex space-x-6 sm:space-x-10">
          {#each navBar as item}
            <li>
              <a href={item.link} class="transition-colors duration-300 hover:text-gray-400
            { $darkMode ? 'text-white' : 'text-black'}">
                {item.name}
              </a>
            </li>
          {/each}
        </ul>
      
        <!-- Dark Mode Toggle -->
        <button on:click={toggle} class="focus:outline-none p-4">
          {#if $darkMode}
            <SunIcon size="1.5x" class="text-[#A8A8A8]" />
          {:else}
            <MoonIcon size="1.5x" class="text-[#A8A8A8]" />
          {/if}
        </button>
      </nav>

          <!-- <nav class="flex item-center space-x-40">
        logo
        <div class="">
            <img src="/assets/logo.png" alt="o-logo">
        </div>
        <ul class="flex space-x-6">
            {#each navBar as item}
                <li>
                    <a href={item.link} class="hover:text-gray-400 transition-colors duration-300">
                        {item.name}
                    </a>
                </li>
            {/each}
        </ul>

   

       <button on:click={toggle} class="focus:outline-none">
            {#if $darkMode}
            <SunIcon size ="1.5x" class="text-[#A8A8A8]" />
            {:else}
            <MoonIcon size= "1.5x" class ="text-[#A8A8A8]"/>
            {/if}
       </button>
      
      

    </nav> -->
      

    

</main>




<style>

</style>