<script>
    import NavBar from "../../components/NavBar.svelte";
    import Project from "../../components/Project.svelte";
    import { darkMode } from "../../stores.js";

</script>


<main class=" {$darkMode
    ? 'text-white bg-black'
    : 'text-white-mode-900 bg-white-mode-50'}">
    <NavBar />
    <Project />
</main>