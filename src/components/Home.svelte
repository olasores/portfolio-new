
<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Judson:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
</svelte:head>
<script>
    import olaimg from "../lib/assets/olaimg.png"
</script>

<main class="flex justify-center items-center h-screen">
    <div class="flex items-center space-x-8">
        <div class="">
            <!-- img here -->
             <img src="{olaimg}" alt="ola-img">
        </div>
        <div class="text-white ">
            <!-- words here -->
             <h2 class="text-4xl">Oyinkansola Olayinka</h2>
             <p >Front End Developer</p>

             <div class="flex space-x-2">
                <a class="bg-blue-200 px-2 py-2 rounded" href="https://github.com/olasores">Github</a>
                <a class="bg-blue-200 px-2 py-2 rounded" lhref="">Linkedin</a>
             </div>
             

        </div>
    </div>

</main>

<style>
    :global(body) {
        background-color: #101010;  

    }
</style>