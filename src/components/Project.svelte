<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Judson:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
</svelte:head>

<script>
    import { darkMode } from "../stores.js";

    import Filter from "./other/Filter.svelte";

    import ProjectComp from "./other/ProjectComp.svelte";
    import FadeIn from "../lib/FadeIn.svelte";
	import { Fade } from "@mui/material";
</script>

<main class="mx-auto max-w-[700px] p-40 px-10 pb-4 pt-16 text-white w-full  {$darkMode
    ? 'text-white bg-black'
    : 'text-white-mode-900 bg-white-mode-50'}">


    
        <section>
            <FadeIn>
                <div>
                    <h1 class="text-xl md:text-2xl mb-5 px-3">More Projects </h1>
                    <div class=" px-3 mb-2">
                        <p>
                            I've worked on a variety of projects, from simple websites, web applications, user interface design, and a few on data anaylsis/science
                        </p>
                    </div>
                </div>

            </FadeIn>
            

            <FadeIn delay={200}> 
                <div>
                    <ProjectComp />
                </div>
            </FadeIn>
          
    
    
            
    
           
    
    
        </section>

    
  
</main>

<style>
    
</style>