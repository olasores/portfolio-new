<script>
    import About from "../../components/About.svelte";
    import NavBar from "../../components/NavBar.svelte";
</script>

<main class={`flex flex-col items-start justify-center mx-auto max-w-[700px] p-40 px-10 pb-4 pt-16 w-full ${$darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
    <NavBar />
    <About />
</main>

<style >
      main {
    font-family: "Judson", serif;
    /* width: 100%;
    height: 100%;
    margin: 0; */
   
    }
</style>