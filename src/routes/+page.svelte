<script>
    import { darkMode } from '../stores.js';
    import NavBar from '../components/NavBar.svelte';
    import Home from '../components/Home.svelte';
  </script>
  
  <main
    class="  {$darkMode
    ? 'text-white bg-black'
    : 'text-white-mode-900 bg-white-mode-50'} "
  >
    <NavBar />
    <Home />

  </main>

<style>
    main {
    font-family: "Judson", serif;
    /* width: 100%;
    height: 100%;
    margin: 0; */
   
    }
</style>