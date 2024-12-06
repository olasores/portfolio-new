<script>    
	import { darkMode } from "../stores";
    import Form from "./other/Form.svelte";
</script>


<main class="mx-auto max-w-[700px] p-40 px-10 pb-4 pt-16 text-white w-full  {$darkMode
? 'text-white bg-black'
: 'text-white-mode-900 bg-white-mode-50'}">
    <section>
        <h1 class="text-xl md:text-2xl mb-5 px-3">Contact Me </h1>
        <Form />
    </section>

    

</main>


<style>
    
</style>