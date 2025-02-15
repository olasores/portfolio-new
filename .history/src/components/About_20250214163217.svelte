
<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Judson:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
</svelte:head>

<script>
    import { darkMode } from "../stores.js";
	// import Home from "./Home.svelte";




    // import Skills from "./other/Skills.svelte";

    import FadeIn from '../lib/FadeIn.svelte';

    import Expnew from "./other/Expnew.svelte";

    // import Skillcom from "./other/Skillcom.svelte";


    


</script>

<main class="mx-auto max-w-[700px] p-40 px-10 pb-4 pt-16 text-white w-full  {$darkMode
    ? 'text-white bg-black'
    : 'text-white-mode-900 bg-white-mode-50'}">
    <FadeIn>
        <section class="mb-2 md:mb-4">
            <h1 class="text-xl md:text-2xl mb-5 px-3">About me </h1>
            <div class="flex flex-col md:flex-row gap-10">
                <img src="/assets/image0.webp" alt="img-ola">
                <p>My name is Ola, a junior studying computer science at California state university Fullerton. I enjoy listening to music, and reading during my free time. 
    
                    I am Interested in various fields of technology which include but not limited to; Ux/Ui design, Front end development and Data Science. 
                    
                </p>
    
            </div>
        </section>
    


    </FadeIn>
    <!-- about section  -->
    





   

    <!-- experience section -->
      
    <FadeIn delay={200}>
        <section class="mb-5">
            <h1 class="text-xl md:text-2xl mb-5 px-3">Experience </h1>
    
            <Expnew />
        </section>
    </FadeIn>
   

        <!-- skills section -->
<!-- 
        <FadeIn delay={400}> 
            <h1 class="text-xl md:text-2xl mb-2 px-3">Skills  </h1>
    
            <section class="mb-5">
                <Skillcom />
            </section>

           
        </FadeIn> -->

    
    



   
  
      

    
    <!-- extracuricular section  -->

    <section>

    </section>

    
</main>

<style>
    
</style>