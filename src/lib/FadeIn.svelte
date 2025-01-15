<script lang="ts">
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';
  
    export let delay = 0;
    
    let visible = false;
    let container: HTMLElement;
  
    onMount(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            visible = true;
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1
      });
  
      observer.observe(container);
  
      return () => {
        observer.disconnect();
      };
    });
  </script>
  
  <div bind:this={container}>
    {#if visible}
      <div 
        in:fly={{ y: 50, duration: 1000, delay }} 
        out:fade
      >
        <slot />
      </div>
    {/if}
  </div>