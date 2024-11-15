<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Judson:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
</svelte:head>

<script>
    import { darkMode } from "../stores.js";

</script>

<main class="mx-auto max-w-[700px] p-40 px-10 pb-4 pt-16 text-white w-full  {$darkMode
    ? 'text-white bg-black'
    : 'text-white-mode-900 bg-white-mode-50'}">
    <h1>This is going to be the blog page</h1>
</main>

<style>
    
</style>