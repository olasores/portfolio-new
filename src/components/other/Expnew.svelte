<script>
    import { darkMode } from '../../stores.js';
    import FadeIn from '../../lib/FadeIn.svelte';

    const experiences = [
        {
            date: "August 2024 - November 2024",
            title: "Leadership Fellow",
            company: "Girls Who Code",
            description: "Leading initiatives to empower and educate the next generation of women in technology."
        },
        {
            date: "May 2024 – August 2024",
            title: "Software Engineering Fellow",
            company: "HeadStarter AI",
            description: "Spearheaded the creation of functional prototypes for 5 advanced AI projects, adhering to tight deadlines while fostering collaboration among team members that accelerated overall project delivery speed by 30%."
        },
        {
            date: "June 2024 – August 2024",
            title: "STEM Counselor",
            company: "PlanetBravo",
            description: "Tailored teaching methods to accommodate diverse learning styles, leading to a 25% improvement in comprehension and engagement with STEM concepts among students, as measured by assessment scores."
        }
    ];
</script>

<div class="space-y-8 px-5">
    
    {#each experiences as experience, i}
        <FadeIn delay={200 * (i + 1)}>
            
            <div class="relative pl-8 border-l-2 {$darkMode ? 'border-gray-700' : 'border-gray-300'}">
                
                <div class="absolute w-4 h-4 bg-gray-500 rounded-full -left-[9px] top-0 transform">

                </div>
                <div class="mb-1">
                    <span class="text-sm text-gray-500 font-medium">{experience.date}</span>
                </div>
                <h3 class="text-xl font-bold mb-1 {$darkMode ? 'text-white' : 'text-gray-900'}">{experience.title}</h3>
                <h4 class="text-lg font-semibold mb-2 {$darkMode ? 'text-gray-300' : 'text-gray-700'}">{experience.company}</h4>
                <p class="text-base {$darkMode ? 'text-gray-400' : 'text-gray-600'}">{experience.description}</p>
            </div>
        </FadeIn>
    {/each}
</div>