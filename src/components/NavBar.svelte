<script>
    import logo from "../lib/assets/logo.png"
    // using https://feathericons.com/

    // icons 
    import { MoonIcon} from 'svelte-feather-icons'
   


    let navBar = [
        {name: "Home", link: "/"}, 
        {name: "About", link: "/about"},
        {name: "Projects", link: "/project"},
        {name: "Blog", link: "/blog"}

    ]; 
</script>

<main class="mx-auto max-w-[700px] p-40 px-10 pb-4 pt-16 text-white">
    <nav class="flex item-center space-x-40">
        <!-- logo -->
        <div class="">
            <img src="{logo}" alt="o-logo">
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
       <MoonIcon size= "1.5x" class ="text-[#A8A8A8]"/>

    </nav>

</main>

<style>

</style>