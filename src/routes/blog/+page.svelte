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