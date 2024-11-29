
<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Judson:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
</svelte:head>

<script>
    import { darkMode } from "../stores.js";
	// import Home from "./Home.svelte";



    import Otherexp from "./other/Otherexp.svelte";

    // import Skills from "./other/Skills.svelte";


    


</script>

<main class="mx-auto max-w-[700px] p-40 px-10 pb-4 pt-16 text-white w-full  {$darkMode
    ? 'text-white bg-black'
    : 'text-white-mode-900 bg-white-mode-50'}">
    
    <!-- about section  -->
    <section class="mb-5">
        <h1 class="text-xl md:text-2xl mb-5 px-3">About me </h1>
        <div class="flex flex-col md:flex-row gap-10">
            <img src="/assets/image0.png" alt="img-ola">
            <p>My name is Ola, a junior studying computer science at California state university Fullerton. I enjoy listening to music, and reading during my free time. 

                I am Interested in various fields of technology which include but not limited to; Ux/Ui design, Front end development and Data Science. 
                
                I am Interested in various fields of technology which include but not limited to; Ux/Ui design, Front end development and Data Science. 
            </p>

        </div>

        
    </section>



    <!-- skills section -->

    <section class="mb-5">
        <h1 class="text-xl md:text-2xl mb-5 px-3">Skills  </h1>

        <div class="px-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 ">
            <!-- Skill Button -->
            <button class="  {$darkMode ? ' border-white bg-transparent hover:bg-[#191919] text-white' : 'bg-[#F0F0F0] hover:bg-[#E0E0E0] text-black border-black'} text-sm  border  font-semibold p-0 rounded-lg transition duration-300 shadow-md shadow-grey-500 ">
              HTML
            </button>
            <button class="  {$darkMode ? ' border-white bg-transparent hover:bg-[#191919] text-white' : 'bg-[#F0F0F0] hover:bg-[#E0E0E0] text-black border-black'} text-sm  border  font-semibold p-0 rounded-lg transition duration-300 shadow-md shadow-grey-500 ">
                CSS
            </button>
            <button class="  {$darkMode ? ' border-white bg-transparent hover:bg-[#191919] text-white' : 'bg-[#F0F0F0] hover:bg-[#E0E0E0] text-black border-black'} text-sm  border  font-semibold p-0 rounded-lg transition duration-300 shadow-md shadow-grey-500 ">
               JavaScript
            </button>
            <button class="  {$darkMode ? ' border-white bg-transparent hover:bg-[#191919] text-white' : 'bg-[#F0F0F0] hover:bg-[#E0E0E0] text-black border-black'} text-sm  border  font-semibold p-0 rounded-lg transition duration-300 shadow-md shadow-grey-500 ">
              Python
            </button>
           

            
          </div>

        <!-- <Skills /> -->

    </section>


      



    <!-- experience section  -->

    <section class="mb-5">
        <h1 class="text-xl md:text-2xl mb-5 px-3">Experience </h1>

       <div class="px-5">
        <Otherexp />

       </div>

    </section>

  
      

    
    <!-- extracuricular section  -->

    <section>

    </section>

    
</main>

<style>
    
</style>