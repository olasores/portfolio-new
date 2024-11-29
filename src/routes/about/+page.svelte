<script>
  import About from "../../components/About.svelte";
  import NavBar from "../../components/NavBar.svelte"
  import { darkMode } from "../../stores.js";
  import Footer from "../../components/other/Footer.svelte";
</script>

<main class=" {$darkMode
    ? 'text-white bg-black'
    : 'text-white-mode-900 bg-white-mode-50'}">

  <NavBar />
  <About />

  <Footer /> 
  
</main>

<style>
  main {
    font-family: "Judson", serif;
  }
</style>