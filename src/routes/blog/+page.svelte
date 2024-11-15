<script>
    import NavBar from "../../components/NavBar.svelte";
    import Blog from "../../components/Blog.svelte";
    import { darkMode } from "../../stores";
</script>


<main class=" {$darkMode
    ? 'text-white bg-black'
    : 'text-white-mode-900 bg-white-mode-50'}">
    <NavBar />
    <Blog />
</main>


<style>
    main {
    font-family: "Judson", serif;
    /* width: 100%;
    height: 100%;
    margin: 0; */
   
    }
</style>