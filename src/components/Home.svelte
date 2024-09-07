
<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Judson:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
</svelte:head>
<script>
    import olaimg2 from "../lib/assets/olaimg2.png"
    import profess from "../lib/assets/profess.png"
    import ctr from "../lib/assets/ctr.png"
    import fullyb from "../lib/assets/fullyb.png"
    import saasf from "../lib/assets/saasf.png"
</script>

<main class=" flex flex-col items-start justify-center mx-auto max-w-[700px] p-40 px-10 pb-4 pt-16 text-white w-full">
    <div class="flex items-center space-x-5 md:space-x-9 mb-6 md:mb-9">
     
            <!-- img here -->
             <!-- <img src="{olaimg}" class=""  alt="ola-img"> -->
             <img src="{olaimg2}" class=" w-20 h-20 lg:w-40 lg:h-40 rounded-full border "  alt="ola-img" loading="lazy" >

        <div class="text-white ">
            <!-- words here -->
            
             <h2 class="text-2xl lg:text-4xl whitespace-nowrap ">Oyinkansola Olayinka</h2>
             <p class="mb-1 text-xs lg:text-xl text-[#A8A8A8]"> Aspiring Front End Developer</p>

             <div class="flex space-x-2">
                <!-- might be better to add icons here -->
                <a class="bg-[#232323] px-1 py-1 rounded-full" target="_blank" href="https://github.com/olasores">Github</a>
                <a class="bg-[#232323] px-1 py-1 rounded-full" target="_blank" href="https://www.linkedin.com/in/oyinkansola-olayinka/">Linkedin</a>
               <!-- <a class="bg-[#232323] px-1 py-1 rounded-full" target="_blank" href="../lib/Oyinkansola_Olayinka_resume.pdf">Resume</a> -->

                <!-- <a class="px-1 py-1 underline " target="_blank" href="https://github.com/olasores">Github</a>
                <a class="px-1 py-1 underline" target="_blank" sr="https://www.linkedin.com/in/oyinkansola-olayinka/">Linkedin</a> -->
             </div>
             

        </div>
    </div>

    <div class="mt-9">
        <h1 class="text-xl md:text-2xl mb-0">About Me</h1>
        <!-- <p class="mt-0 p-0 mb-2 text-[#A8A8A8]"> A little About me</p> -->
         <p class="text-[#A8A8A8]">My name is Ola, a junior studying computer science at California state university Fullerton. I enjoy listening to music, and reading during my free time. 
            I am Interested in various fields of technology which include but not limited to: UX/UI design, Front end development and Data Science. </p>
    </div>
   
    <div class="mt-9">
        <h1 class="text-xl md:text-2xl">Projects </h1>
    </div>

    <div class="">
        <div class="py-4 grid grid-cols-1  sm:grid-cols-2 gap-4">
            <!-- Project 1 -->
                <div class="p-0 hover:scale-105 transform transition-transform duration-300">
                    <div class="bg-[#232323] rounded-t-lg overflow-hidden flex items-center justify-center w-full h-60 ">
                        <img src="{profess}" alt="charity-today" class="object-cover w-full h-full" width="300" height="240">                    </div>
                    <h1 class="mt-2">ProfessStar <span class="font-bold">|</span> <a class="text-[#A8A8A8] underline" target="_blank"  href="https://ai-rate-my-professor-beta.vercel.app/">view</a></h1>
                    <p class="text-[#A8A8A8]">AI Rate My professor chatbot</p>
                </div>
           
            
            <!-- Project 2 -->
                <div class="p-0 hover:scale-105 transform transition-transform duration-300">
                    <div class="bg-[#232323] rounded-t-lg overflow-hidden flex items-center justify-center w-full h-60">
                        <img src="{fullyb}" alt="fully-beyond" class="object-cover w-full h-full"  loading="lazy">
                    </div>
                    <h1 class="mt-2">FullyBeyound <span class="font-bold">|</span> <a class="text-[#A8A8A8] underline" target="_blank"  href="https://fullybeyond.vercel.app/">view</a></h1>
                    <p class="text-[#A8A8A8]">A website created for CSUF first designathon</p>
                </div>
     
          

            <!-- Project 3 -->
                <div class="p-0 hover:scale-105 transform transition-transform duration-300">
                    <div class="bg-[#232323] rounded-t-lg overflow-hidden flex items-center justify-center w-full h-60">
                        <img src="{ctr}" alt="charity-today" class="object-cover w-full h-full" loading="lazy">
                    </div>
                    <h1 class="mt-2">CharityToday <span class="font-bold">|</span> <a class="text-[#A8A8A8] underline" target="_blank"  href="">case study</a></h1>
                    <p class="text-[#A8A8A8]">A mockup created during the social justice and engineering competition</p>
                </div>
            
           

            <!-- project 4  -->
                <div class="p-0 hover:scale-105 transform transition-transform duration-300">
                    <div class="bg-[#232323] rounded-t-lg overflow-hidden flex items-center justify-center w-full h-60">
                        <img src="{saasf}" alt="charity-today" class="object-cover w-full h-full" loading="lazy">
                    </div>
                    <h1 class="mt-2">FlashCard Generator <span class="font-bold">|</span> <a class="text-[#A8A8A8] underline" target="_blank"  href="https://flashcards-saas-weld.vercel.app/">view</a></h1>
                    <p class="text-[#A8A8A8]">Full Stack web application that generates flashcard based on user input</p>
                </div>
  
            
        </div>
    </div>
    
    



    <!-- <div class="mt-9">
        <h1 class="text-2xl">Work Experience </h1>
    </div> -->

    <!-- <div class="mt-9">
        <h1 class="text-2xl">Education </h1>
    </div> -->


 <p class="py-4"> website inspired by <a class=" underline text-[#A8A8A8]" target="_blank" href=" https://www.b-r.io/">b-r.io</a> <span class="text-[#A8A8A8]">& </span><a class="text-[#A8A8A8] underline" target="_blank" href="https://bonhomme.lol/">bonhomme.lol</a></p>
</main>

<style>
    :global(body) {
        background-color: #101010;
    }
</style>