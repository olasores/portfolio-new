<script>
    import { darkMode } from '../stores.js';
    import { ArrowUpRightIcon } from 'svelte-feather-icons';
    import { fly } from 'svelte/transition';
    import FadeIn from '../lib/FadeIn.svelte';
</script>
<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Judson:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
</svelte:head>

<main 
    class="flex flex-col items-start justify-center mx-auto max-w-[700px] p-40 px-10 pb-4 pt-16 text-white w-full {$darkMode ? 'text-white bg-black' : 'text-white-mode-900 bg-white-mode-50'}"
    in:fly={{ y: 50, duration: 1000 }}
>    
    <FadeIn>
        <div class="flex items-center space-x-5 md:space-x-9 mb-6 md:mb-9">
            <img src="/assets/olaimg2.webp" class="w-20 h-20 lg:w-40 lg:h-40 rounded-full border" alt="ola-img">

            <div>
                <h2 class="text-2xl lg:text-4xl whitespace-nowrap text-{$darkMode ? 'white' : 'black'}">Oyinkansola Olayinka</h2>
                <p class="mb-1 text-xs lg:text-xl text-[#A8A8A8]">Aspiring Front End Developer</p>

                <div class="flex space-x-2">
                    <a 
                        class="{$darkMode ? 'bg-[#232323] hover:bg-[#191919] text-white' : 'bg-[#F0F0F0] hover:bg-[#E0E0E0] text-black'} flex items-center px-1 py-0 md:px-2 md:py-1 rounded-full" 
                        target="_blank" 
                        href="https://github.com/olasores"
                    >
                        Github
                        <ArrowUpRightIcon class="text-[#A8A8A8] hover:text-white h-3 w-3 md:h-4 md:w-4" />
                    </a>
                    <a 
                        class="{$darkMode ? 'bg-[#232323] hover:bg-[#191919] text-white' : 'bg-[#F0F0F0] hover:bg-[#E0E0E0] text-black'} flex items-center px-1 py-1 md:px-2 md:py-0 rounded-full" 
                        target="_blank" 
                        href="https://www.linkedin.com/in/oyinkansola-olayinka/"
                    >
                        Linkedin
                        <ArrowUpRightIcon class="text-[#A8A8A8] hover:text-white h-3 w-3 md:h-4 md:w-4" />
                    </a>
                    <a 
                        class="{$darkMode ? 'bg-[#232323] hover:bg-[#191919] text-white' : 'bg-[#F0F0F0] hover:bg-[#E0E0E0] text-black'} flex items-center  px-1 py-1 md:px-2 md:py-0 rounded-full" 
                        target="_blank" 
                        href="https://drive.google.com/file/d/1dOEJkfoQH73suDsccBJyT5-bezTsWutk/view?usp=drive_link"
                    >
                        Resume
                        <ArrowUpRightIcon class="text-[#A8A8A8] hover:text-white h-3 w-3 md:h-4 md:w-4" />
                    </a>
                </div>
            </div>
        </div>
    </FadeIn>

    <FadeIn delay={200}>
        <div class="mt-9">
            <h1 class="text-xl md:text-2xl mb-0">Welcome 👋🏽</h1>
            <p class="text-[#A8A8A8]">
                My name is Ola! I enjoy making things on the web. Welcome to my portfolio, where I showcase my journey, projects, and insights in web development and design 
            </p>
        </div>
    </FadeIn>
   
    <FadeIn delay={400}>
        <div class="flex items-center justify-between mt-5 w-full gap-x-20  md:gap-x-80">
            <h1 class="text-xl md:text-2xl font-bold">Featured Projects</h1>
            <div class="flex items-center">
                <a 
                    href="/project" 
                    class="text-[#A8A8A8] hover:text-gray-500 underline text-sm md:text-base"
                >
                    view all
                </a> 
                <a href="/project" class="ml-1">
                    <ArrowUpRightIcon class="text-[#A8A8A8] hover:text-white w-4 h-4"/> 
                </a>
            </div>
        </div>
    </FadeIn>
      
    <div class="py-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <!-- Project 1 -->
        <FadeIn delay={600}>
            <div class="p-0 hover:scale-105 transform transition-transform duration-300">
                <div class="bg-[#232323] rounded-t-lg overflow-hidden flex items-center justify-center w-full h-60">
                    <img src="/assets/profess.webp" alt="charity-today" class="object-cover w-full h-full" width="300" height="240">        
                </div>
                <h1 class="mt-2">ProfessStar <span class="font-bold">|</span> <a class="text-[#A8A8A8] underline" target="_blank" href="https://ai-rate-my-professor-beta.vercel.app/">view</a></h1>
                <p class="text-[#A8A8A8]">AI Rate My professor chatbot</p>
            </div>
        </FadeIn>
       
        <!-- Project 2 -->
        <FadeIn delay={800}>
            <div class="p-0 hover:scale-105 transform transition-transform duration-300">
                <div class="bg-[#232323] rounded-t-lg overflow-hidden flex items-center justify-center w-full h-60">
                    <img src="/assets/fullyb.webp" alt="fully-beyond" class="object-cover w-full h-full">
                </div>
                <h1 class="mt-2">FullyBeyound <span class="font-bold">|</span> <a class="text-[#A8A8A8] underline" target="_blank" href="https://fullybeyond.vercel.app/">view</a></h1>
                <p class="text-[#A8A8A8]">A website created for CSUF first designathon</p>
            </div>
        </FadeIn>

        <!-- Project 3 -->
        <FadeIn delay={1000}>
            <div class="p-0 hover:scale-105 transform transition-transform duration-300">
                <div class="bg-[#232323] rounded-t-lg overflow-hidden flex items-center justify-center w-full h-60">
                    <img src="/assets/ctr.webp" alt="charity-today" class="object-cover w-full h-full">
                </div>
                <h1 class="mt-2">CharityToday <span class="font-bold">|</span> <a class="text-[#A8A8A8] underline" target="_blank" href="https://www.figma.com/design/OYRdwpHQFHWVQwTPt9sDm9/CHARITY-TODAY-PRESENTATION?node-id=0-1&t=zIgsdFxN3GActlkE-1">case study</a></h1>
                <p class="text-[#A8A8A8]">A mockup created during the social justice and engineering competition</p>
            </div>
        </FadeIn>
        
        <!-- Project 4 -->
        <FadeIn delay={1200}>
            <div class="p-0 hover:scale-105 transform transition-transform duration-300">
                <div class="bg-[#232323] rounded-t-lg overflow-hidden flex items-center justify-center w-full h-60">
                    <img src="/assets/saasf.webp" alt="charity-today" class="object-cover w-full h-full">
                </div>
                <h1 class="mt-2">FlashCard Generator <span class="font-bold">|</span> <a class="text-[#A8A8A8] underline" target="_blank" href="https://flashcards-saas-weld.vercel.app/">view</a></h1>
                <p class="text-[#A8A8A8]">Full Stack web application that generates flashcard based on user input</p>
            </div>
        </FadeIn>
    </div>
</main>

<style>
    :global(body) {
        background-color: #101010;
    }
</style>