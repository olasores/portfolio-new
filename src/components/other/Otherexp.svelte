<script>
    import { Timeline, TimelineItem, Button } from 'flowbite-svelte';
    import { ArrowRightOutline } from 'flowbite-svelte-icons';
    import { darkMode } from '../../stores.js';
  </script>



  <Timeline >
  <TimelineItem classH3="{$darkMode
    ? 'text-black'
    : 'text-white-mode-900'}" title="Leadership Fellow" date="August 2024 - November 2024" >
        <h5> Girls Who Code </h5>
      <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        </p>
      <!-- <Button color="alternative">Learn more<ArrowRightOutline class="ms-2 w-5 h-5" /></Button> -->
    </TimelineItem>
    <TimelineItem  classH3="{$darkMode
    ? 'text-black'
    : 'text-white-mode-900'}" title="Software Engineering Fellow" date="May 2024 – August 2024">
        <h5> HeadStarter AI </h5>
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">
        Spearheaded the creation of functional prototypes for 5 advanced AI projects, adhering to tight deadlines while fostering collaboration among team members that accelerated overall project delivery speed by 30%.
    </p>
    </TimelineItem>
    <TimelineItem classH3="{$darkMode
    ? 'text-black'
    : 'text-white-mode-900'}" title="STEM Counselor" date=" June 2024 – August 2024">
        <h5> PlanetBravo </h5>
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">
        Tailored teaching methods to accommodate diverse learning styles, leading to a 25% improvement in comprehension and
        engagement with STEM concepts among students, as measured by assessment scores.
        </p>
    </TimelineItem>

  </Timeline> 


  

  
  