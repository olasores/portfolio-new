<script>
    import NavBar from "../../components/NavBar.svelte";
    import Project from "../../components/Project.svelte";
    import { darkMode } from "../../stores.js";
    import Footer from "../../components/other/Footer.svelte";
</script>


<main class=" {$darkMode
    ? 'text-white bg-black'
    : 'text-white-mode-900 bg-white-mode-50'}">
    <NavBar />
    <Project />

    <Footer />
</main>


<style>
    main {
    font-family: "Judson", serif;
    /* width: 100%;
    height: 100%;
    margin: 0; */
   
    }
</style>