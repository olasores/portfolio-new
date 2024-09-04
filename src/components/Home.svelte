
<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Judson:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
</svelte:head>
<script>
    import olaimg from "../lib/assets/olaimg.png"
    import olaimg2 from "../lib/assets/olaimg2.png"
    import ctoday from "../lib/assets/ctoday.jpg"
</script>

<main class=" flex flex-col items-start justify-center mx-auto max-w-[700px] p-40 px-10 pb-4 pt-16 text-white ">
    <div class="flex items-center space-x-8 mb-9">
        <div class="">
            <!-- img here -->
             <!-- <img src="{olaimg}" class=""  alt="ola-img"> -->
             <img src="{olaimg2}" class="w-40 h-40 rounded-full border"  alt="ola-img">
        </div>
        <div class="text-white ">
            <!-- words here -->
             <h2 class="text-4xl">Oyinkansola Olayinka</h2>
             <p >Front End Developer</p>

             <div class="flex space-x-2">
                <!-- might be better to add icons here -->
                <a class="bg-[#A8A8A8] px-1 py-1 rounded" target="_blank" href="https://github.com/olasores">Github</a>
                <a class="bg-[#A8A8A8] px-1 py-1 rounded" target="_blank" href="https://www.linkedin.com/in/oyinkansola-olayinka/">Linkedin</a>
             </div>
             

        </div>
    </div>

    <div class="mt-9">
        <h1 class="text-2xl mb-0">About Me</h1>
        <!-- <p class="mt-0 p-0 mb-2 text-[#A8A8A8]"> A little About me</p> -->
         <p class="text-[#A8A8A8]">My name is Ola, a junior studying computer science at California state university Fullerton. I enjoy listening to music, and reading during my free time. 
            I am Interested in various fields of technology which include but not limited to: UX/UI design, Front end development and Data Science. </p>
    </div>
   
    <div class="mt-9">
        <h1 class="text-2xl">Projects </h1>
    </div>

    <div class="">
        <div class=" py-4 grid grid-cols-2 gap-4">
            <div class="">
                <img src="{ctoday}" alt="charity-today" class="rounded">
                <h3>Charity Today</h3>
                <p class="text-[#A8A8A8]">A mockup created during the social justice and enginering competiton</p>
            </div>
            <div class="">
                <img src="{ctoday}" alt="charity-today" class="rounded">
                
                <p>A mockup created during the social justice and enginering competiton</p>
            </div>
        </div>
    </div>
    



    <!-- <div class="mt-9">
        <h1 class="text-2xl">Work Experience </h1>
    </div> -->

    <!-- <div class="mt-9">
        <h1 class="text-2xl">Education </h1>
    </div> -->



</main>

<style>
    :global(body) {
        background-color: #101010;  

    }
</style>